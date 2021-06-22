// Traverse (Redo Gallery)
// Create a page with two “galleries”
// Each gallery should contain 3 photos and it should be wrapped in a div
// Width of the pictures should be 33%

// One picture in the first gallery should have a red border around it
// Red border should be a result of a class named “selected”

// Create a function that selects the image with red borders and removes them, then uses traversing technique to navigate to the second gallery and applies the red borders to the middle picture

$(function () {
  var gallery1 = $("<div>");

  $("body").append(gallery1);

  var images1 = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];

  images1.forEach(function (element) {
    var image1 = $("<img>").attr("src", element).width("33%");
    gallery1.append(image1);
  });

  var gallery2 = $("<div>");

  $("body").append(gallery2);

  var images2 = ["images/4.jpg", "images/5.jpg", "images/6.jpg"];

  images2.forEach(function (element) {
    var image2 = $("<img>").attr("src", element).width("33%");
    gallery2.append(image2);

    var selectedImg = $(gallery1)
      .children("img:nth-child(1)")
      .addClass("selected");

    // $( "img" ).first().addClass( "selected" );
    // $( "img.selected" ).css("border", "none");
  });

  $(function () {
    selectedImg = $(".selected").removeClass("selected");
    gallery1 = $(selectedImg).parent();
    gallery2 = $(gallery1).next();
    var middle = Math.ceil($(images2).length / 2);
    var middleImg = $(gallery2)
      .children("img:nth-child(" + middle + ")")
      .addClass("selected");
  });
});
