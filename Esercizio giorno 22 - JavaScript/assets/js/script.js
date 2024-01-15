

    //Carica il valore precedentemente salvato, se presente
    let valoreSalvato = localStorage.getItem("nomeUtente");
    if (valoreSalvato){
        document.querySelector("#valoreSalvato").innerText = valoreSalvato; /*il valore precedentemente salvato se presente, se risfescio la pagina rimane nell'input e nello span con id valoreSalvato*/
        document.querySelector("#nomeInput").value = valoreSalvato;
    }


function salvaValore(){ /*questa funzione è per salvare l'input nome che inseriamo*/
    let nomeInputValue = document.querySelector("#nomeInput").value; /*prendere il valore che inserisce l'utente*/
    if (nomeInputValue.trim() !== "") {/*questo if verifica se l'input è pieno mostra il primo alert e aggiunge il nome se non scrivi niente si attiva il secondo alert */
        localStorage.setItem("nomeUtente", nomeInputValue); /*questa proprietà salva i dati in memoria*/
        document.querySelector("#valoreSalvato").innerText = nomeInputValue; /*l'input inserito viene salvato nello span con id valoreSalvato */
        alert("Valore salvato con successo!"); /*se hai inserito bene il nome ti avverte con alert*/
      } else {
        alert("Inserisci un nome valido.");/*questo alert si attiva quando non metti niente*/
    }
}

function rimuovereValore(){ /*questa funzione è per rimuovere l'input che abbiamo inserito*/
    localStorage.removeItem("nomeUtente"); /*questa proprietà rimuove i dati in memoria */
    document.querySelector("#valoreSalvato").innerText = ""; /*si azzera lo span con id valoreSalvato*/
    document.querySelector("#nomeInput").value = ""; /*e si azzera pure l'input*/
    alert("Valore rimosso con successo!"); /*se l'azzeramento è si è verificato ti fa un alert*/
}

/*Funzione timer per avviare il contatore di tempo */

function startTimer(){
    let seconds = 0; /*il timer parte da 0*/
    let timer = document.querySelector("#timer"); /*assegno alla variabile timer all'id timer*/

    function updateTimer() {
        seconds++; /*ogni secondo che passa aumenta di 1*/
        timer.textContent = seconds + ' secondi';
        sessionStorage.setItem('timer_value', seconds); /*quando aggiorniamo la pagina il valore prosegue, chiudendo la pagina ricomincia*/
      }
    //Aggiorna il contatore ogni secondo
    setInterval(updateTimer, 1000); /*questo è il contatore dei secondi*/

    //Controlla se esiste un valore salvato in sessionStorage per il contatore.
    let timerValue = sessionStorage.getItem('timer_value') ; 
    if (timerValue !== null) {
        document.document.querySelector('#timer').textContent = timerValue + ' secondi';
    }
}
startTimer();//avvia il contatore di tempo
