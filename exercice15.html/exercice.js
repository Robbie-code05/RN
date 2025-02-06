function afficher_message() {
  let a = prompt("afficher message");
  document.getElementById("output1").innerHTML = a;
}

function addition() {
  let b = Number(prompt("Donner moi un nombre "));
  let c = Number(prompt("Donner moi un deuxième nombre"));

  let add = c + b;
  document.getElementById("output2").innerHTML = add;
}

function odd_even() {
  let d = Number(prompt("Donner moi un nombre"));

  if (d % 2 === 1) {
    document.getElementById("output3").innerHTML = "Le nombre est impair";
  } else {
    document.getElementById("output3").innerHTML = "Le nombre est pair";
  }
}

function multiplier() {
  let e = Number(prompt("Donner moi un nombre "));
  let f = Number(prompt("Donner moi un deuxième nombre"));

  let add2 = e * f;
  document.getElementById("output4").innerHTML = add2;
}

function nombrecarre() {
  let g = Number(prompt("Donner moi un nombre "));

  let add3 = g * g;
  document.getElementById("output5").innerHTML = add3;
}

function positive_negative() {
  let h = prompt("donner moi un nombre positif ou négative ");
  if (h < 0) {
    document.getElementById("output6").innerHTML = "le nombre est négatif";
  } else if (h > 0) {
    document.getElementById("output6").innerHTML = "Le nombre est positif";
  } else {
    document.getElementById("output6").innerHTML = "Retaper un vrai nombre";
  }
}

function afficher_date() {
  const i = new Date();
  const j = new Date();
  const k = new Date();

  let month = j.getMonth();
  let year = k.getFullYear();
  let day = i.getDate();

  document.getElementById("output7").innerHTML =
    "On est le " + day + "/" + month + 1 + "/" + year;
}

function celsius_to() {
  let l = Number(prompt("Donnez moi un nombre à convertir en Fahrenheit"));

  const conversion = (l * 9) / 5 + 32;
  document.getElementById("output8").innerHTML = conversion + "°F";
}

function calcul_aireCercle() {
  let m = Number(prompt("Donner moi le rayon du  cercle "));
  const aire = 3.14 * (m * m);

  document.getElementById("output9").innerHTML = aire;
}

function table_multiplication() {
  let n = Number(
    prompt("Vous voulez la table de multiplication de quel chiffre ")
  );

  document.getElementById("output10").innerHTML = n * 1;
  document.getElementById("output11").innerHTML = n * 1;
  document.getElementById("output12").innerHTML = n * 2;
  document.getElementById("output13").innerHTML = n * 3;
  document.getElementById("output14").innerHTML = n * 4;
  document.getElementById("output15").innerHTML = n * 5;
  document.getElementById("output16").innerHTML = n * 6;
  document.getElementById("output17").innerHTML = n * 7;
  document.getElementById("output18").innerHTML = n * 8;
  document.getElementById("output19").innerHTML = n * 9;
  document.getElementById("output20").innerHTML = n * 10;
}

function bigger_number() {
  let n = Number(prompt("Choisissez un nombre"));
  let o = Number(prompt("Choisissez un nombre"));

  if (n < o) {
    document.getElementById("output21").innerHTML =
      " le nombre le plus grand " + o;
  } else {
    document.getElementById("output21").innerHTML =
      " le nombre le plus grand " + n;
  }
}

function celsius_toK() {
  let l = Number(prompt("Donnez moi un nombre à convertir en Kelvins"));

  const conversion = l + 273.15;
  document.getElementById("output22").innerHTML = conversion + "°K";
}

function estPalindrome() {
  let mot = prompt("Tapez un mot :"); // Demande à l'utilisateur d'entrer un mot
  let motInverse = mot.split("").reverse().join(""); // Inverse le mot

  if (mot.toLowerCase() === motInverse.toLowerCase()) {
    document.getElementById("output23").innerHTML = "Ce mot est un palindrome";
  } else {
    document.getElementById("output23").innerHTML =
      "Ce mot n'est pas un palindrome";
  }
}

function somme100() {
  let somme = 0;
  for (let i = 1; i <= 100; i++) {
    somme += i;
  }
  document.getElementById("output24").innerHTML = somme;
}

function motLePlusLong() {
  let phrase = prompt("Écrivez une phrase :");
  let motLong = phrase
    .split(" ")
    .reduce(
      (longest, current) =>
        current.length > longest.length ? current : longest,
      ""
    );

  document.getElementById("output25").innerHTML =
    "Le mot le plus long est : " + motLong;
}

function voirs1() {
  document.getElementById("output1").innerHTML =
    '<img src="s1.png" alt="Image">';
}

function voirs2() {
  document.getElementById("output2").innerHTML =
    '<img src="s2.png" alt="Image">';
}

function voirs3() {
  document.getElementById("output3").innerHTML =
    '<img src="s3.png" alt="Image">';
}

function voirs4() {
  document.getElementById("output4").innerHTML =
    '<img src="ss4.png" alt="Image">';
}

function voirs5() {
  document.getElementById("output5").innerHTML =
    '<img src="s5.png" alt="Image">';
}

function voirs6() {
  document.getElementById("output6").innerHTML =
    '<img src="s6.png" alt="Image">';
}

function voirs7() {
  document.getElementById("output7").innerHTML =
    '<img src="s7.png" alt="Image">';
}

function voirs8() {
  document.getElementById("output8").innerHTML =
    '<img src="s8.png" alt="Image">';
}

function voirs9() {
  document.getElementById("output9").innerHTML =
    '<img src="s10.png" alt="Image">';
}

function voirs10() {
  document.getElementById("output10").innerHTML =
    '<img src="s11.png" alt="Image">';
}

function voirs11() {
  document.getElementById("output21").innerHTML =
    '<img src="s12.png" alt="Image">';
}

function voirs12() {
  document.getElementById("output22").innerHTML =
    '<img src="s13.png" alt="Image">';
}

function voirs13() {
  document.getElementById("output23").innerHTML =
    '<img src="s14.png" alt="Image">';
}

function voirs14() {
  document.getElementById("output24").innerHTML =
    '<img src="s15.png" alt="Image">';
}

function voirs15() {
  document.getElementById("output25").innerHTML =
    '<img src="s16.png" alt="Image">';
}
