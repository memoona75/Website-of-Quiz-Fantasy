jQuery (function($){
    $(document).ready(function() {
        const questions = [ 
            { 
                question: "What is the synonym of 'happy'?",
                options: ["A) Sad", "B) Elated", "C) Angry", "d) none"],
                answer: 1
              }, 
              { 
                question: "What is the antonym of 'quick'?",
                options: ["A) Fast", "B) Rapid", " C) Slow", "d) none"],
                answer: 2
              }, 
              { 
                question: "What part of speech is 'beautiful'?",
                options: ["A) Noun", "B) Verb", "C) Adjective", "d) none"],
                answer: 2
              }, 
              { 
                question: "Which sentence is in the past tense?",
                options: ["A) I will go to the park.", "B) I am going to the park.", "C) I went to the park.", "d) none"],
                answer: 2
              }, 
              { 
                question: "What is the plural form of 'child'?",
                options: ["A) Childs", "B) Children", "C) Childes", "d) none"],
                answer: 1
              }, 
              { 
                question: "What is the correct spelling?",
                options: ["A) Definately", "B) Definitely", "C) Definatly", "d) none"],
                answer: 1
              }, 
              { 
                question: "Which of the following is a conjunction?",
                options: ["A) And", "B) Run", "C) Quickly", "d) none"],
                answer: 0
              }, 
              { 
                question: "What is the past participle of 'write'?",
                options: ["A) Wrote", "B) Written", "C) Writing", "d) none"],
                answer: 1
              }, 
              { 
                question: "Which sentence uses correct punctuation?",
                options: [" A) Can I have some water, please?", "B) Can I have some water please.", "C) Can I have some, water please.", "d) none"],
                answer: 0
              }, 
              { 
                question: "Which word is a verb?",
                options: ["A) Jump", "B) Blue", "C) Beautiful", "d) none"],
                answer: 0
              }, 
           
            // Add more questions as needed 
        ];
        
    
        let currentQuestionIndex = 0;
        let score = 0;
    
        $("#start-button").click(function() {
            $(".welcome-screen").hide();
            $(".quiz-screen").show();
            loadQuestion();
        });
    
        $(".option").click(function() {
            const selectedAnswer = $(this).data("answer");
            if (selectedAnswer === questions[currentQuestionIndex].answer) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showResult();
            }
        });
    
        $("#restart-button").click(function() {
            score = 0;
            currentQuestionIndex = 0;
            $(".result-screen").hide();
            $(".welcome-screen").show();
        });
    
        function loadQuestion() {
            const question = questions[currentQuestionIndex];
            $(".question").text(question.question);
            $(".option").each(function(index) {
                $(this).text(question.options[index]);
            });
            updateProgressBar();
        }
    
        function updateProgressBar() {
            const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
            $(".progress").css("width", progress + "%");
        }
    
        function showResult() {
            $(".quiz-screen").hide();
            $("#score").text(score + "/" + questions.length);
            $(".result-screen").show();
        }
    });
    });