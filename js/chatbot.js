// Advanced AI Chatbot for Nyenzo Isabwa
class NyenzoChatbot {
    constructor() {
        this.knowledgeBase = this.initializeKnowledgeBase();
        this.conversationHistory = [];
        this.isOpen = false;
        this.sentimentScore = 0; // Track sentiment (positive, negative, neutral)
        this.hasShownWelcome = false;
        this.tooltipState = 0; // 0: Hi there, 1: Ask me anything
        this.followUpQuestion = null; // Store follow-up question
        this.init();
    }

    initializeKnowledgeBase() {
        return {
            personal: {
                name: "Peter Nyenzo Isabwa",
                title: "Data Scientist",
                location: "Nairobi, Kenya",
                phone: "(+254) 796-952247",
                email: "nyenzoisabwa@gmail.com",
                linkedin: "https://www.linkedin.com/in/nyenzo-isabwa-5b0734352/",
                github: "https://github.com/Nyenzo",
                website: "nyenzo.github.io",
                background: "I am a dedicated Data Scientist with expertise in machine learning, data analysis, and web development. My passion lies in transforming data into actionable insights and developing robust machine learning models to address real-world challenges. I thrive in environments with minimal supervision and excel at meeting tight deadlines. Additionally, I have a keen interest in creating interactive websites and web applications.",
                philosophy: "Data is the new oil, and AI is the engine that drives innovation. I'm passionate about building the bridge between raw data and meaningful insights."
            },
            education: {
                degree: "Bachelor of Science in Mathematics and Computer Science",
                institution: "JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY",
                duration: "Sep 2018 - May 2025",
                focus: "Mathematics, Computer Science, Data Analysis, Machine Learning",
                achievements: ["Academic Excellence", "Research Project on Pregnancy Outcomes Prediction"],
                certifications: [
                    {
                        name: "Certification in AI",
                        issuer: "HUAWEI",
                        year: "Feb 2025 - Jun 2025",
                        description: "Artificial Intelligence and machine learning technologies"
                    },
                    {
                        name: "Certification in Software Engineering",
                        issuer: "ALX AFRICA",
                        year: "Feb 2023 - Apr 2024",
                        description: "Software engineering principles and practices"
                    }
                ]
            },
            skills: {
                programming: {
                    python: { description: "Primary language for data science and ML" },
                    javascript: { description: "Full-stack web development" },
                    nodejs: { description: "Backend API development" },
                    nextjs: { description: "React framework for production" }
                },
                dataScience: {
                    machineLearning: { description: "Scikit-learn, TensorFlow, PyTorch" },
                    deepLearning: { description: "Neural networks and advanced ML" },
                    dataAnalysis: { description: "Pandas, NumPy, Matplotlib, Seaborn" },
                    statistics: { description: "Statistical modeling and hypothesis testing" }
                },
                webDevelopment: {
                    react: { description: "Modern frontend development" },
                    nodejs: { description: "Backend API development" },
                    htmlcss: { description: "Responsive web design" },
                    nextjs: { description: "React framework for production" },
                    firebase: { description: "Backend-as-a-Service platform" }
                },
                databases: {
                    mysql: { description: "Relational database management" },
                    mongodb: { description: "NoSQL document database" },
                    postgresql: { description: "Advanced open-source database" }
                },
                tools: {
                    git: { description: "Version control and collaboration" },
                    gitHub: { description: "Code repository and collaboration" }
                },
                softSkills: {
                    problemSolving: { description: "Analytical and critical thinking" },
                    teamwork: { description: "Collaboration and team leadership" },
                    timeManagement: { description: "Meeting tight deadlines" },
                    leadership: { description: "Team leadership and project management" },
                    communication: { description: "Effective verbal and written communication" },
                    criticalThinking: { description: "Analytical problem-solving approach" }
                }
            },
            projects: {
                pregnancyPrediction: {
                    name: "Predicting Adverse Pregnancy Outcomes in Kenya Using Machine Learning",
                    institution: "JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY",
                    duration: "Oct 2024 - Apr 2025",
                    supervisor: "Dr. Barini",
                    description: "Developed a decision tree-based machine learning model to predict adverse pregnancy outcomes using the 2022 Kenya Demographic and Health Survey (KDHS) dataset",
                    technologies: ["Machine Learning", "Python", "Data Analysis", "Decision Trees", "Statistical Modeling"],
                    features: [
                        "Analyzed key factors such as total pregnancies, birth intervals, and education level to identify risk patterns",
                        "Achieved up to 90.83% sensitivity in prediction models",
                        "Compared weighted and unweighted models to assess prediction reliability",
                        "Provided actionable insights for targeted maternal healthcare interventions in Kenya"
                    ],
                    impact: "Research project with potential to improve maternal healthcare outcomes in Kenya"
                },
                aiInvestmentAdvisor: {
                    name: "AI Investment Advisor with Stock Predictor",
                    description: "Developed an AI investment advisor featuring an advanced stock predictor",
                    technologies: ["Python", "Machine Learning", "AI", "Stock Prediction", "Data Analysis"],
                    features: [
                        "Advanced stock prediction algorithms",
                        "Real-time market data analysis",
                        "AI-powered investment recommendations",
                        "High accuracy prediction model"
                    ],
                    impact: "Achieved over 90% accuracy on real-world data"
                },
                tenderAnalysisDashboard: {
                    name: "Tender Bidding Success Rate Analysis Dashboard",
                    description: "Created a dashboard for analyzing tender bidding success rates",
                    technologies: ["Data Visualization", "Dashboard Development", "Business Intelligence", "Data Analysis"],
                    features: [
                        "Interactive dashboard for tender analysis",
                        "Success rate tracking and visualization",
                        "Strategic insights for business improvements",
                        "Data-driven decision making tools"
                    ],
                    impact: "Provided insights for strategic improvements in tender bidding"
                }
            },
            experience: {
                current: {
                    role: "Freelance Programmer",
                    title: "Data Scientist, Software Developer",
                    duration: "Jan 2023 - Present",
                    location: "Nairobi, Kenya",
                    achievements: [
                        "Developed an AI investment advisor featuring an advanced stock predictor, achieving over 90% accuracy on real-world data",
                        "Collaborated with a small business to create a dashboard for analyzing tender bidding success rates, providing insights for strategic improvements"
                    ]
                },
                previous: {
                    role: "Sales and Marketing Intern",
                    company: "Strummels Investments",
                    duration: "Jan 2019 - May 2019",
                    location: "Nairobi, Kenya",
                    achievements: [
                        "Increased client acquisition by conducting targeted door-to-door marketing efforts, resulting in a significant boost in sales"
                    ]
                },
                domains: ["Finance", "Healthcare Technology", "Business Intelligence", "Marketing"],
                expertise: ["AI-powered financial applications", "Data analysis and visualization", "Web development", "Machine learning models", "Business intelligence dashboards"],
                approach: ["Problem-solving", "Innovation", "Collaboration", "Results-driven", "Minimal supervision", "Meeting tight deadlines"],
                achievements: [
                    "Developed AI investment advisor with 90%+ accuracy",
                    "Created business intelligence dashboard for tender analysis",
                    "Increased client acquisition through targeted marketing",
                    "Conducted research on pregnancy outcomes prediction"
                ]
            },
            interview: {
                strengths: [
                    "Strong technical skills in data science and software engineering",
                    "Experience with cutting-edge AI and ML technologies",
                    "Proven track record of delivering innovative solutions",
                    "Ability to work across multiple domains",
                    "Passion for continuous learning and innovation",
                    "Excellent problem-solving and analytical skills",
                    "Strong communication and collaboration abilities"
                ],
                motivations: [
                    "Creating innovative solutions that solve real-world problems",
                    "Advancing AI and machine learning applications",
                    "Contributing to open-source projects",
                    "Mentoring and knowledge sharing in the tech community",
                    "Building scalable and maintainable systems",
                    "Staying at the forefront of technology innovation"
                ],
                goals: [
                    "Advancing AI and machine learning applications",
                    "Developing scalable web solutions",
                    "Contributing to open-source projects",
                    "Mentoring and knowledge sharing in the tech community",
                    "Leading innovative technology projects",
                    "Building sustainable and ethical AI systems"
                ]
            },
            sentiments: {
                positive: ["great", "awesome", "good", "happy", "excited", "love", "amazing", "cool", "fantastic"],
                negative: ["bad", "sad", "terrible", "awful", "upset", "hate", "poor", "horrible"],
                neutral: ["ok", "fine", "alright", "normal", "okay"]
            }
        };
    }

