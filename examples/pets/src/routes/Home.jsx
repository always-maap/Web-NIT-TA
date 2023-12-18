import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Row, Col, Button, Stack } from "react-bootstrap";

import { ANIMAL } from "../constants/animal";
import { useBreedList } from "../hooks/useBreedList";
import Header from "../components/Header";

export default function Home() {
  const [animal, setAnimal] = useState(ANIMAL[0]);
  const [breeds, state] = useBreedList(animal);
  const navigate = useNavigate();

  /**
   * @param {Event} event
   */
  function onSubmit(event) {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const data = Object.fromEntries(formData);
    const { animal, breed } = data;
    navigate(`/${animal}/${breed}`);
  }

  return (
    <main>
      <Header />
      <Row>
        <Col xs={12} md={3}>
          <form onSubmit={onSubmit}>
            <Stack gap={2}>
              <Form.Select
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
              </Form.Select>

              <Form.Select
                name="breed"
                id="breed"
                disabled={state === "loading"}
              >
                {breeds.map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </Form.Select>
              <Button type="submit" variant="success">
                Submit
              </Button>
            </Stack>
          </form>
        </Col>
        <Col xs={12} md={9}>
          <Outlet />
        </Col>
      </Row>
    </main>
  );
}
