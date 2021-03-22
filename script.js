$(".submit").click(function() {
    let spiceLevel = $(".spice").val();
    let activity = $(".activity").val();
    $(".results").append("<p>You are " + spiceLevel + " out of 4 on the spice scale, and like to " + activity + ".</p>");
});