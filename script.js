/**
 * CODEVERSE QUIZ HUB - JavaScript Engine
 * Handles 6 Languages (C, C++, Java, HTML, CSS, JavaScript)
 * 10 Questions each, 2 Marks per question (Total = 20 Marks)
 */

// ==========================================
// 1. QUESTION BANK DATA (10 per subject)
// ==========================================
const quizData = {
    c: [
        {
            id: 1,
            question: "Which keyword is used to declare a constant variable in C?",
            options: ["var", "const", "constant", "final"],
            correct: 1,
            explanation: "The 'const' keyword in C is used to declare variables whose value cannot be modified after initialization."
        },
        {
            id: 2,
            question: "What is the correct format specifier for printing a double in C using printf?",
            options: ["%d", "%f", "%lf", "%s"],
            correct: 2,
            explanation: "%lf (long float) is the standard format specifier used in printf for double precision floating-point values."
        },
        {
            id: 3,
            question: "Which header file is required to use malloc() and free() functions?",
            options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"],
            correct: 1,
            explanation: "The standard library header <stdlib.h> contains function declarations for dynamic memory management like malloc, calloc, realloc, and free."
        },
        {
            id: 4,
            question: "What will sizeof(char) always return in C?",
            options: ["1 byte", "2 bytes", "4 bytes", "Depends on architecture"],
            correct: 0,
            explanation: "In C standard specification, sizeof(char) is defined to be strictly 1 byte."
        },
        {
            id: 5,
            question: "Which operator is used to access the memory address of a variable?",
            options: ["*", "&", "->", "."],
            correct: 1,
            explanation: "The address-of operator '&' returns the memory address of a variable."
        },
        {
            id: 6,
            question: "What does the 'break' statement do inside a loop in C?",
            options: ["Restarts the loop", "Terminates the loop immediately", "Skips current iteration", "Pauses execution"],
            correct: 1,
            explanation: "The 'break' statement immediately exits the innermost enclosing loop or switch statement."
        },
        {
            id: 7,
            question: "What is the default return value of a C function if not explicitly specified?",
            options: ["void", "int", "float", "char"],
            correct: 1,
            explanation: "In traditional C (C89/C90), functions without an explicit return type defaulted to returning an int."
        },
        {
            id: 8,
            question: "Which function is used to concatenate two strings in C?",
            options: ["strcpy()", "strcmp()", "strcat()", "strlen()"],
            correct: 2,
            explanation: "strcat(destination, source) appends the source string to the destination string."
        },
        {
            id: 9,
            question: "What is a pointer in C?",
            options: ["A variable that stores a value", "A variable that stores the memory address of another variable", "A keyword", "A data type"],
            correct: 1,
            explanation: "A pointer is a special variable in C that holds the memory address of another variable."
        },
        {
            id: 10,
            question: "What is the index of the first element in a C array?",
            options: ["1", "-1", "0", "Custom defined"],
            correct: 2,
            explanation: "C arrays are zero-indexed, meaning the first element is accessed at index 0."
        }
    ],

    cpp: [
        {
            id: 1,
            question: "Which concept allows a C++ class to inherit features from another class?",
            options: ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"],
            correct: 2,
            explanation: "Inheritance allows a derived class to inherit properties and methods from a base class."
        },
        {
            id: 2,
            question: "Which operator cannot be overloaded in C++?",
            options: ["+", "==", ":: (Scope Resolution)", "[]"],
            correct: 2,
            explanation: "The scope resolution operator (::), sizeof, ternary (?:), and member access (.) operators cannot be overloaded in C++."
        },
        {
            id: 3,
            question: "What is used for output stream printing in C++ standard library?",
            options: ["cin", "cout", "printf", "print"],
            correct: 1,
            explanation: "std::cout is the standard output stream object in C++ defined in <iostream>."
        },
        {
            id: 4,
            question: "Which keyword is used to handle exceptions in C++?",
            options: ["try and catch", "error and fix", "do and exception", "final and catch"],
            correct: 0,
            explanation: "Exception handling in C++ uses 'try' blocks to enclose risky code and 'catch' blocks to handle thrown exceptions."
        },
        {
            id: 5,
            question: "What is a destructor name in C++?",
            options: ["Same as class name with ~ prefix", "delete()", "destroy()", "Same as constructor with ! prefix"],
            correct: 0,
            explanation: "A destructor has the exact same name as the class preceded by a tilde (~)."
        },
        {
            id: 6,
            question: "Which access modifier makes members accessible only within the class and derived classes?",
            options: ["public", "private", "protected", "internal"],
            correct: 2,
            explanation: "'protected' members are accessible within the class itself and any subclasses (derived classes)."
        },
        {
            id: 7,
            question: "What is 'cin' in C++?",
            options: ["Function", "Object of istream class", "Keyword", "Macro"],
            correct: 1,
            explanation: "std::cin is a predefined object of class istream representing standard input."
        },
        {
            id: 8,
            question: "Which of the following is a container type in C++ STL?",
            options: ["vector", "cout", "main", "virtual"],
            correct: 0,
            explanation: "std::vector is a sequence container in the C++ Standard Template Library (STL) representing dynamic arrays."
        },
        {
            id: 9,
            question: "What does the 'virtual' keyword do when applied to a class method in C++?",
            options: ["Hides the function", "Enables runtime polymorphism (late binding)", "Makes the function static", "Prevents overriding"],
            correct: 1,
            explanation: "Virtual functions enable dynamic/runtime polymorphism so the derived class method is executed at runtime."
        },
        {
            id: 10,
            question: "What is reference in C++ declared with?",
            options: ["*", "&", "->", "%"],
            correct: 1,
            explanation: "A reference variable in C++ is created using the '&' operator (e.g., int &ref = var)."
        }
    ],

    java: [
        {
            id: 1,
            question: "Which company originally created Java?",
            options: ["Microsoft", "Sun Microsystems", "Oracle", "Google"],
            correct: 1,
            explanation: "Java was originally developed by James Gosling at Sun Microsystems and released in 1995."
        },
        {
            id: 2,
            question: "What is the entry point method signature for any standard standalone Java program?",
            options: ["public void main(String args[])", "public static void main(String[] args)", "static void main()", "public int main(String args)"],
            correct: 1,
            explanation: "The JVM looks for 'public static void main(String[] args)' as the execution entry point."
        },
        {
            id: 3,
            question: "Which component of Java converts bytecode into machine code?",
            options: ["JDK", "JRE", "JVM", "JAVAC"],
            correct: 2,
            explanation: "The Java Virtual Machine (JVM) executes bytecode and interprets/compiles it into platform-native machine instructions."
        },
        {
            id: 4,
            question: "Which of these is NOT a primitive data type in Java?",
            options: ["int", "boolean", "String", "char"],
            correct: 2,
            explanation: "String is an Object (class) in Java, not a primitive data type."
        },
        {
            id: 5,
            question: "Which keyword prevents a class from being inherited in Java?",
            options: ["static", "final", "abstract", "super"],
            correct: 1,
            explanation: "Declaring a class as 'final' prevents any other class from extending it."
        },
        {
            id: 6,
            question: "Which package is automatically imported in every Java file?",
            options: ["java.util", "java.io", "java.lang", "java.net"],
            correct: 2,
            explanation: "java.lang package is automatically imported by the Java compiler into every compilation unit."
        },
        {
            id: 7,
            question: "What is the memory area where Java objects are allocated?",
            options: ["Stack memory", "Heap memory", "Register", "Code segment"],
            correct: 1,
            explanation: "In Java, all objects and their instance variables are stored in Heap memory."
        },
        {
            id: 8,
            question: "Which exception is thrown when accessing an array with an invalid index?",
            options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "ArithmeticException", "ClassCastException"],
            correct: 1,
            explanation: "ArrayIndexOutOfBoundsException is thrown to indicate that an array has been accessed with an illegal index."
        },
        {
            id: 9,
            question: "Which keyword is used to invoke a parent class constructor in Java?",
            options: ["this()", "super()", "parent()", "base()"],
            correct: 1,
            explanation: "'super()' is used inside a child class constructor to call the constructor of its superclass."
        },
        {
            id: 10,
            question: "What is an interface in Java?",
            options: ["A concrete class", "A blueprint of a class containing abstract methods and constants", "A database connector", "A primitive data type"],
            correct: 1,
            explanation: "An interface in Java is a reference type that specifies a contract of methods that implementing classes must define."
        }
    ],

    html: [
        {
            id: 1,
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
            correct: 0,
            explanation: "HTML stands for Hyper Text Markup Language, the standard markup language for documents designed to be displayed in a web browser."
        },
        {
            id: 2,
            question: "Which HTML tag is used to define an unordered list?",
            options: ["<ol>", "<ul>", "<li>", "<list>"],
            correct: 1,
            explanation: "The <ul> tag defines an unordered (bulleted) list in HTML."
        },
        {
            id: 3,
            question: "Which attribute is required for the <img> tag to display an image source?",
            options: ["href", "link", "src", "path"],
            correct: 2,
            explanation: "The 'src' (source) attribute specifies the path/URL to the image file."
        },
        {
            id: 4,
            question: "Which HTML element is used to insert a line break?",
            options: ["<lb>", "<break>", "<br>", "<hr>"],
            correct: 2,
            explanation: "The <br> tag inserts a single line break in HTML."
        },
        {
            id: 5,
            question: "Which tag is used to create a hyperlink in HTML?",
            options: ["<link>", "<a>", "<url>", "<href>"],
            correct: 1,
            explanation: "The <a> (anchor) tag defines a hyperlink that links one page to another."
        },
        {
            id: 6,
            question: "What is the correct HTML element for the highest priority heading?",
            options: ["<h6>", "<head>", "<heading>", "<h1>"],
            correct: 3,
            explanation: "<h1> defines the most important main heading on an HTML page."
        },
        {
            id: 7,
            question: "Which HTML5 element is used to play video files natively?",
            options: ["<media>", "<video>", "<movie>", "<play>"],
            correct: 1,
            explanation: "The HTML5 <video> tag specifies a standard way to embed video content in web pages."
        },
        {
            id: 8,
            question: "Which input type creates a checkbox in an HTML form?",
            options: ["<input type='check'>", "<input type='checkbox'>", "<input type='button'>", "<input type='radio'>"],
            correct: 1,
            explanation: "<input type='checkbox'> defines a square box that can be toggled on or off."
        },
        {
            id: 9,
            question: "Which HTML tag contains metadata about the document, like charset and title?",
            options: ["<body>", "<head>", "<footer>", "<section>"],
            correct: 1,
            explanation: "The <head> element is a container for metadata (data about data) placed between the <html> and <body> tag."
        },
        {
            id: 10,
            question: "What is the purpose of the 'alt' attribute in an <img> tag?",
            options: ["Provides alternative image size", "Provides alternative text if the image fails to load", "Aligns the image to left/right", "Changes image color"],
            correct: 1,
            explanation: "The 'alt' attribute provides alternative descriptive text for screen readers and when images cannot be loaded."
        }
    ],

    css: [
        {
            id: 1,
            question: "What does CSS stand for?",
            options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Systems", "Colorful Style Sheet"],
            correct: 1,
            explanation: "CSS stands for Cascading Style Sheets, used for styling and layout of web pages."
        },
        {
            id: 2,
            question: "Which CSS property is used to change the background color of an element?",
            options: ["color", "bg-color", "background-color", "canvas-color"],
            correct: 2,
            explanation: "'background-color' sets the background color of an HTML element."
        },
        {
            id: 3,
            question: "How do you select an element with id 'header' in CSS?",
            options: [".header", "#header", "*header", "header:"],
            correct: 1,
            explanation: "The '#' hash symbol is the ID selector in CSS."
        },
        {
            id: 4,
            question: "Which CSS property controls the text size?",
            options: ["text-style", "font-weight", "font-size", "text-size"],
            correct: 2,
            explanation: "'font-size' sets the size of text fonts."
        },
        {
            id: 5,
            question: "Which box model component is space INSIDE the border around content?",
            options: ["Margin", "Padding", "Outline", "Gap"],
            correct: 1,
            explanation: "Padding is the space between the element's content and its border."
        },
        {
            id: 6,
            question: "What is the default value of the 'position' property in CSS?",
            options: ["relative", "absolute", "static", "fixed"],
            correct: 2,
            explanation: "The default value for CSS position property is 'static'."
        },
        {
            id: 7,
            question: "Which CSS layout module allows alignment of items in rows OR columns (1D layout)?",
            options: ["CSS Grid", "Flexbox", "Float", "Table"],
            correct: 1,
            explanation: "Flexbox (Flexible Box Layout) is designed for 1-dimensional layouts (rows or columns)."
        },
        {
            id: 8,
            question: "Which property is used to make text bold in CSS?",
            options: ["font-weight: bold", "text-decoration: bold", "font-style: bold", "font-bold: true"],
            correct: 0,
            explanation: "'font-weight: bold;' sets the thickness of characters in text."
        },
        {
            id: 9,
            question: "What value of 'display' hides an element completely without leaving space in the layout?",
            options: ["visibility: hidden", "display: none", "opacity: 0", "display: invisible"],
            correct: 1,
            explanation: "'display: none' removes the element entirely from the layout flow."
        },
        {
            id: 10,
            question: "Which symbol is used for CSS class selectors?",
            options: ["#", ".", "@", "&"],
            correct: 1,
            explanation: "The period '.' symbol selects elements with a specific class name."
        }
    ],

    javascript: [
        {
            id: 1,
            question: "Which keyword in ES6 creates a block-scoped variable that CANNOT be reassigned?",
            options: ["var", "let", "const", "def"],
            correct: 2,
            explanation: "'const' creates read-only, block-scoped constant variables."
        },
        {
            id: 2,
            question: "What will `typeof NaN` evaluate to in JavaScript?",
            options: ["'number'", "'NaN'", "'undefined'", "'object'"],
            correct: 0,
            explanation: "In JavaScript, NaN (Not a Number) is technically classified as a numeric type ('number')."
        },
        {
            id: 3,
            question: "What is the result of `2 + '2'` in JavaScript?",
            options: ["4", "'22'", "NaN", "TypeError"],
            correct: 1,
            explanation: "The '+' operator performs string concatenation when one operand is a string, resulting in string '22'."
        },
        {
            id: 4,
            question: "Which method converts a JSON string into a JavaScript Object?",
            options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "Object.parse()"],
            correct: 1,
            explanation: "JSON.parse() takes a JSON string and constructs the corresponding JavaScript value or object."
        },
        {
            id: 5,
            question: "Which array method creates a new array with all elements that pass a test function?",
            options: ["map()", "forEach()", "filter()", "reduce()"],
            correct: 2,
            explanation: "Array.prototype.filter() returns a filtered array containing only elements that evaluate to true in the test function."
        },
        {
            id: 6,
            question: "What is the strict equality operator in JavaScript?",
            options: ["=", "==", "===", "=="],
            correct: 2,
            explanation: "'===' checks both value AND type equality without performing type coercion."
        },
        {
            id: 7,
            question: "Which method is used to attach an event handler to a DOM element?",
            options: ["addEventListener()", "attachEvent()", "onEvent()", "listen()"],
            correct: 0,
            explanation: "addEventListener() sets up a function to be called whenever the specified event is delivered to the target."
        },
        {
            id: 8,
            question: "What is a Closure in JavaScript?",
            options: ["A function bundled with references to its surrounding lexical environment", "Closing a browser tab", "A loop termination statement", "An object constructor"],
            correct: 0,
            explanation: "A closure gives an inner function access to an outer function's scope even after the outer function has returned."
        },
        {
            id: 9,
            question: "What does `Array.prototype.push()` return?",
            options: ["The pushed item", "The original array", "The new length of the array", "undefined"],
            correct: 2,
            explanation: "The push() method appends elements to the end of an array and returns its new length."
        },
        {
            id: 10,
            question: "What is the output of `Boolean('')` in JavaScript?",
            options: ["true", "false", "undefined", "null"],
            correct: 1,
            explanation: "An empty string '' is a falsy value in JavaScript, so Boolean('') returns false."
        }
    ]
};

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let currentCategory = null;
let currentQuestionIndex = 0;
let userAnswers = {}; // key: questionIndex, value: selectedOptionIndex
let timerInterval = null;
let timeRemainingSeconds = 15 * 60; // 15 minutes total
let isDarkMode = true;

