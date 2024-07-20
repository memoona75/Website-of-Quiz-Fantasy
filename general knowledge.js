jQuery (function($){
    $(document).ready(function() {
        const questions = [  

              { 
                question: "What is the capital of Canada?",
                options: [" a) Toronto", " b) Ottawa", "c) Vancouver", "d) Montreal"],
                answer: 1
              },
              { 
                question: "Which ocean is the largest?",
                options: ["a) Atlantic", "b) Indian", "c) Arctic", "d) Pacific"],
                answer: 3
              },
              { 
                question: "Who painted the ceiling of the Sistine Chapel?",
                options: ["a) Leonardo da Vinci", "b) Vincent van Gogh", "c) Michelangelo", "d) Pablo Picasso"],
                answer: 2
              },
              { 
                question: "What is the smallest bone in the human body?",
                options: ["a) Femur", "b) Stapes", "c) Ulna", " d) Tibia"],
                answer: 1
              },
              { 
                question: "Which country hosted the 2016 Summer Olympics?",
                options: ["a) China", "b) Brazil", "c) UK", "d) Japan"],
                answer: 1
              },
              { 
                question: "What is the hardest natural substance on Earth?",
                options: ["a) Gold", "b) Iron", "c) Diamond", "d) Platinum"],
                
                answer: 2
              },
              { 
                question: "What is the largest planet in our solar system?",
                options: ["a) Earth", "b) Mars", "c) Jupiter", "d) Saturn"],
                answer: 2
              },
              { 
                question: "What is the capital city of Australia?",
                options: ["a) Sydney", "b) Melbourne", "c) Canberra", "d) Brisbane"],
                answer: 1
              },
              { 
                question: "What is the main ingredient in traditional Japanese miso soup?",
                options: ["a) Tofu", "b) Miso paste", "c) Seaweed", "d) Rice"],
                answer: 1
              },
              { 
                question: "What is the capital of France?",
                options: ["a) Berlin", "b) Madrid", "c) Paris", " d) Rome"],
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