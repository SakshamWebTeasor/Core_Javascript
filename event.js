var body = document.querySelector("body");
var div = document.querySelector("div");
var button = document.querySelector("button");
var anchor = document.querySelector("a");


// event bubbling DOM hierarchy       button -> div -> body -> html -> document -> window -> global      on any event call
body.addEventListener("click", (event) => {
    console.log("bubbling body clicked");
});
div.addEventListener("click", (event) => {
    console.log("bubbling div clicked");
});
button.addEventListener("click", (event) => {
    event.stopImmediatePropagation(); // stop immediately bubbling for all next upcoming events at same level & above bubble
    console.log("bubbling button1 clicked");
});
button.addEventListener("click", (event) => {
    event.stopPropagation(); // stop bubbling at this level (stop execution of all above bubble)
    console.log("bubbling button2 clicked");
});


// event capturing DOM hierarchy       global -> window -> document -> html -> body -> div -> button      on any event call
body.addEventListener("click", (event) => {
    console.log("capturing body clicked");
}, true);
div.addEventListener("click", (event) => {
    console.log("capturing div clicked");
}, true);
button.addEventListener("click", (event) => {
    //   event.stopImmediatePropagation(); // stop immediately bubbling for all next upcoming events at same level & above bubble
    console.log("capturing button1 clicked");
}, true);
button.addEventListener("click", (event) => {
    //   event.stopPropagation(); // stop bubbling at this level (stop execution of all above bubble)
    console.log("capturing button2 clicked");
}, true);


// any event will execute capturing first and bubbling last


anchor.addEventListener("click", (event) => {
    // event.preventDefault(); // prevent default action of targetted event
    console.log("anchor clicked");
})