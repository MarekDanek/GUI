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
  description: "Výuková Next.js aplikace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}>

        {/* --- NAVIGACE --- */}
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-black text-blue-700 group-hover:text-blue-500 transition-colors tracking-tight">
                WEBÍK<span className="text-slate-400">.ts</span>
              </span>
            </Link>

            <div className="flex items-center gap-1 md:gap-8">
              <Link href="/01_zakladni_stranka" className="px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all font-medium flex items-center gap-2">
                <span className="text-lg">👥</span>
                <span className="hidden sm:inline">Učitelé</span>
              </Link>

              <Link href="/02_jina_stranka" className="px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all font-medium flex items-center gap-2">
                <span className="text-lg">📚</span>
                <span className="hidden sm:inline">Kurzy</span>
              </Link>

              {/* Tady je ten nový odkaz pro 3. část semináře */}
              <Link href="/03_prihlaska" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-bold text-sm shadow-sm flex items-center gap-2">
                <span>📝</span>
                <span>Zápis</span>
              </Link>
            </div>

          </nav>
        </header>

        {/* --- HLAVNÍ OBSAH --- */}
        <main className="max-w-7xl mx-auto p-6 md:p-12 min-h-[70vh]">
          {children}
        </main>

        {/* --- PATIČKA --- */}
        <footer className="bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-sm">
              © 2026 Výukový portál. Vytvořeno pro seminář Next.js.
            </div>
            <div className="font-bold text-slate-800">
              Marek Daněk
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}