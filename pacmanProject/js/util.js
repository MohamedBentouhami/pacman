"use strict";


/* verifie false si "ri-index" n'existe plus dans l'URL.  */

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

/* 
vérifie dans un premier temps la longeur de la chaine est la même
si oui chaque éleement du tableau sont comparé */

function isEqual(a, b) {

	// if length is not equal
	if (a.length != b.length)
		return false;

	else {

		// comapring each element of array
		for (let i = 0; i < a.length; i++)
			if (a[i] != b[i])
				return false;
		return true;
	}
}



<script>
 function afficher_quiz() {
	let quizId = getUrlParameter('option');

	questions[quizId].data.forEach(function (item, i) {

		$('#quiz-content').append($('<hr>'));
		$('#quiz-content').append($('<img>', {
			src: "../images/" + item.image,
			id: "image-" + i
		}));
		$('#quiz-content').append($('<h4>', {
			text: "Question N°" + (i + 1) + " :" + item.question,
			id: "question-" + item.id
		}));

		if (quizId === "airbus" || quizId === "avion") {

			item.reponses.forEach(function (resp, index) {

				$('#quiz-content').append(
					$('<input>').prop({
						id: item.id,
						type: 'radio',
						name: 'r' + i, // Chaque groupe de réponse doit avoir le même "name"
						value: index
					})
				).append(
					$('<label>').prop({
						for: item.id
					}).html(resp)
				).append(
					$('<br>')
				);
			})
        };
    });
}

</script>
