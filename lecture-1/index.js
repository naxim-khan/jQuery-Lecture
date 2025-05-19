// jquery notes link https://www.notion.so/J-Query-1f8af5da3a0a80c09123ccd5081e24f6?pvs=4

// you can call jQuery with the $ sign or jQuery they are the same.

// selecting elements with jQuery
// selecting classes like css (h1.title), (#id#title), (div), (p), etc.

// changing the text of an element
$("h1").text("Hello World!");
// changing the html of an element
$("h1").html("<em>Hello World!</em>");
// changing the value of an input
$("input").val("Hello World!");
// changing the css of an element
$("h1").css("color", "red");
// adding a class to an element
$("h1").addClass("big-title");


// selecting all elements with a class or tagname or id
$("button").text("Don't Click Me!"); // it'll select all buttons

// manipulating the Attributes of an element
$("a").attr("href", "https://www.google.com"); // changing the href of all links
// adding an attribute to an element
$("img").attr("alt", "A beautiful image"); // adding an alt attribute to all images
$("img").attr("src", "https://img.freepik.com/premium-photo/face-woman-with-blue-eyes-binary-code-her-face_893012-105396.jpg")

// adding an event listener to an element
$("button").click(function () {
    // alert("Button clicked!");
    let currentSrc = $("img").attr("src");
    let img = $("img");
    if (currentSrc === "https://th.bing.com/th/id/OIP.7uhNISUtLvs-avTaHIY1HAHaEK?rs=1&pid=ImgDetMain") {
        img.attr("src", "https://th.bing.com/th/id/OIP.KR-7NndcLv8AckN8-5138gAAAA?w=474&h=474&rs=1&pid=ImgDetMain");
    } else {
        img.attr("src", "https://th.bing.com/th/id/OIP.7uhNISUtLvs-avTaHIY1HAHaEK?rs=1&pid=ImgDetMain");
    }


});

// adding and removing elements
$("section").append("<button class='new-button'>Remove Image</button>"); // adding a new button to the body
$(".new-button").click(function () {
    let img= $("img");
    if (img.length > 0) {
        img.remove(); // removing the image if it exists
    }else {
        $("section").append("<img src='https://th.bing.com/th/id/OIP.7uhNISUtLvs-avTaHIY1HAHaEK?rs=1&pid=ImgDetMain' alt='A beautiful image'>");
    }
});
// animation with jQuery
// applying animation to image
$("button").click(function () {
    $("img").fadeOut(1000, function () { // fade out the image in 1 second
        $(this).fadeIn(1000); // fade in the image in 1 second
    });
});