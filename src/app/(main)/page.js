import CowAnimation from "@/components/animations/CowAnimation";
import GrassAnimation from "@/components/GrassAnimation";
import Image from "next/image";
import Link from "next/link";
import { FaBangladeshiTakaSign } from "react-icons/fa6";


export default async function Home() {
  const res = await fetch('http://localhost:3000/animals.json');
  const animals = await res.json();
  return (
    <div className="flex flex-col items-center justify-center container mx-auto bg-slate-200">

      <div className="text-center my-5 px-5">
        <h1 className="text-5xl font-bold mb-4"> Biggest Online  Qurbani Hat 2026</h1>
        <p className="mb-6">
          Buy healthy cows & goats easily from home
        </p>

        <Link href="/animals">
          <button className="btn btn-soft btn-secondary text-2xl rounded-4xl px-6">
            Browse All Animals
          </button>
        </Link>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">

        <div className="col-span-2 ">

          <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 place-items-center pb-10">

            {
              animals.slice(0, 4).map(animal =>
                <div key={animal.id} className="card bg-base-100 shadow-sm w-96 h-full flex flex-col">
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

        <div className="col-span-1 ">

          <div className="relative">
            <CowAnimation></CowAnimation>
            <div className=" w-30 h-20 absolute right-45 top-50 ">
              <GrassAnimation></GrassAnimation>
            </div>

          </div>



          <div className="py-10">
            <div className="max-w-6xl mx-auto px-4">

              <h2 className="text-3xl font-bold text-center mb-8">
                Qurbani Tips
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                <div className="bg-white p-5 rounded-xl shadow text-center">
                  <h3 className="font-semibold">Healthy Animal</h3>
                  <p className="text-sm text-gray-500"> Always choose active and healthy animals without disease.</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow text-center">
                  <h3 className="font-semibold">Proper Age</h3>
                  <p className="text-sm text-gray-500">Ensure the animal meets the required age for Qurbani.</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow text-center">
                  <h3 className="font-semibold">Good Weight</h3>
                  <p className="text-sm text-gray-500"> Select animals with proper weight for better meat quality</p>
                </div>

              </div>

            </div>
          </div>

          <div className="py-10">
            <div className="max-w-6xl mx-auto px-4">

              <h2 className="text-3xl font-bold text-center mb-8">
                Top Breeds
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

                <div className="bg-white p-5 rounded-xl shadow text-center">
                  <h3 className="font-semibold">Sahiwal</h3>
                  <p className="text-sm text-gray-500">High milk & meat quality</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow text-center">
                  <h3 className="font-semibold">Brahman</h3>
                  <p className="text-sm text-gray-500">Strong & heat resistant</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow text-center">
                  <h3 className="font-semibold">Desi Cow</h3>
                  <p className="text-sm text-gray-500">Affordable & popular</p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow text-center">
                  <h3 className="font-semibold">Black Bengal Goat</h3>
                  <p className="text-sm text-gray-500">Best for Qurbani meat</p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>




    </div >
  );
}
