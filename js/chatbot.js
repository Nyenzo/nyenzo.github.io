// AI Chatbot for Peter Nyenzo Isabwa - Portfolio Assistant
class SentimentModel {
    constructor() {
        this.vocabulary = new Set();
        this.wordFrequencies = {};
        this.sentimentWeights = {};
        this.learningRate = 0.01;
        this.conversationPatterns = [];
        this.responseTemplates = [];
        this.initializeModel();
    }

    initializeModel() {
        // Initialize sentiment analysis vocabulary
        const positiveWords = ['great', 'awesome', 'good', 'happy', 'excited', 'love', 'amazing', 'cool', 'fantastic', 'excellent', 'wonderful', 'perfect', 'brilliant', 'outstanding'];
        const negativeWords = ['bad', 'sad', 'terrible', 'awful', 'upset', 'hate', 'poor', 'horrible', 'disappointing', 'frustrated', 'angry', 'worried', 'confused'];
        
        positiveWords.forEach(word => {
            this.vocabulary.add(word);
            this.sentimentWeights[word] = 1.0;
        });
        
        negativeWords.forEach(word => {
            this.vocabulary.add(word);
            this.sentimentWeights[word] = -1.0;
        });
    }

    analyzeSentiment(text) {
        const words = text.toLowerCase().split(/\s+/);
        let score = 0;
        let wordCount = 0;

        words.forEach(word => {
            if (this.sentimentWeights[word]) {
                score += this.sentimentWeights[word];
                wordCount++;
            }
        });

        const averageScore = wordCount > 0 ? score / wordCount : 0;
        
        if (averageScore > 0.1) return 'positive';
        if (averageScore < -0.1) return 'negative';
        return 'neutral';
    }

    learnFromInteraction(userInput, botResponse, userFeedback = null) {
        // Update vocabulary and conversation patterns
        const words = userInput.toLowerCase().split(/\s+/);
        words.forEach(word => {
            this.vocabulary.add(word);
            if (!this.wordFrequencies[word]) {
                this.wordFrequencies[word] = 0;
            }
            this.wordFrequencies[word]++;
        });

        this.conversationPatterns.push({
            input: userInput,
            response: botResponse,
            timestamp: new Date(),
            feedback: userFeedback
        });

        // Update sentiment weights based on user feedback
        if (userFeedback) {
            words.forEach(word => {
                if (!this.sentimentWeights[word]) {
                    this.sentimentWeights[word] = 0;
                }
                this.sentimentWeights[word] += userFeedback * this.learningRate;
            });
        }

        // Maintain conversation history limit
        if (this.conversationPatterns.length > 100) {
            this.conversationPatterns = this.conversationPatterns.slice(-100);
        }
    }

    generatePersonalizedResponse(input, context) {
        // Find similar past interactions for personalized responses
        const similarPatterns = this.conversationPatterns.filter(pattern => 
            pattern.input.toLowerCase().includes(input.toLowerCase()) ||
            input.toLowerCase().includes(pattern.input.toLowerCase())
        );

        if (similarPatterns.length > 0) {
            const recentPattern = similarPatterns[similarPatterns.length - 1];
            return this.adaptResponse(recentPattern.response, context);
        }

        return null;
    }

    adaptResponse(templateResponse, context) {
        // Adapt response based on sentiment context
        let adaptedResponse = templateResponse;
        
        if (context.sentiment === 'positive') {
            adaptedResponse = adaptedResponse.replace(/\./g, '! 😊');
        } else if (context.sentiment === 'negative') {
            adaptedResponse = adaptedResponse.replace(/\./g, '... I understand.');
        }

        return adaptedResponse;
    }

    getModelStats() {
        return {
            vocabularySize: this.vocabulary.size,
            conversationPatterns: this.conversationPatterns.length,
            averageSentimentWeight: Object.values(this.sentimentWeights).reduce((a, b) => a + b, 0) / Object.keys(this.sentimentWeights).length || 0
        };
    }
}

class NyenzoChatbot {
    constructor() {
        this.knowledgeBase = this.initializeKnowledgeBase();
        this.funFacts = this.initializeFunFacts();
        this.trainingPrompts = this.initializeTrainingPrompts();
        this.conversationHistory = [];
        this.isOpen = false;
        this.sentimentScore = 0;
        this.hasShownWelcome = false;
        this.tooltipState = 0;
        this.followUpQuestion = null;
        this.mlModel = new SentimentModel();
        this.learningMode = true;
        this.currentStyle = 'professional'; // professional, casual, technical, friendly
        this.styleCounter = 0;
        this.init();
    }

    initializeKnowledgeBase() {
        return {
            personal: {
                name: "Peter Nyenzo Isabwa",
                title: "Data Scientist & Software Developer",
                location: "Nairobi, Kenya",
                phone: "(+254) 796-952247",
                email: "nyenzoisabwa@gmail.com",
                linkedin: "https://www.linkedin.com/in/nyenzo-isabwa-5b0734352/",
                github: "https://github.com/Nyenzo",
                website: "nyenzo.github.io",
                currentStatus: "Freelance Programmer (Jan 2023 - Present)",
                background: "I am a dedicated Data Scientist with expertise in machine learning, data analysis, and web development. My passion lies in transforming data into actionable insights and developing robust machine learning models to address real-world challenges. I thrive in environments with minimal supervision and excel at meeting tight deadlines.",
                philosophy: "Data is the new oil, and AI is the engine that drives innovation. I'm passionate about building the bridge between raw data and meaningful insights.",
                personality: "Adventurous, loves trying and learning new things. Believes in deep conversations and going with life's flow.",
                hobbies: {
                    music: "I play both piano and guitar, finding rhythm in melodies. Music flows through my daily life!",
                    swimming: "I love swimming laps - it keeps me active and energized.",
                    gaming: "I enjoy gaming as a way to unwind and challenge my mind.",
                    reading: "I love diving into a good book - it's my way of exploring new worlds and ideas.",
                    fitness: "I stay active with regular workouts and enjoy exploring new exercise routines.",
                    writing: "I love crafting stories and creative expression through writing.",
                    adventure: "I'm endlessly fascinated by learning new things and pushing my boundaries. I love trying new skills and exploring unfamiliar places."
                },
                interests: "I'm captivated by AI's rapid evolution and love having meaningful conversations with interesting people. I embrace spontaneity and meaningful connections - life's too short for surface-level interactions!"
            },
            education: {
                degree: "Bachelor of Science in Mathematics and Computer Science",
                institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
                duration: "September 2018 - May 2025",
                status: "Completed May 2025",
                focus: "Mathematics, Computer Science, Data Analysis, Machine Learning",
                achievements: ["Academic Excellence", "Research Project on Pregnancy Outcomes Prediction"],
                certifications: [
                    {
                        name: "AI Certification",
                        issuer: "HUAWEI",
                        year: "Feb 2025 - Jun 2025",
                        description: "Artificial Intelligence and machine learning technologies"
                    },
                    {
                        name: "Software Engineering Certification",
                        issuer: "ALX AFRICA",
                        year: "Feb 2023 - Apr 2024",
                        description: "Software engineering principles and practices"
                    }
                ]
            },
            experience: {
                current: {
                    role: "Freelance Programmer",
                    duration: "Jan 2023 - Present",
                    focus: "Data Science and Software Development",
                    achievements: [
                        "Developed an AI investment advisor with 90%+ accuracy on real-world data",
                        "Created business dashboards for tender bidding analysis",
                        "Thrives in minimal supervision environments",
                        "Excels at meeting tight deadlines"
                    ]
                },
                previous: {
                    role: "Sales and Marketing Intern",
                    company: "Strummels Investments",
                    duration: "Jan 2019 - May 2019",
                    achievement: "Increased client acquisition through targeted marketing efforts"
                }
            },
            skills: {
                programming: {
                    python: { description: "Primary language for data science and ML", level: "Expert" },
                    javascript: { description: "Full-stack web development", level: "Advanced" },
                    nodejs: { description: "Backend API development", level: "Advanced" },
                    nextjs: { description: "React framework for production", level: "Advanced" },
                    html: { description: "Frontend development", level: "Expert" },
                    css: { description: "Responsive web design", level: "Advanced" }
                },
                dataScience: {
                    machineLearning: { description: "Scikit-learn, Random Forest, Decision Trees", level: "Expert" },
                    deepLearning: { description: "PyTorch, Neural Networks", level: "Advanced" },
                    dataAnalysis: { description: "Pandas, NumPy, Data Visualization", level: "Expert" },
                    statistics: { description: "Advanced statistical modeling", level: "Advanced" },
                    modelEvaluation: { description: "Cross-validation, Performance metrics", level: "Expert" }
                },
                webDevelopment: {
                    react: { description: "Modern frontend development", level: "Advanced" },
                    nodejs: { description: "Backend API development", level: "Advanced" },
                    htmlcss: { description: "Responsive web design", level: "Expert" },
                    nextjs: { description: "React framework for production", level: "Advanced" },
                    firebase: { description: "Backend-as-a-Service platform", level: "Intermediate" }
                },
                databases: {
                    mysql: { description: "Relational database management", level: "Advanced" },
                    mongodb: { description: "NoSQL database", level: "Advanced" },
                    postgresql: { description: "Advanced relational database", level: "Advanced" },
                    firebase: { description: "Cloud database platform", level: "Intermediate" }
                },
                tools: {
                    git: { description: "Version control", level: "Advanced" },
                    apis: { description: "Financial data APIs, FRED, Alpha Vantage", level: "Advanced" },
                    visualization: { description: "Matplotlib, Seaborn", level: "Advanced" },
                    textProcessing: { description: "TextBlob, PyPDF2, Transformers", level: "Advanced" }
                }
            },
            projects: {
                aivestor: {
                    name: "Aivestor AI - Advanced Investment Advisory System",
                    description: "AI-powered investment system combining ML, sentiment analysis, and economic indicators",
                    features: [
                        "Advanced stock prediction using machine learning",
                        "Real-time sentiment analysis from news and social media",
                        "Economic indicator integration via FRED data",
                        "Portfolio optimization based on risk tolerance",
                        "RESTful API for frontend integration"
                    ],
                    technologies: ["Python", "scikit-learn", "PyTorch", "Flask", "PostgreSQL"],
                    impact: "Provides intelligent stock market predictions and personalized portfolio recommendations",
                    accuracy: "90%+ accuracy on real-world data"
                },
                tradingBot: {
                    name: "Algorithmic Trading Bot",
                    description: "Sophisticated trading system for forex and gold markets",
                    features: [
                        "Real-time data collection for multiple currency pairs (XAUUSD, GBPUSD, USDJPY, AUDUSD)",
                        "Advanced technical analysis with various indicators",
                        "Machine learning-based signal prediction using Random Forest",
                        "Automated trading during EAT market hours",
                        "Economic indicators integration",
                        "Comprehensive backtesting and model evaluation"
                    ],
                    technologies: ["Python", "pandas", "scikit-learn", "yfinance", "alpha_vantage"],
                    achievement: "Achieved over 90% accuracy in stock prediction"
                },
                tuleInitiative: {
                    name: "Tule Initiative Website",
                    description: "Community-driven website built with Next.js",
                    features: [
                        "Server-side rendering for improved SEO and performance",
                        "Dynamic content integration with Firebase",
                        "Responsive design with optimized images",
                        "Admin dashboard functionality",
                        "Consistent layout system with Navbar and Footer"
                    ],
                    technologies: ["Next.js", "Firebase", "Font Awesome"],
                    highlights: "Utilized Next.js's file-based routing, layout system, and Image component for optimization"
                },
                pregnancyOutcomes: {
                    name: "Pregnancy Outcomes Prediction (Academic Project)",
                    description: "ML model to predict adverse pregnancy outcomes in Kenya",
                    duration: "October 2024 - April 2025",
                    dataset: "2022 Kenya Demographic and Health Survey (KDHS)",
                    methodology: "Decision tree-based machine learning model",
                    factors: ["Total pregnancies", "Birth intervals", "Education level"],
                    achievement: "90.83% sensitivity in prediction",
                    impact: "Provides actionable insights for maternal healthcare interventions in Kenya",
                    supervision: "Dr. Barini at JKUAT"
                }
            },
            coreCompetencies: {
                technical: ["Problem Solving", "Critical Thinking", "Machine Learning", "Data Analysis"],
                softSkills: ["Teamwork", "Time Management", "Leadership", "Effective Communication"],
                workStyle: ["Objective", "deadline-driven", "minimal supervision required"]
            },
            futureGoals: [
                "Making a transformative impact on society through AI and technology",
                "Solving real-world problems that improve people's lives",
                "Developing AI solutions that address challenges in healthcare, finance, and community development",
                "Building technology that democratizes access to essential services",
                "Creating sustainable solutions that benefit underserved communities",
                "Expanding AI applications to transform lives across Africa and beyond"
            ]
        };
    }