// Subject Display Names
const subjectNames = {
    c: "C Language",
    cpp: "C++ Language",
    java: "Java",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript"
};

// ==========================================
// 3. DOM ELEMENTS
// ==========================================
const homeScreen = document.getElementById("homeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const logoHomeBtn = document.getElementById("logoHomeBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Quiz Elements
const quizSubjectTag = document.getElementById("quizSubjectTag");
const currentQuestionNum = document.getElementById("currentQuestionNum");
const timeDisplay = document.getElementById("timeDisplay");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const questionBullets = document.getElementById("questionBullets");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitQuizBtn = document.getElementById("submitQuizBtn");

// Result Elements
const resultTrophy = document.getElementById("resultTrophy");
const resultTitle = document.getElementById("resultTitle");
const resultSubtitle = document.getElementById("resultSubtitle");
const resSubject = document.getElementById("resSubject");
const finalScore = document.getElementById("finalScore");
const percentageTag = document.getElementById("percentageTag");
const correctCount = document.getElementById("correctCount");
const incorrectCount = document.getElementById("incorrectCount");
const timeTaken = document.getElementById("timeTaken");

const retryQuizBtn = document.getElementById("retryQuizBtn");
const changeSubjectBtn = document.getElementById("changeSubjectBtn");
const reviewContainer = document.getElementById("reviewContainer");
const filterButtons = document.querySelectorAll(".filter-btn");

// ==========================================
// 4. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    setupCategorySelection();
    setupNavigation();
});

