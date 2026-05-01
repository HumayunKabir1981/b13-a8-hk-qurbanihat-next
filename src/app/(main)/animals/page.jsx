import Image from 'next/image';
import React from 'react';

const AnimalsPage = async () => {
    const res = await fetch('http://localhost:3000/animals.json');
    const animals = await res.json();


    return (
        <div>
            {
                animals.map(animal => <div key={animal.id}>
                    {/* <img src={animal.image} alt="animal" height={100} width={100} /> */}
                    <Image src={animal.image.trim()} alt="animal" height={100} width={100}/>
                </div>


                )
            }
        </div>
    );
};

export default AnimalsPage;