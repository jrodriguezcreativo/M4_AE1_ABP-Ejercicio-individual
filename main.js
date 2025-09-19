class Vehiculo {
  constructor(marca, modelo, año, color, kilometraje) {
    this.marca = marca
    this.modelo = modelo
    this.año = año
    this.color = color
    this.kilometraje = kilometraje
  }

  mostrarDetalles(){
  console.log(`Marca: ${this.marca}`);
  console.log(`Modelo: ${this.modelo}`);
  console.log(`Año: ${this.año}`);
  console.log(`Color: ${this.color}`);
  console.log(`Kilometraje: ${this.kilometraje}`);
  }
}

class Auto extends Vehiculo {
  constructor(marca, modelo, año, color, kilometraje, numeroDePuertas) {
    super(marca, modelo, año, color, kilometraje); 
    this.numeroDePuertas = numeroDePuertas; 
  }


  mostrarDetalles() {
    super.mostrarDetalles(); 
    console.log(`Número de puertas: ${this.numeroDePuertas}`); 
  }
}

class Motocicleta extends Vehiculo {
  constructor(marca, modelo, año, color, kilometraje, tipoDeManillar) {
    super(marca, modelo, año, color, kilometraje); 
    this.tipoDeManillar = tipoDeManillar; 
  }

  mostrarDetalles() {
    super.mostrarDetalles(); 
    console.log(`Tipo de manillar: ${this.tipoDeManillar}`); 
  }
}

class Camion extends Vehiculo {
  constructor(marca, modelo, año, color, kilometraje, capacidadDeCarga) {
    super(marca, modelo, año, color, kilometraje);
    this.capacidadDeCarga = capacidadDeCarga;
  }

  mostrarDetalles() {
    super.mostrarDetalles();
    console.log(`Capacidad de carga: ${this.capacidadDeCarga} kg`);
  }
}

const vehiculoLiteral = {
  marca: "Ford",
  modelo: "Fiesta",
  año: 2019,
  color: "Rojo",
  kilometraje: 25000,
  mostrarDetalles: function() {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Año: ${this.año}`);
    console.log(`Color: ${this.color}`);
    console.log(`Kilometraje: ${this.kilometraje}`);
  }
};

console.log("=== Objeto literal ===");
vehiculoLiteral.mostrarDetalles();

const miAuto = new Auto("Toyota", "Corolla", 2020, "Azul", 15000, 4);
const miMoto = new Motocicleta("Yamaha", "MT-07", 2021, "Negra", 8000, "Deportivo");
const miCamion = new Camion("Volvo", "FH16", 2018, "Blanco", 120000, 20000);

console.log("\n=== Instancia: Auto ===");
miAuto.mostrarDetalles();

console.log("\n=== Instancia: Motocicleta ===");
miMoto.mostrarDetalles();

console.log("\n=== Instancia: Camion ===");
miCamion.mostrarDetalles();


const listaVehiculos = [vehiculoLiteral, miAuto, miMoto, miCamion]

// Convertir a JSON (string)
const vehiculosJSON = JSON.stringify(listaVehiculos, null, 2)
console.log("\n=== Vehículos en formato JSON ===")
console.log(vehiculosJSON)

// Convertir de vuelta a objeto JS
const vehiculosParseados = JSON.parse(vehiculosJSON)
console.log("\n=== Vehículos convertidos desde JSON ===")
console.log(vehiculosParseados)