function initTheme() {
    themeToggleBtn.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
        themeToggleBtn.innerHTML = isDarkMode ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    });
}

function setupCategorySelection() {
    const categoryCards = document.querySelectorAll(".category-card");
    categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            const category = card.getAttribute("data-category");
            startQuiz(category);
        });
    });

    logoHomeBtn.addEventListener("click", () => {
        if (confirm("Return to main home screen? Current quiz progress will be lost.")) {
            resetQuizState();
            switchScreen(homeScreen);
        }
    });
}

function setupNavigation() {
    prevBtn.addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
        }
    });

    nextBtn.addEventListener("click", () => {
        const questions = quizData[currentCategory];
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
        }
    });

    submitQuizBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to submit your quiz now?")) {
            finishQuiz();
        }
    });

    retryQuizBtn.addEventListener("click", () => {
        startQuiz(currentCategory);
    });

    changeSubjectBtn.addEventListener("click", () => {
        resetQuizState();
        switchScreen(homeScreen);
    });

    // Review Filters
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");
            renderReviewList(filter);
        });
    });
}

// Helper to Switch Active Screen
function switchScreen(screenToActivate) {
    [homeScreen, quizScreen, resultScreen].forEach(screen => {
        screen.classList.remove("active");
    });
    screenToActivate.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// 5. QUIZ LOGIC
// ==========================================
function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    userAnswers = {};
    timeRemainingSeconds = 15 * 60; // Reset to 15 minutes

    quizSubjectTag.innerText = subjectNames[category];
    
    renderBullets();
    renderQuestion();
    startTimer();

    switchScreen(quizScreen);
}

