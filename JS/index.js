const descargarUsuarios = cantidad => new Promise ((resolve, reject) =>{

    // Psar la cantidad a la API
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //Llamado AJAX
    const xhr = new XMLHttpRequest();

    // Abrir la conexión
    xhr.open('GET', api,true);

    //on load
    xhr.onload = () =>{
        if (xhr.status === 200){
            resolve( JSON.parse(xhr.responseText).results );
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // On Error (opcional)

    xhr.onerror = error => reject(error);

    // Send a la base de datos o API
    xhr.send()

})

descargarUsuarios(10)
    .then( 
        miembros => imprimirHTML(miembros),
        error => console.error(new Error('Hubo un error' + error))
    )

function imprimirHTML (usuarios) {
    let html = ''
    console.log(usuarios)
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                Pais: ${usuario.nat}
                Foto: <img src="${usuario.picture.thumbnail}">
            </li>
        `
    })

    const contenedorAPP = document.querySelector('#APP');
    contenedorAPP.innerHTML = html;
}

