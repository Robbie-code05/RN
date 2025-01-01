console.log("unbtn");

function test_age() {
  let age = prompt("Quelle est votre aga ?");
  if (age < 18) {
    document.write("Vous êtes mineur");
    document.body.style.backgroundColor = "red";
  } else {
    document.write("Vous êtes majeur");
    document.body.style.backgroundColor = "green";
  }
}

function calcul_moyenne() {
  var n1 = prompt("Donner la première note :");
  var n2 = prompt("Donner la deuxième note :");
  var n3 = prompt("Donner la troisième note :");

  var somme = Number(n1) + Number(n2) + Number(n3);

  document.write("Voici la somme : " + somme + "<br>");
  var moyenne = somme / 3;

  document.write("Voici la moyenne :" + moyenne + "<br>");

  document.write("<hr>");

  if (moyenne < 0 || moyenne > 20) {
    document.write("moyenne invalide");
  } else if (moyenne < 10) {
    document.write("Vous etes redoublant<br>");

    document.body.style.backgroundColor = "red";
    document.write("Pas Admis");
  } else if (moyenne < 14) {
    document.write("Mention Passable<br>");
    document.body.style.backgroundColor = "green";
    document.write("Admis");
  } else;
  document.write("<br>");
  document.body.style.backgroundColor("green");
  document.write("");
}

function test_couleur() {
  let couleur = prompt("Donner un couleur : ");
  if (couleur == "rouge" || couleur == "red") {
    document.body.style.backgroundColor = "red";
  } else if (couleur == "bleu" || couleur == "blue") {
    document.body.style.backgroundColor = "blue";
  } else if (couleur == "green" || couleur == "vert") {
    document.body.style.backgroundColor = "green";
  } else if (couleur == "pink" || couleur == "rose") {
    document.body.style.backgroundColor = "pink";
  } else {
    alert("Couleur non comprise");
  }
}

function simple_affichage() {
  let prenom = prompt("Quel est ton prénom ? ");
  let nom = prompt("Quel est ton nom de famille ?");

  document.write("Tu t'appelles donc " + prenom + "   " + nom + ".");
}

console.log(a);
