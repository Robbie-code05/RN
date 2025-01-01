<html>
    <head><link rel="stylesheet" href="page.css">
    <meta charset="UTF-16">
</head>
  <body>
    <?php
      include("connexion.php");
      $requete = "select * from produits";
      $resultat = mysqli_query($conn, $requete);
    ?>
    <table border="1">
      <tr>
        <td>id_Produit</td>
        <td>Nom_produit</td>
        <td>Prix</td>
        <td>Stock</td>
 
      </tr>
      <?php while ($enreg = mysqli_fetch_array($resultat)) { ?>
      <tr>

        <td><?php echo $enreg["id_produit"]; ?></td>
        <td><?php echo $enreg["nom_produit"]; ?></td>
        <td><?php echo $enreg["prix"]; ?></td>
        <td><?php echo $enreg["stock"]; ?></td>
      </tr>
      <?php } ?>
    </table>
    <a href="index.html">Retour</a>
    <?php mysqli_close($conn); ?>
  </body>
</html>
