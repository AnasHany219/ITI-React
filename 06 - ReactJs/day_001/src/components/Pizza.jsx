function Pizza({ pizzaObj }) {
  return (
    <li className=" d-flex gap-4 w-75">
      <img
        src={pizzaObj.photoName}
        alt={pizzaObj.name}
        className="img-fluid"
        style={{ width: "12rem", height: "12rem", objectFit: "cover" }}
      />
      <div className="d-flex flex-column gap-2 py-1 text-md">
        <h3 style={{ fontSize: "2rem" }}>{pizzaObj.name}</h3>
        <p
          className="text-sm"
          style={{
            fontSize: "1.4rem",
            fontStyle: "italic",
            marginBottom: "auto",
          }}
        >
          {pizzaObj.ingredients}
        </p>

        <span style={{ fontSize: "1.6rem" }}>${pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
