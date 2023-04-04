"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
var persona = [];

persona.push(new Persona_1.Persona("Begoña", "Morales", 25, "58428959D", "12/11/1997", "Verde", "F", new Direccion_1.Direccion("Infiesto", 1, 4, "D", 33207, "Gijon", "Asturias"), new Mail_1.Mail("Personal", "alexamrobledo@gmail.com"), new Telefono_1.Telefono("Personal", 623036561), "Vecina Gijon"));
persona.push(new Persona_1.Persona("Daniel", "Sanchez", 31, "27789337N", "25/06/1993", "Azul", "M", new Direccion_1.Direccion("Dorado", 9, 5, "G", 33900, "Langreo", "Asturias"), new Mail_1.Mail("Personal", "DanySanch@gmail.com"), new Telefono_1.Telefono("Personal", 6223890384), "Amigo de mi novio"));
persona.push(new Persona_1.Persona("Jorge", "Melendez", 28, "15508355N", "13/01/1991", "Azul", "M", new Direccion_1.Direccion("Javier Felgueroso", 16, 3, "A", 33900, "Langreo", "Asturias"), new Mail_1.Mail("Personal", "jorge1234@gmail.com"), new Telefono_1.Telefono("Personal", 622183288), "Chef de Pizzeria"));
for (var i = 0; i < persona.length; i++) {
    console.log(persona[i]);
}

var personaPorDNI = persona.filter(function (person) { return person.dni == "15508355N"; })[0];
var nuevaDireccion = new Direccion_1.Direccion("Consititucion", 56, 3, "F", 33200, "Gijon", "Asturias");

personaPorDNI.direcciones.pop();
personaPorDNI.direcciones.push(nuevaDireccion);

var nuevoMail = new Mail_1.Mail("Trabajo", "jorgelaboral@trabajo.com");
personaPorDNI.mails.push(nuevoMail);

var nuevoTelefono = new Telefono_1.Telefono("Trabajo", 617892278);
personaPorDNI.telefonos.push(nuevoTelefono);

console.log("Agenda con datos actualizados")
for (var i = 0; i < persona.length; i++) {
    console.log(persona[i]);
}