    initializeFunFacts() {
        return {
            ai: [
                "Facebook researchers shut down an AI experiment in 2017 after two chatbots started communicating in a language they invented themselves - not programmed to use!",
                "Neural decoders can now reconstruct images directly from human brainwaves using fMRI scans, essentially creating blurry pictures of what you're thinking about.",
                "GPT models can generate text in the style of famous authors so convincingly that even literature professors sometimes can't tell the difference from the original.",
                "MIT researchers used AI to discover halicin, a powerful antibiotic that can kill some of the world's most dangerous drug-resistant bacteria.",
                "OpenAI's Dota 2 bot defeated world champions, making decisions faster than any human player and developing strategies that pros had never seen before.",
                "Researchers developed AI that can determine personality traits just by analyzing eye movements and blinking patterns with 42% accuracy.",
                "DeepMind's AlphaFold solved the 50-year-old protein folding problem, potentially revolutionizing drug discovery and understanding of diseases.",
                "An AI-generated portrait called 'Portrait of Edmond Belamy' sold for $432,500 at Christie's auction house in 2018.",
                "Google developed an AI that can predict what molecules will smell like just by analyzing their chemical structure, outperforming human experts.",
                "An AI system called ALPHA consistently defeated experienced fighter pilots in simulated air combat scenarios.",
                "Machine learning algorithms can detect deception in text and speech with higher accuracy than trained human interrogators.",
                "AI can now automatically colorize black and white photos and restore damaged historical images with incredible accuracy.",
                "AIVA (Artificial Intelligence Virtual Artist) became the first AI to be recognized as a composer by a music society and creates symphonies indistinguishable from human compositions.",
                "Google's AI can predict patient deaths up to 24 hours before traditional methods, potentially saving thousands of lives through early intervention.",
                "DeepMind's AI agents learned to walk, run, and navigate obstacle courses just like human toddlers - through trial and error.",
                "Google's AI achieved 95% accuracy in lip-reading, compared to professional human lip-readers who average around 52%.",
                "An AI-powered robot solved a Rubik's cube in just 0.38 seconds, faster than the human world record of 4.22 seconds.",
                "AI can now detect emotions, stress levels, and even mental health conditions just by analyzing the tone and patterns in your voice.",
                "Modern deepfake technology can create videos of people saying things they never said, so realistic that even digital forensics experts struggle to detect them.",
                "Researchers use Minecraft as a testing ground for AI because it's complex enough to mirror real-world decision-making and social interactions."
            ],
            general: [
                "Botanically speaking, a berry is a fruit from a single flower's ovary with seeds inside. So bananas, kiwis, and eggplants are berries, but strawberries aren't!",
                "Due to thermal expansion, the Eiffel Tower can grow over 6 inches taller in summer when the metal expands from heat.",
                "Octopuses have three hearts. Two hearts pump blood to the gills, while the third pumps blood to the rest of the body. The main heart actually stops beating when they swim!",
                "Archaeologists have found 3,000-year-old honey in Egyptian tombs that's still perfectly edible. Its low moisture and acidic pH prevent bacteria growth.",
                "Venus rotates so slowly that one day (243 Earth days) is longer than one year (225 Earth days). Plus, it rotates backwards!",
                "When you exercise, your body naturally produces salicylic acid - the same compound found in aspirin - which helps reduce inflammation.",
                "Oxford University was founded around 1096, while the Aztec Empire was established in 1345 - nearly 250 years later!",
                "Cleopatra lived around 30 BCE, while the Great Pyramid was built around 2560 BCE - that's a 2,530-year difference. The moon landing was only 2,000 years after Cleopatra!",
                "Earth has about 3 trillion trees, while the Milky Way has an estimated 100-400 billion stars. Trees win by a factor of 10!",
                "Wombats are the only animals that produce cube-shaped droppings. Scientists recently discovered it's due to the unique elasticity of their intestinal walls!"
            ]
        };
    }

