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

// Agregamos el nombre a la lista
amigos.push(nombre);
const listItem = document.createElement("li");
listItem.textContent = nombre;
listaAmigos.appendChild(listItem);

// Limpiamos el input
input.value = "";
input.focus();
}

// Función para sortear el amigo secreto
function sortearAmigo() {
const resultado = document.getElementById("resultado");
resultado.innerHTML = "";

// Verificar si el número de amigos es par
if (amigos.length < 2) {
    alert("Se necesitan al menos dos amigos para realizar el sorteo.");
    return;
}

if (amigos.length % 2 !== 0) {
    alert("El número de amigos debe ser par para que nadie quede sin amigo secreto..!!!");
    return;
}

// Creamos una copia del array para sortear
const nombresRestantes = [...amigos];
const sorteados = {};
    // Asignamos un amigo secreto a cada participante
    amigos.forEach((amigo) => {
        let indice;
        let asignado;

        // Evitamos que un amigo se asigne a sí mismo
        do {
            indice = Math.floor(Math.random() * nombresRestantes.length);
            asignado = nombresRestantes[indice];
        } while (asignado === amigo);

        // Guardar la asignación y eliminar el nombre que ya salió sorteado
        sorteados[amigo] = asignado;
        nombresRestantes.splice(indice, 1);
    });

    // Mostramos los resultados
    for (const [amigo, secreto] of Object.entries(sorteados)) {
        const resultadoItem = document.createElement("li");
        resultadoItem.textContent = `El amigo secreto de ${amigo} es:  ${secreto}`;
        resultado.appendChild(resultadoItem);
    }
}


