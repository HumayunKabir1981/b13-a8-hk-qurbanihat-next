

import AnimalsClient from "@/components/AnimalsClient ";
import animals from "@/../public/animals.json";

export default function AnimalsPage() {
  return (
    <div className="bg-slate-200">
      <h1 className="text-4xl font-bold py-6 text-center">
        All Animals
      </h1>

      <AnimalsClient animals={animals} />
    </div>
  );
}