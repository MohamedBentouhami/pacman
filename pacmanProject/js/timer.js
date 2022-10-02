"use strict";

/* affichage d'un timer qui se décrementera à partir de 3. */

$(document).ready(function () {


	let timeleft = 3;
	let downloadTimer = setInterval(function () {
		if (timeleft <= 0) {
			clearInterval(downloadTimer);

			// aprés 3s : cacher le compteur et afficher le quiz
			$("#countdown").hide();
			$("#quiz-container").show();

		} else {
			$("#countdown").text(timeleft);
		}
		timeleft -= 1;
	}, 1000);

});