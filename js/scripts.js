const languageCount = 3;

$(function(){
  $("#questionnaire form").submit(function(event){
    event.preventDefault();

    //Each map refers to programming language in the set array in this order (JS, Ruby, Python)
    let answerDict = {
      "kinesthetic": [ 20, 20, 20],
      "auditory": [ 0, 0, 0],
      "visual": [5, 5, 5],
      "oneWay": [0, 0, 9001],
      "multiple": [20, 9001, 0],
      "dunno": [0, 0, 9001],
      "job": [9001, 0, 0],
      "learn": [30, 50, 20],
      "build": [20, 20, 20]
    }

    let questions = ["style", "solutions", "purpose"]
    let finalScores = new Array(languageCount).fill(0);

    questions.forEach(function(question) {
      console.log(question);
      let answer = $("#" + question).val();
      console.log(answer)
      let scores = answerDict[answer];
      console.log(scores);
      for (let i=0; i < scores.length; i++) {
        finalScores[i] += scores[i];
      }
      console.log(finalScores);
    })

    if (finalScores[0] > finalScores[1] > finalScores[2]) {
      $(".reveal").fadeIn();
      $("#pathJS").show();
    } else if (finalScores[1] > finalScores[2] > finalScores[0]) {
      $(".reveal").fadeIn();
      $("#pathRuby").show();
    } else if (finalScores[0] == finalScores[1]) {
      $(".reveal").fadeIn();
      $("#pathJS").show() + "or you could learn" + $("pathRuby").show() ;
    } else if (finalScores[1] == finalScores[2]) {
      $(".reveal").fadeIn();
      $("#pathRuby").show() + "or you could learn" + $("pathPython").show() ;
    } else if (finalScores[0] == finalScores[2]) {
      $(".reveal").fadeIn();
      $("#pathJS").show() + "or you could learn" + $("pathPython").show() ;
    } else {
      $(".reveal").fadeIn();
      $("pathPython").show() ;
    }


    //answerDict.val()
    debugger;
  })
})



/*var dict = {
  FirstName: "Chris",
  "one": 1,
  1: "some value"
};*/


/*$(function(){
  $("#blanks form").submit(function(event){
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      console.log(userInput);
      $("." + blank).text(userInput).val();
      return blank;
    });

    $("#story").show()

    event.preventDefault()
  })
})
*/
