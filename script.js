$(document).ready(function () {
  $(".start-btn").click(function () {
    $(".modal-box").toggleClass("show-modal");
    $(".start-btn").toggleClass("show-modal");
  });
  $(".fa-times").click(function () {
    $(".modal-box").toggleClass("show-modal");
    $(".start-btn").toggleClass("show-modal");
  });
});
