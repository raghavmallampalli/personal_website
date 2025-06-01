import { FaTwitter, FaInstagram, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { VscRemote, VscError, VscWarning, VscSync, VscBell } from "react-icons/vsc";

export default function StatusBar() {
  const clickableIconClass = "!text-[var(--dracula-foreground)] hover:!text-[var(--dracula-purple)]";
  const clickableTextClass = "!text-[var(--dracula-foreground)]";
  const unselectableIconClass = "text-[var(--dracula-comment)]";
  const linkClass = `flex items-center space-x-1 ${clickableTextClass} hover:!text-[var(--dracula-purple)]`;

  return (
    <footer
      className="h-8 flex items-center justify-between text-xs relative"
      style={{
        backgroundColor: "var(--dracula-darker)",
        color: "var(--dracula-foreground)",
      }}
    >
      {/* WSL Indicator - Full height strip at left edge */}
      <a 
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute left-0 top-0 h-full w-10 flex items-center justify-center cursor-pointer hover:opacity-80"
        style={{ backgroundColor: 'var(--dracula-purple)' }}
      >
        <VscRemote size={14} style={{ color: 'var(--dracula-background)' }} />
      </a>

      {/* Left Section */}
      <div className="flex items-center space-x-4 pl-12">
        <span className={unselectableIconClass}>Socials</span>
        <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer" className={clickableIconClass}>
          <FaTwitter />
        </a>
        <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer" className={clickableIconClass}>
          <FaInstagram />
        </a>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 px-4">
        <div className={`flex items-center space-x-1 ${unselectableIconClass}`}>
          <VscSync className="cursor-pointer" />
          <VscError /> <span>0</span>
          <VscWarning /> <span>0</span>
        </div>
        <a href="mailto:raghavmallampalli1234@gmail.com" className={linkClass}>
          <FaEnvelope />
          <span className="hidden md:inline">raghavmallampalli1234@gmail.com</span>
        </a>
        <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer" title="GitHub" className={clickableIconClass}>
          <FaGithub size={16} />
        </a>
        <a href="https://linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer" title="LinkedIn" className={clickableIconClass}>
          <FaLinkedin size={16} />
        </a>
        <VscBell className={unselectableIconClass} />
      </div>
    </footer>
  );
} 