import { ANIMAL_BREED, PET_LIST } from "../constants/api";

export function getPetList(animal, breed) {
  return fetch(`${PET_LIST}?animal=${animal}&breed=${breed}`)
    .then((res) => res.json())
    .then((data) => data.pets);
}

export function getPetBreed(animal) {
  return fetch(`${ANIMAL_BREED}?animal=${animal}`)
    .then((res) => res.json())
    .then((data) => data.breeds);
}
