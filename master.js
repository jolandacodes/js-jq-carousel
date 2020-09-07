$(document).ready(function () {

    //   When clicked..

  $(".back").click(function () {
    var clickedBack = $(".images img.active");
    var clickedBackNav = $(".navbar i.active");

    // Save the elements that hold the class "active"

    clickedBack.removeClass("active");
    clickedBackNav.removeClass("active");

    // Remove the class active from that element

    if (clickedBack.hasClass("first")) {
      $(".images img.last").addClass("active");
      $(".navbar i.last").addClass("active");

    //   if it also has the class first, add the class active to last
    } else {
      clickedBack.prev().addClass("active");
      clickedBackNav.prev().addClass("active");
    }

    // otherwise use .prev to add the class active to the next sibling
  })

//   When clicked..
  $(".forward").click(function () {
    var clickedForward = $(".images img.active");
    var clickedForwardNav = $(".navbar i.active");

    // Save the elements that hold the class "active"

    clickedForward.removeClass("active");
    clickedForwardNav.removeClass("active");

    // Remove the class active from that element

    if (clickedForward.hasClass("last")) {
      $(".images img.first").addClass("active");
      $(".navbar i.first").addClass("active");

    //   if it also has the class last, add the class active to first

    } else {
      clickedForward.next().addClass("active");
      clickedForwardNav.next().addClass("active");
    }

    // if not, use .next to add the class active to the next sibling
  });
});
