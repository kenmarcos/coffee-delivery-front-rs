import { Hero } from "./components/Hero";
import { CoffeeList, Showcase } from "./styles";
import { coffees } from "../../../data.json";
import { CoffeeCard } from "./components/CoffeeCard";

export const Home = () => {
  return (
    <>
      <Hero />

      <Showcase>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </Showcase>
    </>
  );
};
