'use client';

import React, { useEffect, useState } from 'react';
import CustomScrollbar from '@/components/CustomScrollbar';

interface Skill {
  name: string;
  color: string;
  description: string;
}

interface SkillSection {
  cell_number: string;
  cell_type: string;
  title: string;
  skills: Skill[];
}

interface OutputItem {
  text: string;
  color: string;
}

interface CodeCell {
  cell_number: string;
  cell_type: string;
  code: string;
  output: OutputItem[];
}

interface SkillsData {
  skills: {
    sections: SkillSection[];
    code_cell: CodeCell;
  };
}

export default function SkillsPage() {
  const [skillsData, setSkillsData] = useState<SkillsData | null>(null);

  useEffect(() => {
    const loadSkillsData = async () => {
      try {
        const response = await fetch('/api/skills');
        const data = await response.json();
        setSkillsData(data);
      } catch (error) {
        console.error('Failed to load skills data:', error);
      }
    };

    loadSkillsData();
  }, []);

  if (!skillsData) {
    return (
      <div className="page-container">
        <h1 className="text-2xl md:text-3xl font-light page-title">Skills</h1>
        <p className="text-sm mb-6" style={{ color: 'var(--dracula-comment)' }}>
          Loading skills...
        </p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="text-2xl md:text-3xl font-light page-title">Skills</h1>
      <p className="text-sm mb-6" style={{ color: 'var(--dracula-comment)' }}>
        A collection of my technical skills organized by domain
      </p>
      
      <CustomScrollbar className="flex-1">
        <div className="notebook-container">
          {/* Render skill sections dynamically */}
          {skillsData.skills.sections.map((section, index) => (
            <div key={index} className="notebook-cell">
              <div className="cell-header">
                <span className="cell-number">{section.cell_number}</span>
                <span className="cell-type">{section.cell_type}</span>
              </div>
              <div className="cell-content">
                <h2 className="section-title">{section.title}</h2>
                <div className="skills-grid">
                  {section.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <span className="skill-name" style={{ color: skill.color }}>
                        {skill.name}
                      </span>
                      <span className="skill-desc">{skill.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Code execution cell */}
          <div className="notebook-cell">
            <div className="cell-header">
              <span className="cell-number">{skillsData.skills.code_cell.cell_number}</span>
              <span className="cell-type">{skillsData.skills.code_cell.cell_type}</span>
            </div>
            <div className="cell-content code-cell">
              <pre><code style={{ color: 'var(--dracula-foreground)' }}>
                {skillsData.skills.code_cell.code}
              </code></pre>
            </div>
            <div className="cell-output">
              <span style={{ color: 'var(--dracula-comment)' }}>Out [4]:</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {skillsData.skills.code_cell.output.map((item, index) => (
                  <span key={index} style={{ color: item.color }}>
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CustomScrollbar>
    </div>
  );
} 