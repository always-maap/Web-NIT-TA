import { useNavigate, useLoaderData } from "react-router-dom";

import PetComponent from "../components/Pet";
import { getPet } from "../apis/pet";
import { Button } from "react-bootstrap";
import Header from "../components/Header";

export async function loader({ params }) {
  const { id } = params;
  const pet = await getPet(id);
  return { pet };
}

export default function Pet() {
  const { pet } = useLoaderData();
  const navigate = useNavigate();

  return (
    <main>
      <Header />
      <Button onClick={() => navigate(-1)} className="my-2">
        ⬅️ Go Back
      </Button>
      <PetComponent
        image={pet.images[0]}
        name={pet.name}
        animal={pet.animal}
        breed={pet.breed}
        description={pet.description}
        location={`${pet.city}, ${pet.state}`}
      />
    </main>
  );
}
