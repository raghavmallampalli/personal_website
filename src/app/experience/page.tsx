'use client';

import React, { useEffect, useRef } from 'react';
import { createGitgraph, templateExtend, TemplateName, Mode, Orientation } from '@gitgraph/js';
import CustomScrollbar from '@/components/CustomScrollbar';

const experienceData = [
  {
    occupation: "Junior Developer at StartUp Ventures Inc",
    period: "2019-01 - 2020-05",
    place: "Austin, TX",
    events: [
      {
        name: "Completed React onboarding bootcamp",
        date: "15 Jan 2019",
      },
      {
        name: "Built first full-stack web application",
        date: "12 Mar 2019",
      },
      {
        name: "Implemented user authentication system",
        date: "28 Jun 2019",
      },
      {
        name: "Deployed application to production AWS",
        date: "14 Nov 2019",
      }
    ]
  },
  {
    occupation: "Full Stack Developer at Digital Solutions Ltd",
    period: "2020-06 - 2022-02",
    place: "New York, NY",
    events: [
      {
        name: "Led migration from jQuery to React",
        date: "18 Aug 2020",
      },
      {
        name: "Architected microservices backend",
        date: "03 Dec 2020",
      },
      {
        name: "Mentored 2 junior developers",
        date: "25 Apr 2021",
      },
      {
        name: "Optimized database performance by 40%",
        date: "09 Sep 2021",
      }
    ]
  },
  {
    occupation: "Senior Software Engineer at Tech Innovation Corp",
    period: "2022-03 - Present",
    place: "San Francisco, CA",
    events: [
      {
        name: "Designed scalable ML pipeline architecture",
        date: "22 May 2022",
      },
      {
        name: "Led cross-functional team of 8 engineers",
        date: "15 Oct 2022",
      },
      {
        name: "Launched AI-powered recommendation engine",
        date: "30 Jan 2023",
      },
      {
        name: "Presented at TechCrunch Disrupt conference",
        date: "12 Sep 2024",
      }
    ]
  }
];

export default function ExperiencePage() {
  const gitgraphContainer = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
    if (!gitgraphContainer.current) return;

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
          spacing: branchSpacing, // From CSS variable
        },
        commit: {
          spacing: commitSpacing, // From CSS variable
          dot: {
            size: dotSize, // From CSS variable
            strokeWidth: dotStrokeWidth, // From CSS variable
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
      subject: "Now",
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
    [...experienceData].reverse().forEach((job, index) => {
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
      [...job.events].reverse().forEach((event, eventIndex) => {
        eventBranch.commit({
          subject: `${event.name} | ${event.date}`,
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
          subject: `${job.occupation} | ${job.period} | ${job.place}`,
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
      subject: "Start",
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

  }, []);

  return (
    <div ref={containerRef} className="experience-container">
      <h1 className="text-2xl md:text-3xl font-light page-title">
        Professional Experience
      </h1>
      
      <CustomScrollbar className="experience-scrollable">
        <div ref={gitgraphContainer} />
      </CustomScrollbar>
    </div>
  );
} 