// function say(firstName, lastName) {
//     console.log("Hello", firstName, lastName);
// }
// say("Bao");

function say(firstName, other, lastName = "Kmin") {
    console.log("Hello", firstName, lastName, other);
}
say("Bao", "abc");