    initializeTrainingPrompts() {
        return {
            // Personal & Background Questions
            "what's your name": "I'm Peter Nyenzo Isabwa, a data scientist and software developer from Nairobi, Kenya. I was born and raised here in Kenya's vibrant capital.",
            "where are you from": "I'm from Nairobi, Kenya - a vibrant city that's become a major tech hub in East Africa. Being here gives me unique insights into local markets and challenges.",
            "educational background": "I completed my Bachelor of Science in Mathematics and Computer Science at Jomo Kenyatta University of Agriculture and Technology (JKUAT) in May 2025. I studied there from September 2018 to May 2025.",
            "what do you do": "I'm a freelance programmer specializing in data science and software development. I've been working independently since January 2023, developing AI solutions and helping businesses with data-driven insights.",
            "contact information": "You can reach me at (+254) 796-952247 or email me at nyenzoisabwa@gmail.com. I'm also available on LinkedIn and have my own website.",
            "hobbies": "I love playing piano and guitar, swimming, keeping fit, gaming, writing, and reading. Music is a big part of my life, and I enjoy balancing creative pursuits with physical activities.",

            // Technical Skills
            "programming languages": "I work with Python extensively for data science and machine learning. I also use JavaScript with React and Next.js for frontend development, and Node.js for backend work. I'm proficient in HTML, CSS, and work with various databases.",
            "databases": "I have experience with MySQL, MongoDB, PostgreSQL, and Firebase. I choose the database based on the project requirements - SQL databases for structured data and NoSQL for more flexible data models.",
            "machine learning frameworks": "I primarily use scikit-learn for general machine learning tasks, and PyTorch for deep learning projects. I also work with pandas and NumPy for data manipulation and analysis.",
            "apis": "Yes, I work with various APIs including Alpha Vantage for financial data, FRED for economic indicators, and News API for sentiment analysis. I also build RESTful APIs using Flask.",
            "web development": "I specialize in modern web development using React and Next.js. I've built full-stack applications with server-side rendering, database integration, and responsive design.",

            // Projects
            "aivestor": "Aivestor AI is an advanced investment advisory system that combines machine learning, sentiment analysis, and economic indicators to provide intelligent stock market predictions and portfolio recommendations. It achieved over 90% accuracy on real-world data.",
            "trading bot": "My algorithmic trading bot combines technical analysis with machine learning to predict market movements in forex and gold markets. It operates during East Africa Time market hours and integrates multiple data sources for comprehensive analysis.",
            "tule initiative": "The Tule Initiative is a community-driven website I built using Next.js. It features server-side rendering for better SEO, dynamic content integration with Firebase, and includes an admin dashboard for community management.",
            "pregnancy outcomes": "This is my academic project at JKUAT where I developed a machine learning model to predict adverse pregnancy outcomes in Kenya using the 2022 Kenya Demographic and Health Survey dataset. The model achieved 90.83% sensitivity.",

            // Technical Implementation
            "90% accuracy": "I combined multiple data sources including real-time market data, sentiment analysis from news and social media, technical indicators, and economic data from FRED. The Random Forest algorithm proved most effective for this multi-dimensional analysis.",
            "technical indicators": "I use a comprehensive set of technical indicators including moving averages, RSI, MACD, Bollinger Bands, and volume indicators. These are processed through the TA library and fed into the machine learning model.",
            "real-time data": "I use yfinance and Alpha Vantage APIs for real-time data collection, with scheduled data gathering during market hours. The system processes this data through pandas for analysis and feeds it into the prediction models.",
            "sentiment analysis": "I use TextBlob and Transformers for natural language processing to analyze market sentiment from news articles and social media. This sentiment data is then incorporated into the investment decision-making process.",
            "model reliability": "I use cross-validation techniques, compare weighted and unweighted models, and conduct comprehensive backtesting. I also regularly retrain models to maintain performance as market conditions change.",

            // Fun Facts
            "bananas berries": "Did you know that bananas are berries, but strawberries aren't? Botanically speaking, berries are fruits from a single flower's ovary with seeds inside - so bananas, kiwis, and eggplants are berries!",
            "eiffel tower": "The Eiffel Tower can grow over 6 inches taller in summer due to thermal expansion! The metal expands when heated, making the tower noticeably taller in hot weather.",
            "ai language": "In 2017, Facebook had to shut down an AI experiment because two chatbots started communicating in a language they invented themselves! It wasn't dangerous, but it was unexpected and raised questions about AI transparency.",
            "ai brainwaves": "AI can now reconstruct images directly from human brainwaves! Neural decoders can create blurry images of what a person is seeing based solely on fMRI brain scans. AI is literally helping us read minds!",
            "ai mind reading": "Neural decoders can now reconstruct images directly from human brainwaves using fMRI scans, essentially creating blurry pictures of what you're thinking about.",

            // Career & Future
            "career goals": "I want to continue growing as a data scientist, focus on AI applications that benefit communities, and eventually start my own tech company focused on solving African challenges with AI.",
            "5 years": "I see myself as a leading AI practitioner in East Africa, possibly running my own consultancy or tech company, and contributing to AI research that addresses local challenges.",
            "dream project": "I'd love to work on a large-scale AI system that improves healthcare outcomes across Africa, combining my technical skills with meaningful social impact.",
            "professional growth": "I plan to keep learning new technologies, work on increasingly complex projects, pursue advanced certifications, and possibly pursue graduate studies in AI or data science.",

            // Philosophy & Approach
            "data science philosophy": "I believe in transforming data into actionable insights that address real-world challenges. It's not just about building models - it's about creating solutions that make a meaningful impact.",
            "problem solving": "I start by clearly defining the problem, then break it down into manageable components. I use both analytical thinking and creative approaches to find effective solutions.",
            "ai interest": "I'm fascinated by AI's potential to solve complex problems and its rapid evolution. From chatbots creating their own language to AI reading brainwaves, the possibilities are endless and exciting.",
            "challenging projects": "I thrive on challenges and approach them systematically. I break down complex problems, research thoroughly, and aren't afraid to try innovative approaches when traditional methods aren't sufficient.",
            "ai future": "AI is rapidly evolving and will continue to transform various industries. I'm particularly interested in AI applications that benefit communities and solve real-world problems, like healthcare and financial inclusion."
        };
    }

    // Multiple answering styles
    getResponseStyle() {
        const styles = ['professional', 'casual', 'technical', 'friendly'];
        this.styleCounter++;
        return styles[this.styleCounter % styles.length];
    }

    formatResponse(response, style) {
        switch(style) {
            case 'professional':
                return response;
            case 'casual':
                return response.replace(/\./g, '! 😊').replace(/I am/g, "I'm").replace(/I have/g, "I've");
            case 'technical':
                return `[Technical Analysis] ${response}`;
            case 'friendly':
                return `Hey there! ${response} 😊`;
            default:
                return response;
        }
    }

    getRandomFunFact(category = null) {
        let facts = [];
        if (category === 'ai' || !category) {
            facts = facts.concat(this.funFacts.ai);
        }
        if (category === 'general' || !category) {
            facts = facts.concat(this.funFacts.general);
        }
        return facts[Math.floor(Math.random() * facts.length)];
    }

    // Enhanced response generation with multiple styles
    generateEnhancedResponse(input, context) {
        const style = this.getResponseStyle();
        let response = this.findBestMatch(input);
        
        if (!response) {
            // Fallback to fun facts or general response
            if (input.toLowerCase().includes('fun fact') || input.toLowerCase().includes('interesting')) {
                response = `Here's a fascinating fact: ${this.getRandomFunFact()}`;
            } else {
                response = "That's an interesting question! I'd be happy to discuss my work in data science, AI, or any of my projects. What would you like to know more about?";
            }
        }

        return this.formatResponse(response, style);
    }

    findBestMatch(input) {
        const normalizedInput = input.toLowerCase();
        
        // Check training prompts first
        for (const [key, value] of Object.entries(this.trainingPrompts)) {
            if (normalizedInput.includes(key)) {
                return value;
            }
        }

        // Check knowledge base
        if (normalizedInput.includes('name') || normalizedInput.includes('who are you')) {
            return this.knowledgeBase.personal.name + " - " + this.knowledgeBase.personal.title;
        }
        
        if (normalizedInput.includes('education') || normalizedInput.includes('degree')) {
            return `I have a ${this.knowledgeBase.education.degree} from ${this.knowledgeBase.education.institution} (${this.knowledgeBase.education.duration}).`;
        }

        if (normalizedInput.includes('project') || normalizedInput.includes('work')) {
            const projects = Object.values(this.knowledgeBase.projects);
            const randomProject = projects[Math.floor(Math.random() * projects.length)];
            return `One of my notable projects is ${randomProject.name}. ${randomProject.description}`;
        }

        if (normalizedInput.includes('skill') || normalizedInput.includes('technology')) {
            const skills = Object.keys(this.knowledgeBase.skills.programming);
            return `My key technical skills include ${skills.join(', ')}. I specialize in data science and web development.`;
        }

        return null;
    }

    init() {
        this.createChatbotUI();
        this.bindEvents();
        this.loadModelFromStorage();
        this.trackPersistence();
        this.showInitialTooltip();
        this.startPeriodicTooltips();
    }

