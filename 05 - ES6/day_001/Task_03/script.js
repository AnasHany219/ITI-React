const products = [
  {
    name: "lap top dell ram",
    price: 30000,
    description: "laptop dell core i5 hard ssd 1 tera",
  },
  {
    name: "lap top mac",
    price: 50000,
    description: "laptop hp core i5 ram 32",
  },
  {
    name: "lap top hp",
    price: 40000,
    description: "laptop hp core i7 hard ssd .5 tera",
  },
];

const filterProducts = () => {
  const input = document.getElementById("searchInput").value.toLowerCase();

  const resultsTable = document
    .getElementById("resultsTable")
    .getElementsByTagName("tbody")[0];

  console.log(resultsTable);

  resultsTable.innerHTML = "";

  const filteredProducts = products.filter(
    ({ name, description }) =>
      name.toLowerCase().includes(input) ||
      description.toLowerCase().includes(input)
  );

  filteredProducts.forEach(({ name, price, description }) => {
    document.getElementById("resultsTable").style.display = "table";

    const row = resultsTable.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = price;
    row.insertCell(2).textContent = description;
  });
};
