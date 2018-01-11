/*Open the sidenav*/
function openNav() {
    document.getElementById("mySidenav").style.width = "60%";
}

/*Close/hide the sidenav*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch

// Image List
images[0] = "css/img/ildfluer.jpeg";
images[1] = "css/img/9075.jpg";
images[2] = "css/img/0410.jpg";
images[3] = "css/img/nabo.jpeg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(55.608889, 12.348306), zoom: 20
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
