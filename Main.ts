import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

let persona: Persona[] = [];

persona.push(
  new Persona("Begoña","Morales",25,"58428959D","12/11/1997","Verde","F",
    new Direccion("Infiesto", 1, 4, "D", 33207, "Gijon", "Asturias"),
    new Mail("Personal", "alexamrobledo@gmail.com"),
    new Telefono("Personal", 623036561),"Vecina Gijon"
  )
);

persona.push(
  new Persona("Daniel","Sanchez",31,"27789337N","25/06/1993","Azul","M",
    new Direccion("Dorado", 9, 5, "G", 33900, "Langreo", "Asturias"),
    new Mail("Personal", "DanySanch@gmail.com"),
    new Telefono("Personal", 6223890384),"Amigo de mi novio"
  )
);

persona.push(
  new Persona("Jorge","Melendez",28,"15508355N","13/01/1991","Azul","M",
    new Direccion("Javier Felgueroso", 16, 3, "A", 33900, "Langreo", "Asturias"),
    new Mail("Personal", "jorge1234@gmail.com"),
    new Telefono("Personal", 622183288),"Chef de Pizzeria"
  )
);

for (let i = 0; i < persona.length; i++) {
  console.log(persona[i]);
}

let personaPorDNI: Persona = persona.filter(
  (person) => person.dni == "15508355N"
)[0];


let nuevaDireccion: Direccion = new Direccion("Consititucion",56,3,"F",33200,"Gijon","Asturias");
personaPorDNI.direcciones.pop();
personaPorDNI.direcciones.push(nuevaDireccion);


let nuevoMail: Mail = new Mail("Trabajo", "jorgelaboral@trabajo.com");
personaPorDNI.mails.push(nuevoMail);

let nuevoTelefono: Telefono = new Telefono("Trabajo", 617892278);
personaPorDNI.telefonos.push(nuevoTelefono);

console.log("Agenda con datos actualizados")
for (let i = 0; i < persona.length; i++) {
  console.log(persona[i]);
}