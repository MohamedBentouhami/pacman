"use strict";


function getUrlParameter(sParam) {
	let sPageURL = window.location.search.substring(1),
	    sURLVariables = sPageURL.split('&'),
	    sParameterName,
	    i;

	for (i = 0; i < sURLVariables.length; i++) {
	    sParameterName = sURLVariables[i].split('=');

	    if (sParameterName[0] === sParam) {
	        return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
	    }
	}
	return false;
};


/**
 * Informations diverses sur les quiz.
 * @type{Record<string, Quiz>}
 */
const quizzes = {
    "mer": {
        title: "Les animaux marins dans les dessins animés",
        description: "Des poissons et mammifères marins vous sont données. À vous de me donner leur nom.",
        data: questions_mer,
    },
    "jeux": {
        title: "De quel jeu provient cette image ?",
        description: "On vous donne l'image, retrouvez le jeu !",
        data: questions_jeux,
    },
    "couples": {
        title: "Les couples de dessins animés",
        description: "Essayez de reconnaitre ces célèbres couples de dessins animés.",
        data: questions_couples,
    },
    "webg2": {
        title: "La matière de Webg2",
        description: "Testez vos connaissances sur le cours de webg2",
        data: questions_webg2,
    },
};