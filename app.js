// === Question bank by category (WEB1 syllabus) ===
// Each question: { text, answers: [...], correct }
const questionsByCategory = {
  web_html: [
    // Session 1: The web + HTML
    {
      text: "What does DNS do?",
      answers: [
        "Stores cookies",
        "Translates domain names to IP addresses",
        "Encrypts HTTP",
        "Renders HTML to CSS",
      ],
      correct: 1,
    },
    {
      text: "Which HTTP method is the default for HTML forms if you don't set method?",
      answers: ["POST", "PUT", "GET", "DELETE"],
      correct: 2,
    },
    {
      text: "Which files are the three key building blocks of a basic website?",
      answers: [
        "HTML, CSS, JS",
        "SQL, PHP, Python",
        "XML, JSON, CSV",
        "JPG, PNG, GIF",
      ],
      correct: 0,
    },
    {
      text: "What is the purpose of the <title> element?",
      answers: [
        "Main page heading",
        "Tab/window title",
        "Loads CSS",
        "Defines favicon",
      ],
      correct: 1,
    },
    {
      text: "HTTP stands for…",
      answers: [
        "Hyperlink Transfer Type Protocol",
        "Hypertext Transfer Protocol",
        "High Throughput Transport Protocol",
        "Home Terminal Text Protocol",
      ],
      correct: 1,
    },
  ],
  css_basics: [
    // Session 2: Colors, box model, selectors
    {
      text: "Which property controls the text color?",
      answers: ["background", "font-weight", "color", "border-color"],
      correct: 2,
    },
    {
      text: "Which color format is most common on the web and starts with # ?",
      answers: ["HSL", "HEX", "RGB()", "Named colors"],
      correct: 1,
    },
    {
      text: "Which is the recommended box sizing to avoid overflow surprises?",
      answers: ["content-box", "border-box", "padding-box", "auto"],
      correct: 1,
    },
    {
      text: "Which selector has higher specificity?",
      answers: ["Class (.btn)", "Element (p)", "ID (#header)", "Universal (*)"],
      correct: 2,
    },
    {
      text: "Padding is…",
      answers: [
        "Space outside the border",
        "Space inside the border",
        "Border thickness",
        "Font spacing",
      ],
      correct: 1,
    },
  ],
  layout: [
    // Session 3: Responsive, Flexbox, Grid, Media queries
    {
      text: "Flexbox is best when you need control along…",
      answers: ["Two axes", "One axis", "Z-axis", "No axis"],
      correct: 1,
    },
    {
      text: "Which Grid function repeats tracks automatically to fit space?",
      answers: ["repeat(auto-fit, …)", "min()", "max()", "stack()"],
      correct: 0,
    },
    {
      text: "Which media query shows rules above a certain width?",
      answers: [
        "@media (max-width: 800px)",
        "@media (min-width: 800px)",
        "@media (between: 400-800px)",
        "@media (screen-only)",
      ],
      correct: 1,
    },
    {
      text: "Which unit in Grid distributes leftover space?",
      answers: ["px", "%", "fr", "em"],
      correct: 2,
    },
    {
      text: "In Flexbox, which properties center content horizontally and vertically (row direction)?",
      answers: [
        "align-items & justify-content",
        "gap & order",
        "left & top",
        "display & float",
      ],
      correct: 0,
    },
  ],
  forms: [
    // Session 5: Forms + validation
    {
      text: "Which attribute makes an input mandatory?",
      answers: ["checked", "required", "min", "pattern"],
      correct: 1,
    },
    {
      text: "What is the correct type for an email field?",
      answers: ["type='text'", "type='email'", "type='mail'", "type='address'"],
      correct: 1,
    },
    {
      text: "Client-side validation is useful because…",
      answers: [
        "It replaces server validation",
        "It improves UX but must be backed by server validation",
        "It encrypts passwords",
        "It removes the need for HTTPS",
      ],
      correct: 1,
    },
    {
      text: "Which attribute groups related inputs semantically?",
      answers: ["<div>", "<section>", "<fieldset>", "<card>"],
      correct: 2,
    },
    {
      text: "Which method hides form data from the URL?",
      answers: ["GET", "POST", "HEAD", "PUT"],
      correct: 1,
    },
  ],
  accessibility_ux: [
    // Session 6: Accessibility, semantics, skip link
    {
      text: "What is a skip link used for?",
      answers: [
        "Skip ads",
        "Jump directly to main content for keyboard users",
        "Hide nav bar on mobile",
        "Open a modal",
      ],
      correct: 1,
    },
    {
      text: "Images should include which attribute for accessibility?",
      answers: ["alt", "data-img", "role", "tabindex"],
      correct: 0,
    },
    {
      text: "Semantic HTML helps…",
      answers: [
        "Search engines and assistive tech understand structure",
        "Change server IP",
        "Speed up DNS",
        "Replace CSS",
      ],
      correct: 0,
    },
    {
      text: "Which WCAG contrast ratio is the minimum for normal text?",
      answers: ["2.0:1", "3.0:1", "4.5:1", "7.0:1"],
      correct: 2,
    },
    {
      text: "Keyboard operability requires…",
      answers: [
        "Only mouse focus",
        "All functionality available via keyboard",
        "Touchscreen only",
        "High FPS",
      ],
      correct: 1,
    },
  ],
  js_basics: [
    // Session 8: Variables, types, arrays/objects, loops, functions
    {
      text: "Which keyword declares a block-scoped variable that can change?",
      answers: ["var", "let", "const", "define"],
      correct: 1,
    },
    {
      text: "Which operator checks strict equality (no type coercion)?",
      answers: ["==", "=", "===", "!="],
      correct: 2,
    },
    {
      text: "Which array method adds an item to the end?",
      answers: [".pop()", ".push()", ".shift()", ".slice()"],
      correct: 1,
    },
    {
      text: "Objects in JS are…",
      answers: [
        "Immutable by default",
        "Dynamic; you can add/change properties",
        "Only numbers",
        "Only strings",
      ],
      correct: 1,
    },
    {
      text: "A basic for-loop includes…",
      answers: [
        "condition only",
        "initialization; condition; increment",
        "increment only",
        "no parts",
      ],
      correct: 1,
    },
  ],
  dom_events_storage: [
    // Session 9: DOM, Events, Web Storage, Timing
    {
      text: "Which API selects a single element from the DOM?",
      answers: [
        "document.find()",
        "document.querySelector()",
        "window.select()",
        "dom.get()",
      ],
      correct: 1,
    },
    {
      text: "To change visible text safely you use…",
      answers: ["innerHTML", "textContent", "outerHTML", "html()"],
      correct: 1,
    },
    {
      text: "Which method attaches a click handler?",
      answers: [
        "onClick()",
        "listen()",
        "addEventListener('click', ...)",
        "attach('click')",
      ],
      correct: 2,
    },
    {
      text: "localStorage vs sessionStorage — which persists across tabs/windows closures?",
      answers: ["sessionStorage", "localStorage", "cookies only", "neither"],
      correct: 1,
    },
    {
      text: "Which function delays code once by N ms?",
      answers: ["setInterval", "setTimeout", "requestFrame", "sleep()"],
      correct: 1,
    },
  ],
};

