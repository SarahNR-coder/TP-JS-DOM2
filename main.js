//! JS map Phase 1

const lesTxt = document.getElementsByTagName('p');
console.log(lesTxt);

//! JS map Phase 2
let textesTab = Array.from(lesTxt);
console.log(textesTab);

//! JS map Phase 3
//Livré
/* const map1 = textesTab.map(elementDontHTMLSeModifie => "<h3>Un petit titre en plus<h3>" );
console.log(map1); */

//Corrigé
const map1 = textesTab.map(elementDontHTMLSeModifie => elementDontHTMLSeModifie.innerHTML="<h3>Un petit titre en plus<h3>" );


//! BONUS
//Paragraphes cliquables
//Livré
function myFunction(){
    console.log("Click pris en compte");
}

for(let unParagraph of lesTxt) {
    unParagraph.addEventListener("click", myFunction);
}



