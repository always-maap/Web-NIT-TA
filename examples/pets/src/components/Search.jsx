import { ANIMAL } from "../constants/animal";
import { useBreedList } from "../hooks/useBreedList";

export default function Search(props) {
  const { animal, setAnimal, breed, setBreed } = props;
  const [breeds, state] = useBreedList(animal);

  function onSubmit() {
    console.log("animal", animal);
    console.log("breed", breed);
  }

  return (
    <div className="search">
      <select
        name="animal"
        id="animal"
        value={animal}
        onChange={(e) => setAnimal(e.target.value)}
      >
        {ANIMAL.map((animal) => (
          <option key={animal} value={animal}>
            {animal}
          </option>
        ))}
      </select>

      <select
        name="breed"
        id="breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      >
        {state === "loading" ? (
          <option>Loading...</option>
        ) : (
          breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))
        )}
      </select>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
