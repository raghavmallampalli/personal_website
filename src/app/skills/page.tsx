export default function SkillsPage() {
  return (
    <div className="page-container">
      <h1 className="text-2xl md:text-3xl font-light page-title">Skills</h1>
      <p className="text-sm" style={{ color: 'var(--dracula-comment)' }}>
        This is where your skills will be listed.
      </p>
      <p className="mt-4">
        Content will be styled with Dracula theme elements such as{' '}
        <span style={{ color: 'var(--dracula-green)' }}>--dracula-green</span> for technologies,{' '}
        <span style={{ color: 'var(--dracula-cyan)' }}>--dracula-cyan</span> for links, etc.
      </p>
    </div>
  );
} 