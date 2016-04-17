//create an array
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];

//variables IN functions (function scope), can see global varibles)

var imageListA = new Array();
imageListA[0] = "images/cathedral/cathedral_00.jpg";
imageListA[1] = "images/cathedral/cathedral_01.jpg";
imageListA[2] = "images/cathedral/cathedral_02.jpg";
imageListA[3] = "images/cathedral/cathedral_03.jpg";
imageListA[4] = "images/cathedral/cathedral_04.jpg";
imageListA[5] = "images/cathedral/cathedral_05.jpg";
imageListA[6] = "images/cathedral/cathedral_06.jpg";
imageListA[7] = "images/cathedral/cathedral_07.jpg";
imageListA[8] = "images/cathedral/cathedral_08.jpg";
imageListA[9] = "images/cathedral/cathedral_09.jpg";
imageListA[10] = "images/cathedral/cathedral_10.jpg";
imageListA[11] = "images/cathedral/cathedral_11.jpg";
imageListA[12] = "images/cathedral/cathedral_12.jpg";
imageListA[13] = "images/cathedral/cathedral_13.jpg";
imageListA[14] = "images/cathedral/cathedral_14.jpg";
imageListA[15] = "images/cathedral/cathedral_15.jpg";
imageListA[16] = "images/cathedral/cathedral_16.jpg";
imageListA[17] = "images/cathedral/cathedral_17.jpg";
imageListA[18] = "images/cathedral/cathedral_18.jpg";
imageListA[19] = "images/cathedral/cathedral_19.jpg";







//create the buildThumbnail function
function buildThumbnails()
{
  //hook onto the thumbs div
  var thumbsDiv = document.getElementById("thumbs");

  //create an output variable
  var output = "";
  //first part: counter (we set up 0 to start counting the loop)
  //second part: condition, (the loop will keep looping as long as the condition is true)
  //third part: incrementor - adds one to the counter AFTER the code is executed in the brackets
  for (var i = 0; i < imageListA.length; i++)
  {
    //concatenation assignment operator..
    output += '<img src="' + imageListA[i] + '" />';
  }

  
  thumbsDiv.innerHTML = output;
  // thumbsDiv.innerHTML = 
  // '<img src="' + imageList[0] + '" />' + 
  // '<img src="' + imageList[1] + '" />' +
  // '<img src="' + imageList[2] + '" />' +
  // '<img src="' + imageList[3] + '" />' +	
  // '<img src="' + imageList[4] + '" />'
  // ;
}


window.onload = function()
{
  buildThumbnails(); //use or "fire off" this function
  //or invoke the function
};

//create a new array (list) to hold the purchased images
var purchasedImages = [];

var thumbsDiv = document.getElementById("thumbs"); //why did I have to repeat this. 

//attach a click event to the DIV with id="thumbs"
thumbsDiv.addEventListener("click", onImageClick, false);

//the function handler
function onImageClick(evt)
{
  //we only want the src attribute of the image so we need to get the "src" attribute of the image tag we click on.
  var onlyPath = evt.target.getAttribute("src");
  //console.log(onlyPath);

  //the indexOf array method searches for a match in the array and if it finds the data, it sends back (or returns) the index position in the array
  var imageIndex = imageListA.indexOf(onlyPath);
  //console.log(imageIndex);
  //get the element you clicked on Out of the imageListA array and save the clicked image path to a variable so we can use it later
  var selectedImage = imageListA.splice(imageIndex, 1);
  //console.log(selectedImage);

  //add this image path to the purchasedImage array.
  purchasedImages.push(selectedImage); //push adds the element to the new array
  update_shopping_cart();
  buildThumbnails();
}

function update_shopping_cart()
{
  //make a shortcut to the div id = "shopping_cart_div"
  var cart = document.getElementById("shopping_cart_div");

  //create an ouput variable so we can build it up over the following lines
  var output = "";

  //create a for loop
  for (var i = 0; i <= purchasedImages.length - 1; i++)
  //use a -1 after imageList.length so the condition is always one less (to match the index number)    
  {
    output += '<img src="' + purchasedImages[i] +
      '" width="70" height="50" />';
  }

  cart.innerHTML = output;
  //send the imageList array to the console for debugging
  //console.log(imageList.length);
  //thumbs.innerHTML= "this used to be the images";
}