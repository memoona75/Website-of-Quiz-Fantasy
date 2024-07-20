jQuery (function($){
    $(document).ready(function() {
        const questions = [  
            { 
                question: "What does HTML stand for?",
                options: ["a) Hypertext Markup Language", "b) Hyperlinks and Text Markup Language", "c) Home Tool Markup Language", "d) Hyper Transfer Markup Language"],
                answer:  0
              },
              { 
                question: "Which of the following is a non-volatile memory?",
                options: ["a) RAM", "b) ROM", "c) Cache memory", "d) Register"],
                answer: 1
              },
              { 
                question: "What is the main function of an operating system?",
                options: ["a) Manage software applications", "b) Manage hardware resources", "c) Provide entertainment", "d) Perform calculations"],
                answer: 1
              },
              { 
                question: "Which of the following is a NoSQL database?",
                options: ["a) MySQL", "b) PostgreSQL", "c) MongoDB", "d) Oracle"],
                answer: 2
              },
              { 
                question: "What does SQL stand for?",
                options: ["a) Structured Query Language", "b) Simple Query Language", "c) Standard Query Language", "d) Sequential Query Language"],
                answer: 0
              },
              { 
                question: "What is the purpose of an IP address",
                options: ["a) Identify a website", "b) Identify a computer on a network", "c) Protect against viruses", "d) Speed up internet connection"],
                answer: 1
              },
              { 
                question: "Which data structure uses FIFO (First In, First Out)?",
                options: ["a) Stack", "b) Queue", "c) Tree", "d) Graph"],
                answer: 1
              },
              { 
                question: "Which of the following is not a programming paradigm?",
                options: ["a) Object-Oriented", "b) Procedural", "c) Logical", "d) Quantitative"],
                answer: 3
              },
              { 
                question: "In OOP, what is a class?",
                options: ["a) A function", "b) A blueprint for creating objects", "c) A variable", "d) A method"],
                answer: 1
              },

              { 
                question: "Which of the following is not a programming language?",
                options: ["Python", "Java", "C", "C++"], 
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