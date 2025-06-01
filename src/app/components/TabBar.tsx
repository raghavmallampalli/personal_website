"use client";

import { usePathname } from "next/navigation";
import { VscHome, VscTools, VscSourceControl, VscFiles, VscClose } from "react-icons/vsc";

interface TabItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  path: string;
}

const TabItem: React.FC<TabItemProps> = ({ icon: Icon, label, isActive }) => {
  return (
    <div
      className={`flex items-center h-full space-x-1.5 px-3 cursor-default`}
      style={{
        backgroundColor: isActive ? 'var(--dracula-background)' : 'var(--dracula-darker)',
        borderColor: 'var(--dracula-comment)',
        color: isActive ? 'var(--dracula-foreground)' : 'var(--dracula-comment)'
      }}
    >
      <Icon size={14} className={`${isActive ? "text-[var(--dracula-pink)]" : "text-[var(--dracula-comment)]"}`} />
      <span className="text-xs">{label}</span>
      {isActive && (
         <VscClose size={14} className="ml-1.5 text-[var(--dracula-comment)] hover:text-[var(--dracula-foreground)]" />
      )}
    </div>
  );
};

export default function TabBar() {
  const currentPath = usePathname();

  const getPageName = (path: string): string => {
    switch (path) {
      case "/":
        return "Welcome";
      case "/skills/":
        return "Skills";
      case "/experience/":
        return "Experience";
      default:
        return "New Page";
    }
  };

  const getPageIcon = (path: string): React.ElementType => {
    switch (path) {
      case "/":
        return VscHome;
      case "/skills/":
        return VscTools;
      case "/experience/":
        return VscSourceControl;
      default:
        return VscFiles;
    }
  };

  const currentPageName = getPageName(currentPath);
  const currentPageIcon = getPageIcon(currentPath);

  return (
    <div 
      className="h-8 flex justify-between"
      style={{
        backgroundColor: 'var(--dracula-darker)',
        borderColor: 'var(--dracula-comment)'
      }}
    >
      <div className="flex h-full">
        <TabItem 
          icon={currentPageIcon} 
          label={currentPageName} 
          isActive={true} 
          path={currentPath} 
        />
      </div>
      <div className="px-2 flex items-center h-full">
        <span className="text-[var(--dracula-comment)]">···</span> 
      </div>
    </div>
  );
} 