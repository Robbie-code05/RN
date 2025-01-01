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
        <td>ID Commande</td>
        <td>Date des commandes</td>

 
      </tr>
      <?php while ($enreg = mysqli_fetch_array($resultat)) { ?>
      <tr>

        <td><?php echo $enreg["id_commande"]; ?></td>
        <td><?php echo $enreg["date_commande"]; ?></td>

      </tr>
      <?php } ?>
    </table>
    <a href="index.html">Retour</a>
    <?php mysqli_close($conn); ?>
  </body>
</html>
