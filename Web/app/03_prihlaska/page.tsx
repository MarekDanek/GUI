export default function RegistrationPage() {

  // Tuhle funkci piš se studenty velmi pomalu – je to nejdůležitější část
  async function handleSubmit(formData: FormData) {
    'use server'; // Magická formule

    const name = formData.get('fullName');
    const email = formData.get('email');

    // Tady vysvětli, že toto se vypíše v terminálu, ne v prohlížeči!
    console.log("--- NOVÁ PŘIHLÁŠKA PŘIJATA ---");
    console.log(`Student: ${name}`);
    console.log(`Kontakt: ${email}`);
    console.log("-------------------------------");
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-10 rounded-3xl shadow-2xl">
      <h1 className="text-2xl font-bold mb-2">Zápis do semestru 2026</h1>
      <p className="text-slate-500 mb-8">Vyplňte údaje pro odeslání do databáze.</p>

      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Celé jméno</label>
          <input name="fullName" type="text" className="w-full p-3 border rounded-xl outline-blue-500" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Univerzitní e-mail</label>
          <input name="email" type="email" className="w-full p-3 border rounded-xl outline-blue-500" required />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
          Odeslat závaznou přihlášku
        </button>
      </form>
    </div>
  );
}