# jQuery-i18n_json
Un esempio di internazionalizzazione di una pagina usando la libreria jquery_i18n e file di lingua JSON

*selector.html permette la selezione della lingua di destinazione la quale viene passata tramite una richiesta GET al file index.html

*./js/translate_controller.js gestisce e permette la traduzione utilizzando il dizionario di destinazione contenuto in una variabile (utile se si vuole testare il funzionamento in locale) o quello contenuto nel file JSON della lingua presente in "./language/". Assicurarsi quindi di attivare solo una delle due modalità disattivando (commentando) nel file la funzione che esegue l'altra modalità.
