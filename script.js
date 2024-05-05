//I PUNTATORI  
//varibaile per l'endpoint da cui prenderemo i dati degli utenti 
const urlUsers = "https://jsonplaceholder.typicode.com/users"
//puntatore dell'input che viene selezionato per la ricerca utente
const selected = document.getElementById("inputSelezionato");
//puntatore dell'input inserito 
const inputText = document.getElementById("inputInserito");
//puntatore della tabella che verrà popolata da tutti i dati
const tableData = document.getElementById("usersData");


//funzione asincrona - richiesta dati 
async function fetchData() {
    const response = await fetch(urlUsers); //richiedo i dati
    const users = await response.json(); //dati in formato json 
    //console.log(users);
    return users;
}

//fetchData() //richiamare la funzione per vedere in console l'array

//funzione che stampa i dati 
function datiUtenti(users) {
    //pulisco prima la pagina
    tableData.innerHTML = " ";
    //ciclo della risposta fetch per creare un elemento tr ad ogni dato
    users.forEach(user => {
        //variabile creazione elemento per riga
        const tableRow = document.createElement("tr");
        //riempio hatml con constante tableRow
        tableRow.innerHTML = `
        <td>${user.id} </td>
        <td>${user.name} </td>
        <td>${user.username} </td>
        <td>${user.email.toLowerCase()} </td>
        `;
        //appenChild per appendere il nuovo elemento creato alla costante con classe tbody
        tableData.appendChild(tableRow);
    });
}

fetchData(datiUtenti(users));


