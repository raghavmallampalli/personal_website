import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import StatusBar from "./components/StatusBar";
import TabBar from "./components/TabBar";
import MacTitleBar from "./components/MacTitleBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raghav Mallampalli - Portfolio",
  description: "Personal portfolio site with Dracula theme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)] flex items-center justify-center min-h-screen`}
      >
        <div 
          className="w-[calc(100vw-16px)] h-[calc(100vh-16px)] rounded-lg shadow-2xl flex flex-col overflow-hidden border"
          style={{ 
            backgroundColor: 'var(--dracula-background)',
            borderColor: 'var(--dracula-comment)'
          }}
        >
          <MacTitleBar />
          <div className="flex flex-col flex-1 h-full overflow-hidden">
            <div className="flex flex-1 overflow-hidden">
              <Sidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <TabBar />
                <main className="flex-1 overflow-y-auto" style={{ backgroundColor: 'var(--dracula-background)' }}>
                  {children}
                </main>
              </div>
            </div>
            <StatusBar />
          </div>
        </div>
      </body>
    </html>
  );
}