function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeRemainingSeconds--;
        updateTimerDisplay();

        if (timeRemainingSeconds <= 0) {
            clearInterval(timerInterval);
            alert("⏰ Time is up! Submitting your quiz automatically.");
            finishQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemainingSeconds / 60);
    const seconds = timeRemainingSeconds % 60;
    timeDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function renderBullets() {
    questionBullets.innerHTML = "";
    const questions = quizData[currentCategory];
    
    questions.forEach((_, idx) => {
        const dot = document.createElement("div");
        dot.className = `bullet-dot ${idx === currentQuestionIndex ? 'active' : ''} ${userAnswers[idx] !== undefined ? 'answered' : ''}`;
        dot.addEventListener("click", () => {
            currentQuestionIndex = idx;
            renderQuestion();
        });
        questionBullets.appendChild(dot);
    });
}

function renderQuestion() {
    const questions = quizData[currentCategory];
    const qData = questions[currentQuestionIndex];

    // Update Header info & Progress Bar
    currentQuestionNum.innerText = currentQuestionIndex + 1;
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Question Text
    questionText.innerText = `${currentQuestionIndex + 1}. ${qData.question}`;

    // Options Grid
    optionsContainer.innerHTML = "";
    const prefixes = ["A", "B", "C", "D"];

    qData.options.forEach((optText, optIdx) => {
        const optionItem = document.createElement("div");
        optionItem.className = `option-item ${userAnswers[currentQuestionIndex] === optIdx ? 'selected' : ''}`;

        optionItem.innerHTML = `
            <div class="option-prefix">${prefixes[optIdx]}</div>
            <div class="option-text">${optText}</div>
        `;

        optionItem.addEventListener("click", () => {
            selectOption(optIdx);
        });

        optionsContainer.appendChild(optionItem);
    });

    // Update Footer buttons
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.classList.add("hidden");
        submitQuizBtn.classList.remove("hidden");
    } else {
        nextBtn.classList.remove("hidden");
        submitQuizBtn.classList.add("hidden");
    }

    renderBullets();
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    renderQuestion();
}

