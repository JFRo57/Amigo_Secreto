let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre_Amigo = inputAmigo.value.trim(); // Elimina espacios en blanco

    if (!nombre_Amigo) {
        alert("Debes ingresar un nombre");
        return; // Evita que se agregue un nombre vacío
    }

    amigos.push(nombre_Amigo);
    inputAmigo.value = ""; // Limpia el input después de agregar un amigo
    inputAmigo.focus();
    renderizarAmigos(); // Actualiza la lista
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista antes de volver a renderizar

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;

    amigos = []; // Vacía la lista de amigos después del sorteo
    renderizarAmigos(); // Borra la lista en pantalla
}