const categoryLabels = {
  web_html: "The Web & HTML",
  css_basics: "CSS Basics",
  layout: "Layout (Flexbox/Grid/Media)",
  forms: "Forms & Validation",
  accessibility_ux: "Accessibility & UX",
  js_basics: "JavaScript Basics",
  dom_events_storage: "DOM, Events, Storage & Timing",
};

function getCategoryLabel(key) {
  return categoryLabels[key] || key; // fallback hvis en ny kategori kommer til
}

// === State ===
let selectedAnswer = null; // index of the selected answer
let index = 0;
let score = 0;
// === Highscores per category (stored as JSON in localStorage) ===
const HIGHSCORES_KEY = "highscoresByCategory";

function loadHighscores() {
  const raw = localStorage.getItem(HIGHSCORES_KEY);
  if (!raw) return {};
  try {
    const obj = JSON.parse(raw);
    return obj && typeof obj === "object" ? obj : {};
  } catch (e) {
    return {};
  }
}

function saveHighscores(obj) {
  localStorage.setItem(HIGHSCORES_KEY, JSON.stringify(obj));
}

let highscoresByCategory = loadHighscores();

// The category currently being played (set when the game starts)
let activeCategory = "web_html";

function getHighscore(cat) {
  return Number(highscoresByCategory[cat] || 0);
}

function setHighscore(cat, value) {
  highscoresByCategory[cat] = value;
  saveHighscores(highscoresByCategory);
}

function updateHighscoreUIForCategory(cat) {
  highscoreTxt.textContent = getHighscore(cat);
}

// Active question set (set on start)
let currentQuestions = [];

// Category dropdown + persistence
const categorySelect = document.querySelector("#category");
const savedCat = localStorage.getItem("category");
if (savedCat && categorySelect) categorySelect.value = savedCat;
function getSelectedCategory() {
  const cat = categorySelect ? categorySelect.value : "web_html";
  localStorage.setItem("category", cat);
  return cat;
}
if (categorySelect) {
  categorySelect.addEventListener("change", function () {
    updateHighscoreUIForCategory(getSelectedCategory());
  });
}

// === DOM refs ===
const startScreen = document.querySelector("#screen-start");
const quizScreen = document.querySelector("#screen-quiz");
const endScreen = document.querySelector("#screen-end");

const btnStart = document.querySelector("#btn-start");
const btnNext = document.querySelector("#btn-next");
const btnRestart = document.querySelector("#btn-restart");
const btnResetHs = document.querySelector("#btn-reset-hs");