    init() {
        this.createChatbotUI();
        this.bindEvents();
        this.showInitialTooltip();
        this.startPeriodicTooltips();
    }

    createChatbotUI() {
        const chatbotHTML = `
            <div id="chatbot-container" class="chatbot-container">
                <button id="chatbot-toggle" class="chatbot-toggle" aria-label="Open chatbot">
                    <img src="assets/images/Chatbot-icon.jpg" alt="Chatbot" />
                </button>
                <div id="chatbot-window" class="chatbot-window" style="display:none;">
                    <div class="chatbot-header">
                        <div class="chatbot-title">
                            <img src="assets/images/Chatbot-icon.jpg" alt="Chatbot" />
                            <span>Nyenzo AI Assistant</span>
                        </div>
                        <button id="chatbot-close" class="chatbot-close" aria-label="Close chatbot">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div id="chatbot-messages" class="chatbot-messages">
                        <!-- Messages will be added here -->
                    </div>
                    <div class="chatbot-input-container">
                        <form id="chatbot-form" style="display: flex; width: 100%; gap: 12px;">
                            <textarea 
                                id="chatbot-input" 
                                placeholder="Type your message here..." 
                                rows="1"
                                style="resize: none; overflow: hidden;"
                            ></textarea>
                            <button type="submit" id="chatbot-send" aria-label="Send message">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div id="chatbot-tooltip" class="chatbot-tooltip">
                    Hi there 👋
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
        
        // Auto-resize textarea
        const textarea = document.getElementById('chatbot-input');
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 120) + 'px';
        });
    }

    showInitialTooltip() {
        const toggleBtn = document.getElementById('chatbot-toggle');
        if (!toggleBtn) return;
        let tooltip = document.createElement('div');
        tooltip.id = 'chatbot-tooltip';
        tooltip.innerText = this.tooltipState % 2 === 0 ? 'Hi there 👋' : 'Ask me anything';
        tooltip.style.position = 'absolute';
        tooltip.style.right = '60px';
        tooltip.style.bottom = '8px';
        tooltip.style.background = '#2d3748';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '8px 16px';
        tooltip.style.borderRadius = '16px';
        tooltip.style.fontSize = '1em';
        tooltip.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
        tooltip.style.zIndex = '10000';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.transition = 'opacity 0.3s';
        tooltip.style.opacity = '1';
        toggleBtn.parentNode.appendChild(tooltip);
        setTimeout(() => {
            tooltip.style.opacity = '0';
            setTimeout(() => tooltip.remove(), 400);
        }, 2500);
    }

    startPeriodicTooltips() {
        setInterval(() => {
            if (!this.isOpen) {
                this.tooltipState++;
                this.showInitialTooltip();
            }
        }, 10000);
    }

    toggleChatbot() {
        const window = document.getElementById('chatbot-window');
        this.isOpen = !this.isOpen;
        window.style.display = this.isOpen ? 'flex' : 'none';
        if (this.isOpen && !this.hasShownWelcome) {
            this.loadWelcomeMessage();
            this.hasShownWelcome = true;
        }
        if (this.isOpen) {
            setTimeout(() => {
                const input = document.getElementById('chatbot-input');
                if (input) input.focus();
            }, 200);
        } else {
            this.tooltipState++;
            this.showInitialTooltip();
        }
    }

    loadWelcomeMessage() {
        if (this.hasShownWelcome) return;
        
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            const welcomeMessage = {
                type: 'bot',
                content: `Hi! I'm Peter Nyenzo Isabwa. 👋 I'm a Data Scientist passionate about machine learning, data analysis, and web development. \n\nYou can ask me anything about:\n• My skills and technical expertise\n• My projects\n• My background and experience\n• My education and certifications\n• Any question you have about me\n\nWhat would you like to know about me?`
            };
            this.addMessage(welcomeMessage);
        }, 1000);
        
        this.hasShownWelcome = true;
    }

    handleUserInput() {
        const input = document.getElementById('chatbot-input');
        const userMessage = input.value.trim();
        
        if (!userMessage) return;

        this.addMessage({ type: 'user', content: userMessage });
        input.value = '';
        input.style.height = 'auto';

        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            this.analyzeSentiment(userMessage);
            const response = this.processUserInput(userMessage);
            this.addMessage({ type: 'bot', content: response });
            if (this.followUpQuestion) {
                setTimeout(() => this.addMessage({ type: 'bot', content: this.followUpQuestion }), 500);
                this.followUpQuestion = null;
            }
        }, 800 + Math.random() * 400);
    }

    analyzeSentiment(input) {
        const { positive, negative, neutral } = this.knowledgeBase.sentiments;
        let score = 0;

        if (positive.some(word => input.toLowerCase().includes(word))) score += 1;
        if (negative.some(word => input.toLowerCase().includes(word))) score -= 1;

        this.sentimentScore = score;
        return score > 0 ? 'positive' : score < 0 ? 'negative' : 'neutral';
    }

    processUserInput(userInput) {
        const input = userInput.toLowerCase();
        this.conversationHistory.push({ user: userInput, timestamp: new Date() });

        this.responseStyle = this.determineResponseStyle(input);
        const intent = this.detectIntent(input);

        if (this.isGreeting(input)) {
            return this.handleGreeting(input);
        } else if (intent === 'skill' || this.isSkillQuestion(input)) {
            return this.handleSkillQuestion(input);
        } else if (intent === 'project' || this.isProjectQuestion(input)) {
            return this.handleProjectQuestion(input);
        } else if (intent === 'personal' || this.isPersonalQuestion(input)) {
            return this.handlePersonalQuestion(input);
        } else if (intent === 'interview' || this.isInterviewQuestion(input)) {
            return this.handleInterviewQuestion(input);
        } else {
            return this.generateGeneralResponse(input);
        }
    }

    detectIntent(input) {
        const patterns = {
            skill: ['python', 'javascript', 'programming', 'language', 'technology', 'skill', 'expertise', 'machine learning', 'ai', 'data science', 'react', 'node', 'framework', 'certification', 'certified', 'huawei', 'alx'],
            project: ['project', 'work', 'built', 'developed', 'created', 'aivestor', 'trading bot', 'pregnancy', 'maternal', 'health', 'investment', 'stock', 'advisor', 'tender', 'dashboard', 'bidding', 'github', 'portfolio'],
            personal: ['freelance', 'freelancing', 'freelancer', 'experience', 'background', 'about', 'who are you', 'tell me about yourself', 'your background', 'contact', 'email', 'linkedin', 'github'],
            interview: ['interview', 'strength', 'weakness', 'challenge', 'motivation', 'goal', 'why', 'how', 'difficult', 'hardest', 'tough', 'problem', 'tell me about', 'describe', 'explain', 'what do you do']
        };

        const intentScores = {};
        for (const [intent, keywords] of Object.entries(patterns)) {
            intentScores[intent] = keywords.filter(keyword => input.includes(keyword)).length;
        }

        const maxScore = Math.max(...Object.values(intentScores));
        return maxScore > 0 ? Object.keys(intentScores).find(key => intentScores[key] === maxScore) : null;
    }

    determineResponseStyle(input) {
        if (input.includes('simple') || input.includes('explain') || input.includes('basic')) return 'simple';
        if (input.includes('technical') || input.includes('detailed') || input.includes('advanced')) return 'technical';
        if (input.includes('casual') || input.includes('informal') || input.includes('friendly')) return 'casual';
        return 'conversational';
    }

    isSkillQuestion(input) {
        const skillKeywords = ['skill', 'technology', 'programming', 'language', 'python', 'javascript', 'react', 'node', 'machine learning', 'ai', 'data science', 'know', 'expertise', 'proficient', 'education', 'degree', 'university', 'study', 'school', 'college', 'certification', 'certified', 'huawei', 'alx'];
        return skillKeywords.some(keyword => input.includes(keyword));
    }

    isProjectQuestion(input) {
        const projectKeywords = ['project', 'aivestor', 'trading bot', 'tule initiative', 'github', 'work', 'portfolio', 'pregnancy', 'maternal', 'health', 'investment', 'stock', 'advisor', 'tender', 'dashboard', 'bidding'];
        return projectKeywords.some(keyword => input.includes(keyword));
    }

    isPersonalQuestion(input) {
        const personalKeywords = ['background', 'experience', 'about', 'who', 'contact', 'email', 'reach', 'your', 'you', 'yourself', 'freelance', 'freelancing', 'freelancer', 'work experience', 'job', 'employment', 'career', 'professional', 'work history'];
        return personalKeywords.some(keyword => input.includes(keyword));
    }

    isInterviewQuestion(input) {
        const interviewKeywords = ['interview', 'strength', 'weakness', 'challenge', 'motivation', 'goal', 'why', 'how', 'difficult', 'hardest', 'tough', 'problem', 'tell me about', 'describe', 'explain', 'what do you do', 'what is your', 'how do you'];
        return interviewKeywords.some(keyword => input.includes(keyword));
    }

    isGreeting(input) {
        const greetingKeywords = ['hi', 'hello', 'hey', 'how are you', 'good morning', 'good afternoon', 'good evening', 'what\'s up'];
        return greetingKeywords.some(keyword => input.includes(keyword));
    }

    handleGreeting(input) {
        const sentiment = this.analyzeSentiment(input);
        const time = new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Nairobi', hour: '2-digit', minute: '2-digit' }); // 11:29 PM EAT
        const responses = {
            positive: {
                simple: `Hi! I'm doing great, thanks! It's 11:29 PM here in Nairobi - a bit late, but I'm excited to chat with you. What’s on your mind?`,
                technical: `Greetings! I'm operating optimally, thank you! It's 11:29 PM in Nairobi. I'm ready to assist with any technical inquiries. What would you like to explore?`,
                casual: `Hey there! I'm feeling awesome, thanks! It's 11:29 PM in Nairobi - late night vibes! What’s up with you? 😄`,
                conversational: `Hello! I'm doing well, thank you! It's 11:29 PM here in Nairobi. Nice to chat with you - how can I assist you tonight?`
            },
            negative: {
                simple: `Hi! Sorry you might be feeling down. I'm doing okay, thanks for asking! It's 11:29 PM in Nairobi. Want to talk about it or switch to something else?`,
                technical: `Greetings! I detect a potential negative sentiment. I'm functioning within parameters, thank you! It's 11:29 PM in Nairobi. How can I assist with a technical solution?`,
                casual: `Hey! Seems like you might be having a rough night - sorry about that! I'm doing alright, thanks! It's 11:29 PM in Nairobi. Want to chat or switch gears? 😊`,
                conversational: `Hello! It seems you might be feeling down - I’m sorry to hear that. I'm doing okay, thanks! It's 11:29 PM in Nairobi. How can I help you tonight?`
            },
            neutral: {
                simple: `Hi! I'm doing fine, thanks! It's 11:29 PM in Nairobi. How can I assist you tonight?`,
                technical: `Greetings! I'm operating at standard efficiency, thank you! It's 11:29 PM in Nairobi. What technical topic would you like to discuss?`,
                casual: `Hey! I'm doing okay, thanks! It's 11:29 PM here in Nairobi. What’s on your mind? 😊`,
                conversational: `Hello! I'm doing well, thank you! It's 11:29 PM in Nairobi. How can I help you tonight?`
            }
        };

        const styleResponses = responses[sentiment] || responses.neutral;
        this.followUpQuestion = sentiment === 'negative' ? "Would you like to share more or talk about something else?" : "What would you like to dive into next?";
        return styleResponses[this.responseStyle] || styleResponses.conversational;
    }

    handleSkillQuestion(input) {
        if (input.includes('python')) {
            const responses = {
                simple: `Thanks for asking! Python is my go-to language - I use it for data science, AI, and web apps. It’s like my coding superpower!`,
                technical: `Great question! Python is my primary language. I’m confident in it and can adapt quickly. I use it for data science, ML with TensorFlow/PyTorch, and web development with frameworks like Django.`,
                casual: `Awesome question! Python’s my jam - I use it for AI, data stuff, and web apps. It’s super versatile! Fun fact: Python was named after Monty Python! 😂`,
                conversational: `Thanks for asking! Python is my main language - I’m very confident with it. I use it for data science, machine learning, and web development projects.`
            };
            this.followUpQuestion = "Want to hear about a Python project I’ve worked on?";
            return responses[this.responseStyle] || responses.conversational;
        }
        // ... (other skill handlers remain similar, adjusted for brevity)
        else if (input.includes('certification') || input.includes('certified')) {
            const responses = {
                simple: `Nice question! I have certifications in Huawei AI and ALX Software Engineering. They keep me sharp in AI and coding!`,
                technical: `Thanks for asking! I hold certifications in Huawei AI Development Framework (Feb 2025 - Jun 2025) and ALX Software Engineering (Feb 2023 - Apr 2024), covering AI deployment and full-stack development.`,
                casual: `Great question! I’ve got Huawei AI and ALX Software Engineering certifications - like tech badges! 😄 They’re super helpful!`,
                conversational: `Thanks for asking! I have certifications in Huawei AI Development Framework and ALX Software Engineering, which boost my skills in AI and software engineering.`
            };
            this.followUpQuestion = "Interested in how I used these in a project?";
            return responses[this.responseStyle] || responses.conversational;
        }
        else {
            const responses = {
                simple: `Good question! I’m skilled in Python, JavaScript, machine learning, and web development. Always learning new stuff!`,
                technical: `Thanks for asking! I excel in Python, JavaScript, ML with TensorFlow, and web tech like React. I’ve applied these across finance, healthcare, and more.`,
                casual: `Cool question! I’m solid with Python, JavaScript, ML, and web dev. Always picking up new tricks! 😊`,
                conversational: `Thanks for asking! I’m proficient in Python, JavaScript, machine learning, and web development, with experience in various domains.`
            };
            this.followUpQuestion = "Which skill would you like to explore more?";
            return responses[this.responseStyle] || responses.conversational;
        }
    }

    // ... (other handlers like handleProjectQuestion, handlePersonalQuestion, handleInterviewQuestion remain unchanged for brevity)

    generateGeneralResponse(input) {
        const lastInput = this.conversationHistory.length > 0 ? this.conversationHistory[this.conversationHistory.length - 1].user.toLowerCase() : '';
        const responses = {
            simple: [
                "Happy to help! Ask about my skills, projects, or experience.",
                "Interesting! I work with data science, AI, and web dev. What’s your interest?",
                "I can share my background or projects. I love building innovative solutions!",
                "Great! I’ve done AI systems and web platforms. What catches your eye?"
            ],
            technical: [
                "I can detail my technical skills or projects. What specific area interests you?",
                "I have deep experience in data science and AI. Which domain would you like to dive into?",
                "I offer insights into my tech background and portfolio. What would you like to explore?",
                "I’ve built AI apps and trading systems. Which area would you like to know more about?"
            ],
            casual: [
                "Sure! Ask me about skills or projects - I’m an open book! 😊",
                "Cool! I do data science, AI, and web stuff. What do you want to chat about?",
                "I can tell you about my background or cool projects I’ve worked on!",
                "Nice! I’ve got AI and web projects. What sounds fun to you?"
            ],
            conversational: [
                "Happy to help! Ask about my skills, projects, or experience.",
                "Interesting! I work with data science, AI, and web dev. What would you like to know?",
                "I can share my background or projects. I love building innovative solutions!",
                "Great! I’ve done AI systems and web platforms. What interests you?"
            ]
        };
        
        const styleResponses = responses[this.responseStyle] || responses.conversational;
        this.followUpQuestion = lastInput.includes('skill') ? "Want to dive deeper into a specific skill?" : "What else can I tell you about?";
        return styleResponses[Math.floor(Math.random() * styleResponses.length)];
    }

    addMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageElement = document.createElement('div');
        messageElement.className = `chatbot-message ${message.type}-message`;
        
        const icon = message.type === 'user' ? 'fas fa-user' : 'fas fa-robot';
        const alignment = message.type === 'user' ? 'right' : 'left';
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageElement.innerHTML = `
            <div class="message-content ${alignment}">
                <div class="message-icon">
                    <i class="${icon}"></i>
                </div>
                <div class="message-bubble">
                    <div class="message-text">
                        ${message.content.replace(/\n/g, '<br>')}
                    </div>
                </div>
            </div>
            <div class="message-timestamp ${alignment}">
                ${timestamp}
            </div>
        `;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingElement = document.createElement('div');
        typingElement.className = 'chatbot-message bot-message';
        typingElement.id = 'typing-indicator';
        
        typingElement.innerHTML = `
            <div class="message-content left">
                <div class="message-icon">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        
        messagesContainer.appendChild(typingElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    bindEvents() {
        const toggle = document.getElementById('chatbot-toggle');
        const close = document.getElementById('chatbot-close');
        const input = document.getElementById('chatbot-input');
        const send = document.getElementById('chatbot-send');
        const form = document.getElementById('chatbot-form');
        const chatbotWindow = document.getElementById('chatbot-window');
        const chatbotContainer = document.getElementById('chatbot-container');

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleChatbot();
        });
        close.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleChatbot();
        });
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleUserInput();
        });
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.handleUserInput();
            }
        });
        document.addEventListener('mousedown', (event) => {
            if (this.isOpen && chatbotWindow.style.display !== 'none') {
                if (!chatbotWindow.contains(event.target) && !toggle.contains(event.target)) {
                    this.toggleChatbot();
                }
            }
        });
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NyenzoChatbot();
});