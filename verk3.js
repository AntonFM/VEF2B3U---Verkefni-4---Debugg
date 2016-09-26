// Verkefni 3 (6%)  DevTools og debugging 

/*  lesefni:
 *		Error Handling & Debugging, kafli 10 JavaScript & jQuery eftir Jon Duckett 
 *		
 *		Bugs and Error handling, kafli 8 http://eloquentjavascript.net/08_error.html 
 *    	
 *    	Jshint.com (debug tól) http://jshint.com/ 
 *    	
 *      http://www.sitepoint.com/proper-error-handling-javascript/
*/

  
// 1. - 3% 
// Discover DevTools, kláraðu Level 1- 4
// https://www.codeschool.com/courses/discover-devtools

//Búið-- Sjá í tíma


// 2. - 0.5%  Scope
// Hvað prentast í console og afhverju
(function() {
   var a = b = 5;
})();

console.log(b);

//Það prentast út:
//5
//Undefined
//Þetta er allt í algjörri köku, það sem maður heldur fyrst þegar maður lítur á þetta er að a og b sé skilgreint,
//en í raun er verið að skilgrein a SEM b SVO STRAX AFTUR sem 5, sem þýðir a var b í nanósekondu eða hvað sem er og svo strax 5, þar af prentast út 5 og undefined, 
//því b er í raun aldrei skilgreint og er ekki einu sinni breyta.


// 3. - 0.5% - Hoisting
// Hver er niðurstaðan og afhverju
function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();

//Það prentast út:
//Undefined
//2
//Þetta er því functionið keyrir sig í gegn línu fyrir línu, a er skilgreint EFTIR að við skrifum það út og þar af verður það undefined, ef við skilgreinum a á undan function td. þá prentast út 1.
//2 prentast út því console.log(foo()) kallar í annað function sem keyrir í gegn áður en hann reynir að prenta eitthvað út.

// 4. - 0.5% - this
// Hver er niðurstaðan, útskýrðu svar
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

//Það prentast út: 
//Aurelio De Rosa
//John Doe
//console log obj sem prentar út Aurelio fer í ojb.prop FUNCTION'ið, ekki breytuna sem er skilgreind Colin.
//console.log test prentar út John Doe því það sækir bara breytuna fullname, sem eins og ég skilgreindi áðan getur verið sótt efst í kóðanum.


// 5. - 0.5%  
// Notaðu hér fyrir neðan "use strict" á viðeigandi stað og jshint þér til hjálpar
// a) hver er villan, b) afhverju er villa, c) lagaðu hana
function canYouSpotTheProblem() {
  for (counter = 0; counter < 10; counter++)
    console.log("Happy happy");
}
canYouSpotTheProblem();

// a) Það kemur fram að counter sé ekki skilgreint
// b) Afþví að það á að skilgreina hvað við erum að gera, ef við sleppum því túlkar túlkarinn það ekki rétt, eða í raun í verra falli þegar hann heldur að hann túlki það rétt
// c) Með því að smella einu 'var' fyrir framan fyrsta counter breytuna

// 6. - 0.5%
//a) hver er villan, b) afhverju er villa, c) lagaðu hana
function Person(name) { this.name = name; }
var ferdinand = Person("Ferdinand"); 
console.log(name); 
console.log(ferdinand.name); 

// a) Á seinni línunni, var ferdinand = >Person("Ferdinand")<
// b) Afþví functionið person er ekki endurskilgreint í þessu samhengi
// c) breyta villu línunni í var ferdinand = new Person("Ferdinand");


// 7. - 0.5%
//  Útskýrðu hvernig try og catch virkar hér í kóðanum, 
//  hvað gerir throw keyword og hvað gerist þegar það verður error (útskýra kóðaflæði)

function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L")
    return "a house";
  else
    return "two angry bears";
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}


//try reynir að keyra look, en til að keyra look þarf hann að athuga svarið úr promptDirection ef að svarið er annaðhvort left eða right skrifar hann út úr look eftir því
//en ef það klikkar 'grípur' catch (kemur ekki á óvart að þetta var nefnt svona) frá throw Error meldinguna sem túlkarinn fær út og skrifar catch console.log út.

/*
Skil:
Skilaðu lausnum á Innu
	
Námsmat:	
Gefið er full fyrir rétt og fullnægjandi svar og skýringu þegar það á við, 
ekkert ef svar eða skýring er ábótavant.

*/