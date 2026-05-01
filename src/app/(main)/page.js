import Image from "next/image";
import Link from "next/link";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

export default async function Home() {
  const res = await fetch('http://localhost:3000/animals.json');
  const animals = await res.json();
  return (
    <div className="flex flex-col items-center justify-center contain-style mx-auto bg-slate-200">


      <h1 className="text-4xl font-bold py-10">Biggest Online Qurbani Hat</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center pb-10">
        {
          animals.slice(0, 8).map(animal =>
            <div key={animal.id} className="card bg-base-100 shadow-sm w-72 h-full flex flex-col">
              <figure className="px-10 pt-10">
                <Image src={animal.image.trim()} alt="animal" height={200} width={250} className="rounded-xl h-48 w-full" />
              </figure>
              <div className="card-body flex flex-col flex-1 items-center text-center">

                <div className="flex justify-between w-full">
                  <div className="badge ">{animal.type}</div>
                  <div className="badge "><FaBangladeshiTakaSign />{animal.price}</div>
                </div>


                <div className="w-full">
                  <Link href={`/animals/${animal.id}`}>
                    <button className="btn btn-primary w-full">
                      See Details
                    </button>
                  </Link>
                </div>


              </div>

            </div>

          )
        }
      </div>






    </div>
  );
}
