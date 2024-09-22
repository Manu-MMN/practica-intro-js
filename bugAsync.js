// Este programa simula una llamada asincrónica para obtener un usuario


/* 
function obtenerUsuario(id) {
let usuario;
setTimeout(() => {
if (id === 1) {
usuario = { id: 1, nombre: 'John Doe' };
}
}, 2000);
return usuario;
}
const usuario = obtenerUsuario(1);
console.log(usuario);
*/

function obtenerUsuariSetTimeOut(id) {
    let usuario;
    
    return new Promise(resolve=>{
        setTimeout(() => {
            if (id === 1) {
            usuario = { id: 1, nombre: 'John Doe' };
            resolve(usuario)
            }
            }, 2000);
    })

}
async function obtenerUsuario(id) {
    return await obtenerUsuariSetTimeOut(id)

    }
    const usuario = await obtenerUsuario(1);
    console.log(usuario);


