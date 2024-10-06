function Order({ closeHour, openHour }) {
  return (
    <div className="order d-flex flex-column align-items-center gap-3">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button
        style={{
          color: "inherit",
          fontFamily: "inherit",
          border: "none",
          fontSize: "1.4rem",
          fontWeight: 500,
          backgroundColor: "#edc84b",
          padding: "1.4rem 3.2rem",
          cursor: "pointer",
          transition: "all 0.2s",
          borderRadius: "15px",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e9bb24")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#edc84b")}
      >
        Order
      </button>
    </div>
  );
}

export default Order;
