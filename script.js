console.log("script running");

// 
let quizBodyHTML = document.querySelector("#quiz");

for (let questionSection of quizQuestions) {
  // quizContent is the content you are adding to your innerHTML, you have to store it as a string first before adding it to innerHTML
  let quizContent = ""

  // Adding start html tags
  let quizHTMLStart = `<section class="section">
        <h1 class="title">${questionSection.question}</h1>
        <!-- Answer Choices -->
        <div class="container">
          <div class="columns">`
  quizContent += quizHTMLStart

  let quizIndex = 0;
  for (let quizOption of questionSection.options) {
    // Adding option html tags
    let optionHTML = `<!-- ${quizOption.title} -->
            <div class="column has-text-centered">
              <figure
                id="${questionSection.id}-${quizIndex}"
                class="card-image card notification has-background-light is-inline-block"
              >
                <div class="container">
                  <img
                    src="${quizOption.imgUrl}"
                    alt="${quizOption.title}"
                  />
                </div>
                <div class="subtitle">${quizOption.title}</div>
              </figure>
            </div>`;
    quizContent += optionHTML;
    quizIndex++;
  }

  // Adding html end tags
  let quizHTMLEnd = `</div></div></section>`
  quizContent += quizHTMLEnd

  // add entire quizContent to the quizBody.innerHTML
  quizBodyHTML.innerHTML += quizContent
}

let quiz = {
  color: ["logical", "creative", "logical", "creative"],
  vacation: ["extrovert", "introvert", "extrovert", "introvert"],
  pizza: ["creative", "logical", "creative", "logical"],
  house: ["introvert", "extrovert", "introvert", "extrovert"],
  fruit: ["logical", "creative", "logical", "creative"],
  activity: ["extrovert", "introvert", "extrovert", "introvert"],
};

let quizTaker = {
  logical: 0,
  creative: 0,
  extrovert: 0,
  introvert: 0,
};
let pictures = document.querySelectorAll(".card-image");
console.log(pictures)
pictures.forEach((picture) => {
  picture.addEventListener("click", (e) => {
    let choice = picture.id.split("-");
    console.log(choice);

    picture.classList.toggle("has-background-light");
    picture.classList.toggle("has-background-warning");

    let answer = quiz[choice[0]][choice[1]];
    quizTaker[answer]++;

    // Changed this such that it checks for whatever the last quiz choice is
    let lastQuizChoice = quizQuestions[quizQuestions.length-1].id
    if (choice[0] === lastQuizChoice) {
      let resultID;

      if (quizTaker.logical > quizTaker.creative) {
        resultID = "#logical-";
      } else {
        resultID = "#creative-";
      }

      if (quizTaker.introvert > quizTaker.extrovert) {
        resultID += "introvert";
      } else {
        resultID += "extrovert";
      }

      let result = document.querySelector(resultID);
      console.log(result);
      result.classList.remove("hidden");
    }
  });
});
