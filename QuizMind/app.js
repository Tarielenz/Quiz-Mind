// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATA ---
    const questions = {
        "solar-system": [ { question: "Largest planet?", answers: [{ t: "Earth", c: false }, { t: "Jupiter", c: true }, { t: "Saturn", c: false }, { t: "Mars", c: false }] }, { question: "'Red Planet'?", answers: [{ t: "Venus", c: false }, { t: "Mars", c: true }, { t: "Mercury", c: false }, { t: "Uranus", c: false }] }, { question: "Center star name?", answers: [{ t: "Proxima Centauri", c: false }, { t: "Sirius", c: false }, { t: "The Sun", c: true }, { t: "Andromeda", c: false }] }, { question: "Planet with prominent rings?", answers: [{ t: "Jupiter", c: false }, { t: "Saturn", c: true }, { t: "Neptune", c: false }, { t: "Uranus", c: false }] }, { question: "Hottest planet?", answers: [{ t: "Mercury", c: false }, { t: "Venus", c: true }, { t: "Mars", c: false }, { t: "Jupiter", c: false }] }, { question: "Force keeping planets in orbit?", answers: [{ t: "Gravity", c: true }, { t: "Magnetism", c: false }, { t: "Friction", c: false }, { t: "Solar Wind", c: false }] }, { question: "Earth's natural satellite?", answers: [{ t: "Phobos", c: false }, { t: "Titan", c: false }, { t: "The Moon", c: true }, { t: "Europa", c: false }] }, { question: "Farthest planet from Sun?", answers: [{ t: "Uranus", c: false }, { t: "Saturn", c: false }, { t: "Neptune", c: true }, { t: "Pluto (Dwarf)", c: false }] }, { question: "What is a 'light-year'?", answers: [{ t: "Time unit", c: false }, { t: "Speed unit", c: false }, { t: "Distance unit", c: true }, { t: "Brightness unit", c: false }] }, { question: "Our galaxy's name?", answers: [{ t: "Andromeda", c: false }, { t: "Triangulum", c: false }, { t: "Milky Way", c: true }, { t: "Whirlpool", c: false }] }],
        "world-capitals": [ { question: "Capital of France?", answers: [{ t: "London", c: false }, { t: "Berlin", c: false }, { t: "Madrid", c: false }, { t: "Paris", c: true }] }, { question: "Capital of Japan?", answers: [{ t: "Tokyo", c: true }, { t: "Beijing", c: false }, { t: "Seoul", c: false }, { t: "Bangkok", c: false }] }, { question: "Capital of Australia?", answers: [{ t: "Sydney", c: false }, { t: "Melbourne", c: false }, { t: "Canberra", c: true }, { t: "Brisbane", c: false }] }, { question: "Capital of Nigeria?", answers: [{ t: "Lagos", c: false }, { t: "Kano", c: false }, { t: "Abuja", c: true }, { t: "Ibadan", c: false }] }, { question: "Capital of USA?", answers: [{ t: "New York", c: false }, { t: "Washington, D.C.", c: true }, { t: "Los Angeles", c: false }, { t: "Chicago", c: false }] }, { question: "Capital of Brazil?", answers: [{ t: "Rio", c: false }, { t: "São Paulo", c: false }, { t: "Brasília", c: true }, { t: "Salvador", c: false }] }, { question: "Capital of Egypt?", answers: [{ t: "Alexandria", c: false }, { t: "Cairo", c: true }, { t: "Giza", c: false }, { t: "Luxor", c: false }] }, { question: "Capital of Russia?", answers: [{ t: "St. Petersburg", c: false }, { t: "Kazan", c: false }, { t: "Sochi", c: false }, { t: "Moscow", c: true }] }, { question: "Capital of Canada?", answers: [{ t: "Toronto", c: false }, { t: "Vancouver", c: false }, { t: "Montreal", c: false }, { t: "Ottawa", c: true }] }, { question: "Capital of China?", answers: [{ t: "Shanghai", c: false }, { t: "Beijing", c: true }, { t: "Hong Kong", c: false }, { t: "Guangzhou", c: false }] }],
        "human-biology": [ { question: "Largest human organ?", answers: [{ t: "Brain", c: false }, { t: "Liver", c: false }, { t: "Skin", c: true }, { t: "Heart", c: false }] }, { question: "Organ pumping blood?", answers: [{ t: "Lungs", c: false }, { t: "Heart", c: true }, { t: "Kidney", c: false }, { t: "Stomach", c: false }] }, { question: "Bones in adult body?", answers: [{ t: "206", c: true }, { t: "300", c: false }, { t: "150", c: false }, { t: "256", c: false }] }, { question: "Main function of lungs?", answers: [{ t: "Pumping blood", c: false }, { t: "Filtering waste", c: false }, { t: "Breathing", c: true }, { t: "Digesting food", c: false }] }, { question: "Nervous system control center?", answers: [{ t: "Heart", c: false }, { t: "Spinal Cord", c: false }, { t: "Stomach", c: false }, { t: "Brain", c: true }] }, { question: "DNA stands for?", answers: [{ t: "Deoxyribonucleic Acid", c: true }, { t: "Duo Nucleic Acid", c: false }, { t: "Dyna Alloy", c: false }, { t: "Dense Archive", c: false }] }, { question: "Blood part fighting infection?", answers: [{ t: "Red Cells", c: false }, { t: "Plasma", c: false }, { t: "Platelets", c: false }, { t: "White Cells", c: true }] }, { question: "Smallest bone location?", answers: [{ t: "Foot", c: false }, { t: "Ear", c: true }, { t: "Hand", c: false }, { t: "Nose", c: false }] }, { question: "Skeleton's main purpose?", answers: [{ t: "Produce blood", c: false }, { t: "Support/Structure", c: true }, { t: "Digest food", c: false }, { t: "Add weight", c: false }] }, { question: "Acid in stomach?", answers: [{ t: "Sulphuric", c: false }, { t: "Hydrochloric", c: true }, { t: "Acetic", c: false }, { t: "Nitric", c: false }] }],
        "world-history": [ { question: "Renaissance began where?", answers: [{ t: "France", c: false }, { t: "England", c: false }, { t: "Spain", c: false }, { t: "Italy", c: true }] }, { question: "First man on Moon (1969)?", answers: [{ t: "Aldrin", c: false }, { t: "Gagarin", c: false }, { t: "Armstrong", c: true }, { t: "Collins", c: false }] }, { question: "Great Pyramid built for?", answers: [{ t: "Tutankhamun", c: false }, { t: "Ramesses II", c: false }, { t: "Cleopatra", c: false }, { t: "Khufu", c: true }] }, { question: "WWII ended what year?", answers: [{ t: "1945", c: true }, { t: "1918", c: false }, { t: "1939", c: false }, { t: "1950", c: false }] }, { question: "Printing press inventor (c. 1440)?", answers: [{ t: "Da Vinci", c: false }, { t: "Gutenberg", c: true }, { t: "Galileo", c: false }, { t: "Newton", c: false }] }, { question: "Roman Empire centered where?", answers: [{ t: "Athens", c: false }, { t: "London", c: false }, { t: "Rome", c: true }, { t: "Paris", c: false }] }, { question: "Wrote 'Romeo and Juliet'?", answers: [{ t: "Dickens", c: false }, { t: "Shakespeare", c: true }, { t: "Homer", c: false }, { t: "Austen", c: false }] }, { question: "Great Wall of China purpose?", answers: [{ t: "Floods", c: false }, { t: "Animals", c: false }, { t: "Northern Invasions", c: true }, { t: "Volcanoes", c: false }] }, { question: "Titanic sank what year?", answers: [{ t: "1912", c: true }, { t: "1905", c: false }, { t: "1898", c: false }, { t: "1920", c: false }] }, { question: "First US President?", answers: [{ t: "Lincoln", c: false }, { t: "Jefferson", c: false }, { t: "Washington", c: true }, { t: "Adams", c: false }] }],
        "animal-kingdom": [ { question: "Fastest land animal?", answers: [{ t: "Lion", c: false }, { t: "Pronghorn", c: false }, { t: "Cheetah", c: true }, { t: "Horse", c: false }] }, { question: "Largest mammal?", answers: [{ t: "Elephant", c: false }, { t: "Blue Whale", c: true }, { t: "Giraffe", c: false }, { t: "Hippo", c: false }] }, { question: "'King of the Jungle'?", answers: [{ t: "Tiger", c: false }, { t: "Gorilla", c: false }, { t: "Lion", c: true }, { t: "Elephant", c: false }] }, { question: "Baby goat name?", answers: [{ t: "Kid", c: true }, { t: "Calf", c: false }, { t: "Pup", c: false }, { t: "Lamb", c: false }] }, { question: "Bird mimicking speech?", answers: [{ t: "Eagle", c: false }, { t: "Penguin", c: false }, { t: "Ostrich", c: false }, { t: "Parrot", c: true }] }, { question: "Spider leg count?", answers: [{ t: "6", c: false }, { t: "8", c: true }, { t: "10", c: false }, { t: "4", c: false }] }, { question: "Group of lions?", answers: [{ t: "Pack", c: false }, { t: "Herd", c: false }, { t: "Flock", c: false }, { t: "Pride", c: true }] }, { question: "Mammal that flies?", answers: [{ t: "Flying Squirrel", c: false }, { t: "Bat", c: true }, { t: "Ostrich", c: false }, { t: "Penguin", c: false }] }, { question: "Tallest animal?", answers: [{ t: "Elephant", c: false }, { t: "Giraffe", c: true }, { t: "Ostrich", c: false }, { t: "Camel", c: false }] }, { question: "Animal with largest eggs?", answers: [{ t: "Whale", c: false }, { t: "Crocodile", c: false }, { t: "Eagle", c: false }, { t: "Ostrich", c: true }] }],
        "famous-landmarks": [ { question: "Eiffel Tower location?", answers: [{ t: "London", c: false }, { t: "Paris", c: true }, { t: "Rome", c: false }, { t: "Berlin", c: false }] }, { question: "Great Pyramids location?", answers: [{ t: "Rome", c: false }, { t: "Egypt", c: true }, { t: "Greece", c: false }, { t: "UK", c: false }] }, { question: "London clock tower name?", answers: [{ t: "Big Ben", c: true }, { t: "London Eye", c: false }, { t: "The Shard", c: false }, { t: "Tower Bridge", c: false }] }, { question: "Statue of Liberty location?", answers: [{ t: "DC", c: false }, { t: "LA", c: false }, { t: "New York", c: true }, { t: "Chicago", c: false }] }, { question: "Rome amphitheater name?", answers: [{ t: "Parthenon", c: false }, { t: "Colosseum", c: true }, { t: "Pantheon", c: false }, { t: "Forum", c: false }] }, { question: "Taj Mahal location?", answers: [{ t: "Agra, India", c: true }, { t: "Beijing", c: false }, { t: "Cairo", c: false }, { t: "Istanbul", c: false }] }, { question: "Sydney Opera House country?", answers: [{ t: "New Zealand", c: false }, { t: "UK", c: false }, { t: "Australia", c: true }, { t: "Canada", c: false }] }, { question: "Great Wall location?", answers: [{ t: "Japan", c: false }, { t: "Mongolia", c: false }, { t: "China", c: true }, { t: "Korea", c: false }] }, { question: "Leaning Tower location?", answers: [{ t: "Rome", c: false }, { t: "Venice", c: false }, { t: "Florence", c: false }, { t: "Pisa", c: true }] }, { question: "Mount Rushmore state?", answers: [{ t: "California", c: false }, { t: "South Dakota", c: true }, { t: "Texas", c: false }, { t: "New York", c: false }] }],
        "physics-basics": [ { question: "Force pulling objects to Earth?", answers: [{ t: "Magnetism", c: false }, { t: "Gravity", c: true }, { t: "Friction", c: false }, { t: "Inertia", c: false }] }, { question: "Newton's 2nd Law (Force)?", answers: [{ t: "E=mc²", c: false }, { t: "F=ma", c: true }, { t: "P=IV", c: false }, { t: "V=IR", c: false }] }, { question: "Three states of matter?", answers: [{ t: "Solid, Liquid, Gas", c: true }, { t: "Hot, Cold, Warm", c: false }, { t: "Rock, Water, Air", c: false }, { t: "Hard, Soft, Spongy", c: false }] }, { question: "Speed of light (km/s)?", answers: [{ t: "300k km/h", c: false }, { t: "300,000", c: true }, { t: "3,000", c: false }, { t: "30,000", c: false }] }, { question: "Color reflecting all light?", answers: [{ t: "Black", c: false }, { t: "White", c: true }, { t: "Red", c: false }, { t: "Blue", c: false }] }, { question: "Opposite of friction?", answers: [{ t: "Momentum", c: false }, { t: "Smoothness", c: true }, { t: "Gravity", c: false }, { t: "Acceleration", c: false }] }, { question: "'E=mc²' stands for?", answers: [{ t: "Energy=Mass*c²", c: true }, { t: "Electricity=Mass*c²", c: false }, { t: "Energy=Momentum*c²", c: false }, { t: "Efficiency=Mass*c²", c: false }] }, { question: "Sound caused by?", answers: [{ t: "Light", c: false }, { t: "Vibrations", c: true }, { t: "Heat", c: false }, { t: "Silence", c: false }] }, { question: "Theory of Relativity developer?", answers: [{ t: "Newton", c: false }, { t: "Einstein", c: true }, { t: "Galileo", c: false }, { t: "Hawking", c: false }] }, { question: "Simple machine: 'lever'?", answers: [{ t: "Screw type", c: false }, { t: "Lifting tool", c: true }, { t: "Measurement unit", c: false }, { t: "Gear type", c: false }] }],
        "chemistry-basics": [ { question: "H₂O chemical name?", answers: [{ t: "Salt", c: false }, { t: "Sugar", c: false }, { t: "Water", c: true }, { t: "CO₂", c: false }] }, { question: "Symbol for Gold?", answers: [{ t: "Go", c: false }, { t: "Gd", c: false }, { t: "Au", c: true }, { t: "Ag", c: false }] }, { question: "Symbol for Oxygen?", answers: [{ t: "O", c: true }, { t: "Ox", c: false }, { t: "Oy", c: false }, { t: "On", c: false }] }, { question: "Main gas in air?", answers: [{ t: "Oxygen", c: false }, { t: "CO₂", c: false }, { t: "Nitrogen", c: true }, { t: "Hydrogen", c: false }] }, { question: "CO₂ chemical name?", answers: [{ t: "Carbon Monoxide", c: false }, { t: "Carbon Dioxide", c: true }, { t: "Calcium", c: false }, { t: "Copper", c: false }] }, { question: "Liquid to gas process?", answers: [{ t: "Freezing", c: false }, { t: "Condensation", c: false }, { t: "Evaporation", c: true }, { t: "Melting", c: false }] }, { question: "Solid to liquid process?", answers: [{ t: "Freezing", c: false }, { t: "Melting", c: true }, { t: "Evaporation", c: false }, { t: "Condensation", c: false }] }, { question: "Lightest element?", answers: [{ t: "Helium", c: false }, { t: "Oxygen", c: false }, { t: "Hydrogen", c: true }, { t: "Carbon", c: false }] }, { question: "Symbol for Sodium (Na)?", answers: [{ t: "S", c: false }, { t: "So", c: false }, { t: "Na", c: true }, { t: "Sm", c: false }] }, { question: "pH of pure water?", answers: [{ t: "0", c: false }, { t: "7", c: true }, { t: "14", c: false }, { t: "10", c: false }] }],
        "sports-trivia": [ { question: "Sport with 'touchdown'?", answers: [{ t: "Am. Football", c: true }, { t: "Basketball", c: false }, { t: "Soccer", c: false }, { t: "Baseball", c: false }] }, { question: "Soccer players on field?", answers: [{ t: "9", c: false }, { t: "10", c: false }, { t: "11", c: true }, { t: "12", c: false }] }, { question: "Olympics frequency?", answers: [{ t: "2 years", c: false }, { t: "4 years", c: true }, { t: "5 years", c: false }, { t: "8 years", c: false }] }, { question: "Max bowling frame score?", answers: [{ t: "10", c: false }, { t: "30", c: true }, { t: "100", c: false }, { t: "300", c: false }] }, { question: "2022 World Cup winner?", answers: [{ t: "France", c: false }, { t: "Brazil", c: false }, { t: "Argentina", c: true }, { t: "Germany", c: false }] }, { question: "Basketball free throw points?", answers: [{ t: "1point", c: true }, { t: "2 points", c: false }, { t: "3 points", c: false }, { t: "4 points", c: false }] }, { question: "Famous French cycling race?", answers: [{ t: "Giro d'Italia", c: false }, { t: "Tour de France", c: true }, { t: "Vuelta a España", c: false }, { t: "Tour de Suisse", c: false }] }, { question: "Tennis 'King of Clay'?", answers: [{ t: "Federer", c: false }, { t: "Djokovic", c: false }, { t: "Nadal", c: true }, { t: "Murray", c: false }] }, { question: "Sport at Wimbledon?", answers: [{ t: "Golf", c: false }, { t: "Cricket", c: false }, { t: "Tennis", c: true }, { t: "Horse Racing", c: false }] }, { question: "Olympic logo rings count?", answers: [{ t: "4", c: false }, { t: "5", c: true }, { t: "6", c: false }, { t: "7", c: false }] }],
        "modern-technology": [ { question: "'CPU' stands for?", answers: [{ t: "Central Processing Unit", c: true }, { t: "Computer Unit", c: false }, { t: "Central Power", c: false }, { t: "Core Unit", c: false }] }, { question: "'RAM' stands for?", answers: [{ t: "Read Access", c: false }, { t: "Random Access Memory", c: true }, { t: "Run Module", c: false }, { t: "Realtime Module", c: false }] }, { question: "iPhone maker?", answers: [{ t: "Samsung", c: false }, { t: "Google", c: false }, { t: "Apple", c: true }, { t: "Microsoft", c: false }] }, { question: "'Wi-Fi' stands for?", answers: [{ t: "Wireless Fidelity", c: true }, { t: "Wireless File", c: false }, { t: "Wired Fidelity", c: false }, { t: "Wireless Finality", c: false }] }, { question: "What is a 'URL'?", answers: [{ t: "Language", c: false }, { t: "Web Address", c: true }, { t: "Hardware", c: false }, { t: "Software", c: false }] }, { question: "'HTML' stands for?", answers: [{ t: "HyperText Markup Language", c: true }, { t: "HighText", c: false }, { t: "Hyperlink", c: false }, { t: "Home Tool", c: false }] }, { question: "'AI' stands for?", answers: [{ t: "Automated Interface", c: false }, { t: "Artificial Intelligence", c: true }, { t: "Advanced Internet", c: false }, { t: "Automated Internet", c: false }] }, { question: "'Cloud computing' is?", answers: [{ t: "Local storage", c: false }, { t: "Internet storage/access", c: true }, { t: "Weather forecast", c: false }, { t: "Laptop type", c: false }] }, { question: "'USB' stands for?", answers: [{ t: "Universal Serial Bus", c: true }, { t: "United Serial", c: false }, { t: "Universal System", c: false }, { t: "Unified Serial", c: false }] }, { question: "'Windows' OS developer?", answers: [{ t: "Apple", c: false }, { t: "Google", c: false }, { t: "Microsoft", c: true }, { t: "Linux", c: false }] }]
    };

    // --- 2. STATE VARIABLES ---
    let currentUser = null; // Will hold { name, nickname, country, password }
    let currentTopic = '';
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timerInterval;
    let quizTimeLimit = 15; // Default time limit (medium)
    let timeLeft = quizTimeLimit;
    let currentStreak = 0;
    let bestStreak = 0; // Highest streak achieved in session
    let questionsPerQuiz = 10; // Default number of questions
    let totalCorrectAnswers = 0;
    let totalQuestionsAttempted = 0;

    // Chart instances
    let weeklyChart = null;
    let categoryChart = null;

    // --- 3. LOCAL STORAGE & STATS VARIABLES ---
    let theme = localStorage.getItem('quizMind_theme') || 'light';
    let topicScores = {};
    let totalQuizzes = 0;
    let mistakes = [];
    let difficulty = 'medium';
    questionsPerQuiz = 10;
    let weeklyScores = [];
    bestStreak = 0;

    // --- 4. ELEMENT SELECTORS ---
    // Auth
    const authModalOverlay = document.getElementById('auth-modal-overlay');
    const signInModal = document.getElementById('signin-modal');
    const signUpModal = document.getElementById('signup-modal');
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');
    const signInError = document.getElementById('signin-error');
    const signUpError = document.getElementById('signup-error');
    const showSignUpLink = document.getElementById('show-signup-link');
    const showSignInLink = document.getElementById('show-signin-link');

    // Main App
    const appContainer = document.querySelector('.app-container');
    const pages = document.querySelectorAll('.page');
    const menuLinks = document.querySelectorAll('.menu-link');
    const logoutBtn = document.getElementById('logout-btn'); // Added logout button

    // Dashboard
    const welcomeMessage = document.getElementById('welcome-message');
    const statTotalQuizzes = document.getElementById('stat-total-quizzes');
    const statAccuracy = document.getElementById('stat-accuracy');
    const statQuestionsSolved = document.getElementById('stat-questions-solved');
    const statBestStreak = document.getElementById('stat-best-streak');
    const weeklyCanvas = document.getElementById('weeklyPerformanceChart');
    const categoryCanvas = document.getElementById('categoryPerformanceChart');

    // Quiz Selection
    const topicGrid = document.getElementById('topic-grid');

    // Quiz Game
    const quizTopicTitle = document.getElementById('quiz-topic-title');
    const quizTimer = document.getElementById('quiz-timer');
    const progressBar = document.getElementById('progress-bar');
    const questionText = document.getElementById('question-text');
    const streakCounter = document.getElementById('streak-counter');
    const answerOptions = document.getElementById('answer-options');
    const nextBtn = document.getElementById('next-btn');

    // Review Mistakes
    const mistakesContainer = document.getElementById('mistakes-container');

    // Settings
    const profileUpdateForm = document.getElementById('profile-update-form');
    const updateNameInput = document.getElementById('update-name');
    const updateNicknameInput = document.getElementById('update-nickname');
    const profileUpdateSuccess = document.getElementById('profile-update-success');
    const themeToggle = document.getElementById('theme-toggle');
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    const questionsSlider = document.getElementById('questions-slider');
    const questionsCountSpan = document.getElementById('questions-count');
    const clearScoresBtn = document.getElementById('clear-scores-btn');
    const clearMistakesBtn = document.getElementById('clear-mistakes-btn');

    // --- 5. INITIALIZATION ---

    function initializeApp() {
        applyTheme();
        loadSettingsFromStorage(); // Load general settings
        
        // --- Auth Listeners ---
        showSignUpLink.addEventListener('click', (e) => {
            e.preventDefault();
            signInModal.classList.remove('active');
            signUpModal.classList.add('active');
        });

        showSignInLink.addEventListener('click', (e) => {
            e.preventDefault();
            signUpModal.classList.remove('active');
            signInModal.classList.add('active');
        });

        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            const nickname = document.getElementById('signup-nickname').value;
            const country = document.getElementById('signup-country').value;
            const password = document.getElementById('signup-password').value;

            // Simple check if user exists (by name)
            if (localStorage.getItem(`quizMind_user_${name}`)) {
                signUpError.textContent = 'A user with this name already exists.';
                signUpError.style.display = 'block';
                return;
            }

            currentUser = { name, nickname, country, password };
            // Save user data
            localStorage.setItem(`quizMind_user_${name}`, JSON.stringify(currentUser));
            localStorage.setItem('quizMind_currentUser', name); // Track logged-in user
            
            enterApp();
        });

        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signin-name').value;
            const password = document.getElementById('signin-password').value;
            
            const userData = localStorage.getItem(`quizMind_user_${name}`);
            
            if (!userData) {
                signInError.textContent = 'No account found with this name.';
                signInError.style.display = 'block';
                return;
            }

            const user = JSON.parse(userData);
            
            if (user.password === password) {
                currentUser = user;
                localStorage.setItem('quizMind_currentUser', name); // Track logged-in user
                enterApp();
            } else {
                signInError.textContent = 'Incorrect password. Please try again.';
                signInError.style.display = 'block';
            }
        });
        
        // --- General Settings Listeners ---
        themeToggle.addEventListener('change', (e) => {
            theme = e.target.checked ? 'dark' : 'light';
            localStorage.setItem('quizMind_theme', theme);
            applyTheme();
        });
        
        difficultyButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                difficulty = e.target.dataset.difficulty;
                localStorage.setItem(`${currentUser.name}_difficulty`, difficulty);
                difficultyButtons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                setTimerLimit(difficulty);
            });
        });

        questionsSlider.addEventListener('input', (e) => {
            questionsPerQuiz = parseInt(e.target.value);
            questionsCountSpan.textContent = questionsPerQuiz;
        });
        questionsSlider.addEventListener('change', () => {
            localStorage.setItem(`${currentUser.name}_questionsPerQuiz`, questionsPerQuiz.toString());
        });

        clearScoresBtn.addEventListener('click', () => {
            topicScores = {}; totalQuizzes = 0; weeklyScores = []; bestStreak = 0; totalCorrectAnswers = 0; totalQuestionsAttempted = 0;
            saveStatsToStorage();
            updateDashboardCalculations();
            updateDashboardUI();
            console.log('All scores and stats have been cleared.');
        });

        clearMistakesBtn.addEventListener('click', () => {
            mistakes = [];
            saveMistakes();
            loadMistakes();
            console.log('Mistakes list has been cleared.');
        });

        // --- Profile Settings Listener ---
        profileUpdateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newName = updateNameInput.value;
            const newNickname = updateNicknameInput.value;

            // If name changed, we need to update the key in localStorage
            if (currentUser.name !== newName) {
                localStorage.removeItem(`quizMind_user_${currentUser.name}`); // Remove old
            }
            
            // Update current user object
            currentUser.name = newName;
            currentUser.nickname = newNickname;

            // Save new data
            localStorage.setItem(`quizMind_user_${newName}`, JSON.stringify(currentUser));
            localStorage.setItem('quizMind_currentUser', newName); // Update current user pointer

            // Update UI
            welcomeMessage.textContent = `Welcome back, ${currentUser.nickname}!`;
            profileUpdateSuccess.textContent = 'Profile updated successfully!';
            profileUpdateSuccess.style.display = 'block';
            setTimeout(() => {
                profileUpdateSuccess.style.display = 'none';
            }, 2000);
        });

        // --- Main Navigation Listeners ---
        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                let pageId;
                if (link.id === 'start-quiz-link') {
                    pageId = 'quiz-selection-page';
                } else if (link.id === 'review-link') {
                    pageId = 'review-mistakes-page';
                } else {
                    pageId = link.id.replace('-link', '-page');
                }
                showPage(pageId);
            });
        });
        
        // --- Logout Listener ---
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('quizMind_currentUser');
            location.reload(); // Reload the page
        });

        renderIcons(); // Render all icons on load
        checkLogin(); // Check if user is already logged in
    }
    
    function checkLogin() {
        const currentUserName = localStorage.getItem('quizMind_currentUser');
        if (currentUserName) {
            const userData = localStorage.getItem(`quizMind_user_${currentUserName}`);
            if (userData) {
                currentUser = JSON.parse(userData);
                enterApp(); // Automatically log in
                return;
            }
        }
        // No user found or data mismatch, show auth modal
        authModalOverlay.classList.add('active');
        signInModal.classList.add('active'); // Default to sign-in
    }

    function enterApp() {
        // Hide auth modal
        authModalOverlay.classList.remove('active');
        signInModal.classList.remove('active');
        signUpModal.classList.remove('active');
        
        // Show main app
        if(appContainer) appContainer.style.display = 'flex';
        
        // Load user-specific data
        loadUserStats();
        loadSettingsFromStorage();
        
        // Populate dynamic content
        welcomeMessage.textContent = `Welcome back, ${currentUser.nickname}!`;
        updateNameInput.value = currentUser.name;
        updateNicknameInput.value = currentUser.nickname;
        
        updateDashboardCalculations();
        updateDashboardUI();
        populateTopics();
        
        // Show the dashboard
        showPage('dashboard-page');
        renderIcons(); // Re-render icons after showing app
    }

    // Render Lucide Icons
    function renderIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        } else {
            console.error("Lucide library not found.");
        }
    }

    // --- 6. NAVIGATION ---

    function showPage(pageId) {
        pages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        } else {
            console.error("Target page not found:", pageId);
            return;
        }

        menuLinks.forEach(link => link.classList.remove('active'));
        let finalActiveLink;
        if (pageId === 'review-mistakes-page') {
            finalActiveLink = document.getElementById('review-link');
        } else if (pageId === 'quiz-selection-page' || pageId === 'quiz-game-page') {
            finalActiveLink = document.getElementById('start-quiz-link');
        } else {
             finalActiveLink = document.getElementById(pageId.replace('-page', '-link'));
        }

        if (finalActiveLink) {
            finalActiveLink.classList.add('active');
        }

        // Run functions when specific pages are shown
        if (pageId === 'dashboard-page') {
             updateDashboardCalculations(); // Recalculate stats
             updateDashboardUI(); // Redraw UI and charts
        }
        if (pageId === 'review-mistakes-page') loadMistakes();
        if (pageId === 'quiz-selection-page') populateTopics();
    }


    // --- 7. DASHBOARD LOGIC ---

    /**
     * Helper function to get theme colors safely.
     */
    function getThemeColor(variable) {
        return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    }

    function updateDashboardCalculations() {
        totalQuestionsAttempted = 0;
        totalCorrectAnswers = 0;
        Object.values(topicScores).forEach(topic => {
            totalCorrectAnswers += (topic.correct || 0);
            totalQuestionsAttempted += (topic.attempted || 0);
        });
        const accuracy = totalQuestionsAttempted > 0 ? (totalCorrectAnswers / totalQuestionsAttempted) * 100 : 0;

        window.dashboardStats = {
            totalQuizzes: totalQuizzes,
            accuracy: accuracy,
            questionsSolved: totalCorrectAnswers,
            bestStreak: bestStreak
        };
    }

    function updateDashboardUI() {
        const stats = window.dashboardStats;
        statTotalQuizzes.textContent = stats.totalQuizzes;
        statAccuracy.textContent = `${stats.accuracy.toFixed(1)}%`;
        statQuestionsSolved.textContent = stats.questionsSolved;
        statBestStreak.textContent = stats.bestStreak;

        renderWeeklyChart();
        renderCategoryChart();
    }

    // --- CHART RENDERING ---

    function renderWeeklyChart() {
        if (!weeklyCanvas) return;
        const ctx = weeklyCanvas.getContext('2d');
        if (weeklyChart) {
            weeklyChart.destroy();
        }

        // Get theme colors
        const primaryColor = getThemeColor('--primary-color');
        const textColorLight = getThemeColor('--text-color-light');
        const borderColor = getThemeColor('--border-color');
        const cardBg = getThemeColor('--card-bg');
        const textColor = getThemeColor('--text-color');

        const recentScores = weeklyScores.slice(-7);
        const labels = recentScores.map((_, i) => `Quiz ${totalQuizzes - recentScores.length + i + 1}`);

        weeklyChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Score (%)',
                    data: recentScores,
                    borderColor: primaryColor,
                    backgroundColor: `${primaryColor}1A`, // Use hex + alpha
                    borderWidth: 2.5,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: primaryColor,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { color: textColorLight },
                        grid: { color: borderColor },
                        title: { 
                            display: false,
                            color: textColor // Set title color
                        }
                    },
                     x: {
                         ticks: { color: textColorLight },
                         grid: { display: false },
                         title: {
                            display: false,
                            color: textColor // Set title color
                        }
                     }
                },
                plugins: {
                    legend: { 
                        display: false,
                        labels: {
                            color: textColorLight // Set legend color
                        }
                    },
                    tooltip: {
                        backgroundColor: cardBg,
                        titleColor: textColor,
                        bodyColor: textColorLight,
                        borderColor: borderColor,
                        borderWidth: 1,
                    }
                }
            }
        });
    }

    function renderCategoryChart() {
         if (!categoryCanvas) return;
        const ctx = categoryCanvas.getContext('2d');
        if (categoryChart) {
            categoryChart.destroy();
        }
        
        // Get theme colors
        const cardBg = getThemeColor('--card-bg');
        const textColorLight = getThemeColor('--text-color-light');
        const textColor = getThemeColor('--text-color');
        const borderColor = getThemeColor('--border-color');

        const labels = Object.keys(topicScores).map(topic => formatTopicName(topic));
        const data = Object.values(topicScores).map(topic => topic.correct || 0);
        
        // FIX: Define colors using CSS vars (without the 'var()' wrapper) or hex codes
         const chartColors = [
             '--primary-color', // Will be resolved by getThemeColor
             '--accent-color',  // Will be resolved by getThemeColor
             '#7b3ae0',
             '#e04494',
             '#a06fff',
             '#ff8ace',
             '#c39eff',
             '#fface0',
             '#d070e0',
             '#ad53cc'
         ].map(color => {
            if (color.startsWith('--')) {
                return getThemeColor(color); // Get CSS variable value
            }
            return color; // Use the hex code directly
         });

        categoryChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Correct Answers',
                    data: data,
                    backgroundColor: chartColors.slice(0, data.length),
                    borderColor: cardBg,
                    borderWidth: 3,
                    hoverOffset: 10,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                         labels: {
                             boxWidth: 12,
                             padding: 15,
                             color: textColorLight // Set legend label color
                        }
                    },
                     tooltip: {
                        backgroundColor: cardBg,
                        titleColor: textColor,
                        bodyColor: textColorLight,
                        borderColor: borderColor,
                        borderWidth: 1,
                    }
                },
                 cutout: '60%'
            }
        });
    }


    // --- 8. THEME & SETTINGS LOGIC ---

    function applyTheme() {
        document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
        themeToggle.checked = theme === 'dark';
        // Re-render charts with new theme colors after a short delay
        setTimeout(() => {
            if (weeklyChart) renderWeeklyChart();
            if (categoryChart) renderCategoryChart();
        }, 50);
    }

    function loadSettingsFromStorage() {
        // Load general theme
        theme = localStorage.getItem('quizMind_theme') || 'light';
        applyTheme();

        if (currentUser) {
             // Load user-specific settings
            difficulty = localStorage.getItem(`${currentUser.name}_difficulty`) || 'medium';
            questionsPerQuiz = parseInt(localStorage.getItem(`${currentUser.name}_questionsPerQuiz`) || '10');
        } else {
            // Default settings if no user (shouldn't happen post-login, but good for safety)
            difficulty = 'medium';
            questionsPerQuiz = 10;
        }
       
        difficultyButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.difficulty === difficulty);
        });
        setTimerLimit(difficulty);
        questionsSlider.value = questionsPerQuiz;
        questionsCountSpan.textContent = questionsPerQuiz;
    }

    function loadUserStats() {
        if (!currentUser) return;
        const name = currentUser.name;
        topicScores = JSON.parse(localStorage.getItem(`${name}_topicScores`)) || {};
        totalQuizzes = parseInt(localStorage.getItem(`${name}_totalQuizzes`)) || 0;
        mistakes = JSON.parse(localStorage.getItem(`${name}_mistakes`)) || [];
        weeklyScores = JSON.parse(localStorage.getItem(`${name}_weeklyScores`)) || [];
        bestStreak = parseInt(localStorage.getItem(`${name}_bestStreak`)) || 0;
    }

    function saveStatsToStorage() {
        if (!currentUser) return;
        const name = currentUser.name;
        localStorage.setItem(`${name}_topicScores`, JSON.stringify(topicScores));
        localStorage.setItem(`${name}_totalQuizzes`, totalQuizzes.toString());
        localStorage.setItem(`${name}_weeklyScores`, JSON.stringify(weeklyScores));
        localStorage.setItem(`${name}_bestStreak`, bestStreak.toString());
    }


     function setTimerLimit(level) {
        switch (level) {
            case 'easy': quizTimeLimit = 20; break;
            case 'hard': quizTimeLimit = 10; break;
            case 'medium':
            default: quizTimeLimit = 15; break;
        }
        timeLeft = quizTimeLimit;
    }
    
    // --- 9. QUIZ SELECTION & UTILITIES---

    function formatTopicName(topicKey) {
        return topicKey.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }

    function populateTopics() {
        topicGrid.innerHTML = '';
        Object.keys(questions).forEach(topic => {
            const card = document.createElement('div');
            card.className = 'topic-card card';
            const topicName = formatTopicName(topic);
            card.innerHTML = `
                <h3>${topicName}</h3>
                <p class="topic-card-score">Tap to start</p>
            `;
            card.dataset.topic = topic;
            card.addEventListener('click', () => startQuiz(topic));
            topicGrid.appendChild(card);
        });
    }

     function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // --- 10. QUIZ GAME LOGIC ---

    function startQuiz(topic) {
        currentTopic = topic;
        const allTopicQuestions = questions[topic];
        const numAvailable = allTopicQuestions.length;
        // Use user-defined questionsPerQuiz
        const numToTake = Math.min(questionsPerQuiz, numAvailable);
        currentQuestions = shuffleArray([...allTopicQuestions]).slice(0, numToTake);

        if (currentQuestions.length === 0) {
            console.error("No questions available for topic:", topic);
            showPage('quiz-selection-page');
            return;
        }

        currentQuestionIndex = 0;
        score = 0;
        currentStreak = 0;
        timeLeft = quizTimeLimit; // Use user-defined time limit
        quizTopicTitle.textContent = formatTopicName(topic);
        showPage('quiz-game-page');
        showQuestion();
    }


    function showQuestion() {
        resetState();
        startTimer();
        const question = currentQuestions[currentQuestionIndex];
        const questionCount = currentQuestions.length;
        questionText.textContent = `(${currentQuestionIndex + 1}/${questionCount}) ${question.question}`;
        progressBar.style.width = `${((currentQuestionIndex + 1) / questionCount) * 100}%`;
        streakCounter.textContent = `🔥 Streak: ${currentStreak}`;
        const displayAnswers = shuffleArray([...question.answers]);
        displayAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.t;
            button.className = 'btn answer-btn';
            button.dataset.correct = answer.c;
            button.addEventListener('click', selectAnswer);
            answerOptions.appendChild(button);
        });
    }

    function resetState() {
        clearInterval(timerInterval);
        timeLeft = quizTimeLimit;
        if (quizTimeLimit > 0) {
             quizTimer.textContent = `Time: ${timeLeft}`;
        } else {
             quizTimer.textContent = "No Limit";
        }
        nextBtn.style.display = 'none';
        while (answerOptions.firstChild) {
            answerOptions.removeChild(answerOptions.firstChild);
        }
    }

    function startTimer() {
        if (quizTimeLimit <= 0) {
             quizTimer.textContent = "No Limit";
            return;
        }
        quizTimer.textContent = `Time: ${timeLeft}`;
        timerInterval = setInterval(() => {
            timeLeft--;
            quizTimer.textContent = `Time: ${timeLeft}`;
            if (timeLeft < 0) {
                timeLeft = 0;
                quizTimer.textContent = `Time: ${timeLeft}`;
                clearInterval(timerInterval);
                handleTimeout();
            }
        }, 1000);
    }

    function selectAnswer(e) {
        clearInterval(timerInterval);
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === 'true';
        if (!topicScores[currentTopic]) {
            topicScores[currentTopic] = { correct: 0, attempted: 0 };
        }
        topicScores[currentTopic].attempted++;
        if (isCorrect) {
            score++;
            currentStreak++;
            topicScores[currentTopic].correct++;
            selectedBtn.classList.add('correct');
        } else {
            currentStreak = 0;
            selectedBtn.classList.add('incorrect');
            const question = currentQuestions[currentQuestionIndex];
            const correctAnswerText = question.answers.find(a => a.c).t;
            if (!mistakes.some(m => m.question === question.question)) {
                mistakes.unshift({
                    question: question.question,
                    yourAnswer: selectedBtn.textContent,
                    correctAnswer: correctAnswerText,
                    topic: currentTopic
                });
                saveMistakes();
            }
        }
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
        }
        streakCounter.textContent = `🔥 Streak: ${currentStreak}`;
        Array.from(answerOptions.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
            button.disabled = true;
        });
        nextBtn.style.display = 'block';
    }

    function handleTimeout() {
        currentStreak = 0;
        streakCounter.textContent = `🔥 Streak: ${currentStreak}`;
         if (!topicScores[currentTopic]) {
             topicScores[currentTopic] = { correct: 0, attempted: 0 };
         }
         topicScores[currentTopic].attempted++;
        const question = currentQuestions[currentQuestionIndex];
        const correctAnswerText = question.answers.find(a => a.c).t;
        if (!mistakes.some(m => m.question === question.question)) {
            mistakes.unshift({
                question: question.question,
                yourAnswer: "No answer (Time's Up)",
                correctAnswer: correctAnswerText,
                topic: currentTopic
            });
            saveMistakes();
        }
        Array.from(answerOptions.children).forEach(button => {
            if (button.dataset.correct === 'true') button.classList.add('correct');
            button.disabled = true;
        });
        nextBtn.style.display = 'block';
    }

    nextBtn.addEventListener('click', handleNextButton);

    function handleNextButton(){
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        totalQuizzes++;
        const finalScorePercent = currentQuestions.length > 0 ? (score / currentQuestions.length) * 100 : 0;
        weeklyScores.push(finalScorePercent);
        if (weeklyScores.length > 7) {
            weeklyScores.shift();
        }
        
        // Save all user stats
        saveStatsToStorage();
        showPage('dashboard-page');
    }

    // --- 11. REVIEW MISTAKES LOGIC ---

    function loadMistakes() {
        const savedMistakes = mistakes;
        mistakesContainer.innerHTML = '';
        if (savedMistakes.length === 0) {
            mistakesContainer.innerHTML = '<p style="text-align: center; color: var(--text-color-light);">You haven\'t made any mistakes yet. Keep it up!</p>';
            return;
        }
        savedMistakes.forEach(mistake => {
            const item = document.createElement('div');
            item.className = 'mistake-item card';
            item.innerHTML = `
                <p classType"mistake-topic">${formatTopicName(mistake.topic || 'Unknown')}</p>
                <p class="mistake-question">Q: ${mistake.question}</p>
                <p class="mistake-answer">Your answer: ${mistake.yourAnswer}</p>
                <p class="mistake-correct-answer">Correct answer: ${mistake.correctAnswer}</p>
            `;
            mistakesContainer.appendChild(item);
        });
    }

    function saveMistakes() {
        if (!currentUser) return;
        const mistakesToSave = mistakes.slice(0, 50);
        localStorage.setItem(`${currentUser.name}_mistakes`, JSON.stringify(mistakesToSave));
    }

    // --- RUN INITIALIZATION ---
    initializeApp();

});