function resetQuizState() {
    clearInterval(timerInterval);
    currentCategory = null;
    currentQuestionIndex = 0;
    userAnswers = {};
}

// ==========================================
// 6. RESULT & SCORE CALCULATION
// ==========================================
function finishQuiz() {
    clearInterval(timerInterval);

    const questions = quizData[currentCategory];
    let correctNum = 0;
    let totalMarks = 0;

    questions.forEach((q, idx) => {
        const userChoice = userAnswers[idx];
        if (userChoice !== undefined && userChoice === q.correct) {
            correctNum++;
            totalMarks += 2; // 2 Marks per question
        }
    });

    const totalQuestions = questions.length;
    const incorrectNum = totalQuestions - correctNum;
    const percentage = Math.round((totalMarks / 20) * 100);
    const elapsedTimeSeconds = (15 * 60) - timeRemainingSeconds;
    const elapsedMinutes = Math.floor(elapsedTimeSeconds / 60);
    const elapsedSecs = elapsedTimeSeconds % 60;
    const timeTakenStr = `${String(elapsedMinutes).padStart(2, '0')}:${String(elapsedSecs).padStart(2, '0')}`;

    // Populate Results Screen
    resSubject.innerText = subjectNames[currentCategory];
    finalScore.innerText = totalMarks;
    percentageTag.innerText = `${percentage}%`;
    correctCount.innerText = correctNum;
    incorrectCount.innerText = incorrectNum;
    timeTaken.innerText = timeTakenStr;

    // Victory Title & Trophy Customize
    if (percentage >= 80) {
        resultTrophy.className = "fa-solid fa-trophy trophy-icon";
        resultTitle.innerText = "🎉 Outstanding Performance!";
        resultSubtitle.innerText = `Mastery achieved! You scored ${totalMarks} out of 20 Marks in ${subjectNames[currentCategory]}.`;
        // Trigger celebratory confetti
        if (typeof confetti === 'function') {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }
    } else if (percentage >= 50) {
        resultTrophy.className = "fa-solid fa-award trophy-icon";
        resultTitle.innerText = "👍 Good Job!";
        resultSubtitle.innerText = `Solid effort! You scored ${totalMarks} out of 20 Marks. Keep practicing to reach 100%.`;
    } else {
        resultTrophy.className = "fa-solid fa-brain trophy-icon";
        resultTitle.innerText = "💪 Keep Learning!";
        resultSubtitle.innerText = `You scored ${totalMarks} out of 20 Marks. Review the answers below to improve.`;
    }

    renderReviewList("all");
    switchScreen(resultScreen);
}

