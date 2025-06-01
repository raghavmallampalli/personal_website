import Image from 'next/image'; // Keep for now, might add a small logo/icon later if desired
import Link from "next/link";
import { favorites } from "./config";

export default function Home() {
  return (
    <div 
      className="min-h-full p-6 flex flex-col"
      style={{ color: 'var(--dracula-foreground)' }}
    >
      {/* Header Section */}
      <div className="mb-6">
        <h1 
          className="text-2xl md:text-3xl font-light mb-1"
          style={{ color: 'var(--dracula-purple)' }}
        >
          Raghav Mallampalli
        </h1>
        <p 
          className="text-sm"
          style={{ color: 'var(--dracula-comment)' }}
        >
          Deep Learning Engineer
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        {/* Left Column */}
        <div className="space-y-6">
          {/* About Me Section */}
          <section>
            <h2 
              className="text-lg font-medium mb-3"
              style={{ color: 'var(--dracula-foreground)' }}
            >
              About Me
            </h2>
            <div className="space-y-2">
              <Link 
                href="/skills"
                className="flex items-center space-x-3 p-2 rounded text-sm transition-all duration-200 hover:opacity-80"
                style={{ 
                  backgroundColor: 'var(--dracula-current-line)', 
                  color: 'var(--dracula-foreground)',
                  textDecoration: 'none'
                }}
              >
                <span className="w-4">🔬</span>
                <span>I'm into deep learning and machine learning. I tolerate statistics.</span>
              </Link>
              <a 
                href="https://www.instagram.com/suneclipsedmoon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-2 rounded text-sm transition-all duration-200 hover:opacity-80"
                style={{ 
                  backgroundColor: 'var(--dracula-current-line)', 
                  color: 'var(--dracula-foreground)',
                  textDecoration: 'none'
                }}
              >
                <span className="w-4">📸</span>
                <span>I like to take photos and write articles, critiques and short stories.</span>
              </a>
              <Link 
                href="/experience"
                className="flex items-center space-x-3 p-2 rounded text-sm transition-all duration-200 hover:opacity-80"
                style={{ 
                  backgroundColor: 'var(--dracula-current-line)', 
                  color: 'var(--dracula-foreground)',
                  textDecoration: 'none'
                }}
              >
                <span className="w-4">💼</span>
                <span>If you are interested in hiring me, you may want to check out my technical experience. I can be contacted via my LinkedIn or personal mail.</span>
              </Link>
            </div>
          </section>

          {/* Current Hustle Section */}
          <section>
            <h2 
              className="text-lg font-medium mb-3"
              style={{ color: 'var(--dracula-foreground)' }}
            >
              What keeps my lights on
            </h2>
            <p 
              className="text-xs"
              style={{ color: 'var(--dracula-comment)' }}
            >
              You have no recent folders, <a href="#" className="underline" style={{ color: 'var(--dracula-cyan)' }}>open a folder</a> to start.
            </p>
          </section>
        </div>

        {/* Right Column */}
        <div>
          <section>
            <h2 
              className="text-lg font-medium mb-4"
              style={{ color: 'var(--dracula-foreground)' }}
            >
              Current Obsessions
            </h2>
            <div className="space-y-3">
              {favorites.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  className="flex items-center space-x-3 p-2 rounded transition-all duration-200 hover:opacity-80"
                  style={{ backgroundColor: 'var(--dracula-darker)', textDecoration: 'none' }}
                >
                  <div 
                    className="w-6 h-6 rounded flex items-center justify-center text-xs font-medium"
                    style={{ backgroundColor: item.color, color: 'var(--dracula-background)' }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm" style={{ color: 'var(--dracula-foreground)' }}>
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: 'var(--dracula-comment)' }}>
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
