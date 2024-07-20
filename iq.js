jQuery (function($){
    $(document).ready(function() {
        const questions = [ 
            { 
                question: "Which number should come next in the series: 2, 6, 12, 20, _?",
                options: ["a)24", "b)26", "c)28", "d)30"],
                answer: 3
              }, 
              { 
                question: "Which of the following does not belong in the group?",
                options: ["a) Dolphin", "b) Shark", "c) Whale", "d) Seahorse"],
                answer: 3
              }, 
              { 
                question: "What is the next number in the sequence: 1, 4, 9, 16, _?",
                options: ["a)20", "b)25", "c)30", "d)35"],
                answer: 1
              }, 
              { 
                question: "Which word is most similar to `untrustworthy~?",
                options: ["a) Reliable", "b) Honest", "c) Deceitful", "d) Trusting"],
                answer: 2
              }, 
              { 
                question: "If you rearrange the letters `LEPAP`, you would have the name of a:",
                options: ["a) Animal", "b) Fruit", "c) Country", "d) City"],
                answer: 1
              }, 
              { 
                question: "What is the missing number in the series: 3, 5, 9, 15, _?",
                options: ["a)21", "b)23", "c)25", "d)27"],
                answer: 1
              }, 
              { 
                question: "Which shape completes the sequence?",
                options: ["a) Circle", "b) Square", "c) Triangle", "d) Hexagon"],
                answer: 2
              }, 
              { 
                question: "Which vitamin is produced when the skin is exposed to sunlight?",
                options: ["a) Vitamin A", "b) Vitamin B", "c) Vitamin C", "d) Vitamin D"],
                answer: 3
              }, 
              { 
                question: "What is the largest planet in our solar system?",
                options: ["a) Earth", "b) Mars", "c) Jupiter", "d) Saturn"],
                answer: 2
              }, 
              { 
                question: "What is the next number in the sequence: 1, 4, 9, 16, _?",
                options: [" a) 20", "b) 25", "c) 30", "d) 36"],
                answer: 2
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