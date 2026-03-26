// app/layout.tsx
import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <nav className="p-4 bg-slate-100 flex gap-4 border-b">
          <Link href="/" className="font-bold">🏠 UniPortal</Link>
          <Link href="/01_zakladni_stranka">👥 Učitelé</Link>
          <Link href="/02_jina_stranka">📚 Kurzy</Link>
        </nav>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}