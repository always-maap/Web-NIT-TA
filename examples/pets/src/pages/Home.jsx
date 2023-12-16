import { useState } from "react";
import Search from "../components/Search";
import { ANIMAL } from "../constants/animal";
import PetList from "../components/PetList";

export default function Home() {
  const [animal, setAnimal] = useState(ANIMAL[0]);
  const [breed, setBreed] = useState([]);

  console.log(animal, breed);

  return (
    <>
      <h1>Adopt Me!</h1>

      <Search
        animal={animal}
        setAnimal={setAnimal}
        breed={breed}
        setBreed={setBreed}
      />

      <PetList animal={animal} breed={breed} />
    </>
  );
}
