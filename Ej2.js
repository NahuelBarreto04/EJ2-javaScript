let pizzas = [];

let Pizza = class {
  constructor(id, nombre, ingredientes, precio) {
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }
};
let createAndPush = (id, nombre, ingredientes, precio) => {
  let nombreNormalice = nombre.trim().toLowerCase();
  let ingredientesNormalice = ingredientes.map((ingrediente) =>
    ingrediente.trim().toLowerCase()
  );
  return pizzas.push(
    new Pizza(id, nombreNormalice, ingredientesNormalice, precio)
  );
};
createAndPush(
  1,
  "       Pizza cuatro quEsOs       ",
  [
    "queso mozzarella",
    "el queso gorgonzola",
    "queso parmesano",
    "el queso fontina",
  ],
  200
);
createAndPush(
  2,
  "Pizza de pepperoni",
  ["pepperoni", "hojas de albahaca", "oregano"],
  400
);
createAndPush(
  3,
  "Pizza con champiñones",
  ["champiñones", "quesO", "salsa de toMatE", "queso mozzarella "],
  600
);
createAndPush(4, "Pizza hawaiana", ["ananá", "jamón", "tomate"], 650);
createAndPush(
  5,
  "Pizza napolitana",
  ["tomate", "queso mozzarella", "anchoas", "alcaparras", "ajo"],
  700
);
createAndPush(6, "Pizza fugazza ", ["queso", "cebolla", "aceitunas"], 800);
// ----------------------------------------------------
//A) Pizzas con id impar
let pizzasIdImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);
console.log(
  `Las pizzas con id impar son:${pizzasIdImpar
    .map((p) => p.nombre)
    .join(", ")}.`
);
console.log("Muestra de objetos con id impar:", pizzasIdImpar);
console.log("---------------------------------");
//B)Pizza que valga menos de 600
let pizzasPriceMenor600 = pizzas.filter((pizza) => pizza.precio < 600);
console.log("Las pizzas que valen menos de 600 son:");
for (let x of pizzasPriceMenor600) {
  console.log(`${x.nombre}: $${x.precio}.`);
}
console.log(
  "Muestra de objetos de pizzas que valen menos de 600:",
  pizzasPriceMenor600
);
console.log("---------------------------------");
// C) nombre de todas las pizzas
console.log("El nombre de las pizzas es:");
pizzas.forEach((pizza) => console.log(`${pizza.nombre}.`));
console.log("---------------------------------");
//D) precios de las pizzas
console.log("El precio de cada pizza es:");
pizzas.forEach((pizza) => console.log(`$${pizza.precio}.`));
console.log("---------------------------------");
// E)  nombre de las pizzas con su respectivo precio
for (let pizza of pizzas) {
  console.log(`El precio de la ${pizza["nombre"]} es de $${pizza["precio"]}.`);
}
