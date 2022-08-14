var contactos = [
  {
    "nombre": "Nora",
    "apellido": "Nav",
    "numero": "8543236543",
    "gustos": ["Pizza", "Programación"]
  },
  {
    "nombre": "Harry",
    "apellido": "Potter",
    "numero": "0994372684",
    "gustos": ["Hogwarts", "Magia"]
  },
  {
    "nombre": "Sherlock",
    "apellido": "Holmes",
    "numero": "0487345643",
    "gustos": ["Casos interesantes", "Violin"]
  }
];

/*
function buscarPerfil(nombre, propiedad) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
      return contactos[i][propiedad]||"La Propiedad no existe,";
    }
  }
  return "el contacto nio esta en la lista"
}
*/
console.log(buscarPerfil("Sherlock","numero"))

function buscarPerfil(nombre, propiedad){
  for( var i=0 ; i < contactos.length ; i++){
    if (contactos[i].nombre === nombre){
      return contactos[i][propiedad]
    }
  }
}

console.log(buscarPerfil("Harry","nombre"))