//I PUNTATORI  
//varibaile per l'endpoint da cui prenderemo i dati degli utenti 
const urlUsers = "https://jsonplaceholder.typicode.com/users"
//puntatore dell'input che viene selezionato 
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
//console.log(fetchData())

//fetchData() 

//funzione che stampa i dati 
function datiUtenti(users) {
    //pulisco prima la pagina
    tableData.innerHTML = "";
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

//bisogna effettuare la chiamata alla funzione 
// chiamato la fetchData() come fatto sopra, bisgona gestire anche i dati con la promise:

/*fetchData()
.then(users => {
    datiUtenti(users);
})
.catch(error => {
    console.error("Errore nel recupero dei dati:", error);
})*/ 

//quindi oltra a richiamare e inserire i dati nell'innerhTML bisogna gestire i dati 
//con una fusione delle due funzioni in una promise


//Filtro considerando il select del dropdown e l'input che viene scritto
function filtro(users) {
    //variabile per i valori del select
    const filterSelected = selected.value;
    //variabile per i valori input scritti dall'utente
    const filterInput = inputText.value.toLowerCase();
    //aggiungere il filtro collegandolo alle variabili definite sopra
    return users.filter(user => user[filterSelected].toLowerCase().includes(filterInput.value));
}


//riprendo parte della funzione commentata sopra che unisce le due funzioni gestendo i dati
fetchData()
.then((users) => {
    datiUtenti(users);
    //riprendere il filtro aggiungendo un addEvent necessario per quando verrà scritto l'input
    //uso il puntatore inputText che è la variabile collegata all'elemento form
    inputText.addEventListener("input", () => { //ad ogni input inserito
        const utentiFiltrati = filtro(users); //riprende ciò che è stato impostato nella funzione filtro
        datiUtenti(filtro); //riporta tutte le info filtrate nella tabella (rappresentata dall'argomento della funzione in cui sono stati gestiti i dati)
    });
});