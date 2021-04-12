

/*Dès que le document est prêt à être manipulé, on exécute
le code à l'intérieur de notre fonction anonyme*/

$(document).ready(function(){

/*On cible les éléments p qui contiennent un élément span
et on leur applique une couleur orange*/
	let pspan = $("p").has("span").css("color", "orange");

/*On ne sélectionne que les éléments span qui possèdent un attribut
class="souligne"*/
	$("span").filter(".souligne").css("color", "green");

/*On ne sélectionne que les éléments span qui NE possèdent PAS d'attribut
class="souligne"*/
    $("span").not(".souligne").css("color", "green");

/*firt()=eq(0)=premier élément, eq(x)=élément a la position x+1,
last()=eq(-1)=dernier élément*/
    $("span").first().css("color", "green");
    $("span").eq(1).css("color", "blue");
    $("span").last().css("color", "orange");

/*Cible l'élément parent direct de chaque élément li et ajoute 
    une bordure autour*/
    $("li").parent().css("border", "1px solid black");


/*Cible l'élément parent direct de chaque élément li uniquement si
    il possède un id="parents" et change la couleur de fond en bleu*/
    $("li").parent("#parents").css("background-color", "lightBlue");

/*Sélectionne tous les ancêtres des éléments ul et ajoute une bordure 
    noire d'1px autour de chacun d'entre eux*/
    $("ul").parents().css("border", "1px solid black");

/*Ne cible que les ancêtres des éléments ul qui sont des div et change 
    leur couleur de fond en bleu*/
    $("ul").parents("div").css("background-color", "lightBlue");

/*Sélectionne tous les ancêtres de l'élément qui possède l'id="enfants" 
    jusqu'au premier ancêtre possédant une class="conteneur" sans l'inclure*/
    $("#enfants").parentsUntil(".conteneur").css("border", "1px solid black");

/*Sélectionne l'ancêtre div le plus proche de l'élément possédant 
    l'id="parents"*/ 
    $("#parents").closest("div").css("border", "1px solid black");

/*Sélectionne l'ancêtre possédant une class="bleu" le plus proche
    des éléments possédant une class="li1"*/
    $(".li1").closest(".bleu").css("color", "blue");

/*Sélectionne tous les enfants (descendants directs) des éléments possédant
    un attribut class="conteneur"*/
    $(".conteneur").children().css("border", "1px solid black");

/*Sélectionne uniquement les éléments h1 descendants directs des éléments 
    possédant un attribut class="conteneur"*/
    $(".conteneur").children("h1").css("color", "blue");

/*Cible tous les descendants de l'élément possédant l'id="methodes" qui 
    possèdent un attribut class="bglb"*/
    $("#methodes").find(".bglb").css("background-color", "lightBlue");

/*Sélectionne les éléments li qui sont les premiers enfants de leur parent 
    puis récupère tous leurs frères et leur  applique une couleur de texte bleue*/
    $("li:first-child").siblings().css("color", "blue");

/*Sélectionne les éléments li qui sont les premiers enfants de leur parent et
    ne récupère que les éléments frères qui occupent une place impaire en comptant
    à partir de li:first-child*/
    $("li:first-child").siblings(":odd").css("text-decoration", "underline");

//Sélectionne l'élément frère suivant li:first-child
    $("li:first-child").next().css("color", "blue");

/*Sélectionne tous les éléments frères du 2è élément li le suivant qui occupent
    une place impaire en comptant à partir de li:nth-child(2)*/
    $("li:nth-child(2)").nextAll(":odd").css("text-decoration", "underline");

/*Sélectionne les éléments frères du 2è élément li le suivant jusqu'au 5è élément
    li sans inclure celui-ci dans la sélection et applique une police épaisse*/
    $("li:nth-child(2)").nextUntil("li:nth-child(5)").css("font-weight", "bold");

//Sélectionne l'élément frère précédant li:nth-child(4)
    $("li:nth-child(4)").prev().css("color", "blue");

//Sélectionne tous les éléments frères précédant li:nth-child(4)
    $("li:nth-child(4)").prevAll().css("text-decoration", "underline");

//Sélectionne les éléments frères précédant #desc jusqu'à h1 sans l'inclure
	$("#desc").prevUntil("h1").css("border", "1px solid black");

//On utilise html() comme getter
    let page = $("body").html();
    let p1 = $("#p1").html();


//On utilise html() comme setter
	$("#p2").html("<strong>Nouveau contenu !</strong>");

//On utilise text() comme getter
    let texteP = $("p").text();

//On utilise text() comme setter
    $("#p2").text("<strong>Nouveau contenu !</strong>");

/*Paragraphe ajoute au debut de l'elelment avec class="conteneur"*/
	$(".conteneur").prepend("<p>Paragraphe ajouté avec prepend()</p>");
	$("<p>Paragraphe ajouté avec prependTo()</p>").prependTo(".conteneur");

/*Liste ajoutee a la fin de l'elelment avec class="conteneur"*/
	$(".conteneur").append("<ul><li>Element n°1</li><li>Element n°2</li></ul>");
	$("<ul><li>Element n°1</li><li>Element n°2</li></ul>").appendTo(".conteneur");

/*Paragraphe ajoute avant de l'elelment avec id="p1"*/
	$("#p1").before("<p>Paragraphe ajouté avec before()</p>");

/*Span ajoute apres
 de l'elelment avec id="p1"*/
    $("<span>Span ajouté avec insertAfter()</span>").insertAfter("#p1");

/*Insérer du contenu autour d’un élément dans l'ordre 1, puis 2, puis 3*/
//1-wrapAll() permet d’ajouter une structure HTML autour de l’ensemble de notre sélection
	$("p").wrapAll("<section></section>");
//2-wrap() permet d’ajouter une structure HTML autour de chaque élément de notre sélection initiale
    $("p").wrap("<div></div>");
//3-wrapAll() permet d’ajouter une structure HTML autour de l’ensemble de notre sélection
    $("p").wrapInner("<span></span>");

/*si on essaie d’insérer un contenu qui existe déjà avec l’une des méthodes vues précédemment,
alors le contenu sera tout simplement déplacé à l’endroit où on souhaite l’insére*/
//Déplace #p1 et le place comme premier enfant de body 
    $("#p1").prependTo("body");
//Déplace #p2 et le place avant h1
    $("#p2").insertBefore("h1");

/*clone() va nous permettre de créer une copie profonde d’un élément ou d’une sélection d’éléments*/
//On effectue une copie profonde de notre conteneur
    let c2 = $(".conteneur").clone();
//On place cette copie dans le document (en fin de l'élément body)
    c2.appendTo("body");

/*Methodes de suppression d'un element ou un contenu du le DOM*/
//Supprime le paragraphe avec l'id="p1"
    $("p").remove("#p1"); //Idem $("#p1").remove()
//Supprime h1 et conserve ses données dans la variable titre
    let titre = $("h1").detach();
//Supprime le contenu de #p2
    $("#p2").empty();
//Supprime le parent des paragraphes si c'est un élément section
    $("p").unwrap("section");

/*Methodes pour supprimer des éléments du document et de les remplacer par d’autres*/
//Remplace les éléments section et ce qu'ils contiennent par...
    $("<p>Un paragraphe sans div ni section en parent</p>").replaceAll("section");
//Remplace #p1 par...
    $("#p1").replaceWith("<span>Un élément span</span>");

//Retourne la valeur du premier id d'un paragraphe trouvé
    let pid = $("p").attr("id");
//Affiche la valeur de l'id récupéré dans notre span id="valAttr"
    document.getElementById("valAttr").textContent = "Valeur du 1er id de p : " + pid;
//Ajoute un attribut target à notre lien
    $("a").attr("target","_blank");

/*Supprime l'attribut href(le lien qui y est)*/
	$("a").removeAttr("href");

/*Dès qu'un utilisateur relâche une touche, la valeur de #prenom est 
récupérée et affichée dans #valInput*/
    $('#prenom').keyup(function(){
        let valeurInput = $(this).val();
        $('#valInput').text(valeurInput);
    });

/*Dès que la valeur change, c'est-à-dire dès qu'une sélection est faite,
affiche les valeurs sélectionnées dans #val select*/
    $('select').change(function(){
        let valeurSelect = $('select').val();

        //join() permet de récupérer les valeurs d'un tableau sous forme de chaine
        $('#valSelect').text(valeurSelect.join(', '));
    });

//Lors du clic sur le bouton #b1...
    $("#b1").click(function(){
    //Si #p3 ne possède pas de class="bleu", on en ajoute une
        if(!$("#p3").hasClass("bleu")){
            $("#p3").addClass("bleu");
        }
        $(".bleu").css("color", "blue");
    });
    
//Lors du clic sur le bouton #b2...
	$("#b2").click(function(){
		//Permet d'alterner entre afficher et cacher
	    $("div").toggleClass("cacher afficher");
	    //On applique hide() aux éléments qui possèdent une class="cacher"
	    $(".cacher").hide();
	    //On applique show() aux éléments qui possèdent une class="afficher"
	    $(".afficher").show();
	});

/*La méthode jQuery css()*/
//Récupère la police et l'affiche dans l'element avec id="police"
    let police = $("body").css("font-family");
    $("#police").text(police);

//Lors du clic sur le bouton #b1...
	$("#b1").click(function(){
	    //Toggle la classe et accroche des styles à chaque classe
	    $("body").toggleClass("light dark");
	    $(".light").css({"background-color": "#fafafa", "color": "#333"});
	    $(".dark").css({"background-color": "#444", "color": "#fff"});
	});

//Lors du clic sur le bouton #b2...
	$("#b2").click(function(){
	    //Change la police d'écriture
	    $("body").css("font-family", "Nunito, Futura, Verdana");

	    //Met à jour la valeur du span
	    police = $("body").css("font-family");
	    $("#police").text(police);
	});

/*Les méthodes liées aux dimensions des éléments*/
	//Renvoie un nombre suivi d'une unite 
	let largeurcss = $("div").css("width");
	//Renvoie un nombre sans unite, donc plus efficace pour les calculs
	let largeurwidth = $("div").width();

	$("#rescss").text(largeurcss);
	$("#reswidth").text(largeurwidth);

/*La gestion des événements avec jQuery*/
	//change le contenu des <p> en "Paragraphe cliqué"
	$("p").click(function(){
        $(this).text("Paragraphe cliqué");
    });

    //Code équivalent utilisant on()
    $("p").on("click", function(){
        $(this).text("Paragraphe cliqué");
    })


/*Gestion des événements déclenchés par la souris avec jQuery-/

	/*Les méthodes click() et dblclick()*/
		//Lors d'un clic sur le div...
	    $("div").click(function(){
	        //...On inverse les classes de p
	        $("p").toggleClass("afficher cacher");
	        //Les éléments avec .afficher seront visibles
	        $(".afficher").show();
	        //Les éléments avec .cacher seront cachés
	        $(".cacher").hide();
	    });

	    //Lors d'un double clic sur le div...
	    $("div").dblclick(function(){
	        //...On lui applique une couleur de fond bleu clair
	        $(this).css("background-color", "lightBlue");
	    });

	/*Les méthodes mouseenter(), mouseleave() et hover()*/
		//Lorsque la souris entre dans le div...
	    $("div").mouseenter(function(){
	        //...On ajoute une couleur de fond au div
	        $(this).css("background-color", "lightBlue");
	    });

	    //Lorsque la souris ressort du div...
	    $("div").mouseleave(function(){
	        //...On remet un fond blanc
	        $(this).css("background-color", "#fff");
	    });
	    /*hover() est un raccourci pour nous permettre de gérer 
	    les deux événements mouseenter et mouseleave d’un coup*/
	    //Identique aux deux evenements precedents
	    $("div").hover(
	        function(){$(this).css("background-color", "lightBlue");},
	        function(){$(this).css("background-color", "#fff");}
	    );

	/*Les méthodes mousedown() et mouseup*/
		//Lorsque le bouton de la souris est pressé au dessus du div...
	    $("div").mousedown(function(){
	        //On change le fond en bleu
	        $(this).css("background-color", "lightBlue");
	    });

	    //Lorsque le bouton de la souris est relâché...
	    $("div").mouseup(function(){
	        //...Le fond est blanc
	        $(this).css("background-color", "#fff");
	    });

	/*La méthode mousemove()*/
		/*On passe une référence à l'objet event en argument pour pouvoir 
	    utiliser ses propriétés*/
	    $("body").mousemove(function(event){
	        //On récupère la position de la souris dans le document
	        let pageCoords = "(" + event.pageX + ", " + event.pageY + ")";

	        //Affiche cette position dans un span
	        $("span").text(pageCoords);
	    });


/*Gestion des événements déclenchés par le clavier avec jQuery*/

	/*Les méthodes keydown() et keyup()*/
		//Change la couleur de fond du champ en bleu dès qu'une touche est pressée
	    //et affiche le code de la dernière touche pressée
	    $("#texte").keydown(function(event){
	        $(this).css("background-color", "lightBlue");
	        $("span").text(event.which);
	    });

	    //Change la couleur de fond du champ en jaune dès qu'une touche est relachée
	    $("#texte").keyup(function(){
	        $(this).css("background-color", "yellow");
	    });

    /*La méthode keypress()*/
    	//L’événement keypress va renvoyer le code ASCII correspondant au caractère entré
    	$("#texte").keypress(function(event){
        $("#span1").text(event.which);
	    });

	    $("#texte").keydown(function(event){
	        $("#span2").text(event.which);
	    });


/*Gestion des événements spécifiques aux formulaires avec jQuery*/

	/*Les méthodes focus() et focusin()*/
		//Change la couleur de fond du champ en bleu dès qu'il a les focus
	    $("input").focus(function(){
	        $(this).css("background-color", "lightBlue");
	    });

	    /*Change la couleur de fond des label en jaune dès qu'un élément dans 
	    le formulaire a le focus*/
	    $("form").focusin(function(){
	        $("label").css("background-color", "yellow");
	    });

    /*Les méthodes blur() et focusout()*/
    	//Change la couleur de fond du champ en bleu dès qu'il a les focus
	    $("input").focus(function(){
	        $(this).css("background-color", "lightBlue");
	    });

	    //Change la couleur de fond du champ en blanc dès qu'il perd les focus
	    $("input").blur(function(){
	        $(this).css("background-color", "white");
	    });

    /*La méthode change()*/
    	//Dès qu'une option différente est choisie, récupère et affiche sa valeur
	    $("select").change(function(){
	        $("span").text($(this).val());
	    });

    /*La méthode submit()*/
    	//Affiche un message lors de l'envoi du formulaire
	    $("form").submit(function(){
	        alert("Formulaire bien envoyé");
	    });

/*Gestion avancée des événements avec jQuery on(), off() et l’objet Event*/

	/*La méthode jQuery on()*/
		//Lorsqu’un utilisateur clique sur un paragraphe
		//la fonction de rappel passée à on() s’exécute et le paragraphe disparait
		$("p").on("click", function(){
	        $(this).hide();
	    })

	    //On enregistre un gestionnaire pour plusieurs événements pour un élément
	    $("div").on("mouseenter mouseleave", function(){
	        $(this).toggleClass("jaune");
	    });

	    //On enregistre plusieurs gestionnaires pour plusieurs événements pour un élément
	    $("#p3").on({
	        click: function(){$(this).text("Paragraphe cliqué");}, 
	        mouseenter: function(){$(this).css("background-color", "lightBlue");}, 
	        mouseleave: function(){$(this).css("background-color", "white");}
	    });

    /*Déclencher un événement avec trigger() et triggerHandler()*/
    	//trigger() s'exécute si on clique sur le bouton trg
	    $('#trg').click(function(){
	        $('#fcs').trigger('focus');
	    });
	    
	    //triggerHandler() s'exécute si on clique sur le bouton trgh
	    $('#trgh').click(function(){
	        $('#fcs').triggerHandler('focus');
	    });
	    
	    //On attache un gestionnaire d'évènement focus à notre input
	    $('#fcs').focus(function(){
	        $('#msg').text('Evènement focus déclenché');
	    })

    /*Supprimer des gestionnaires d’événements avec off()*/
    	//Le span est caché par défaut
	    $("#msg").hide();
	                
	    //Lorsqu'on clique sur b2, un gestionnaire d"évènement click est ajouté à b1
	    $("#b2").click(function(){
	        $("#b1").on("click", function(){
	            $("#msg").show();
	        });
	        $("#b1").text("Vous pouvez me cliquer");
	    });
	    
	    //Lorsqu"on clique sur b3, le gestionnaire d"évènement click de b1 est supprimé
	    $("#b3").click(function(){
	        $("#b1").off("click");
	        $("#b1").text("Pas de clic possible");
	        $("#msg").hide();
	    });

	/*Les propriétés de l’objet event*/
		//On attache un gestonnaire d'événement click au div      
	    $("div").click(function(event){
	        //On récupère l'élément déclencheur de l'événement grâce à target
	        //On affiche son nom en utilisant nodeName
	        $("#res").html(event.target.nodeName);
	    });

	    //On attache plusieurs gestionnaires aux éléments p du div
	    $("div p").on("click mouseover mouseout", function(event){
	        //On récupère et on affiche le type d'événement délcenché
	        $("#res2").text(event.type);
	    })



/*Créer des effets de fondu ou de slide avec jQuery*/
	
	/*Créer des effets de fondu en jQuery*/
		//Disparition du titre en 400ms lors du clic sur #b1
	    $("#b1").click(function(){
	        $("h1").fadeOut();
	    });
	    
	    //Apparition du titre en 2 secondes lors du clic sur #b2
	    $("#b2").click(function(){
	        $("h1").fadeIn(2000);
	    });

	    //Inversion de l'état de visibilité de h1 avec un effet de fondu
	    //Apparition du titre en 2 secondes lors du clic sur #b3
	    $("#b3").click(function(){
	        $("h1").fadeToggle(2000);
	    });

	    //Fondu jusqu'à un certain niveau d'opacité (0.3 ici)
	    $("#b4").click(function(){
	        $("h1").fadeTo(2000, 0.3);
    	});

	/*Créer des effets de slide en jQuery*/
		//Replie le titre en 400ms lors du clic sur #b1
	    $("#b1").click(function(){
	        $("h1").slideUp();
	    });
	    
	    //Déplie le titre en 2 secondes lors du clic sur #b2
	    $("#b2").click(function(){
	        $("h1").slideDown(2000);
	    });

	    //Déplie le titre s'il est plié ou le plie s'il est déplié
	    $("#b3").click(function(){
	        $("h1").slideToggle(2000);
	    });


/*Afficher ou cacher des éléments HTML avec jQuery*/

	/*Afficher ou cacher un contenu instantanément avec show() et hide()*/
		//Dès qu'on clique sur #b1, on applique hide() au titre
	    $("#b1").click(function(){
	        $("h1").hide();
	    });
	    
	    //Dès qu'on clique sur #b1, on applique show() au titre
	    $("#b2").click(function(){
	        $("h1").show();
	    });

	    /*Afficher ou cacher un contenu progressivement avec show() et hide()*/
	    	//Dans cette utilisation, les méthodes hide() et show() cumulent donc
	    	// les effets de fondu et de slide. 
	    	$("#b1").click(function(){
		        $("h1").hide(5000, "linear", function(){
		            alert("Titre bien caché");
		        });
		    });
		    
		    $("#b2").click(function(){
		        $("h1").show();
		    });

	    /*Inverser l’état de visibilité d’un élément avec toggle()*/
	    	//Inverse l'état de visibilité de h1 lors d'un clic sur #b1     
		    $("#b1").click(function(){
		        $("h1").toggle();
		    });
		    
		    //Inverse progressivement l'état de visibilité de h2 lors d'un 
		    //clic sur #b2 en conservant la fonction d'accélération par défaut
		    //et alert un message à la fin
		    $("#b2").click(function(){
		        $("h2").toggle(2000, function(){
		            alert("Etat de visibilité changé");
		        });
		    });


/*Créer des effets ou animations personnalisés avec jQuery*/

	/*la méthode jQuery animate() et limitations*/
		//Diminue la largeur de h1 de 20% sur 1 seocnde 
	    $("#b1").click(function(){
	        $("h1").animate({width:"-=20%"}, 1000);
	    });

	    //Fait passer la hauteur à 0 si elle n'est pas à 0 ou la rétablit
	    $("#b2").click(function(){
	        $("h1").animate({height: "toggle"});
	    });
	    
	    //Passe la taille de police à 20px sur 2 secondes
	    $("#b3").click(function(){
	        $("h1").animate({fontSize:"20px"}, 2000);
	    });

	    //Anime plusieurs propriétés en même temps
	    $("#b1").click(function(){
	        $("h1").animate({
	            width: "-=20%", height: "toggle", fontSize: "20px"},
	            1000);
	    });

    /*La file d’attente ou queue des animations*/
    	$("#b1").click(function(){
	        //On chaine les méthodes; les animations se font dans l'ordre d'écriture
	        $("h1")
	            .animate({width: "-=20%"},5000)
	            .animate({fontSize: "20px"},2000)
	            .fadeTo(2000, 0.5);
	    });

	    $("#b1").click(function(){
	        $("h1")
	            .animate({width: "-=20%"},2000)
	            //Cette animation se lance immédiatement
	            .animate({fontSize: "20px"},{queue:false, duration:2000})
	            .fadeTo(2000, 0.5);
	    });


/*Gestion avancée des animations avec jQuery*/

	/*Gérer la file d’attente en jQuery*/
		//queue() va retourner les différentes fonctions de la file d’attente pour un élément
		// ou nous permettre de manipuler la file d’attente de différentes façons selon le nombre d’arguments
		// qu’on va lui passer
		$("#b1").click(function(){
	        $("h1")
	            .animate({width: "-=20%"},5000)
	            .animate({fontSize: "20px"},2000)
	            .fadeTo(2000, 0.5);
	    });

	    function enAttente(){
	        //Récupère les infos liées à la file d'attente
	        //le nom par défaut de la file d’attente des effets jQuery est fx
	        //Le nom fx est implicite : on ne va pas être obligé de le préciser
	        let queue = $("h1").queue("fx");
	        //Affiche la taille de la file d'attente
	        $("span").text(queue.length);
	        //Actualise (quasiment) en direct cette taille
	        setTimeout(enAttente, 10);
	    };
	    enAttente();

	    //dequeue() permet justement d’exécuter la prochaine fonction dans la file d’attente
	    $("#b1").click(function(){
	        $("div")
	            .animate({left: "+=200px"}, 1000)
	            .animate({top: "+=50px"}, 400)
	            .queue(function(){
	            	//dequeue() afin de dire au jQuery de continuer à exécuter les animations suivantes
	                $(this).toggleClass("bleu orange").dequeue();
	            })
	            .animate({left: "-=200px"}, 1000)
	            .animate({top: "-=50px"}, 400)
	    });

	    $("#b1").click(function(){
	        $("div")
	            .animate({left: "+=200px"}, 1000)
	            .animate({top: "+=50px"}, 400)
	            .queue(function(){
	                $(this).toggleClass("bleu orange").dequeue();
	            })
	            .animate({left: "-=200px"}, 1000)
	            .animate({top: "-=50px"}, 400)
	    });
	    $("#b2").click(function(){
	    	//clearQueue() va nous permettre de supprimer toutes les fonctions actuellement dans la file d’attente
	        $("div").clearQueue();
	    });


/*Stopper une animation avec les méthodes jQuery stop() ou finish()*/

	/* stop(), tout d’abord, va par défaut mettre en pause l’animation en cours*/
		$("#b1").click(function(){
	        $("div")
	            .animate({left: "+=200px"}, 1000)
	            .animate({top: "+=50px"}, 400)
	            .queue(function(){
	                $(this).toggleClass("bleu orange").dequeue();
	            })
	            .animate({left: "-=200px"}, 1000)
	            .animate({top: "-=50px"}, 400)
	    });
	    $("#b2").click(function(){
	        $("div").stop(true);
	    });

    /*finish() va elle par défaut stopper immédiatement l’animation en cours
    et supprimer toutes les animations dans la file d’attente*/
    	$("#b1").click(function(){
	        $("div")
	            .animate({left: "+=200px"}, 1000)
	            .animate({top: "+=50px"}, 400)
	            .animate({left: "-=200px"}, 1000)
	            .animate({top: "-=50px"}, 400)
	    });
	    $("#b2").click(function(){
	        $("div").finish();
	    });

	/*Ajouter un délai avant l’exécution d’animations avec delay()*/
		//delay() permet de définir un temps avant lequel certaines animations ne doivent pas être lancées
		$("#b1").click(function(){
	        $("div")
	            .animate({left: "+=200px"}, 1000)
	            .delay(1000)
	            .animate({top: "+=50px"}, 400)
	            .delay(1000)
	            .animate({left: "-=200px"}, 1000)
	            .delay(1000)
	            .animate({top: "-=50px"}, 400)
	    });




/*Création de requêtes Ajax avec jQuery*/
	
	/*La méthode jQuery $.ajax()*/
		$.ajax({
	        //L'URL de la requête 
	        url: "une/url/au/choix",

	        //La méthode d'envoi (type de requête)
	        method: "GET",

	        //Le format de réponse attendu
	        dataType : "json",
	    })

	    //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
	    /*On peut par exemple convertir cette réponse en chaine JSON et insérer
	    cette chaine dans un div id="res"*/
	    .done(function(response){
	        let data = JSON.stringify(response);
	        $("div#res").append(data);
	    })

	    //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
	    //On peut afficher les informations relatives à la requête et à l'erreur
	    .fail(function(error){
	        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
	    })

	    //Ce code sera exécuté que la requête soit un succès ou un échec
	    .always(function(){
	        alert("Requête effectuée");
	    });

    /*Autres méthodes jQuery pour créer des requêtes*/
    	//Charge les éléments p depuis la page "une/url" et les insère dans #res
    	$("#res").load("une/url p");



/*La sérialisation des données des formulaires*/
	
	//Lors du clic sur le bouton...
    $("button").click(function(){
        /*Transforme les données du formulaire en chaine de requête de la forme
        prenom=pierre&mail=pierre.giraud%40edhec.com*/
        let chaine = $("form").serialize();

        /*Transforme les données du formulaire en un tableau d'objets de la forme 
        [
        {
            name : "prenom",
            value : "pierre"
            },
            {
            name : "mail",
            value : "pierre.giraud@edhec.com"
            }
        ]*/
        let tb = $("form").serializeArray();
        
        //Affiche les résultats dans la console
        console.log(chaine);
        console.log(tb);
    });



/*La validation des formulaires en jQuery Ajax*/
	
	$("form").submit(function(event){
        /*Si la longueur de la valeur du champ #prenom est 0 (c'est-à-dire si
        le champ n'a pas été rempli), on affiche un message et on empêche l'envoi*/
        if($("#prenom").val().length === 0){
            $("#prenom").after("<span>Merci de remplir ce champ</span>");
            event.preventDefault();
        }
        else{
            //On effectue nos requêtes Ajax, sérialise, etc...
            let chaine = $("form").serialize();
        }
    });


});