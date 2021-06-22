var isOn = true;
$(".btn-stop-moving").click(function () {
  if (isOn) {
    $(this).text("Start Moving");
    isOn = false;
  } else {
    $(this).text("Stop Moving");
    isOn = true;
  }
});

$(".field").on("mousedown", function (e) {
  if (isOn) {
    $(".player").css({
      top: e.clientY + "px",
    });
    $(".player").css({
      left: e.clientX + "px",
    });
  }
});