// ==========================================
// 7. DETAILED ANSWERS REVIEW
// ==========================================
function renderReviewList(filter) {
    reviewContainer.innerHTML = "";
    const questions = quizData[currentCategory];
    const prefixes = ["A", "B", "C", "D"];

    questions.forEach((q, idx) => {
        const userChoice = userAnswers[idx];
        const isCorrect = userChoice === q.correct;
        const isUnanswered = userChoice === undefined;

        // Apply Filter
        if (filter === "correct" && !isCorrect) return;
        if (filter === "incorrect" && isCorrect) return;

        const reviewCard = document.createElement("div");
        reviewCard.className = `review-item ${isCorrect ? 'is-correct' : 'is-incorrect'}`;

        let userAnsHTML = "";
        if (isUnanswered) {
            userAnsHTML = `<span class="user-ans-wrong"><i class="fa-solid fa-triangle-exclamation"></i> Not Answered</span>`;
        } else if (isCorrect) {
            userAnsHTML = `<span class="user-ans-correct"><i class="fa-solid fa-circle-check"></i> ${prefixes[userChoice]}. ${q.options[userChoice]}</span>`;
        } else {
            userAnsHTML = `<span class="user-ans-wrong"><i class="fa-solid fa-circle-xmark"></i> ${prefixes[userChoice]}. ${q.options[userChoice]}</span>`;
        }

        const correctAnsHTML = `<span class="correct-ans"><i class="fa-solid fa-circle-check"></i> ${prefixes[q.correct]}. ${q.options[q.correct]}</span>`;

        reviewCard.innerHTML = `
            <div class="review-item-header">
                <span class="review-q-num">Question ${idx + 1} of 10</span>
                <span class="review-status ${isCorrect ? 'status-correct' : 'status-incorrect'}">
                    ${isCorrect ? '+2 Marks' : '0 Marks'}
                </span>
            </div>
            <div class="review-question">${q.question}</div>
            <div class="review-answers">
                <div class="ans-row">
                    <span class="ans-label">Your Answer:</span>
                    <div>${userAnsHTML}</div>
                </div>
                ${!isCorrect ? `
                <div class="ans-row">
                    <span class="ans-label">Correct Answer:</span>
                    <div>${correctAnsHTML}</div>
                </div>
                ` : ''}
            </div>
            <div class="review-explanation">
                <strong><i class="fa-solid fa-lightbulb"></i> Explanation:</strong> ${q.explanation}
            </div>
        `;

        reviewContainer.appendChild(reviewCard);
    });

    if (reviewContainer.children.length === 0) {
        reviewContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 20px;">No questions match this filter criteria.</p>`;
    }
}
