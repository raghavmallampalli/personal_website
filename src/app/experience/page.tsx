'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createGitgraph, templateExtend, TemplateName, Orientation } from '@gitgraph/js';
import CustomScrollbar from '@/components/CustomScrollbar';

interface ExperienceEvent {
  name: string;
}

interface ExperienceItem {
  occupation: string;
  'start-date': string;
  place: string;
  events: ExperienceEvent[];
}

export default function ExperiencePage() {
  const gitgraphContainer = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [experienceData, setExperienceData] = useState<ExperienceItem[]>([]);

  // Load experience data from YAML file
  useEffect(() => {
    const loadExperienceData = async () => {
      try {
        const response = await fetch('/api/experience');
        const data = await response.json();
        setExperienceData(data.experience);
      } catch (error) {
        console.error('Failed to load experience data:', error);
      }
    };

    loadExperienceData();
  }, []);

  useEffect(() => {
    // Set container height to match main element
    const setContainerHeight = () => {
      const mainElement = document.querySelector('main');
      if (mainElement && containerRef.current) {
        const mainHeight = mainElement.offsetHeight;
        const paddingBottom = 20; // Add 20px bottom padding to prevent overflow
        containerRef.current.style.height = `${mainHeight - paddingBottom}px`;
      }
    };

    setContainerHeight();
    window.addEventListener('resize', setContainerHeight);

    return () => {
      window.removeEventListener('resize', setContainerHeight);
    };
  }, []);

  useEffect(() => {
    if (!gitgraphContainer.current || experienceData.length === 0) return;

    // Clear previous content
    gitgraphContainer.current.innerHTML = '';

    // Get the graph container HTML element.
    const graphContainer = gitgraphContainer.current;

    // Get CSS variable values
    const computedStyle = getComputedStyle(document.documentElement);
    const branchLineWidth = parseInt(computedStyle.getPropertyValue('--gitgraph-branch-line-width'));
    const branchSpacing = parseInt(computedStyle.getPropertyValue('--gitgraph-branch-spacing'));
    const commitSpacing = parseInt(computedStyle.getPropertyValue('--gitgraph-commit-spacing'));
    const dotSize = parseInt(computedStyle.getPropertyValue('--gitgraph-dot-size'));
    const dotStrokeWidth = parseInt(computedStyle.getPropertyValue('--gitgraph-dot-stroke-width'));
    const purpleColor = computedStyle.getPropertyValue('--dracula-purple').trim();
    const yellowColor = computedStyle.getPropertyValue('--dracula-yellow').trim();
    const foregroundColor = computedStyle.getPropertyValue('--dracula-foreground').trim();

    // Instantiate the graph.
    const gitgraph = createGitgraph(graphContainer, {
      template: templateExtend(TemplateName.Metro, {
        colors: [purpleColor, yellowColor], // Dracula colors from CSS variables
        branch: {
          lineWidth: branchLineWidth, // From CSS variable
          spacing: branchSpacing * 1.2, // Increase spacing for longer text
        },
        commit: {
          spacing: commitSpacing * 1.3, // Increase commit spacing
          dot: {
            size: dotSize, // From CSS variable
            strokeWidth: dotStrokeWidth, // From CSS variable
          },
          message: {
            font: 'inherit',
          },
        },
      }),
      orientation: Orientation.VerticalReverse,
    });

    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch({
      name: "career",
      style: {
        color: purpleColor, // Dracula purple for career branch line
        label: {
          display: false, // Hide branch name
        }
      }
    });
    
    // Add final commit to show current state (appears at top)
    master.commit({
      subject: "HEAD",
      style: {
        color: purpleColor, // Dracula purple
        dot: {
          color: purpleColor,
        },
        message: {
          color: foregroundColor,
          font: 'inherit',
          displayHash: false, // Hide commit hash
          displayAuthor: false, // Hide author info
        },
      },
    });

    // Process jobs in reverse order (most recent first)
    [...experienceData].reverse().forEach((job) => {
      // Create a branch for this job's events
      const eventBranch = master.branch({
        name: `events`,
        style: {
          color: yellowColor, // Dracula yellow for events branch line
          label: {
            display: false, // Hide branch name
          }
        }
      });
      
      // Add sequential commits for each event (in reverse order)
      [...job.events].reverse().forEach((event) => {
        eventBranch.commit({
          subject: `${event.name}`,
          style: {
            color: yellowColor, // Dracula yellow
            dot: {
              color: yellowColor,
            },
            message: {
              color: foregroundColor,
              font: 'inherit',
              displayHash: false, // Hide commit hash
              displayAuthor: false, // Hide author info
            },
          },
        });
      });

      // Merge the event branch back into career with occupation info
      master.merge({
        branch: eventBranch,
        commitOptions: {
          subject: `${job.occupation} | ${job['start-date']} | ${job.place}`,
          style: {
            color: purpleColor, // Dracula purple for merge node
            dot: {
              color: purpleColor,
            },
            message: {
              color: foregroundColor,
              font: 'inherit',
              displayHash: false, // Hide commit hash
              displayAuthor: false, // Hide author info
            },
          },
        }
      });
    });

    // Add initial commit to start the career timeline (appears at bottom)
    master.commit({
      subject: "INITIAL COMMIT",
      style: {
        color: purpleColor, // Dracula purple
        dot: {
          color: purpleColor,
        },
        message: {
          color: foregroundColor,
          font: 'inherit',
          displayHash: false, // Hide commit hash
          displayAuthor: false, // Hide author info
        },
      },
    });

    // Post-process the SVG to add classes for styling
    setTimeout(() => {
      const svgContainer = gitgraphContainer.current;
      if (svgContainer) {
        const textElements = svgContainer.querySelectorAll('svg text');
        
        textElements.forEach((textElement) => {
          const textContent = textElement.textContent || '';
          
          // Check if this is an occupation commit (contains company/role names)
          const isOccupation = experienceData.some(() => 
            textContent.includes("|")
          );
          
          if (isOccupation) {
            textElement.classList.add('occupation-commit');
          } else {
            textElement.classList.add('event-commit');
          }
        });
      }
    }, 100); // Small delay to ensure SVG is fully rendered

  }, [experienceData]);

  return (
    <div ref={containerRef} className="experience-container">
      <h1 className="text-2xl md:text-3xl font-light page-title">
        Professional Experience
      </h1>
      <p className="text-sm mb-6" style={{ color: 'var(--dracula-comment)' }}>
        What got me up in the morning
      </p>
      
      <CustomScrollbar className="experience-scrollable">
        <div ref={gitgraphContainer} />
      </CustomScrollbar>
    </div>
  );
} 