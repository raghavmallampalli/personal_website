export default function SkillsPage() {
  return (
    <div className="page-container">
      <h1 className="text-2xl md:text-3xl font-light page-title">Skills</h1>
      <p className="text-sm mb-6" style={{ color: 'var(--dracula-comment)' }}>
        A collection of my technical skills organized by domain
      </p>
      
      <div className="notebook-container">
        {/* Python Section */}
        <div className="notebook-cell">
          <div className="cell-header">
            <span className="cell-number">In [1]:</span>
            <span className="cell-type">markdown</span>
          </div>
          <div className="cell-content">
            <h2 className="section-title">🐍 Deep Learning</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-green)' }}>torch</span>
                <span className="skill-desc">convolutional and transformer models</span>
              </div>
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-cyan)' }}>lightning</span>
                <span className="skill-desc">distributed training and inference</span>
              </div>
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-yellow)' }}>wandb</span>
                <span className="skill-desc">experiment tracking and visualization</span>
              </div>
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-purple)' }}>keras and jax</span>
                <span className="skill-desc">simple neural network models</span>
              </div>
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-orange)' }}>seaborn</span>
                <span className="skill-desc">data visualization</span>
              </div>
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-pink)' }}>plotly</span>
                <span className="skill-desc">interactive visualizations and dashboards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Web Development Section */}
        <div className="notebook-cell">
          <div className="cell-header">
            <span className="cell-number">In [2]:</span>
            <span className="cell-type">markdown</span>
          </div>
          <div className="cell-content">
            <h2 className="section-title">🌐 Application Development</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-cyan)' }}>React + Next.js + Tailwind</span>
                <span className="skill-desc">Frontend framework</span>
              </div>
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-pink)' }}>React Native</span>
                <span className="skill-desc">Backend JavaScript runtime</span>
              </div>
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-pink)' }}>C# MVVM</span>
                <span className="skill-desc">sub 100ms web applications</span>
              </div>
            </div>
          </div>
        </div>

        {/* General Section */}
        <div className="notebook-cell">
          <div className="cell-header">
            <span className="cell-number">In [3]:</span>
            <span className="cell-type">markdown</span>
          </div>
          <div className="cell-content">
            <h2 className="section-title">⚡ General & Tools</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-orange)' }}>git</span>
                <span className="skill-desc">version control</span>
              </div>
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-cyan)' }}>docker</span>
                <span className="skill-desc">containerization</span>
              </div>
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-purple)' }}>azure + aws</span>
                <span className="skill-desc">cloud computing, training and inference</span>
              </div>
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-yellow)' }}>3d printing</span>
                <span className="skill-desc">3d printing and modeling</span>
              </div>
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-orange)' }}>photoshop + davinci resolve</span>
                <span className="skill-desc">photo and video editing</span>
              </div>
              <div className="skill-item">
                <span className="skill-name" style={{ color: 'var(--dracula-green)' }}>linux</span>
                <span className="skill-desc">unix-like systems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Code execution example */}
        <div className="notebook-cell">
          <div className="cell-header">
            <span className="cell-number">In [4]:</span>
            <span className="cell-type">code</span>
          </div>
          <div className="cell-content code-cell">
            <pre><code style={{ color: 'var(--dracula-foreground)' }}>{`# Quick skill summary
skills = {
    'deep_learning': ['torch', 'lightning', 'wandb', 'keras and jax', 'seaborn', 'plotly'],
    'app_dev': ['React + Next.js + Tailwind', 'React Native', 'C# MVVM'],
    'general': ['git', 'docker', 'azure + aws', '3d printing', 'photoshop + davinci resolve', 'linux']
}

print(f"Total skills: {sum(len(v) for v in skills.values())}")
print(f"Deep Learning: {len(skills['deep_learning'])} skills")
print(f"App Development: {len(skills['app_dev'])} skills") 
print(f"General: {len(skills['general'])} skills")`}</code></pre>
          </div>
          <div className="cell-output">
            <span style={{ color: 'var(--dracula-comment)' }}>Out [4]:</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ color: 'var(--dracula-green)' }}>Total skills: 15</span>
              <span style={{ color: 'var(--dracula-cyan)' }}>Deep Learning: 6 skills</span>
              <span style={{ color: 'var(--dracula-yellow)' }}>App Development: 3 skills</span>
              <span style={{ color: 'var(--dracula-purple)' }}>General: 6 skills</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 