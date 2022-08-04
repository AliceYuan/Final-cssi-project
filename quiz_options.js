class QuizOption {
  constructor(title, imgUrl) {
    this.title = title;
    this.imgUrl = imgUrl;
  }
}

class Quiz {
  constructor(id, question, options) {
    this.id = id;
    this.question = question;
    this.options = options;
  }
}

let quizQuestions = [
  new Quiz("color",
          "Pick a favorite color.", 
          [new QuizOption("Blue", "https://media.architecturaldigest.com/photos/5ba551bb44966b64d8d5fc2b/4:3/w_3868,h_2901,c_limit/hyper-blue-4.jpg"), 
          new QuizOption("Orange", "https://healthyfamilyproject.com/wp-content/uploads/2020/05/Oranges-background.jpg"), 
          new QuizOption("Brown", "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwYmVhbnxlbnwwfHwwfHw%3D&w=1000&q=80"),
          new QuizOption("Red", "https://76crb34usu-flywheel.netdna-ssl.com/wp-content/uploads/2016/12/tomatoes_Things_that_are_red.jpg")]),

  new Quiz("vacation",
          "Pick a favorite vacation spot.", 
          [new QuizOption("Alaska", "https://www.alaskanatureguides.com/images/denali_1.jpg"), 
          new QuizOption("Space",
                         "https://www.areyouready.tv/wp-content/uploads/2020/06/Man-on-the-moon-702x459-1.jpg"), 
          new QuizOption("New Orleans", "https://i.pinimg.com/originals/47/73/44/477344c852a37407bd11e367ce9a2d1e.jpg"),
          new QuizOption("Staycation", "https://homedesignlover.com/wp-content/uploads/2012/03/2-ladies-minimal.jpg")]),
]

