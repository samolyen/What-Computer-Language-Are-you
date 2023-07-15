let title = document.querySelector(".title");
let questions = document.querySelector(".questions");
let result = document.querySelector(".result");
let buttonsone = document.querySelector(".buttonsone");

buttonsone.onclick = function() {
    let feelings =
        document.querySelector(".feelings").value;
    console.log(feelings);


    let dessert =
        document.querySelector(".dessert").value;
    console.log(dessert);

    if (feelings <= 3 && dessert <= 6) {
        document.querySelector(".result").innerHTML = "You are JAVA SCRIPT, you may not be in the happiest moods seeing your results (" + feelings + "). However Java Script Makes you feel like that so its okay. You use " + dessert + "To keep you energized to push on with java script!";
document.querySelector(".gifone").style.display="block";
    } else if (feelings <= 6 && dessert <= 12) {
        document.querySelector(".result").innerHTML = "YOU are HTML SCRIPT, you have a more serious demeanor considering your score (" + feelings + "). You may also eat quick and small which is why you feel so inclined to " + dessert + " however your still hardworking and want to push on in HTML";
   document.querySelector(".giftwo").style.display="block";
    } else if (feelings <= 9 && dessert <= 18) {
        document.querySelector(".result").innerHTML = "YOU are CSS SCRIPT!, you have a happy and creative outlook on life and are always in a good mood (" + feelings + "). Even though you chose " + dessert + "you love all things desserts which either comes from indeciveness (just like your css script) or love of all things";
   document.querySelector(".gifthree").style.display="block";
    } else if (feelings <= 10 && dessert <= 24) {
        document.querySelector(".result").innerHTML = "YOU are able to control all things Script. WOW your pretty cool you have a nice time when you code (not many of us do) and keep a happy mood (" + 10 + "). you can take your time when coding to enjoy other things like desserts which is why you chose" + dessert + "coding is fun to you and you get a kick out of doing everything yourself";
    document.querySelector(".giffour").style.display="block";
    } else if (feelings === " " && dessert <= 1) {}




};