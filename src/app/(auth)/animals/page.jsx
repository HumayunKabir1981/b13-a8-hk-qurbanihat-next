"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const AnimalsPage = () => {

    const [animals, setAnimals] = useState([]);

  
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000000);

  
    const [inputMin, setInputMin] = useState('');
    const [inputMax, setInputMax] = useState('');

    useEffect(() => {
        fetch('/animals.json')
            .then(res => res.json())
            .then(data => setAnimals(data));
    }, []);

   
    const handleSearch = () => {
        setMinPrice(Number(inputMin) || 0);
        setMaxPrice(Number(inputMax) || 1000000);
    };

    const filteredAnimals = animals.filter(animal =>
        animal.price >= minPrice && animal.price <= maxPrice
    );

    return (
        <div className="flex flex-col items-center justify-center mx-auto bg-slate-200">

            <h1 className="text-4xl font-bold py-6">All Animals</h1>

           
            <div className="flex gap-4 mb-6 items-center">
                <input
                    type="number"
                    placeholder="Min Price"
                    className="input input-bordered"
                    value={inputMin}
                    onChange={(e) => setInputMin(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Max Price"
                    className="input input-bordered"
                    value={inputMax}
                    onChange={(e) => setInputMax(e.target.value)}
                />

                <button
                    onClick={handleSearch}
                    className="btn btn-primary"
                >
                    Search
                </button>
            </div>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center pb-10">
                {
                    filteredAnimals.map(animal =>
                        <div key={animal.id} className="card bg-base-100 shadow-sm w-72 flex flex-col">

                            <figure className="px-10 pt-10">
                                <Image
                                    src={animal.image.trim()}
                                    alt="animal"
                                    height={200}
                                    width={250}
                                    className="rounded-xl h-48 w-full"
                                />
                            </figure>

                            <div className="card-body flex flex-col flex-1 items-center text-center">

                                <div className="flex justify-between w-full">
                                    <div className="badge">{animal.type}</div>
                                    <div className="badge">
                                        <FaBangladeshiTakaSign />
                                        {animal.price}
                                    </div>
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
};

export default AnimalsPage;