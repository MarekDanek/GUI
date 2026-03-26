// app/01_zakladni_stranka/page.tsx
export default function TeachersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Adresář učitelů</h1>
      <ul className="mt-4 space-y-2">
        <li>Ing. Petr Novák - Kabinet A102</li>
        <li>Mgr. Jana Svobodová - Kabinet B205</li>
      </ul>
    </div>
  );
}