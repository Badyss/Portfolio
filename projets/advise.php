<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $avis = $_POST["avis"];
    $source = $_POST["source"];

    $destinataire = "badyssaz@gmail.com";
    $expediteur = "contact@badyss.fr";
    $sujet = "Nouvel avis";
    $message = "Nouvel avis : " . $avis;
    $headers = "From: $expediteur";
    mail($destinataire, $sujet, $message, $headers);

    header("Location: $source?display=block");
    exit();
}
?>
