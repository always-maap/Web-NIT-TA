import { useEffect, useState } from "react";
import { getPetBreed } from "../apis/pet";

export function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [state, setState] = useState("loading");

  useEffect(() => {
    (async () => {
      const breeds = await getPetBreed(animal);
      setBreedList(breeds);
      setState("loaded");
    })();
  }, [animal]);

  return [breedList, state];
}
