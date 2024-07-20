jQuery (function($){
    $(document).ready(function() {
        const questions = [  
            { 
                question: "*What is the square root of 64?",
                options: ["a) 6", "b) 7", "c) 8", "d) 9"],
                answer: 2
              },
              { 
                question: "What is the value of π (pi) up to two decimal places?",
                options: ["a) 3.13", "b) 3.14", "c) 3.15", "d) 3.16"],
                answer: 1
              },
              { 
                question: "What is the result of 15% of 200?",
                options: ["a) 25", " b) 30", "c) 35", "d) 40"],
                answer: 1
              },
              { 
                question: "What is the formula for the area of a rectangle?",
                options: ["a) length + width", "b) length . width", "c) length ÷ width", "d) length - width"],
                answer: 1
              },
              { 
                question: "What is the next prime number after 7?",
                options: ["a) 9", "b) 21", "c) 10", "d) 11"],
                answer: 3
              },
              { 
                question: "What is the value of 3²?",
                options: ["a) 6", "b) 9", "c) 12", "d) 15"],
                answer: 1
              },
              { 
                question: "What is the sum of the angles in a triangle?",
                options: ["a) 90 degrees", "b) 180 degrees", "c) 270 degrees", "d) 360 degrees"],
                answer: 1
              },
              { 
                question: "What is the derivative of x² with respect to x?",
                options: ["a) x", " b) 2x", "c) x²", "d) 2"],
                answer: 1
              },
              { 
                question: "What is the hypotenuse of a right triangle with legs of lengths 3 and 4?",
                options: ["a) 5", "b) 6", "c) 7", "d) 8"],
                answer: 0
              },
              { 
                question: "What is 25% of 80?",
                options: ["a) 15", "b) 20", "c) 25", "d) 30"],
                answer: 1
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