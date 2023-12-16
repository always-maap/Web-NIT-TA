import { usePetList } from "../hooks/usePetList";
import Pet from "./Pet";

export default function PetList(props) {
  const { animal, breed } = props;

  const [pets, state] = usePetList(animal, breed);

  return state === "loading"
    ? "loading"
    : pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          image={pet.images[0]}
        />
      ));
}
