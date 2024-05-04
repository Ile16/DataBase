//I PUNTATORI  
//varibaile per l'endpoint da cui prenderemo i dati degli utenti 
const urlUsers = "https://jsonplaceholder.typicode.com/users"
//puntatore dell'input che viene selezionato per la ricerca utente
const selected = document.getElementById("inputSelezionato");
//puntatore dell'input inserito 
const inputText = document.getElementById("inputInserito");
//puntatore della tabella che verrà popolata di tutti i dati
const tableData = document.getElementById("users-data");


//funzione asincrona
async function fetchData() {
    const response = await fetch(urlUsers); //richiedo i dati
    const users = await response.json(); //dati in formato json 
    console.log(users);
    return users;
}

fetchData() //richiamare la funzione per vedere in console l'array