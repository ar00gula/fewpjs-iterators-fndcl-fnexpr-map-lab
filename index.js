const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


  // const titleCasedTutorials = tutorials.map(function(tutorial) {
  //   let array = Array.from(tutorial)
  //   return Object.assign({}, titleCased(array))
  // })

  
  // function stringToTitleCase(string) {
  //   const splitString = string.split(" ");
  //   let i = 0;
  //   for (i = 0; i < splitString.length; i++) {
  //     splitString[i][0] = splitString[i][0].toUpperCase()
  //   }
  //   return splitString.join(" ")
  // }

  // function titleCased() {
  //   return tutorials.map(function(string) {
  //     return string.split(" ").map(function(word) {
  //       return word = word[0].toUpperCase() + word.slice(1)
  //     }).join(" ")
  //   })
  // }

  function titleCased() {
    return tutorials.map(string =>
      string.split(" ").map(word =>
        word[0].toUpperCase() + word.slice(1)
      ).join(" ")
    )
  }


  // function wordToTitleCase(word){
  //   word = word[0].toUpperCase() + word.slice(1)
  //   return word
  // }

  
// const titleCased = function(){
//   let tutorialsTitleCased = tutorials.map(stringToTitleCase)
// }