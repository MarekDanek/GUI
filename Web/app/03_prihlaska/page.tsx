// app/03_prihlaska/page.tsx
import { COURSES } from '../data/mock_data';
import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';

// 1. OPRAVA: Řekneme TypeScriptu, jak PŘESNĚ vypadá naše přihláška (konec "any" chyb)
interface Prihlaska {
  id: string;
  jmeno: string;
  email: string;
  kurz: string;
  casZapsani: string;
}

// 2. OPRAVA: Přesunuli jsme Server Action úplně mimo hlavní komponentu!
// Tím Reactu řekneme, že tohle se spouští opravdu jen při odeslání a neruší to vykreslování.
async function handleSubmit(formData: FormData) {
  'use server';

  // "as string" uklidní TypeScript, že z inputu opravdu přijde text
  const name = formData.get('fullName') as string;
  const email = formData.get('email') as string;
  const selectedCourse = formData.get('courseId') as string;

  const novaPrihlaska: Prihlaska = {
    id: crypto.randomUUID(), // Modernější způsob: vygeneruje unikátní textové ID místo Date.now()
    jmeno: name,
    email: email,
    kurz: selectedCourse,
    casZapsani: new Date().toLocaleString('cs-CZ')
  };

  const cestaKSouboru = path.join(process.cwd(), 'app', 'data', 'prihlasky.json');

  try {
    let existujici: Prihlaska[] = [];
    try {
      const data = await fs.readFile(cestaKSouboru, 'utf-8');
      existujici = JSON.parse(data);
    } catch (e) {
      // Soubor ještě neexistuje, nevadí
    }

    existujici.push(novaPrihlaska);
    await fs.writeFile(cestaKSouboru, JSON.stringify(existujici, null, 2));

  } catch (chyba) {
    console.error("❌ Došlo k chybě při ukládání:", chyba);
  }

  revalidatePath('/03_prihlaska');
}

// 3. Hlavní komponenta (teď už je naprosto čistá)
export default async function RegistrationPage() {

  const cestaKSouboru = path.join(process.cwd(), 'app', 'data', 'prihlasky.json');
  let ulozenePrihlasky: Prihlaska[] = [];

  try {
    const data = await fs.readFile(cestaKSouboru, 'utf-8');
    ulozenePrihlasky = JSON.parse(data);
  } catch (error) {
    // Zatím žádná data
  }

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Formulář */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-fit">
        <h1 className="text-2xl font-bold mb-2">Zápis do semestru</h1>
        <p className="text-slate-500 mb-8">Data se ukládají lokálně do JSON souboru.</p>

        <form action={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Celé jméno</label>
            <input name="fullName" type="text" className="w-full p-3 border rounded-xl bg-slate-50" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input name="email" type="email" className="w-full p-3 border rounded-xl bg-slate-50" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Předmět</label>
            <select name="courseId" className="w-full p-3 border rounded-xl bg-slate-50" required>
              <option value="">-- Vyberte --</option>
              {COURSES.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
            Zapsat a zobrazit
          </button>
        </form>
      </div>

      {/* Výpis */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          📋 Aktuální přihlášky
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{ulozenePrihlasky.length}</span>
        </h2>

        {ulozenePrihlasky.length === 0 ? (
          <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center text-slate-500">
            Zatím zde nejsou žádné přihlášky. Buďte první!
          </div>
        ) : (
          <ul className="space-y-4">
            {/* Tady jsme smazali ": any", protože TypeScript už zná naši "Prihlasku" */}
            {ulozenePrihlasky.slice().reverse().map((prihlaska) => (
              <li key={prihlaska.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <div className="flex justify-between items-start">
                  <span className="font-bold text-lg">{prihlaska.jmeno}</span>
                  <span className="text-xs text-slate-400">{prihlaska.casZapsani}</span>
                </div>
                <span className="text-sm text-slate-500">{prihlaska.email}</span>
                <span className="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded-lg w-fit mt-1">
                  📚 {prihlaska.kurz}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}