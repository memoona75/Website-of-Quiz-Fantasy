jQuery (function($){
    $(document).ready(function() {
        const questions = [ 
            { 
                question: "What is the chemical symbol for water?",
                options: ["a) H₂", "b) O₂", "c) H₂O", "d) CO₂"],
                answer: 2
              },
              { 
                question: "What is the process by which plants make their own food?",
                options: ["a) Respiration", "b) Digestion", "c) Photosynthesis", " Earth"],
                answer: 2
              },
              { 
                question: "What is the main gas found in the air we breathe?",
                options: ["a) Oxygen", "b) Carbon dioxide", "c) Nitrogen", "d) Hydrogen"],
                answer: 2
              },
              { 
                question: "What is the hardest natural substance on Earth?",
                options: ["a) Gold", "b) Iron", "c) Diamond", "d) Platinum"],
                answer: 2
              },
              { 
                question: "Which part of the cell contains the genetic material?",
                options: ["a) Cytoplasm", "b) Cell membrane", "c) Nucleus", "d) Mitochondria"],
                answer: 2
              },
              { 
                question: "What force keeps us grounded on the Earth?",
                options: ["a) Magnetism", "b) Friction", "c) Gravity", "d) Inertia"],
                answer: 2
              },
              { 
                question: "Which element is essential for the production of hemoglobin in blood?",
                options: ["a) Calcium", "b) Potassium", "c) Iron", "Water"],
                answer: 2
              },
              { 
                question: "What is the boiling point of water in degrees Celsius?",
                options: ["a) 50°C", "b) 100°C", "c) 150°C", "d) 200°C"],
                answer: 1
              },
              { 
                question: "Which planet is closest to the sun?",
                options: ["a) Earth", "b) Venus", "c) Mercury", "d) Mars"],
                answer: 2
              },
              { 
                question: "What is the chemical formula for table salt?",
                options: ["a) NaCl", "b) KCl", "c) NaHCO₃", "d) CaCO₃"],
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