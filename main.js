let clientes = [];
let datosCliente = [];

class Cliente {
  nombre;
  apellido;
  nitcc;
  direccion;
  ciudad;
  telefono;
  cupoD;
  estado;

  constructor(
    nombre,
    apellido,
    nitcc,
    direccion,
    ciudad,
    telefono,
    cupoD,
    estado
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nitcc = nitcc;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.telefono = telefono;
    this.cupoD = cupoD;
    this.estado = estado;
  }

   Buscar(buscarnombre){
    const BucadorNombres=this.nombre.filter(nombre =>{
      return nombre!=buscarnombre
    });
    this.nombre=BucadorNombres
   }


}







const tbody = document.getElementById("tbody");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const nitcc = document.getElementById("nit/cc");
const direccion = document.getElementById("direccion");
const ciudad = document.getElementById("ciudad");
const telefono = document.getElementById("telefono");
const cupoD = document.getElementById("cupoD");
const estado = document.getElementById("estado");
const mostrar = document.getElementById("mostrar");
const myModalCreate = document.getElementById("crearPers");
const modal = new bootstrap.Modal(myModalCreate);
myModalCreate.addEventListener("shown.bs.modal", () => {});

//Accion del boton 'MOSTRAR'
mostrar.addEventListener("click", () => {
  const nuevoCliente = new Cliente(
    nombre.value,
    apellido.value,
    nitcc.value,
    direccion.value,
    ciudad.value,
    telefono.value,
    cupoD.value,
    estado.value
  );
  clientes.push(nuevoCliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));

  //Cuerpo de la tabla
  clientes=JSON.parse(localStorage.getItem("clientes"));
  mostrartable(clientes);

   modal.hide();

  /*   myModal.hide() */
});

function mostrartable(clientes){
   console.log(clientes);
   tbody.textContent = "";
   clientes.forEach((cliente) => {
      const tr = document.createElement("tr");
      tr.style.backdropFilter = "blur(10px)";
      const tdnombre = document.createElement("td");
      const tdapelldio = document.createElement("td");
      const tdnitcc = document.createElement("td");
      const tddireccion = document.createElement("td");
      const tdciudad = document.createElement("td");
      const tdtelefono = document.createElement("td");
      const tdcupoD = document.createElement("td");
      const tdestado = document.createElement("td");
      tdnombre.textContent = cliente.nombre;
      tdapelldio.textContent = cliente.apellido;
      tdnitcc.textContent = cliente.nitcc;
      tddireccion.textContent = cliente.direccion;
      tdciudad.textContent = cliente.ciudad;
      tdtelefono.textContent = cliente.telefono;
      tdcupoD.textContent = cliente.cupoD;
      tdestado.textContent = cliente.estado;
      tr.appendChild(tdnombre);
      tr.appendChild(tdapelldio);
      tr.appendChild(tdnitcc);
      tr.appendChild(tddireccion);
      tr.appendChild(tdciudad);
      tr.appendChild(tdtelefono);
      tr.appendChild(tdcupoD);
      tr.appendChild(tdestado);
  
      tbody.appendChild(tr);
  
     });
}
clientes=JSON.parse(localStorage.getItem("clientes"));
mostrartable(clientes)

const input=document.getElementById("input");
const lupa=document.getElementById("buscar");
lupa.addEventListener("click", ()=>{
   let personas = [];
   clientes.forEach(cliente => {
     if(cliente.nombre==input.value){
      personas.push(cliente)
      } else if(input.value =='') {
         personas=JSON.parse(localStorage.getItem("clientes"));
      }

   });
   mostrartable(personas) 
})