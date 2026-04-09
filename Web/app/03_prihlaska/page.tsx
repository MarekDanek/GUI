// app/03_prihlaska/page.tsx
import { COURSES } from '../data/mock_data';
import fs from 'fs/promises';
import { revalidatePath } from 'next/cache';

const SOUBOR = process.cwd() + '/app/data/prihlasky.json';

// 1. Nadefinujeme typ, aby TypeScript nekřičel kvůli "any"
type Prihlaska = {
  id: string;
  jmeno: string;
  kurz: string;
};

// 2. Pomocná funkce pro čtení dat
async function getPrihlasky(): Promise<Prihlaska[]> {
  try { return JSON.parse(await fs.readFile(SOUBOR, 'utf-8')); }
  catch { return []; }
}

// 3. Server Action přesunutá VEN z komponenty (aby nerušila render)
async function ulozPrihlasku(formData: FormData) {
  'use server';

  const nova: Prihlaska = {
    id: crypto.randomUUID(), // Bezpečné ID
    jmeno: formData.get('jmeno') as string,
    kurz: formData.get('kurz') as string
  };

  const data = await getPrihlasky();
  await fs.writeFile(SOUBOR, JSON.stringify([...data, nova], null, 2));

  revalidatePath('/03_prihlaska');
}

// 4. Hlavní stránka
export default async function PrihlaskaPage() {
  const prihlasky = await getPrihlasky();

  return (
    <div className="grid md:grid-cols-2 gap-10">

      {/* LEVÁ STRANA: Formulář */}
      <form action={ulozPrihlasku} className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
        <h2 className="text-xl font-bold">Zápis do semestru</h2>
        <input name="jmeno" placeholder="Vaše jméno" required className="w-full p-3 border rounded bg-slate-50" />
        <select name="kurz" required className="w-full p-3 border rounded bg-slate-50">
          <option value="">-- Vyberte kurz --</option>
          {COURSES.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
        </select>
        <button className="w-full bg-blue-600 text-white font-bold p-3 rounded">Odeslat</button>
      </form>

      {/* PRAVÁ STRANA: Výpis */}
      <div>
        <h2 className="text-xl font-bold mb-4">Seznam přihlášených</h2>
        <ul className="space-y-3">
          {/* Místo 'any' jsme použili náš typ 'Prihlaska' */}
          {prihlasky.reverse().map((p: Prihlaska) => (
            <li key={p.id} className="bg-white p-4 rounded-xl border shadow-sm flex flex-col">
              <span className="font-bold">{p.jmeno}</span>
              <span className="text-sm text-slate-500">📚 {p.kurz}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}