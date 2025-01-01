<?php

@include("connecte.php");
$ref = $_POST['ref'];
$nbres_page = $_POST['nbre_pages'];
$auteur = $_POST['auteur'];
$date_publication = $_POST['date_publication'];
$genre = $_POST['genre'];
$disponibilite = $_POST['disponibilite'];
$nbre_emprunts = $_POST['nbre_emprunts'];
$etat = $_POST['etat'];
$nbre_exemplaire = $_POST['nbre_exemplaire'];

$requete = "INSERT INTO livre VALUES  ('$ref', '$nbres_page', '$auteur', '$date_publication','$genre','$disponibilite','$nbre_emprunts', '$etat','$nbre_exemplaire')";

$rl = mysqli_query($conn,$requete);

echo "<center><p>Ajout OK</p></center>";
echo '<center><a href="index.html">Retour</a></center>';

mysqli_close($conn)

?>