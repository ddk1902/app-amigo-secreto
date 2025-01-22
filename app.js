// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const nombre = input.value.trim();
//Verificamos que el input no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    // Verificar que el nombre del amigo no esté repetido
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.Por favor Verifica..!!");
        return;
    }

}