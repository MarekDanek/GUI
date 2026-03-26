// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webík Marek Daněk",
  description: "Next.js aplikace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}>

        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-slate-100">

            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors">
                Webík
              </span>
            </Link>

            <div className="flex items-center gap-6">
              <Link href="/01_zakladni_stranka" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                <span className="text-xl">👥</span>
                Učitelé
              </Link>
              <Link href="/02_jina_stranka" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                <span className="text-xl">📚</span>
                Kurzy
              </Link>
            </div>

          </nav>
        </header>

        <main className="max-w-7xl mx-auto p-6 md:p-10">
          {children}
        </main>

        <footer className="max-w-7xl mx-auto px-6 py-10 mt-10 border-t border-slate-200 text-center text-slate-500 text-sm">
          © 2026 UniPortal Lite. Marek Daněk.
        </footer>
      </body>
    </html>
  );
}