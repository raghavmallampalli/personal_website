export default function BlogPage() {
  return (
    <div className="p-8" style={{ color: 'var(--dracula-foreground)' }}>
      <h1 className="text-2xl font-semibold text-[var(--dracula-yellow)] mb-4">Blog Page</h1>
      <p className="text-[var(--dracula-comment)]">This is where your blog posts will be listed.</p>
      <p className="mt-4">Post titles could use --dracula-green, dates --dracula-comment, tags --dracula-cyan.</p>
    </div>
  );
} 