var modal = document.getElementById('Zoomer'); // Get the modal
var modalImg = document.getElementById("img01"); // Gets the first image as default
var span = document.getElementsByClassName("close")[0]; // Gets the X button that closes modal  (<span> element)
var elements = document.getElementsByClassName("zoomable"); // Queries all the elements that has class name "zoomable"


// When the user clicks on image, it pop-up the modal with picture that has been clicked.
var ImgZoom = function(i) {
    modal.style.display = "block";
    modalImg.src = i.path[0].src;
};

// When the user clicks on <span> (x), itcloses the modal
span.onclick = function() { 
    modal.style.display = "none";
}


var elements = document.getElementsByClassName("zoomable");


for (var i = 0; i < elements.length; i++) { // Inserts event (click) listener to elements that queried before by class name and when onclick, it activates the function ImgZoom.
    elements[i].addEventListener('click', ImgZoom, false);
}

