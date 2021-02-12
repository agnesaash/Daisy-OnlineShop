var sentences = ["Dressing well is a from of Good Manners ", "Be the best version of YOU "],
iter = 0 ;
changeEl = document.getElementById("quote1");

function changeText(){
    changeEl.innerHTML = sentences[iter%sentences.length];
    iter++;
    setTimeout(changeText,1500);
}
changeText();
