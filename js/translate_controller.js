$(document).ready(function(){
var ln=""; //linguaggio di destinazione
var	i18n_dict={}; //dizionario del linguaggio di destinazione
var	i18n_it={ 
		"e1"  							: "ciao1",
		"e2"  							: "ciao2",
		"e3"  							: "ciao3",
		"e4"  							: "ciao4",
		"e5"  							: "ciao5",
		"e6"  							: "ciao6",
		"e7"  							: "ciao7",
		"e8"  							: "ciao8",
		"e9"  							: "ciao9",
		"e10" 							: "ciao10",
		"dc" 				: "La tua finestra browser ha risoluzione %s x %s",
		"odc" : "%2$s corrisponde all'altezza, %1$s alla larghezza.",
		"hc"            : "La tua finestra <b><i>%s</i></b> x <b><i>%s</i></b>"
}; //dizionario italiano (utilizzato solo se si utilizza caricadavariabile())
var	i18n_en={
		"e1"  							: "hi1",
		"e2"  							: "hi2",
		"e3"  							: "hi3",
		"e4"  							: "hi4",
		"e5"  							: "hi5",
		"e6"  							: "hi6",
		"e7"  							: "hi7",
		"e8"  							: "hi8",
		"e9"  							: "hi9",
		"e10" 							: "hi10",
		"dc" 				: "Resolution of the windows %s x %s",
		"odc" : "%2$s is the height, %1$s is the width.",
		"hc"            : "Your windows is <b><i>%s</i></b> x <b><i>%s</i></b>"
}; //dizionario inglese (utilizzato solo se si utilizza caricadavariabile())
	
	getLang();//ottiene la lingua di destinazione dalla richiesta GET del selector.html
	
	//I seguenti due metodi permettono la traduzione della pagina utilizzando o i dizionari contenuti nelle variabili o nei file JSON
	//ATTENZIONE: solo una delle due modalità di caricamento deve essere attiva, commenta quella che non intendi utilizzare.
	caricadavariabile(); // carica il dizionario della lingua di destinazione dalla variabile
	//caricadaserver(); // carica il dizionario della lingua di destinazione dal file JSON

	function getLang(){//ottiene la lingua di destinazione dalla richiesta GET del selector.html
		ln=window.location.search.substr(1);
		ln=ln.substr(3,4);
	}
	
	function caricadavariabile(){// carica il dizionario della lingua di destinazione dalla variabile
	switch (ln){
	case "it": 
		i18n_dict = i18n_it;
		traduci(i18n_dict);
		break;
	case "en": 
		i18n_dict = i18n_en; 
		traduci(i18n_dict);
		break;
	default: alert("lingua non selezionata");
	}
	}	
	
	function caricadaserver(){ // carica il dizionario della lingua di destinazione dal file JSON
		switch (ln){
	case "it": 
		$.getJSON('./language/it.json', function(data){
		i18n_dict=data;
		traduci(i18n_dict);
		});
		break;
	case "en": 
		$.getJSON('./language/en.json', function(data){
		i18n_dict=data;
		traduci(i18n_dict);
		}); 
		break;
	default: alert("lingua non selezionata");
	}
	}
	
	function traduci(i18n_dict){ //utilizza la libreria jquery.i18n per tradurre la pagina
		$.i18n.load(i18n_dict);
		$('div#example1')._t('e1');
		$('div#example2')._t('e2');
		$('div#example3')._t('e3');
		$('div#example4')._t('e4');
		$('div#example5')._t('e5');
		$('div#example6')._t('e6');
		$('div#example7')._t('e7');
		$('div#example8')._t('e8');
		$('div#example9')._t('e9');
		$('div#example10')._t('e10');
		$('div#dynamic')._t('dc', $(document).width(), $(document).height());
		$('div#orderedDynamic')._t('odc', $(document).width(), $(document).height());
		$('div#html')._t('hc', $(document).width(), $(document).height());
	}
});

window.onload = function() { //ricarica la pagina una volta aggiungendogli #ready nell'url
    if(!window.location.hash) {
        window.location = window.location + '#ready';
        window.location.reload();
    }
}
