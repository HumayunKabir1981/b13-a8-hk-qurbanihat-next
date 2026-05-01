import Image from "next/image";

export default async function Home() {
  const res = await fetch('http://localhost:3000/animals.json');
  const animals = await res.json();
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <h1 className="text-4xl font-bold">Qurbani Hat</h1>
      {
        animals.slice(0, 4).map(animal => <div key={animal.id}>
          <Image src={animal.image.trim()} alt="animal" height={100} width={100}/>

        </div>


        )
      }
    </div>
  );
}
