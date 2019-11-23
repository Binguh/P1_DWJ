// Slideshow manuel

	var slideIndex = 1;
	showDivs(slideIndex);

	function plusDivs(n) {
	    showDivs(slideIndex += n);
	}

	function showDivs(n) {
	    var i;
	    var x = document.getElementsByClassName("slider");

	    	if (n > x.length) {
	    		slideIndex = 1;
	    	}
	    	if (n < 1) {
	    		slideIndex = x.length;
	    	}
	    	for (i = 0; i < x.length; i++) {
	        	x[i].style.display = "none"; 
	    	}

	    x[slideIndex-1].style.display = "block"; 
	}


// Liseret menu principal

	var currentPage = document.getElementById('top_menu').getElementsByTagName('a');
			for (var tabPage = 0, lenPage = currentPage.length; tabPage < lenPage; tabPage++);
	var pagePosition = document.getElementsByClassName('page');
			for (var tabPos = 0, lenPos = pagePosition.length; tabPos < lenPos; tabPos++);
	var transitionNumber = 100,
		anchorAccueil = pagePosition[0].offsetTop,
		anchorServices = pagePosition[1].offsetTop - transitionNumber,
		anchorPortfolio = pagePosition[2].offsetTop - transitionNumber,
		anchorContact = pagePosition[3].offsetTop - transitionNumber;
		

	function menuScroll() {

		currentPage[0].setAttribute('class', window.scrollY >= 0 && window.scrollY < anchorServices ? 'current_page' : '');
		currentPage[1].setAttribute('class', window.scrollY >= anchorServices && window.scrollY < anchorPortfolio ? 'current_page' : '');
		currentPage[2].setAttribute('class', window.scrollY >= anchorPortfolio && window.scrollY < anchorContact ? 'current_page' : '');
		currentPage[3].setAttribute('class', window.scrollY >= anchorContact ? 'current_page' : '');

	}


// Menu portfolio

	function menuPortF() {
		var currentPF = document.getElementById('menuPF').getElementsByTagName('a');
			for (var tabPF = 0, lenPF = currentPF.length; tabPF < lenPF; tabPF++);
		var currentPage = document.getElementById('top_menu').getElementsByTagName('a');
			for (var tabPage = 0, lenPage = currentPage.length; tabPage < lenPage; tabPage++);
		var currentHash = window.location.hash;
		var imgCreative = document.querySelectorAll('.creative');
		var imgCorporate = document.querySelectorAll('.corporate');
		var imgMiniPortfolio = document.querySelectorAll('.mini_portfolio');


			currentPF[0].setAttribute('class', currentHash == 'none' || 
				currentHash == currentPF[0].getAttribute('href') || 
				currentHash == currentPage[0].getAttribute('href') || 
				currentHash == currentPage[1].getAttribute('href') || 
				currentHash == currentPage[2].getAttribute('href') || 
				currentHash == currentPage[3].getAttribute('href') ? 'current_PF' : '');
			currentPF[1].setAttribute('class', currentHash == currentPF[1].getAttribute('href') ? 'current_PF' : '');
			currentPF[2].setAttribute('class', currentHash == currentPF[2].getAttribute('href') ? 'current_PF' : '');
			currentPF[3].setAttribute('class', currentHash == currentPF[3].getAttribute('href') ? 'current_PF' : '');
		
			for (var tabICr = 0, lenICr = imgCreative.length; tabICr < lenICr; tabICr++) {
				if (currentHash == currentPF[1].getAttribute('href')) {
					imgCreative[tabICr].style.display = 'initial';
				}
				else if (currentHash == currentPF[2].getAttribute('href')) {
					imgCreative[tabICr].style.display = 'none';
				}
				else if (currentHash == currentPF[3].getAttribute('href')) {
					imgCreative[tabICr].style.display = 'none';
				} else {
					imgCreative[tabICr].style.display = 'initial';
				}
			}
			for (var tabICo = 0, lenICo = imgCorporate.length; tabICo < lenICo; tabICo++) {
				if (currentHash == currentPF[1].getAttribute('href')) {
					imgCorporate[tabICo].style.display = 'none';
				}
				else if (currentHash == currentPF[2].getAttribute('href')) {
					imgCorporate[tabICo].style.display = 'initial';
				}
				else if (currentHash == currentPF[3].getAttribute('href')) {
					imgCorporate[tabICo].style.display = 'none';
				} else {
					imgCorporate[tabICo].style.display = 'initial';
				}
			}
			for (var tabIMi = 0, lenIMi = imgMiniPortfolio.length; tabIMi < lenIMi; tabIMi++) {
				if (currentHash == currentPF[1].getAttribute('href')) {
					imgMiniPortfolio[tabIMi].style.display = 'none';
				}
				else if (currentHash == currentPF[2].getAttribute('href')) {
					imgMiniPortfolio[tabIMi].style.display = 'none';
				}
				else if (currentHash == currentPF[3].getAttribute('href')) {
					imgMiniPortfolio[tabIMi].style.display = 'initial';
				} else {
					imgMiniPortfolio[tabIMi].style.display = 'initial';
				}
			}	
	}


	//Lightbox Portfolio

		function lightbox() {
			document.getElementById('lightbox').style.display = 'block';
		}

		function closeLightbox() {
			document.getElementById('lightbox').style.display = 'none';
		}

		var slideIndex = 1;
		showSlides(slideIndex);

		function currentBox(n) {
			showSlides(slideIndex = n);
		}

		function showSlides(n) {
			var slides = document.getElementsByClassName('big_img');

			if (n > slides.length) {
				slideIndex = 1
			}
			if (n < 1) {
				slideIndex = slides.length
			}
			for (i = 0, lenSli = slides.length; i < lenSli; i++) {
				slides[i].style.display = 'none';
			}

			slides[slideIndex-1].style.display = 'block';
		}

	
	window.addEventListener('scroll', menuScroll);
	window.addEventListener('load', menuScroll);
	window.addEventListener('hashchange', function() {
		menuScroll();
		menuPortF();
	});