const hsScreen = document.querySelector("#screen-highscores");
const btnViewHs = document.querySelector("#btn-view-hs");
const btnBack = document.querySelector("#btn-back");
const hsTableBody = document.querySelector("#table-highscores tbody");

const qText = document.querySelector("#question-text");
const answersList = document.querySelector("#answers");
const scoreText = document.querySelector("#score");
const qNumber = document.querySelector("#question-number");

const finalScore = document.querySelector("#final-score");
const highscoreTxt = document.querySelector("#highscore");

// === UI helpers ===
// Update top bar (question # + score)
function updateStatus() {
  qNumber.textContent =
    "Question " + (index + 1) + " of " + currentQuestions.length;
  scoreText.textContent = "Score: " + score;
}

// Save new highscore if beaten
function updateHighscoreIfNeeded() {
  const currentHs = getHighscore(activeCategory);

  if (score > currentHs) {
    setHighscore(activeCategory, score);
  }

  updateHighscoreUIForCategory(activeCategory);
}

// === Screen helpers (show/hide sections) ===
function showStart() {
  startScreen.classList.remove("hidden");
  quizScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  updateHighscoreUIForCategory(getSelectedCategory());
}

function showQuiz() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  endScreen.classList.add("hidden");

  index = 0;
  score = 0;

  // Load selected category
  activeCategory = getSelectedCategory();
  currentQuestions = questionsByCategory[activeCategory];

  showQuestion();
}

function showEnd() {
  startScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
  finalScore.textContent = score;
  updateHighscoreIfNeeded();
}

function showHighscores() {
  startScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  hsScreen.classList.remove("hidden");

  renderHighscoresTable();
}

function renderHighscoresTable() {
  const data = loadHighscores(); // fx { forms: 2, accessibility_ux: 5, ... }
  hsTableBody.textContent = ""; // ryd tidligere indhold

  const categories = Object.keys(data).sort(function (a, b) {
    return getCategoryLabel(a).localeCompare(getCategoryLabel(b));
  });

  if (categories.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 2;
    td.textContent = "No highscores yet";
    tr.appendChild(td);
    hsTableBody.appendChild(tr);
    return;
  }

  categories.forEach(function (cat) {
    const tr = document.createElement("tr");

    const tdCat = document.createElement("td");
    tdCat.textContent = getCategoryLabel(cat);

    const tdScore = document.createElement("td");
    tdScore.textContent = data[cat];

    tr.appendChild(tdCat);
    tr.appendChild(tdScore);
    hsTableBody.appendChild(tr);
  });
}

// === Render one question ===
function showQuestion() {
  const q = currentQuestions[index];

  updateStatus(); // refresh status
  qText.textContent = q.text; // set question text

  // Simple entrance animation + focus management
  qText.classList.remove("enter");
  setTimeout(function () {
    qText.classList.add("enter");
  }, 0);

  // Reset answers view + selection state
  answersList.innerHTML = "";
  selectedAnswer = null;
  btnNext.disabled = true;

  // Render answers
  for (let i = 0; i < q.answers.length; i++) {
    const li = document.createElement("li");
    li.textContent = q.answers[i];
    li.tabIndex = 0; // keyboard focusable

    // Mouse select
    li.addEventListener("click", function () {
      chooseAnswer(i, li);
    });

    // Keyboard select (Enter / Space)
    li.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        chooseAnswer(i, li);
      }
    });

    answersList.appendChild(li);

    // Staggered appearance
    li.style.setProperty("--d", i * 70 + "ms");
    setTimeout(function () {
      li.classList.add("appear");
    }, 0);
  }
}

// Select an answer
function chooseAnswer(i, li) {
  // Clear previous selection
  for (let j = 0; j < answersList.children.length; j++) {
    answersList.children[j].classList.remove("selected");
  }
  // Mark current
  li.classList.add("selected");
  selectedAnswer = i;
  btnNext.disabled = false;
}

// Navigation buttons
btnNext.addEventListener("click", function () {
  if (selectedAnswer === null) return;
  checkAnswer(selectedAnswer);
});

btnResetHs.addEventListener("click", function () {
  highscoresByCategory[activeCategory] = 0;
  saveHighscores(highscoresByCategory);
  updateHighscoreUIForCategory(activeCategory);
});

// === Check answer and advance ===
function checkAnswer(selectedIndex) {
  const q = currentQuestions[index];
  if (selectedIndex === q.correct) score = score + 1;

  index = index + 1;
  if (index < currentQuestions.length) {
    showQuestion();
  } else {
    showEnd();
  }
}

// === Start/Restart ===
btnStart.addEventListener("click", function () {
  showQuiz();
});

// === High Score View ===
btnRestart.addEventListener("click", function () {
  showStart();
});

btnViewHs.addEventListener("click", showHighscores);

btnBack.addEventListener("click", function () {
  hsScreen.classList.add("hidden");
  showStart();
});

// === Init (start screen first) ===
showStart();
