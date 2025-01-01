<html>
    <head><link rel="stylesheet" href="page.css">
    <meta charset="UTF-16">
</head>
  <body>
    <?php
      include("connexion.php");
      $requete = "select nom,email from clients";
      $resultat = mysqli_query($conn, $requete);
    ?>
    <table border="1">
      <tr>
        <td>Nom</td>
        <td>Email</td>

 
      </tr>
      <?php while ($enreg = mysqli_fetch_array($resultat)) { ?>
      <tr>

        <td><?php echo $enreg["nom"]; ?></td>
        <td><?php echo $enreg["email"]; ?></td>

      </tr>
      <?php } ?>
    </table>
    <a href="index.html">Retour</a>
    <?php mysqli_close($conn); ?>
  </body>
</html>
