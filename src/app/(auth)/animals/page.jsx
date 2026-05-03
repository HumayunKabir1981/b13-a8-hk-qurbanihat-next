

import AnimalsClient from "@/components/AnimalsClient ";

export default async function AnimalsPage() {

  const res = await fetch('http://localhost:3000/animals.json', {
    cache: "no-store",
  });

  const animals = await res.json();

  return (
    <div className="bg-slate-200">
      <h1 className="text-4xl font-bold py-6 text-center">
        All Animals
      </h1>

      {/* 👉 client component এ data pass */}
      <AnimalsClient animals={animals} />
    </div>
  );
}