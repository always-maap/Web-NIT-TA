import { useEffect, useState } from "react";
import { getPetList } from "../apis/pet";

export function usePetList(animal, breed) {
  const [petList, setPetList] = useState([]);
  const [state, setState] = useState("loading");

  useEffect(() => {
    (async () => {
      const pets = await getPetList(animal, breed);
      setPetList(pets);
      setState("loaded");
    })();
  }, [animal, breed]);

  return [petList, state];
}
