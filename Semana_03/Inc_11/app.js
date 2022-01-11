class usuario {
  constructor(nombre, apellido, edad, id) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.id = id;
  }

  getInfo() {
    let info = `Titulo ${this.nombre}, Apellido ${this.apellido}`;
    console.log(info);
  }
}
const usuario1 = new usuario("Jose", "Hernandez", 33, 05);

console.log(usuario1.getInfo());
