// Inserting elements
// Start with a blank HTML page

// Using just JS (jQuery), create an image gallery
// All links to images in the gallery should be elements of the same array!

// When the gallery is created and visible on the page, create gallery title and insert it before the gallery images

// Go through gallery images and set a random size to each gallery image

$(function () {
  var gallery = $("<div>");

  $("body").append(gallery); // inside body we creating div

  var title = $("<h2> Our beautifull Gallery images </h2>"); // adding title

  var allImages = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
  ];

  allImages.forEach(function (element) {
    var image = $("<img>")
      .attr("src", element)
      .width(Math.random() * 100 + 150).addClass("testCSS");
    gallery.append(image);
  });
  gallery.prepend(title);


//
  // Set a green border around each image whose width is less than 200px up until the first one that doesnt meet that requirement (i.e. when you get to the first img that is more than 200px wide, stop checking and setting green border).
//
  var boderImage = $("img");
  boderImage.each(function () {
    if ($(this).width() < 200) {
      $(this).addClass("border");
    } else {
      return false;
    }
  });
});