    createChatbotUI() {
        const chatbotHTML = `
            <div id="chatbot-container" class="chatbot-container">
                <button id="chatbot-toggle" class="chatbot-toggle" aria-label="Open chatbot" aria-haspopup="dialog">
                    <img src="assets/images/Chatbot-icon.jpg" alt="Chatbot" />
                </button>
                <div id="chatbot-window" class="chatbot-window" style="display:none;" role="dialog" aria-modal="true" aria-labelledby="chatbot-title-label">
                    <div class="chatbot-header">
                        <div class="chatbot-title">
                            <img src="assets/images/Chatbot-icon.jpg" alt="Chatbot" />
                            <span id="chatbot-title-label">Nyenzo AI Assistant</span>
                        </div>
                        <button id="chatbot-close" class="chatbot-close" aria-label="Close chatbot">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div id="chatbot-messages" class="chatbot-messages" aria-live="polite" aria-atomic="false" tabindex="0">
                        <!-- Messages will be added here -->
                    </div>
                    <div class="chatbot-input-container">
                        <form id="chatbot-form" style="display: flex; width: 100%; gap: 12px;">
                            <textarea 
                                id="chatbot-input" 
                                placeholder="Talk to me..." 
                                rows="1"
                                style="resize: none; overflow: hidden;"
                                aria-label="Type your message to Nyenzo AI Assistant"
                            ></textarea>
                            <button type="submit" id="chatbot-send" aria-label="Send message">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div id="chatbot-tooltip" class="chatbot-tooltip" aria-hidden="true">
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
        // Prevent tooltip if bot is open or welcome not shown
        if (this.isOpen && !this.hasShownWelcome) return;
        if (this.isOpen) return;
        const toggleBtn = document.getElementById('chatbot-toggle');
        if (!toggleBtn) return;
        let tooltip = document.createElement('div');
        tooltip.id = 'chatbot-tooltip';
        tooltip.innerText = this.tooltipState % 2 === 0 ? 'Hi there 👋' : 'Ask me anything';
        tooltip.style.position = 'absolute';
        tooltip.style.right = '60px';
        tooltip.style.top = '-50px';
        tooltip.style.background = '#2d3748';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '8px 16px';
        tooltip.style.borderRadius = '16px';
        tooltip.style.fontSize = '1em';
        tooltip.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
        tooltip.style.zIndex = '10000';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.transition = 'opacity 1s'; // Slower fade
        tooltip.style.opacity = '1';
        toggleBtn.parentNode.appendChild(tooltip);
        setTimeout(() => {
            tooltip.style.opacity = '0';
            setTimeout(() => tooltip.remove(), 1000); // Wait for fade out to complete
        }, 3500); // Visible for 3.5s before fading
    }

    startPeriodicTooltips() {
        setInterval(() => {
            if (!this.isOpen) {
                this.tooltipState++;
                this.showInitialTooltip();
            }
        }, 12000);
    }

    toggleChatbot() {
        const window = document.getElementById('chatbot-window');
        const toggleBtn = document.getElementById('chatbot-toggle');
        this.isOpen = !this.isOpen;
        window.style.display = this.isOpen ? 'flex' : 'none';
        window.setAttribute('aria-hidden', this.isOpen ? 'false' : 'true');
        // Hide tooltip immediately if opening bot
        if (this.isOpen) {
            const tooltip = document.getElementById('chatbot-tooltip');
            if (tooltip) {
                tooltip.setAttribute('aria-hidden', 'true');
                tooltip.remove();
            }
        }
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
            // Return focus to toggle button for accessibility
            setTimeout(() => {
                if (toggleBtn) toggleBtn.focus();
            }, 200);
        }
    }

    loadWelcomeMessage() {
        if (this.hasShownWelcome) return;
        // Hide tooltip if visible
        const tooltip = document.getElementById('chatbot-tooltip');
        if (tooltip) tooltip.remove();
        this.showTypingIndicator();
        setTimeout(() => {
            this.hideTypingIndicator();
            const welcomeMessage = {
                type: 'bot',
                content: `Hi! I'm Peter Nyenzo Isabwa. 👋 I'm a Data Scientist passionate about machine learning, data analysis, and web development. \n\nYou can ask me anything about:\n• My skills and technical expertise\n• My projects\n• My background and experience\n• My education and certifications\n• Any question you have about me\n\nWhat would you like to know about me?`
            };
            this.addMessage(welcomeMessage);
            // Resume tooltips after welcome message
            setTimeout(() => { this.hasShownWelcome = true; }, 100);
        }, 1000);
        // Don't set hasShownWelcome yet; do it after message
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
        // Use ML model for sentiment analysis
        const sentiment = this.mlModel.analyzeSentiment(input);
        
        // Update sentiment score based on ML model
        if (sentiment === 'positive') this.sentimentScore = 1;
        else if (sentiment === 'negative') this.sentimentScore = -1;
        else this.sentimentScore = 0;

        return sentiment;
    }

    processUserInput(userInput) {
        const input = userInput.toLowerCase();
        this.conversationHistory.push({ user: userInput, timestamp: new Date() });

        const intent = this.detectIntent(input);
        const sentiment = this.analyzeSentiment(userInput);
        const style = this.getResponseStyle();

        // Generate personalized response using ML model
        const context = { sentiment, intent, style };
        const mlResponse = this.mlModel.generatePersonalizedResponse(userInput, context);
        
        if (mlResponse && this.learningMode) {
            this.mlModel.learnFromInteraction(userInput, mlResponse);
            return this.formatResponse(mlResponse, style);
        }

        // Generate enhanced response using knowledge base
        let response = this.generateEnhancedResponse(userInput, context);
        
        if (!response) {
            // Fallback to intent-based response handlers
            if (this.isGreeting(input)) {
                response = this.handleGreeting(input);
            } else if (intent === 'skill' || this.isSkillQuestion(input)) {
                response = this.handleSkillQuestion(input);
            } else if (intent === 'project' || this.isProjectQuestion(input)) {
                response = this.handleProjectQuestion(input);
            } else if (intent === 'personal' || this.isPersonalQuestion(input)) {
                response = this.handlePersonalQuestion(input);
            } else if (intent === 'interview' || this.isInterviewQuestion(input)) {
                response = this.handleInterviewQuestion(input);
            } else {
                // Handle specific questions that don't fit other categories
                response = this.handleSpecificQuestions(input);
            }
        }

        return this.formatResponse(response, style);
    }

    handleSpecificQuestions(input) {
        // Handle personal questions that should be redirected to in-person conversation
        if (input.includes('age') || input.includes('how old') || input.includes('height') || input.includes('tall') || input.includes('how tall') || 
            input.includes('weight') || input.includes('personal') || input.includes('your age') || input.includes('your height') || 
            input.includes('marital') || input.includes('relationship') || input.includes('family') || input.includes('personal life')) {
            return "Hehe. I don't like talking about myself over the internet. I would however be happy to indulge and answer personal questions in person. Feel free to reach out to me!";
        }
        
        if (input.includes('tesla') || input.includes('elon musk')) {
            return `You caught me.🙃 I don't have an answer to that currently. I will look into it, here is a fun fact though: ${this.getRandomFunFact()}`;
        }
        
        if (input.includes('sad') || input.includes('depressed') || input.includes('unhappy')) {
            return "I'm sorry to hear that... I understand. If you'd like to talk about it or need support, I'm here to listen... I understand. Would you like to share more or talk about something that might help?";
        }
        
        if (input.includes('yes') && this.conversationHistory.length > 1) {
            const lastMessage = this.conversationHistory[this.conversationHistory.length - 2].user.toLowerCase();
            if (lastMessage.includes('sad') || lastMessage.includes('depressed') || lastMessage.includes('unhappy')) {
                return "I'm here to listen. Sometimes talking helps, and sometimes it's good to focus on something else. Would you like to share what's on your mind, or would you prefer to talk about something completely different?";
            }
        }
        
