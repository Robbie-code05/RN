<html>
<body>
<?php
    @include("connexion.php");
    $a=$_POST["login"];
    $b=$_POST["motdepasse"];


    
    $requete= "SELECT * from user where login= '$a' and mdp= '$b' ";
    $resultat=mysqli_query($conn, $requete);

    $ligne=mysqli_num_rows($resultat);
    if ($ligne==1)
        header("location:index1.html");
    else
        header("location:index.html");
?>
</body>
</html>