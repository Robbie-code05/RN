<html>
    <head><link rel="stylesheet" href="page.css">
    <meta charset="UTF-16">
</head>
  <body>
    <?php
      include("connexion.php");
      $a = $_POST["ID_prenom"];
      $requete = "select * FROM client where ";
      $resultat = mysqli_query($conn, $requete);
     ?>
     <table border="1">
      <tr>
        <td>Id Client</td>
        <td>nom</td>
        <td>prenom</td>
        <td>email</td>

      </tr>
      <?php while ($enreg = mysqli_fetch_array($resultat)) { ?>
      <tr>

        <td><?php echo $enreg["id_client"]; ?></td>
        <td><?php echo $enreg["nom"]; ?></td>
        <td><?php echo $enreg["prenom"]; ?></td>
        <td><?php echo $enreg["email"]; ?></td>
      </tr>
      <?php } ?>
    </table>
    <a href="index.html">Retour</a>
    <?php mysqli_close($conn); ?>
  </body>
</html>
