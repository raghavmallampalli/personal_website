"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscFiles, VscTools, VscSourceControl, VscEdit, VscAccount } from "react-icons/vsc";

const iconStyle = "text-[var(--dracula-comment)] hover:text-[var(--dracula-purple)] cursor-pointer";
const activeIconStyle = "text-[var(--dracula-bright-white)]"; // Brighter white for active

// This is a simplified example; actual active state would come from router/state
// For now, we assume Home (VscFiles) is active for styling purposes.

export default function Sidebar() {
  const currentPath = usePathname();

  const navItems = [
    { href: "/", title: "Home", icon: VscFiles },
    { href: "/skills", title: "Skills", icon: VscTools },
    { href: "/experience", title: "Experience", icon: VscSourceControl },
    { href: "#", title: "Blog", icon: VscEdit }, // TODO: dead link - will be updated later
  ];

  return (
    <aside 
      className="w-12 p-4 flex flex-col items-center justify-between h-full"
      style={{ backgroundColor: 'var(--dracula-current-line)' }}
    >
      <div className="flex flex-col items-center space-y-6">
        {navItems.map((item) => {
          const isActive = item.href === currentPath;
          return (
            <Link key={item.title} href={item.href} title={item.title}>
              <item.icon size={28} className={isActive ? activeIconStyle : iconStyle} />
            </Link>
          );
        })}
      </div>
      
      {/* Photo placeholder at bottom */}
      <div 
        className="w-8 h-8 rounded-full flex items-center justify-center border"
        style={{ 
          backgroundColor: 'var(--dracula-background)', 
          borderColor: 'var(--dracula-comment)',
          color: 'var(--dracula-comment)'
        }}
        title="Profile Photo"
      >
        <VscAccount size={16} />
      </div>
    </aside>
  );
} 