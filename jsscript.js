
/*Dès que le document est prêt à être manipulé, on exécute le code
à l'intérieur de notre fonction anonyme*/

$(document).ready(function(){
    $("form").submit(function(event){
        /*Si la longueur de la valeur du champ #prenom est 0 (c'est-à-dire si
        le champ n'a pas été rempli), on affiche un message et on empêche l'envoi*/
        if($("#prenom").val().length === 0){
            $("#prenom").after("<span>Merci de remplir ce champ</span>");
            event.preventDefault();
        }else{
            //On effectue nos requêtes Ajax, sérialise, etc...
            let chaine = $("form").serialize();
        }
    });
});
