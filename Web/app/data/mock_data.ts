// app/data/mockData.ts

export const TEACHERS = [
  { id: 1, name: "Ing. Jan Novák", role: "Vedoucí katedry", email: "novak@uni.cz", icon: "👨‍🏫", dept: "IT" },
  { id: 2, name: "Mgr. Lucie Černá", role: "Expertka na UI/UX", email: "cerna@uni.cz", icon: "👩‍💻", dept: "Design" },
  { id: 3, name: "doc. Petr Rychlý", role: "Databázový specialista", email: "rychly@uni.cz", icon: "👨‍🔬", dept: "Data" },
  { id: 4, name: "Bc. Tomáš Zelený", role: "Asistent pro React", email: "zeleny@uni.cz", icon: "🧑‍🎓", dept: "IT" }
];

export const COURSES = [
  { id: 'web1', title: 'Základy HTML/CSS', credits: 4, desc: 'Úvod do tvorby moderního webu.', capacity: 30, enrolled: 12 },
  { id: 'js-adv', title: 'JavaScript pro experty', credits: 6, desc: 'Pokročilé techniky a asynchronní JS.', capacity: 20, enrolled: 19 },
  { id: 'nextjs', title: 'Framework Next.js', credits: 5, desc: 'Moderní full-stack vývoj aplikací.', capacity: 15, enrolled: 15 },
  { id: 'uiux', title: 'Design uživatelských rozhraní', credits: 4, desc: 'Figma, přístupnost a principy designu.', capacity: 25, enrolled: 10 }
];