        // Sentiment-aware fallback with fun facts
        const sentiment = this.analyzeSentiment(input);
        if (sentiment === 'negative') {
            return "I'm sorry to hear that. If you'd like to talk about it or need support, I'm here to listen. Would you like to share more or talk about something that might help?";
        } else if (sentiment === 'positive') {
            return "I'm glad to hear that! If you want to share more good news or talk about anything else, I'm here for you.";
        } else {
            return `You caught me.🙃 I don't have an answer to that currently. I will look into it, here is a fun fact though: ${this.getRandomFunFact()}`;
        }
    }

    detectIntent(input) {
        const patterns = {
            skill: ['python', 'javascript', 'programming', 'language', 'technology', 'skill', 'expertise', 'machine learning', 'ai', 'data science', 'react', 'node', 'framework', 'certification', 'certified', 'huawei', 'alx'],
            project: ['project', 'work', 'built', 'developed', 'created', 'aivestor', 'trading bot', 'pregnancy', 'maternal', 'health', 'investment', 'stock', 'advisor', 'tender', 'dashboard', 'bidding', 'github', 'portfolio'],
            personal: ['freelance', 'freelancing', 'freelancer', 'experience', 'background', 'about', 'who are you', 'tell me about yourself', 'your background', 'contact', 'email', 'linkedin', 'github', 'hobbies', 'hobby', 'interests', 'study', 'education', 'university', 'school', 'college', 'degree'],
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
        const personalKeywords = ['background', 'experience', 'about', 'who', 'contact', 'email', 'reach', 'your', 'you', 'yourself', 'freelance', 'freelancing', 'freelancer', 'work experience', 'job', 'employment', 'career', 'professional', 'work history', 'hobbies', 'hobby', 'interests', 'study', 'education', 'university', 'school', 'college', 'degree'];
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
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', { timeZone: 'Africa/Nairobi', hour: '2-digit', minute: '2-digit' });
        const responses = {
            positive: {
                simple: `Hi! I'm doing great, thanks! It's ${time} here in Nairobi - perfect timing! What's on your mind?`,
                technical: `Greetings! I'm operating optimally, thank you! It's ${time} in Nairobi. Ready for technical inquiries - what would you like to explore?`,
                casual: `Hey there! I'm feeling awesome, thanks! It's ${time} in Nairobi - late night vibes! What's up? 😄`,
                conversational: `Hello! I'm doing well, thank you! It's ${time} in Nairobi. Nice to chat - how can I assist you?`
            },
            negative: {
                simple: `Hi! Sorry you might be feeling down. I'm okay, thanks for asking! It's ${time} in Nairobi. Want to talk or switch topics?`,
                technical: `Greetings! I detect a potential negative sentiment. I'm functioning within parameters, thank you! It's ${time} in Nairobi. How can I assist technically?`,
                casual: `Hey! Seems like you might be having a rough night - sorry! I'm alright, thanks! It's ${time} in Nairobi. Want to chat or change it up? 😊`,
                conversational: `Hello! It seems you might be feeling down - I'm sorry. I'm okay, thanks! It's ${time} in Nairobi. How can I help?`
            },
            neutral: {
                simple: `Hi! I'm doing fine, thanks! It's ${time} in Nairobi. How can I assist you?`,
                technical: `Greetings! I'm operating at standard efficiency, thank you! It's ${time} in Nairobi. What technical topic interests you?`,
                casual: `Hey! I'm doing okay, thanks! It's ${time} here in Nairobi. What's on your mind? 😊`,
                conversational: `Hello! I'm doing well, thank you! It's ${time} in Nairobi. How can I help you?`
            }
        };

        const styleResponses = responses[sentiment] || responses.neutral;
        this.followUpQuestion = sentiment === 'negative' ? "Would you like to share more or talk about something else?" : "What would you like to dive into next?";
        return styleResponses[this.responseStyle] || styleResponses.conversational;
    }

    handleSkillQuestion(input) {
        // Handle domain-specific questions with context awareness
        if (input.includes('domain')) {
            const lastUserMsg = this.conversationHistory.length > 1 ? this.conversationHistory[this.conversationHistory.length - 2].user.toLowerCase() : '';
            if (lastUserMsg.includes('expertise') || lastUserMsg.includes('skill') || lastUserMsg.includes('proficient') || lastUserMsg.includes('experienced')) {
                const domains = this.knowledgeBase.personal.domains || ["Finance", "Healthcare Technology", "Business Intelligence", "Marketing"];
                const responses = {
                    simple: `I have experience in several domains: ${domains.join(', ')}.`,
                    technical: `I have hands-on experience in domains such as ${domains.join(', ')}. My work spans finance, healthcare technology, business intelligence, and marketing, applying data science and AI to solve real-world problems in each.`,
                    casual: `I've worked in a bunch of areas: ${domains.join(', ')}. Each one's been a cool adventure! 😊`,
                    conversational: `I have experience in several domains, including ${domains.join(', ')}. I enjoy applying my skills to different industries and challenges.`
                };
                this.followUpQuestion = "Want to hear about a project in one of these domains?";
                return responses[this.responseStyle] || responses.conversational;
            }
        }
        
        // Handle follow-up questions about education/learning
        const followUpPhrases = ['tell me more', 'more details', 'elaborate', 'give me more', 'can you elaborate', 'expand', 'explain more', 'go deeper', 'details', 'explain further', 'what did you learn'];
        const lastUserMsg = this.conversationHistory.length > 1 ? this.conversationHistory[this.conversationHistory.length - 2].user.toLowerCase() : '';
        
        if (followUpPhrases.some(phrase => input.includes(phrase))) {
            if (lastUserMsg.includes('education') || lastUserMsg.includes('university') || lastUserMsg.includes('jkuat') || lastUserMsg.includes('study') || lastUserMsg.includes('learn')) {
                const responses = {
                    simple: `At JKUAT, I focused on Mathematics, Computer Science, Data Analysis, and Machine Learning. I learned programming languages like Python and Java, worked with databases, and completed a research project on pregnancy outcomes prediction. The program gave me a strong foundation in both theoretical concepts and practical applications!`,
                    technical: `My academic focus at JKUAT included advanced mathematics, algorithms, data structures, machine learning algorithms, statistical analysis, and software engineering principles. I completed coursework in Python, Java, database systems, and conducted research using real-world datasets for my pregnancy outcomes prediction project.`,
                    casual: `I learned a ton at JKUAT! Math, computer science, data analysis, and machine learning. I got really good at Python and Java, worked with databases, and even did a research project on pregnancy outcomes. Super practical stuff! 😊`,
                    conversational: `At JKUAT, I studied Mathematics, Computer Science, Data Analysis, and Machine Learning. I learned programming languages like Python and Java, worked with databases, and completed a research project on pregnancy outcomes prediction. The program was very hands-on and practical!`
                };
                this.followUpQuestion = "Want to hear about my research project or any specific courses?";
                return responses[this.responseStyle] || responses.conversational;
            }
        }
        
        if (input.includes('python')) {
            const responses = {
                simple: `Thanks for asking! Python is my go-to language - I use it for data science, AI, and web apps. It's like my coding superpower!`,
                technical: `Great question! Python is my primary language. I'm confident in it and can adapt quickly. I use it for data science, ML with TensorFlow/PyTorch, and web development with frameworks like Django.`,
                casual: `Awesome question! Python's my jam - I use it for AI, data stuff, and web apps. It's super versatile! Fun fact: Python was named after Monty Python! 😂`,
                conversational: `Thanks for asking! Python is my main language - I'm very confident with it. I use it for data science, machine learning, and web development projects.`
            };
            this.followUpQuestion = "Want to hear about a Python project I've worked on?";
            return responses[this.responseStyle] || responses.conversational;
        }
        else if (input.includes('certification') || input.includes('certified')) {
            const responses = {
                simple: `Nice question! I have certifications in Huawei AI and ALX Software Engineering. They keep me sharp in AI and coding!`,
                technical: `Thanks for asking! I hold certifications in Huawei AI Development Framework (Feb 2025 - Jun 2025) and ALX Software Engineering (Feb 2023 - Apr 2024), covering AI deployment and full-stack development.`,
                casual: `Great question! I've got Huawei AI and ALX Software Engineering certifications - like tech badges! 😄 They're super helpful!`,
                conversational: `Thanks for asking! I have certifications in Huawei AI Development Framework and ALX Software Engineering, which boost my skills in AI and software engineering.`
            };
            this.followUpQuestion = "Interested in how I used these in a project?";
            return responses[this.responseStyle] || responses.conversational;
        }
        else {
            const responses = {
                simple: `Good question! I'm skilled in Python, JavaScript, machine learning, and web development. Always learning new stuff!`,
                technical: `Thanks for asking! I excel in Python, JavaScript, ML with TensorFlow, and web tech like React. I've applied these across finance, healthcare, and more.`,
                casual: `Cool question! I'm solid with Python, JavaScript, ML, and web dev. Always picking up new tricks! 😊`,
                conversational: `Thanks for asking! I'm proficient in Python, JavaScript, machine learning, and web development, with experience in various domains.`
            };
            this.followUpQuestion = "Which skill would you like to explore more?";
            return responses[this.responseStyle] || responses.conversational;
        }
    }

    handlePersonalQuestion(input) {
        const personalInfo = this.knowledgeBase.personal;
        const educationInfo = this.knowledgeBase.education;
        
        // Handle follow-up questions about education/learning
        const followUpPhrases = ['tell me more', 'more details', 'elaborate', 'give me more', 'can you elaborate', 'expand', 'explain more', 'go deeper', 'details', 'explain further', 'what did you learn'];
        const lastUserMsg = this.conversationHistory.length > 1 ? this.conversationHistory[this.conversationHistory.length - 2].user.toLowerCase() : '';
        
        if (followUpPhrases.some(phrase => input.includes(phrase))) {
            if (lastUserMsg.includes('education') || lastUserMsg.includes('university') || lastUserMsg.includes('jkuat') || lastUserMsg.includes('study') || lastUserMsg.includes('learn')) {
                const responses = {
                    simple: `At JKUAT, I focused on Mathematics, Computer Science, Data Analysis, and Machine Learning. I learned programming languages like Python and Java, worked with databases, and completed a research project on pregnancy outcomes prediction. The program gave me a strong foundation in both theoretical concepts and practical applications!`,
                    technical: `My academic focus at JKUAT included advanced mathematics, algorithms, data structures, machine learning algorithms, statistical analysis, and software engineering principles. I completed coursework in Python, Java, database systems, and conducted research using real-world datasets for my pregnancy outcomes prediction project.`,
                    casual: `I learned a ton at JKUAT! Math, computer science, data analysis, and machine learning. I got really good at Python and Java, worked with databases, and even did a research project on pregnancy outcomes. Super practical stuff! 😊`,
                    conversational: `At JKUAT, I studied Mathematics, Computer Science, Data Analysis, and Machine Learning. I learned programming languages like Python and Java, worked with databases, and completed a research project on pregnancy outcomes prediction. The program was very hands-on and practical!`
                };
                this.followUpQuestion = "Want to hear about my research project or any specific courses?";
                return responses[this.responseStyle] || responses.conversational;
            }
        }
        
        if (input.includes('hobbies') || input.includes('hobby')) {
            const responses = {
                simple: `I have a diverse range of interests! I love music, swimming, gaming, reading, fitness, writing, and adventure. It keeps me balanced and curious about new experiences!`,
                technical: `I have a rich array of interests. I play both piano and guitar, finding rhythm in melodies. I love swimming laps - it keeps me active and energized. I enjoy gaming as a way to unwind and challenge my mind. I love diving into a good book - it's my way of exploring new worlds and ideas. I stay active with regular workouts and enjoy exploring new exercise routines. I love crafting stories and creative expression through writing. I'm endlessly fascinated by learning new things and pushing my boundaries. I love trying new skills and exploring unfamiliar places.`,
                casual: `I've got a lot of interests! I love music, swimming, gaming, reading, fitness, writing, and adventure. It's like a mini-me of my personality! 😊`,
                conversational: `I have a diverse range of interests. I play both piano and guitar, finding rhythm in melodies. I love swimming laps - it keeps me active and energized. I enjoy gaming as a way to unwind and challenge my mind. I love diving into a good book - it's my way of exploring new worlds and ideas. I stay active with regular workouts and enjoy exploring new exercise routines. I love crafting stories and creative expression through writing. I'm endlessly fascinated by learning new things and pushing my boundaries. I love trying new skills and exploring unfamiliar places.`
            };
            this.followUpQuestion = "What's your favorite hobby?";
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('interests')) {
            const responses = {
                simple: `I'm captivated by AI's rapid evolution and love having meaningful conversations with interesting people. I embrace spontaneity and meaningful connections - life's too short for surface-level interactions!`,
                technical: `I'm captivated by AI's rapid evolution and love having meaningful conversations with interesting people. I embrace spontaneity and meaningful connections - life's too short for surface-level interactions!`,
                casual: `I'm captivated by AI's rapid evolution and love having meaningful conversations with interesting people. I embrace spontaneity and meaningful connections - life's too short for surface-level interactions!`,
                conversational: `I'm captivated by AI's rapid evolution and love having meaningful conversations with interesting people. I embrace spontaneity and meaningful connections - life's too short for surface-level interactions!`
            };
            this.followUpQuestion = "What's your favorite topic?";
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('study') || input.includes('education') || input.includes('university') || input.includes('school') || input.includes('college') || input.includes('degree')) {
            const responses = {
                simple: `I studied at JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY, where I'm pursuing a Bachelor of Science in Mathematics and Computer Science from Sep 2018 to May 2025. My focus is on Mathematics, Computer Science, Data Analysis, and Machine Learning.`,
                technical: `I'm currently pursuing a Bachelor of Science in Mathematics and Computer Science at JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY (Sep 2018 - May 2025). My academic focus includes Mathematics, Computer Science, Data Analysis, and Machine Learning. I've achieved academic excellence and conducted research on pregnancy outcomes prediction.`,
                casual: `I'm at JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY studying Mathematics and Computer Science! Been there since 2018 and graduating in 2025. I love the mix of math and computer science - it's perfect for data science! 😊`,
                conversational: `I'm studying at JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY, pursuing a Bachelor of Science in Mathematics and Computer Science from Sep 2018 to May 2025. My focus is on Mathematics, Computer Science, Data Analysis, and Machine Learning.`
            };
            this.followUpQuestion = "What's your favorite subject?";
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('background')) {
            const responses = {
                simple: `I am a dedicated Data Scientist with expertise in machine learning, data analysis, and web development. My passion lies in transforming data into actionable insights and developing robust machine learning models to address real-world challenges. I thrive in environments with minimal supervision and excel at meeting tight deadlines. Additionally, I have a keen interest in creating interactive websites and web applications.`,
                technical: `I am a dedicated Data Scientist with expertise in machine learning, data analysis, and web development. My passion lies in transforming data into actionable insights and developing robust machine learning models to address real-world challenges. I thrive in environments with minimal supervision and excel at meeting tight deadlines. Additionally, I have a keen interest in creating interactive websites and web applications.`,
                casual: `I am a dedicated Data Scientist with expertise in machine learning, data analysis, and web development. My passion lies in transforming data into actionable insights and developing robust machine learning models to address real-world challenges. I thrive in environments with minimal supervision and excel at meeting tight deadlines. Additionally, I have a keen interest in creating interactive websites and web applications.`,
                conversational: `I am a dedicated Data Scientist with expertise in machine learning, data analysis, and web development. My passion lies in transforming data into actionable insights and developing robust machine learning models to address real-world challenges. I thrive in environments with minimal supervision and excel at meeting tight deadlines. Additionally, I have a keen interest in creating interactive websites and web applications.`
            };
            this.followUpQuestion = "What's your favorite programming language?";
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('philosophy')) {
            const responses = {
                simple: `Data is the new oil, and AI is the engine that drives innovation. I'm passionate about building the bridge between raw data and meaningful insights.`,
                technical: `Data is the new oil, and AI is the engine that drives innovation. I'm passionate about building the bridge between raw data and meaningful insights.`,
                casual: `Data is the new oil, and AI is the engine that drives innovation. I'm passionate about building the bridge between raw data and meaningful insights.`,
                conversational: `Data is the new oil, and AI is the engine that drives innovation. I'm passionate about building the bridge between raw data and meaningful insights.`
            };
            this.followUpQuestion = "What's your favorite book?";
            return responses[this.responseStyle] || responses.conversational;
        } else {
            const responses = {
                simple: `I'm a Data Scientist passionate about machine learning, data analysis, and web development. I'm always learning new things and eager to share my knowledge!`,
                technical: `I'm a Data Scientist passionate about machine learning, data analysis, and web development. I'm always learning new things and eager to share my knowledge!`,
                casual: `I'm a Data Scientist passionate about machine learning, data analysis, and web development. I'm always learning new things and eager to share my knowledge!`,
                conversational: `I'm a Data Scientist passionate about machine learning, data analysis, and web development. I'm always learning new things and eager to share my knowledge!`
            };
            this.followUpQuestion = "What's your favorite programming language?";
            return responses[this.responseStyle] || responses.conversational;
        }
    }

    handleProjectQuestion(input) {
        const projects = this.knowledgeBase.projects;
        // Conversational memory: handle follow-up requests for more details
        const followUpPhrases = ['tell me more', 'more details', 'elaborate', 'give me more', 'can you elaborate', 'expand', 'explain more', 'go deeper', 'details', 'explain further'];
        const lastUserMsg = this.conversationHistory.length > 1 ? this.conversationHistory[this.conversationHistory.length - 2].user.toLowerCase() : '';
        let lastProject = null;
        
        // Determine the last project discussed
        if (lastUserMsg.includes('aivestor')) lastProject = 'aivestor';
        else if (lastUserMsg.includes('pregnancy')) lastProject = 'pregnancy';
        else if (lastUserMsg.includes('tender')) lastProject = 'tender';
        else if (lastUserMsg.includes('project')) lastProject = 'project';
        else if (lastUserMsg.includes('other')) lastProject = 'other';
        
        // Handle follow-up questions
        if (followUpPhrases.some(phrase => input.includes(phrase)) && lastProject) {
            if (lastProject === 'aivestor') {
                const responses = {
                    simple: `Aivestor is an AI-powered investment advisor I built. It uses machine learning to analyze real-time market data and predict stock trends. I designed the backend with Python and integrated a React.js frontend for a seamless user experience. The system provides users with actionable investment recommendations and risk analysis.`,
                    technical: `Aivestor leverages advanced ML models (including LSTM and XGBoost) to forecast stock prices and market trends. The backend is built with Python (Flask), and the frontend uses React.js. I implemented data pipelines for ingesting and cleaning financial data, and the system generates personalized investment advice based on user risk profiles.`,
                    casual: `Aivestor is my AI investment buddy! It looks at tons of market data, predicts trends, and gives users smart tips on what to invest in. I built it with Python and React. Super fun project!`,
                    conversational: `Aivestor is an AI investment advisor I created. It analyzes real-time market data, predicts trends, and gives users personalized investment advice. I used Python for the backend and React for the frontend. Want to know about the tech stack or how the predictions work?`
                };
                this.followUpQuestion = "Curious about the tech stack or how the predictions work?";
                return responses[this.responseStyle] || responses.conversational;
            } else if (lastProject === 'pregnancy') {
                const responses = {
                    simple: `The pregnancy outcomes project used a decision tree model to predict risks for mothers in Kenya. I worked with the KDHS dataset, cleaned and analyzed the data, and built a dashboard for healthcare insights.`,
                    technical: `For the pregnancy outcomes project, I used a decision tree classifier on the 2022 KDHS dataset. I engineered features, handled missing data, and evaluated the model with cross-validation. The results were visualized in a dashboard for healthcare professionals.`,
                    casual: `This project was all about helping moms! I used data from Kenya to predict risks and built a dashboard for doctors. Lots of data cleaning and model tweaking!`,
                    conversational: `The pregnancy outcomes project aimed to help healthcare providers identify risks for mothers. I used a decision tree model, cleaned the KDHS data, and built a dashboard to visualize the results. Want to know more about the data or the dashboard?`
                };
                this.followUpQuestion = "Want to know more about the data or the dashboard?";
                return responses[this.responseStyle] || responses.conversational;
            } else if (lastProject === 'tender') {
                const responses = {
                    simple: `The tender dashboard project analyzed bidding data to help businesses improve their success rates. I built a web dashboard to visualize trends and key metrics.`,
                    technical: `For the tender dashboard, I collected and analyzed bidding data, then built a web dashboard using React and D3.js. The dashboard visualizes win rates, bid amounts, and trends to help organizations optimize their bidding strategies.`,
                    casual: `This project was about helping companies win more bids! I made a dashboard that shows what works and what doesn't. Built it with React and D3.`,
                    conversational: `The tender dashboard project helps businesses analyze their bidding performance. I built a web dashboard to visualize trends and key metrics. Want to know about the data sources or the visualizations?`
                };
                this.followUpQuestion = "Want to know about the data sources or the visualizations?";
                return responses[this.responseStyle] || responses.conversational;
            } else if (lastProject === 'project') {
                const responses = {
                    simple: `I can share more about my projects! For example, Aivestor is an AI investment advisor, and I also built a dashboard for analyzing tender bidding success rates. Which one would you like to hear more about?`,
                    technical: `I have several projects, including Aivestor (an AI investment advisor using ML models) and a tender bidding dashboard (built with React and D3.js). Let me know which one you want to dive into!`,
                    casual: `Sure! I've got Aivestor (AI for investing) and a dashboard for tender bids. Which sounds interesting?`,
                    conversational: `I have a few projects I can tell you more about, like Aivestor or my tender dashboard. Which one would you like to hear about?`
                };
                this.followUpQuestion = "Which project would you like to dive into?";
                return responses[this.responseStyle] || responses.conversational;
            } else if (lastProject === 'other') {
                const responses = {
                    simple: `I've worked on several projects, including an AI investment advisor and a tender bidding success rate analysis dashboard. I'm always eager to tackle new challenges and create innovative solutions!`,
                    technical: `I've worked on several projects, including an AI investment advisor and a tender bidding success rate analysis dashboard. I'm always eager to tackle new challenges and create innovative solutions!`,
                    casual: `I've worked on several projects, including an AI investment advisor and a tender bidding success rate analysis dashboard. I'm always eager to tackle new challenges and create innovative solutions!`,
                    conversational: `I've worked on several projects, including an AI investment advisor and a tender bidding success rate analysis dashboard. I'm always eager to tackle new challenges and create innovative solutions!`
                };
                this.followUpQuestion = "Which project would you like to hear more about?";
                return responses[this.responseStyle] || responses.conversational;
            }
        }
        
        // Handle specific project questions
        if (input.includes('pregnancy')) {
            const responses = {
                simple: `I developed a decision tree-based machine learning model to predict adverse pregnancy outcomes using the 2022 Kenya Demographic and Health Survey (KDHS) dataset. This research project aimed to identify risk patterns and provide actionable insights for targeted maternal healthcare interventions in Kenya.`,
                technical: `I developed a decision tree-based machine learning model to predict adverse pregnancy outcomes using the 2022 Kenya Demographic and Health Survey (KDHS) dataset. This research project aimed to identify risk patterns and provide actionable insights for targeted maternal healthcare interventions in Kenya.`,
                casual: `I developed a decision tree-based machine learning model to predict adverse pregnancy outcomes using the 2022 Kenya Demographic and Health Survey (KDHS) dataset. This research project aimed to identify risk patterns and provide actionable insights for targeted maternal healthcare interventions in Kenya.`,
                conversational: `I developed a decision tree-based machine learning model to predict adverse pregnancy outcomes using the 2022 Kenya Demographic and Health Survey (KDHS) dataset. This research project aimed to identify risk patterns and provide actionable insights for targeted maternal healthcare interventions in Kenya.`
            };
            this.followUpQuestion = "Want to know more about the data or the model?";
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('aivestor')) {
            const responses = {
                simple: `I developed an AI investment advisor featuring an advanced stock predictor. This project aimed to provide real-time market data analysis and AI-powered investment recommendations to help users make informed decisions in the stock market.`,
                technical: `I developed an AI investment advisor featuring an advanced stock predictor. This project aimed to provide real-time market data analysis and AI-powered investment recommendations to help users make informed decisions in the stock market.`,
                casual: `I developed an AI investment advisor featuring an advanced stock predictor. This project aimed to provide real-time market data analysis and AI-powered investment recommendations to help users make informed decisions in the stock market.`,
                conversational: `I developed an AI investment advisor featuring an advanced stock predictor. This project aimed to provide real-time market data analysis and AI-powered investment recommendations to help users make informed decisions in the stock market.`
            };
            this.followUpQuestion = "Want to know more about the AI models or the tech stack?";
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('tender')) {
            const responses = {
                simple: `I created a dashboard for analyzing tender bidding success rates. This tool helped businesses and organizations track their success rates and identify areas for strategic improvements in tender bidding.`,
                technical: `I created a dashboard for analyzing tender bidding success rates. This tool helped businesses and organizations track their success rates and identify areas for strategic improvements in tender bidding.`,
                casual: `I created a dashboard for analyzing tender bidding success rates. This tool helped businesses and organizations track their success rates and identify areas for strategic improvements in tender bidding.`,
                conversational: `I created a dashboard for analyzing tender bidding success rates. This tool helped businesses and organizations track their success rates and identify areas for strategic improvements in tender bidding.`
            };
            this.followUpQuestion = "Want to know more about the dashboard features?";
            return responses[this.responseStyle] || responses.conversational;
        } else {
            const responses = {
                simple: `I've worked on several projects, including an AI investment advisor and a tender bidding success rate analysis dashboard. I'm always eager to tackle new challenges and create innovative solutions!`,
                technical: `I've worked on several projects, including an AI investment advisor and a tender bidding success rate analysis dashboard. I'm always eager to tackle new challenges and create innovative solutions!`,
                casual: `I've worked on several projects, including an AI investment advisor and a tender bidding success rate analysis dashboard. I'm always eager to tackle new challenges and create innovative solutions!`,
                conversational: `I've worked on several projects, including an AI investment advisor and a tender bidding success rate analysis dashboard. I'm always eager to tackle new challenges and create innovative solutions!`
            };
            this.followUpQuestion = "Which project would you like to hear more about?";
            return responses[this.responseStyle] || responses.conversational;
        }
    }

    handleInterviewQuestion(input) {
        const interviewInfo = this.knowledgeBase.interview;
        if (input.includes('strengths')) {
            const responses = {
                simple: `I have a strong foundation in data science and software engineering. I'm proficient in Python, JavaScript, and various ML frameworks. I'm also skilled in web development and database management. I'm passionate about building robust and scalable systems.`,
                technical: `I have a strong foundation in data science and software engineering. I'm proficient in Python, JavaScript, and various ML frameworks. I'm also skilled in web development and database management. I'm passionate about building robust and scalable systems.`,
                casual: `I have a strong foundation in data science and software engineering. I'm proficient in Python, JavaScript, and various ML frameworks. I'm also skilled in web development and database management. I'm passionate about building robust and scalable systems.`,
                conversational: `I have a strong foundation in data science and software engineering. I'm proficient in Python, JavaScript, and various ML frameworks. I'm also skilled in web development and database management. I'm passionate about building robust and scalable systems.`
            };
            this.followUpQuestion = "What's your favorite programming language?";
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('motivation')) {
            const responses = {
                simple: `I'm motivated by the opportunity to create innovative solutions that solve real-world problems. I'm passionate about advancing AI and machine learning applications, contributing to open-source projects, and mentoring the next generation of developers.`,
                technical: `I'm motivated by the opportunity to create innovative solutions that solve real-world problems. I'm passionate about advancing AI and machine learning applications, contributing to open-source projects, and mentoring the next generation of developers.`,
                casual: `I'm motivated by the opportunity to create innovative solutions that solve real-world problems. I'm passionate about advancing AI and machine learning applications, contributing to open-source projects, and mentoring the next generation of developers.`,
                conversational: `I'm motivated by the opportunity to create innovative solutions that solve real-world problems. I'm passionate about advancing AI and machine learning applications, contributing to open-source projects, and mentoring the next generation of developers.`
            };
            this.followUpQuestion = "What's your favorite programming language?";
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('goals')) {
            const responses = {
                simple: `My goal is to advance AI and machine learning applications, develop scalable web solutions, and contribute to open-source projects. I'm passionate about mentoring and knowledge sharing in the tech community and leading innovative technology projects.`,
                technical: `My goal is to advance AI and machine learning applications, develop scalable web solutions, and contribute to open-source projects. I'm passionate about mentoring and knowledge sharing in the tech community and leading innovative technology projects.`,
                casual: `My goal is to advance AI and machine learning applications, develop scalable web solutions, and contribute to open-source projects. I'm passionate about mentoring and knowledge sharing in the tech community and leading innovative technology projects.`,
                conversational: `My goal is to advance AI and machine learning applications, develop scalable web solutions, and contribute to open-source projects. I'm passionate about mentoring and knowledge sharing in the tech community and leading innovative technology projects.`
            };
            this.followUpQuestion = "What's your favorite programming language?";
            return responses[this.responseStyle] || responses.conversational;
        } else {
            const responses = {
                simple: `I'm passionate about AI's rapid evolution and love having meaningful conversations with interesting people. I embrace spontaneity and meaningful connections - life's too short for surface-level interactions!`,
                technical: `I'm passionate about AI's rapid evolution and love having meaningful conversations with interesting people. I embrace spontaneity and meaningful connections - life's too short for surface-level interactions!`,
                casual: `I'm passionate about AI's rapid evolution and love having meaningful conversations with interesting people. I embrace spontaneity and meaningful connections - life's too short for surface-level interactions!`,
                conversational: `I'm passionate about AI's rapid evolution and love having meaningful conversations with interesting people. I embrace spontaneity and meaningful connections - life's too short for surface-level interactions!`
            };
            this.followUpQuestion = "What's your favorite programming language?";
            return responses[this.responseStyle] || responses.conversational;
        }
    }

    generateGeneralResponse(input) {
        const lastInput = this.conversationHistory.length > 0 ? this.conversationHistory[this.conversationHistory.length - 1].user.toLowerCase() : '';
        const responses = {
            simple: [
                "Happy to help! Ask about my skills, projects, or experience.",
                "Interesting! I work with data science, AI, and web dev. What's your interest?",
                "I can share my background or projects. I love building innovative solutions!",
                "Great! I've done AI systems and web platforms. What catches your eye?"
            ],
            technical: [
                "I can detail my technical skills or projects. What specific area interests you?",
                "I have deep experience in data science and AI. Which domain would you like to dive into?",
                "I offer insights into my tech background and portfolio. What would you like to explore?",
                "I've built AI apps and trading systems. Which area would you like to know more about?"
            ],
            casual: [
                "Sure! Ask me about skills or projects - I'm an open book! 😊",
                "Cool! I do data science, AI, and web stuff. What do you want to chat about?",
                "I can tell you about my background or cool projects I've worked on!",
                "Nice! I've got AI and web projects. What sounds fun to you?"
            ],
            conversational: [
                "Happy to help! Ask about my skills, projects, or experience.",
                "Interesting! I work with data science, AI, and web dev. What would you like to know?",
                "I can share my background or projects. I love building innovative solutions!",
                "Great! I've done AI systems and web platforms. What interests you?"
            ]
        };
        
        const styleResponses = responses[this.responseStyle] || responses.conversational;
        this.followUpQuestion = lastInput.includes('skill') ? "Want to dive deeper into a specific skill?" : lastInput.includes('project') ? "Curious about another project?" : "What else can I tell you about?";
        return styleResponses[Math.floor(Math.random() * styleResponses.length)];
    }

    addMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (!messagesContainer) return;

        const messageElem = document.createElement('div');
        messageElem.className = `chatbot-message ${message.type === 'user' ? 'user-message' : 'bot-message'}`;

        const contentElem = document.createElement('div');
        contentElem.className = 'message-content ' + (message.type === 'user' ? 'right' : 'left');
        contentElem.style.flexDirection = 'column';
        contentElem.style.alignItems = 'center';

        if (message.type === 'bot') {
            // Bot message with icon
            const iconContainer = document.createElement('div');
            iconContainer.className = 'message-icon';
            iconContainer.innerHTML = '<img src="assets/images/Chatbot-icon.jpg" alt="Nyenzo AI" />';
            contentElem.appendChild(iconContainer);

            const bubble = document.createElement('div');
            bubble.className = 'message-bubble';
            bubble.innerHTML = `<span class="message-text">${message.content.replace(/\n/g, '<br>')}</span>`;
            contentElem.appendChild(bubble);

            // Add feedback buttons below message bubble
            const feedbackContainer = document.createElement('div');
            feedbackContainer.style.display = 'flex';
            feedbackContainer.style.gap = '8px';
            feedbackContainer.style.marginTop = '0px';
            feedbackContainer.style.marginBottom = '2px';
            feedbackContainer.style.justifyContent = 'center';
            feedbackContainer.innerHTML = `
                <button class="chatbot-feedback-btn" data-feedback="1" title="Helpful" aria-label="Mark this response as helpful">👍</button>
                <button class="chatbot-feedback-btn" data-feedback="-1" title="Not helpful" aria-label="Mark this response as not helpful">👎</button>
            `;
            contentElem.appendChild(feedbackContainer);

            // Add timestamp below feedback
            const timestampElem = document.createElement('div');
            timestampElem.className = 'message-timestamp';
            const now = new Date();
            timestampElem.innerText = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            contentElem.appendChild(timestampElem);
        } else {
            // User message with icon
            const iconContainer = document.createElement('div');
            iconContainer.className = 'message-icon';
            iconContainer.innerHTML = '<img src="assets/images/user-icon.svg" alt="User" />';
            contentElem.appendChild(iconContainer);
            
            const bubble = document.createElement('div');
            bubble.className = 'message-bubble';
            bubble.innerHTML = `<span class="message-text">${message.content.replace(/\n/g, '<br>')}</span>`;
            contentElem.appendChild(bubble);
            
            const timestampElem = document.createElement('div');
            timestampElem.className = 'message-timestamp';
            const now = new Date();
            timestampElem.innerText = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            contentElem.appendChild(timestampElem);
        }

        messageElem.appendChild(contentElem);
        messagesContainer.appendChild(messageElem);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Handle feedback events for bot messages
        if (message.type === 'bot') {
            const feedbackBtns = messageElem.querySelectorAll('.chatbot-feedback-btn');
            feedbackBtns.forEach(btn => {
                btn.onclick = (e) => {
                    const feedback = parseInt(btn.getAttribute('data-feedback'));
                    this.mlModel.learnFromInteraction(
                        this.conversationHistory[this.conversationHistory.length - 1].user,
                        message.content,
                        feedback
                    );
                    btn.disabled = true;
                    btn.style.opacity = 0.5;
                };
                // Keyboard accessibility: allow Enter/Space to activate
                btn.onkeydown = (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        btn.click();
                    }
                };
            });
        }
    }

    // Persist model state to localStorage
    saveModelToStorage() {
        const state = {
            vocabulary: Array.from(this.mlModel.vocabulary),
            wordFrequencies: this.mlModel.wordFrequencies,
            sentimentWeights: this.mlModel.sentimentWeights,
            conversationPatterns: this.mlModel.conversationPatterns
        };
        localStorage.setItem('nyenzoChatbotModel', JSON.stringify(state));
    }

    loadModelFromStorage() {
        const state = localStorage.getItem('nyenzoChatbotModel');
        if (state) {
            const data = JSON.parse(state);
            this.mlModel.vocabulary = new Set(data.vocabulary);
            this.mlModel.wordFrequencies = data.wordFrequencies;
            this.mlModel.sentimentWeights = data.sentimentWeights;
            this.mlModel.conversationPatterns = data.conversationPatterns;
        }
    }

    // Auto-save model every 10 interactions
    trackPersistence() {
        let saveCounter = 0;
        const saveIfNeeded = () => {
            saveCounter++;
            if (saveCounter % 10 === 0) this.saveModelToStorage();
        };
        window.addEventListener('beforeunload', () => this.saveModelToStorage());
        this.addMessage = ((origAddMessage) => {
            return (...args) => {
                origAddMessage.apply(this, args);
                saveIfNeeded();
            };
        })(this.addMessage.bind(this));
    }

    // Expand knowledge base with user-provided facts
    checkForNewFact(userInput, botResponse) {
        const rememberMatch = userInput.match(/remember that (.+)/i);
        const myFactMatch = userInput.match(/my ([a-zA-Z ]+) is ([a-zA-Z0-9 ,.'-]+)/i);
        if (rememberMatch) {
            const fact = rememberMatch[1];
            if (confirm(`Should I remember: "${fact}" for future conversations?`)) {
                this.knowledgeBase.personal[fact] = fact;
                alert('Got it! I will remember that.');
            }
        } else if (myFactMatch) {
            const key = myFactMatch[1].trim().toLowerCase().replace(/ /g, '_');
            const value = myFactMatch[2].trim();
            if (confirm(`Should I remember your ${key} is "${value}"?`)) {
                this.knowledgeBase.personal[key] = value;
                alert('Got it! I will remember that.');
            }
        }
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingElement = document.createElement('div');
        typingElement.className = 'chatbot-message bot-message';
        typingElement.id = 'typing-indicator';
        
        typingElement.innerHTML = `
            <div class="message-content left">
                <div class="message-icon">
                    <img src="assets/images/Chatbot-icon.jpg" alt="Nyenzo AI" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" />
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

// Initialize chatbot
document.addEventListener('DOMContentLoaded', () => {
    new NyenzoChatbot();
});