import '../css/componentes.css';


//FUNCION SALUDAR
export const saludar = (nombre) => {
    console.log('Creando Etiqueta H1');
    const h1 = document.createElement('h1');
    h1.innerText =`Hola, ${nombre}`;
    document.body.append(h1);
 }