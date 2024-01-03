console.log(a);
var a=6;
function A () {
    console.log("A");
    B ();
}
function B () {
    console.log("B");
    C ();
}
function C () {
    console.log("C");
    return "C";
}
A ();