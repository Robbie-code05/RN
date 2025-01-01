<html>
    <head><link rel="stylesheet" href="page.css">
    <meta charset="UTF-16">
</head>
  <body>
    <?php
      include("connexion.php");
      $requete = "select nom_produit,prix from produits";
      $resultat = mysqli_query($conn, $requete);
    ?>
    <table border="1">
      <tr>

        <td>Nom_produit</td>
        <td>Prix</td>

 
      </tr>
      <?php while ($enreg = mysqli_fetch_array($resultat)) { ?>
      <tr>


        <td><?php echo $enreg["nom_produit"]; ?></td>
        <td><?php echo $enreg["prix"]; ?></td>

      </tr>
   
    </table>
    <a href="index.html">Retour</a>
    <?php mysqli_close($conn); ?>
  </body>
</html>
