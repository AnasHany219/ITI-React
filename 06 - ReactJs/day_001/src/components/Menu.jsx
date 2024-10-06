import Pizza from "./Pizza";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="d-flex flex-column align-items-center gap-4">
      <h2 className="text-center py-3 border-top border-bottom display-4 text-uppercase fw-bold letter-spacing-2">
        Our Menu
      </h2>

      {numPizzas ? (
        <>
          <p
            className="text-center fs-5"
            style={{ lineHeight: 1.6, width: "80%" }}
          >
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul
            className="list-unstyled d-grid gap-4"
            style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
          >
            {pizzas.map((pizza, index) => (
              <Pizza pizzaObj={pizza} key={index} />
            ))}
          </ul>
        </>
      ) : (
        <p className="text-center">
          We're still working on our menu. Please come later 🥺
        </p>
      )}
    </main>
  );
}

export default Menu;
