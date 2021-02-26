var nome = prompt("Qual'è il tuo nome?")

console.log(nome);

var cognome = prompt("Qual'è il tuo cognome?")

console.log(cognome);

var colore = prompt("Qual'è il tuo colore preferito?")

console.log(colore);

document.getElementById("password").innerHTML ="La tua password è: " + nome + cognome + colore + "21";
