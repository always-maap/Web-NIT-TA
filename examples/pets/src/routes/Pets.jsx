import { Link, useLoaderData } from "react-router-dom";
import { Stack } from "react-bootstrap";

import { getPetList } from "../apis/pet";
import Pet from "../components/Pet";
import Empty from "../components/Empty";

export async function loader({ params }) {
  const { animal, breed } = params;
  const pets = await getPetList(animal, breed);
  return { pets };
}

export default function Pets() {
  const { pets } = useLoaderData();

  if (pets.length === 0) {
    return <Empty />;
  }

  return (
    <Stack gap={2} direction="horizontal" className="flex-wrap my-2">
      {pets.map((pet) => (
        <Link
          to={`/pet/${pet.id}`}
          key={pet.id}
          className="text-decoration-none"
        >
          <Pet
            image={pet.images[0]}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
          />
        </Link>
      ))}
    </Stack>
  );
}
