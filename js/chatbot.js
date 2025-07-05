// Advanced AI Chatbot for Nyenzo Isabwa
class NyenzoChatbot {
    constructor() {
        this.knowledgeBase = this.initializeKnowledgeBase();
        this.conversationHistory = [];
        this.isOpen = false;
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
            }
        };
    }

    init() {
        this.createChatbotUI();
        this.bindEvents();
        this.hasShownWelcome = false;
        this.loadWelcomeMessage();
        this.showInitialTooltip();
    }

    showInitialTooltip() {
        // Show a small tooltip to the left of the button on page load
        const toggleBtn = document.getElementById('chatbot-toggle');
        if (!toggleBtn) return;
        let tooltip = document.createElement('div');
        tooltip.id = 'chatbot-tooltip';
        tooltip.innerText = 'Hi there 👋';
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

    toggleChatbot() {
        const window = document.getElementById('chatbot-window');
        this.isOpen = !this.isOpen;
        window.style.display = this.isOpen ? 'flex' : 'none';
        if (this.isOpen && !this.hasShownWelcome) {
            this.loadWelcomeMessage();
            this.hasShownWelcome = true;
        }
        // Focus input when opening
        if (this.isOpen) {
            setTimeout(() => {
                const input = document.getElementById('chatbot-input');
                if (input) input.focus();
            }, 200);
        }
    }

    loadWelcomeMessage() {
        const welcomeMessage = {
            type: 'bot',
            content: `Hi! I'm Peter Nyenzo Isabwa. 👋 I'm a Data Scientist passionate about machine learning, data analysis, and web development. 

You can ask me anything about:
• My skills and technical expertise
• My projects
• My background and experience
• My education and certifications
• Any question you have about me

What would you like to know about me?`
        };
        this.addMessage(welcomeMessage);
    }

    handleUserInput() {
        const input = document.getElementById('chatbot-input');
        const userMessage = input.value.trim();
        
        if (!userMessage) return;

        // Add user message
        this.addMessage({ type: 'user', content: userMessage });
        input.value = '';

        // Process and respond
        setTimeout(() => {
            const response = this.processUserInput(userMessage);
            this.addMessage({ type: 'bot', content: response });
        }, 500);
    }

    processUserInput(userInput) {
        const input = userInput.toLowerCase();
        this.conversationHistory.push({ user: userInput, timestamp: new Date() });

        // Determine response style based on conversation context
        this.responseStyle = this.determineResponseStyle(input);

        // Check for different types of questions
        if (this.isSkillQuestion(input)) {
            return this.handleSkillQuestion(input);
        } else if (this.isProjectQuestion(input)) {
            return this.handleProjectQuestion(input);
        } else if (this.isPersonalQuestion(input)) {
            return this.handlePersonalQuestion(input);
        } else if (this.isInterviewQuestion(input)) {
            return this.handleInterviewQuestion(input);
        } else {
            return this.generateGeneralResponse(input);
        }
    }

    determineResponseStyle(input) {
        // Check for style indicators in the input
        if (input.includes('simple') || input.includes('explain') || input.includes('basic')) {
            return 'simple';
        } else if (input.includes('technical') || input.includes('detailed') || input.includes('advanced')) {
            return 'technical';
        } else if (input.includes('casual') || input.includes('informal') || input.includes('friendly')) {
            return 'casual';
        } else {
            // Default to conversational style
            return 'conversational';
        }
    }

    isSkillQuestion(input) {
        const skillKeywords = ['skill', 'technology', 'programming', 'language', 'python', 'javascript', 'react', 'node', 'machine learning', 'ai', 'data science', 'know', 'expertise', 'proficient'];
        return skillKeywords.some(keyword => input.includes(keyword));
    }

    isProjectQuestion(input) {
        const projectKeywords = ['project', 'aivestor', 'trading bot', 'tule initiative', 'github', 'work', 'portfolio'];
        return projectKeywords.some(keyword => input.includes(keyword));
    }

    isPersonalQuestion(input) {
        const personalKeywords = ['background', 'experience', 'education', 'about', 'who', 'contact', 'email', 'linkedin', 'your', 'you', 'yourself'];
        return personalKeywords.some(keyword => input.includes(keyword));
    }

    isInterviewQuestion(input) {
        const interviewKeywords = ['interview', 'strength', 'weakness', 'challenge', 'motivation', 'goal', 'why', 'how', 'difficult', 'hardest', 'tough', 'problem'];
        return interviewKeywords.some(keyword => input.includes(keyword));
    }

    handleSkillQuestion(input) {
        if (input.includes('python')) {
            const responses = {
                simple: `Thank you for your question! Python is my main programming language - I use it for almost everything! It's like my morning cup of tea for coding. I use it to build AI systems, analyze data, and create web applications. Think of it as the language that lets me turn ideas into reality.`,
                technical: `That's an excellent question! Python is my primary programming language. I'm very confident with it and believe that even if I encounter challenges, I can quickly learn and adapt. I leverage it extensively for data science, machine learning, AI applications, and web development. My expertise includes Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, and advanced libraries for building sophisticated data pipelines, ML models, and scalable applications. I've used Python to develop production systems that process millions of data points daily.`,
                casual: `That's a great question! Oh, Python is my go-to language! I'm very comfortable with it 😊 I use it for everything from building AI systems to web apps. It's just so versatile and powerful. Here's a coding joke for you: Why do Python programmers prefer dark mode? Because light attracts bugs! 🐛`,
                conversational: `Thank you for asking! Python is my primary programming language - I'm very confident with it. I use it extensively for data science, machine learning, AI applications, and even web development. It's really become my main tool for turning complex problems into elegant solutions.`
            };
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('javascript') || input.includes('js')) {
            const responses = {
                simple: `That's a good question! JavaScript is another language I'm very comfortable with. I use it to build websites and web applications. It's what makes websites interactive and dynamic.`,
                technical: `Thank you for your question! JavaScript is one of my core skills. I'm very confident with it and believe that even if I encounter challenges, I can quickly learn and adapt. I utilize it for full-stack web development, React.js frontend development, Node.js backend development, and building modern web applications with scalable architectures. I've developed applications handling thousands of concurrent users and implemented complex state management systems.`,
                casual: `That's a great question! JavaScript? Yeah, I'm very solid with it! I use it for building websites and web apps. It's essential for making things work on the web. Here's a fun fact: JavaScript was created in just 10 days - talk about a quick prototype! ⚡`,
                conversational: `Thank you for asking! JavaScript is another strong skill of mine - I'm very confident with it. I use it for full-stack web development, building React applications, and creating modern web solutions.`
            };
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('machine learning') || input.includes('ml')) {
            const responses = {
                simple: `That's an excellent question! Machine learning is where I really shine! I build systems that can learn from data and make predictions. It's like teaching computers to think and make decisions.`,
                technical: `Thank you for your question! Machine Learning is a key strength of mine. I'm very confident with it and believe that even if I encounter challenges, I can quickly learn and adapt. I specialize in predictive modeling, AI algorithms, Scikit-learn, TensorFlow, PyTorch, deep learning with neural networks (CNN, RNN, Transformers), statistical modeling, and deploying ML models in production environments. I've developed systems that process terabytes of data and make real-time predictions.`,
                casual: `That's a great question! Machine learning is my jam! I love building AI systems that can learn and make predictions. It's super exciting stuff. Here's a joke: Why did the AI go to therapy? Because it had too many deep issues! 🤖`,
                conversational: `Thank you for asking! Machine learning is definitely one of my key strengths - I'm very confident with it. I work with predictive modeling, AI algorithms, and have extensive experience with frameworks like TensorFlow and PyTorch.`
            };
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('education') || input.includes('degree') || input.includes('university')) {
            const responses = {
                simple: `That's a great question! I have a Bachelor's degree in Computer Science from the University of Nairobi. I focused on data structures, algorithms, and software engineering. I was on the Dean's List and won a programming competition!`,
                technical: `Thank you for your question! I hold a Bachelor's degree in Computer Science from the University of Nairobi. My academic focus included advanced data structures, algorithms, software engineering principles, and computer architecture. I achieved Dean's List recognition and won the university programming competition. My coursework provided a strong foundation in theoretical computer science and practical software development.`,
                casual: `That's a great question! I got my Bachelor's in Computer Science from the University of Nairobi. I was pretty good at it - made the Dean's List and even won a programming competition! 🎓 Here's a joke: Why do programmers prefer dark mode? Because light attracts bugs! 🐛`,
                conversational: `Thank you for asking! I have a Bachelor's degree in Computer Science from the University of Nairobi. I focused on data structures, algorithms, and software engineering. I was on the Dean's List and won a programming competition, which really helped build my problem-solving skills.`
            };
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('certification') || input.includes('certified')) {
            const responses = {
                simple: `That's an excellent question! I have several certifications including AWS Solutions Architect, Google Cloud Data Engineer, Azure Data Scientist, and TensorFlow Developer. These help me stay current with cloud and AI technologies.`,
                technical: `Thank you for your question! I hold multiple industry-recognized certifications: AWS Certified Solutions Architect (2023), Google Cloud Professional Data Engineer (2023), Microsoft Azure Data Scientist Associate (2022), and TensorFlow Developer Certificate (2022). These certifications validate my expertise in cloud architecture, data engineering, machine learning, and deep learning technologies. They demonstrate my commitment to staying current with industry best practices and emerging technologies.`,
                casual: `That's a great question! I've got several certifications - AWS, Google Cloud, Azure, and TensorFlow. They're like badges of honor in the tech world! 🏆 Here's a joke: Why do certifications matter? Because they're like a resume's way of saying "I can actually do this stuff!" 😄`,
                conversational: `Thank you for asking! I have several certifications including AWS Solutions Architect, Google Cloud Data Engineer, Azure Data Scientist, and TensorFlow Developer. These help me stay current with cloud and AI technologies and demonstrate my expertise in these areas.`
            };
            return responses[this.responseStyle] || responses.conversational;
        } else {
            const responses = {
                simple: `That's a great question! I have a pretty diverse set of skills! My main areas are:
• Python - my primary language for data science and AI
• JavaScript - for building websites and web apps
• Machine Learning - building AI systems that can learn
• Web Development - creating modern websites and applications
• Cloud Technologies - AWS, Azure, Google Cloud

I'm always learning new technologies and staying current with the latest tools.`,
                technical: `Thank you for your comprehensive question! I possess a comprehensive technical skill set across multiple domains:

**Programming Languages:**
• Python - Primary language for data science and ML
• JavaScript - Full-stack web development
• R - Secondary language for data science
• SQL - Database management and optimization
• NoSQL - Modern database technologies
• Java - Enterprise application development
• C++ - System programming and performance optimization

**Data Science & AI:**
• Machine Learning - Predictive models and AI algorithms
• Deep Learning - Neural networks, CNN, RNN, Transformers
• Data Analysis - Pandas, NumPy, Matplotlib, Seaborn
• Statistics - Statistical modeling and hypothesis testing
• Big Data - Apache Spark, Hadoop, Kafka

**Web Development:**
• React.js - Modern frontend development
• Node.js - Backend API development
• HTML/CSS - Responsive web design
• Angular - Enterprise frontend frameworks
• Django/Flask - Python web frameworks

**Cloud & DevOps:**
• AWS/Azure/GCP - Cloud infrastructure and services
• Docker - Containerization and deployment
• Kubernetes - Container orchestration

I've successfully applied these skills across multiple domains including finance, healthcare, and e-commerce.`,
                casual: `That's a great question! I've got a pretty solid skill set! I'm very good with Python and JavaScript, plus I know my way around machine learning, web development, and cloud stuff. I'm always picking up new things too. Here's a joke: Why do programmers prefer dark mode? Because light attracts bugs! 🐛`,
                conversational: `Thank you for asking! I have a diverse technical skill set across multiple areas. My strongest languages are Python and JavaScript, and I'm also proficient in machine learning, data analysis, web development, and cloud technologies. I'm always learning and staying current with new technologies.`
            };
            return responses[this.responseStyle] || responses.conversational;
        }
    }

    handleProjectQuestion(input) {
        if (input.includes('pregnancy') || input.includes('maternal') || input.includes('health')) {
            const responses = {
                simple: `Thank you for your question! My pregnancy outcomes prediction project is a research project I conducted at Jomo Kenyatta University. I developed a machine learning model that can predict adverse pregnancy outcomes using data from the Kenya Demographic and Health Survey. It achieved 90.83% sensitivity in predictions!`,
                technical: `That's an excellent question! **Predicting Adverse Pregnancy Outcomes in Kenya Using Machine Learning**

This is a research project I conducted at JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY under Dr. Barini's supervision (Oct 2024 - Apr 2025).

**Project Overview:**
• Developed a decision tree-based machine learning model to predict adverse pregnancy outcomes
• Used the 2022 Kenya Demographic and Health Survey (KDHS) dataset
• Analyzed key factors such as total pregnancies, birth intervals, and education level

**Key Features:**
• Machine learning model with 90.83% sensitivity
• Statistical analysis of risk patterns
• Comparison of weighted and unweighted models
• Actionable insights for maternal healthcare interventions

**Technologies Used:**
• Python for data analysis and modeling
• Machine Learning algorithms (Decision Trees)
• Statistical modeling and analysis
• Data preprocessing and feature engineering

**Impact:**
• Research project with potential to improve maternal healthcare outcomes in Kenya
• Provided insights for targeted healthcare interventions
• Demonstrated practical application of ML in healthcare

This project showcases my ability to apply machine learning to real-world healthcare challenges and conduct meaningful research.`,
                casual: `That's a great question! My pregnancy outcomes prediction project was a research project I did at university. I built a machine learning model that can predict pregnancy complications with 90.83% accuracy! Pretty cool, right? Here's a joke: Why did the AI go to therapy? Because it had too many deep issues! 🤖`,
                conversational: `Thank you for asking! My pregnancy outcomes prediction project was a research project I conducted at Jomo Kenyatta University. I developed a machine learning model that can predict adverse pregnancy outcomes using health survey data, achieving 90.83% sensitivity.`
            };
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('investment') || input.includes('stock') || input.includes('advisor')) {
            const responses = {
                simple: `That's a great question! My AI investment advisor is a system I developed that can predict stock prices with over 90% accuracy. It uses machine learning to analyze market data and give investment advice. It's like having a smart financial advisor!`,
                technical: `Thank you for your question! **AI Investment Advisor with Stock Predictor**

This is a freelance project I developed as a Data Scientist and Software Developer (Jan 2023 - Present).

**Project Overview:**
• Developed an AI investment advisor featuring an advanced stock predictor
• Achieved over 90% accuracy on real-world data
• Provides personalized investment recommendations

**Key Features:**
• Advanced stock prediction algorithms
• Real-time market data analysis
• AI-powered investment recommendations
• High accuracy prediction model

**Technologies Used:**
• Python for ML algorithms and data processing
• Machine Learning frameworks for prediction
• Data analysis and visualization tools
• Real-time data processing capabilities

**Impact:**
• Achieved over 90% accuracy on real-world data
• Provides actionable investment insights
• Demonstrates practical application of AI in finance

This project showcases my expertise in applying machine learning to financial problems and building production-ready AI systems.`,
                casual: `That's a great question! My AI investment advisor is pretty cool! It can predict stock prices with over 90% accuracy using machine learning. It's like having a smart financial advisor that never sleeps! Here's a joke: Why did the AI investor go broke? Because it had too many deep learning issues! 🤖`,
                conversational: `Thank you for asking! My AI investment advisor is a system I developed that uses machine learning to predict stock prices and provide investment advice. It achieved over 90% accuracy on real-world data, demonstrating my ability to apply AI to financial problems.`
            };
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('tender') || input.includes('dashboard') || input.includes('bidding')) {
            const responses = {
                simple: `That's a good question! I created a dashboard for analyzing tender bidding success rates. It helps businesses understand their bidding performance and make better strategic decisions. It's a business intelligence tool that provides valuable insights.`,
                technical: `Thank you for your question! **Tender Bidding Success Rate Analysis Dashboard**

This is a freelance project I developed as a Data Scientist and Software Developer (Jan 2023 - Present).

**Project Overview:**
• Created a dashboard for analyzing tender bidding success rates
• Collaborated with a small business to provide strategic insights
• Data-driven approach to business improvement

**Key Features:**
• Interactive dashboard for tender analysis
• Success rate tracking and visualization
• Strategic insights for business improvements
• Data-driven decision making tools

**Technologies Used:**
• Data visualization tools and frameworks
• Dashboard development platforms
• Business intelligence tools
• Data analysis and processing

**Impact:**
• Provided insights for strategic improvements in tender bidding
• Helped businesses optimize their bidding strategies
• Demonstrated practical application of data analysis in business

This project showcases my ability to create meaningful business intelligence solutions and apply data analysis to real business problems.`,
                casual: `That's a great question! I built a dashboard that helps businesses analyze their tender bidding success rates. It's like a business intelligence tool that shows them how well they're doing and how to improve! Here's a joke: Why do web developers prefer dark mode? Because light attracts bugs! 🐛`,
                conversational: `Thank you for asking! I created a dashboard for analyzing tender bidding success rates. It helps businesses understand their bidding performance and make better strategic decisions. It's a great example of how I apply data analysis to solve business problems.`
            };
            return responses[this.responseStyle] || responses.conversational;
        } else {
            const responses = {
                simple: `That's a great question! I've worked on several interesting projects! My main ones are:
• Pregnancy Outcomes Prediction - a research project using machine learning
• AI Investment Advisor - a stock prediction system with 90%+ accuracy
• Tender Analysis Dashboard - a business intelligence tool

Each project shows different skills and approaches to problem-solving.`,
                technical: `Thank you for your comprehensive question! I've worked on several key projects that showcase my diverse skills:

**1. Pregnancy Outcomes Prediction Research**
• Machine learning model for predicting adverse pregnancy outcomes
• Research project at Jomo Kenyatta University under Dr. Barini
• Technologies: Python, Machine Learning, Statistical Analysis
• Impact: 90.83% sensitivity in predictions

**2. AI Investment Advisor**
• Stock prediction system with advanced ML algorithms
• Freelance project as Data Scientist
• Technologies: Python, Machine Learning, AI, Data Analysis
• Impact: Over 90% accuracy on real-world data

**3. Tender Analysis Dashboard**
• Business intelligence dashboard for tender bidding analysis
• Freelance project for small business
• Technologies: Data Visualization, Dashboard Development, BI
• Impact: Strategic insights for business improvements

Each project demonstrates different aspects of my technical expertise and showcases my ability to deliver impactful solutions across various domains.`,
                casual: `That's a great question! I've got a few cool projects under my belt! There's my pregnancy prediction research, AI investment advisor, and tender analysis dashboard. Each one is pretty different and shows off different skills. Here's a joke: Why do programmers prefer dark mode? Because light attracts bugs! 🐛`,
                conversational: `Thank you for asking! I've worked on several key projects that showcase my diverse skills. There's my pregnancy outcomes prediction research, AI investment advisor, and tender analysis dashboard. Each project demonstrates different aspects of my technical expertise.`
            };
            return responses[this.responseStyle] || responses.conversational;
        }
    }

    handlePersonalQuestion(input) {
        // Block questions about physical/personal details
        const sensitiveKeywords = [
            'height', 'tall', 'weight', 'eye', 'eyes', 'color of eyes', 'family', 'parents', 'siblings', 'brother', 'sister', 'mother', 'father', 'dad', 'mum', 'mom', 'married', 'single', 'relationship', 'age', 'old are you', 'birthday', 'born', 'date of birth', 'where do you live', 'address', 'live', 'location', 'where are you from'
        ];
        if (sensitiveKeywords.some(keyword => input.includes(keyword))) {
            return "Hehe, I don't like talking about myself on the internet. I would however have no problem telling you more about myself in person—feel free to reach out to me. Thank you.";
        }
        if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
            const responses = {
                simple: `Thank you for your question! You can reach me through email at nyenzoisabwa@gmail.com, or connect with me on LinkedIn and GitHub. I'm always interested in new opportunities and collaborations!`,
                technical: `Thank you for your question! You can reach me through multiple channels:\n\n**Email:** nyenzoisabwa@gmail.com\n**LinkedIn:** https://www.linkedin.com/in/nyenzo-isabwa-5b0734352/\n**GitHub:** https://github.com/Nyenzo\n**Website:** nyenzo.github.io\n\nI'm always interested in new opportunities and collaborations. Feel free to reach out for projects, job opportunities, or just to connect!`,
                casual: `That's a great question! Sure! You can email me at nyenzoisabwa@gmail.com, or find me on LinkedIn and GitHub. I'm always up for new opportunities and collaborations! 😊`,
                conversational: `Thank you for asking! You can reach me through email at nyenzoisabwa@gmail.com, or connect with me on LinkedIn and GitHub. I'm always interested in new opportunities and collaborations.`
            };
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('background') || input.includes('experience')) {
            const responses = {
                simple: `That's an excellent question! I'm a Nairobi-born creative who embraces life's unpredictable flow. Growing up in Kenya's vibrant capital shaped my adventurous spirit and love for discovering new experiences. I'm a Data Scientist and Software Engineer who loves creating innovative solutions. I work with AI, machine learning, and web development to solve real-world problems.`,
                technical: `Thank you for your comprehensive question! **My Background & Experience:**\n\nI'm a Nairobi-born creative and passionate Data Scientist with extensive expertise in artificial intelligence, machine learning, and web development. Growing up in Kenya's vibrant capital shaped my adventurous spirit and love for discovering new experiences.\n\n**Professional Focus:**\n• Creating innovative solutions through data science, AI, and web development\n• Transforming complex problems into elegant, user-friendly applications\n• Bridging the gap between data science and practical applications\n• Building scalable and maintainable systems\n\n**Personal Philosophy:**\nI believe in the beauty of deep conversations and surrendering to life's natural rhythm. There's something freeing about accepting that we can't control everything, so why not enjoy the journey?\n\n**Work Experience:**\n• AI-powered financial applications for investment analysis\n• Automated trading systems for forex markets\n• Web development for organizational platforms\n• Data analysis for business intelligence\n• Machine learning pipelines and model deployment\n\n**Domains of Expertise:**\n• Finance and investment technology\n• Healthcare technology\n• Business intelligence and analytics\n• Web development and software engineering\n• E-commerce and education technology\n\n**Key Achievements:**\n• Led development of 5+ production AI applications\n• Reduced system response time by 60% through optimization\n• Mentored 10+ junior developers\n• Contributed to 20+ open-source projects\n\nI hold a strong academic foundation in computer science and data analysis, with practical experience in both corporate and entrepreneurial environments.`,
                casual: `That's a great question! I'm a Nairobi-born creative who loves building cool stuff and discovering new experiences. Music flows through my daily life—I play both piano and guitar, and when I'm not making music, you'll find me swimming, gaming, or reading a good book. I'm always learning new things and looking for exciting opportunities. Here's a fun fact: bananas are technically berries, but strawberries aren't! 🍌🍓`,
                conversational: `Thank you for asking! I'm a Nairobi-born creative and Data Scientist passionate about creating innovative solutions through data science, AI, and web development. I love deep conversations, music, and exploring new experiences. I've worked on projects across multiple domains including finance, healthcare technology, and business intelligence.`
            };
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('hobby') || input.includes('interest') || input.includes('do for fun') || input.includes('free time')) {
            return "I'm passionate about music (I play piano and guitar), swimming, gaming, and reading. I also love writing, fitness, and exploring new creative outlets. Adventure and learning new things keep me energized!";
        } else if (input.includes('philosophy') || input.includes('approach to life') || input.includes('what do you believe')) {
            return "I believe in the beauty of deep conversations and surrendering to life's natural rhythm. There's something freeing about accepting that we can't control everything, so why not enjoy the journey?";
        } else if (input.includes('fun fact') || input.includes('something interesting')) {
            return "Here's something wild: bananas are technically berries, but strawberries aren't! And did you know the Eiffel Tower grows over 6 inches taller in summer due to thermal expansion?";
        } else if (input.includes('ai') || input.includes('tech') || input.includes('technology')) {
            return "I'm captivated by AI's rapid evolution. Facebook once had to shut down chatbots that invented their own language, and now AI can reconstruct images from human brainwaves. The future is both exciting and mind-bending!";
        } else if (input.includes('active') || input.includes('fitness') || input.includes('workout') || input.includes('stay fit')) {
            return "Fitness keeps my body strong while writing feeds my soul. I love balancing physical activity with creative expression, whether that's crafting stories or exploring new workout routines.";
        } else if (input.includes('curious') || input.includes('curiosity') || input.includes('adventure') || input.includes('explore')) {
            return "I'm endlessly fascinated by learning new things and pushing my boundaries. Adventure calls to me, whether it's trying a new skill, exploring unfamiliar places, or simply having meaningful conversations with interesting people.";
        } else {
            const responses = {
                simple: `That's a great question! I'm a Data Scientist and Software Engineer who loves turning complex problems into simple, elegant solutions. I work with AI, machine learning, and web development to create useful applications.`,
                technical: `Thank you for your question! **About Me:**\n\nI'm a passionate Data Scientist and Software Engineer who specializes in creating innovative solutions through data science, AI, and web development.\n\n**What I Do:**\n• Transform complex problems into elegant, user-friendly applications\n• Develop AI and machine learning solutions\n• Build full-stack web applications\n• Create data-driven insights and analytics\n• Design scalable and maintainable systems\n\n**My Philosophy:**\n"Data is the new oil, and AI is the engine that drives innovation. I'm passionate about building the bridge between raw data and meaningful insights."\n\n**Current Focus:**\n• Advancing AI and machine learning applications\n• Developing scalable web solutions\n• Contributing to open-source projects\n• Mentoring and knowledge sharing in the tech community\n• Building sustainable and ethical AI systems\n\n**Professional Approach:**\n• Problem-solving with analytical thinking\n• Innovation and continuous learning\n• Collaboration and knowledge sharing\n• Results-driven with measurable impact\n\nI'm always looking for new challenges and opportunities to apply my skills in innovative ways.`,
                casual: `That's a great question! I'm a Data Scientist and Software Engineer who loves building cool stuff! I work with AI, machine learning, and web development to solve real problems. I'm always learning new things and looking for exciting opportunities. Here's a joke: Why do programmers prefer dark mode? Because light attracts bugs! 🐛`,
                conversational: `Thank you for asking! I'm a Data Scientist and Software Engineer who specializes in creating innovative solutions through data science, AI, and web development. I transform complex problems into elegant, user-friendly applications and am always looking for new challenges.`
            };
            return responses[this.responseStyle] || responses.conversational;
        }
    }

    handleInterviewQuestion(input) {
        if (input.includes('strength') || input.includes('strong')) {
            const responses = {
                simple: `Thank you for your question! I think my main strengths are my technical skills and problem-solving approach. I'm very good at taking complex problems and turning them into simple, elegant solutions. I also love learning new technologies and staying current with the latest tools.`,
                technical: `Thank you for your comprehensive question! **My Key Strengths:**

1. **Technical Excellence**
   • Strong skills in data science, AI, and software engineering
   • Experience with cutting-edge technologies (Python, ML, React, Node.js)
   • Proven ability to deliver innovative solutions
   • Expertise in cloud platforms and DevOps practices

2. **Problem-Solving Approach**
   • Transform complex business problems into elegant technical solutions
   • Results-driven focus on delivering measurable business value
   • Analytical mindset with practical implementation skills
   • Systematic approach to debugging and optimization

3. **Innovation & Learning**
   • Stay current with cutting-edge technologies and methodologies
   • Passionate about continuous learning and improvement
   • Contribute to open-source projects and knowledge sharing
   • Adapt quickly to new technologies and frameworks

4. **Cross-Domain Expertise**
   • Experience across multiple domains (finance, healthcare, business intelligence)
   • Ability to work effectively in cross-functional teams
   • Adaptable to different project requirements and technologies
   • Strong communication and collaboration skills

5. **Project Delivery**
   • Proven track record of successful project completion
   • Experience with diverse project types (AI applications, trading systems, web platforms)
   • Focus on creating user-friendly, scalable solutions
   • Strong attention to detail and quality assurance

6. **Leadership & Mentoring**
   • Mentored 10+ junior developers
   • Led development of 5+ production AI applications
   • Contributed to 20+ open-source projects
   • Strong communication and presentation skills`,
                casual: `That's a great question! I'd say my strengths are my technical skills and my ability to solve complex problems. I'm very good at learning new things quickly and I love building stuff that actually works! Here's a joke: Why do programmers prefer dark mode? Because light attracts bugs! 🐛`,
                conversational: `Thank you for asking! My key strengths are my technical expertise and problem-solving approach. I'm very good at taking complex problems and turning them into elegant solutions. I also have experience across multiple domains and love staying current with new technologies.`
            };
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('motivation') || input.includes('why')) {
            const responses = {
                simple: `That's an excellent question! I'm motivated by creating solutions that solve real problems. I love building things that make a difference and learning new technologies. I want to contribute to the tech community and help others grow.`,
                technical: `Thank you for your insightful question! **My Motivations:**

**Primary Motivations:**
• Creating innovative solutions that solve real-world problems
• Advancing AI and machine learning applications
• Building bridges between raw data and meaningful insights
• Contributing to the tech community through open-source and mentoring

**What Drives Me:**
• Passion for transforming complex problems into elegant solutions
• Excitement about cutting-edge technologies and their applications
• Desire to make a meaningful impact through technology
• Love for continuous learning and staying current with industry trends

**Career Goals:**
• Advancing AI and machine learning applications
• Developing scalable web solutions
• Contributing to open-source projects
• Mentoring and knowledge sharing in the tech community
• Leading innovative technology projects
• Building sustainable and ethical AI systems

**Personal Philosophy:**
"Data is the new oil, and AI is the engine that drives innovation. I'm passionate about building the bridge between raw data and meaningful insights."

**Professional Values:**
• Innovation and continuous improvement
• Collaboration and knowledge sharing
• Ethical technology development
• Impact-driven problem solving`,
                casual: `That's a great question! I'm motivated by building cool stuff that actually helps people! I love learning new technologies and I want to contribute to the tech community. It's just really exciting to create solutions that make a difference. Here's a joke: Why did the AI go to therapy? Because it had too many deep issues! 🤖`,
                conversational: `Thank you for asking! I'm motivated by creating innovative solutions that solve real-world problems. I love advancing AI and machine learning applications, and I want to contribute to the tech community through open-source projects and mentoring.`
            };
            return responses[this.responseStyle] || responses.conversational;
        } else if (input.includes('challenge') || input.includes('difficult') || input.includes('hardest') || input.includes('tough')) {
            const responses = {
                simple: `That's a great question! One of the most challenging things I've worked on was building the automated trading bot. It was really complex because I had to handle real-time market data, make quick decisions, and ensure the system was reliable. I learned a lot about system design and risk management.`,
                technical: `Thank you for your question! **My Most Challenging Experience:**

The most complex challenge I've faced was developing the automated trading bot. This project required:

**Technical Complexity:**
• Real-time market data processing and analysis
• High-frequency trading algorithms with millisecond precision
• Risk management and portfolio optimization
• System reliability and fault tolerance
• Multi-threaded processing and concurrency management

**Key Challenges Overcome:**
• Managing real-time data streams from multiple sources
• Implementing complex trading algorithms with minimal latency
• Ensuring system stability under high-frequency operations
• Balancing risk and return in automated decision-making
• Handling network failures and data inconsistencies

**Lessons Learned:**
• Importance of thorough testing and backtesting
• Need for robust error handling and monitoring
• Value of modular system architecture
• Critical role of risk management in financial systems
• Importance of performance optimization and scalability

**Outcome:**
• Successfully processed over 10,000 trades per day
• Achieved 99.9% system uptime
• Implemented comprehensive risk management
• Created a scalable and maintainable system

This challenge taught me the importance of careful system design, thorough testing, and the critical balance between performance and reliability.`,
                casual: `That's a great question! The most complex challenge was probably building my trading bot. It was pretty intense - I had to handle real-time market data, make quick decisions, and make sure everything worked reliably. It was a great learning experience though! Here's a joke: Why do programmers prefer dark mode? Because light attracts bugs! 🐛`,
                conversational: `Thank you for asking! The most challenging project I've worked on was the automated trading bot. It required handling real-time market data, implementing complex trading algorithms, and ensuring system reliability. It was a great learning experience that taught me a lot about system design and risk management.`
            };
            return responses[this.responseStyle] || responses.conversational;
        } else {
            const responses = {
                simple: `That's a great question! For interviews, I focus on my technical skills, problem-solving approach, and my projects. I'm very good at explaining complex things in simple terms and I love learning new technologies.`,
                technical: `Thank you for your comprehensive question! **Interview-Ready Information:**

**Technical Expertise:**
• Data Science & AI: Machine Learning, Deep Learning, Data Analysis
• Programming: Python, JavaScript, R, SQL, Java, C++
• Web Development: React.js, Node.js, HTML/CSS, Angular
• Cloud & DevOps: AWS, Azure, GCP, Docker, Kubernetes

**Key Projects:**
• Aivestor: AI-powered investment advisor using ML algorithms
• Trading Bot: High-frequency automated trading system for forex
• Tule Initiative: Modern web platform for organizational initiatives

**Professional Approach:**
• Problem-solving: Transform complex problems into elegant solutions
• Innovation: Stay current with cutting-edge technologies
• Collaboration: Work effectively in cross-functional teams
• Results-driven: Focus on delivering measurable business value

**Key Achievements:**
• Led development of 5+ production AI applications
• Reduced system response time by 60% through optimization
• Mentored 10+ junior developers
• Contributed to 20+ open-source projects

**Contact Information:**
• Email: nyenzoisabwa@gmail.com
• LinkedIn: linkedin.com/in/nyenzo-isabwa-5b0734352
• GitHub: github.com/Nyenzo`,
                casual: `That's a great question! For interviews, I usually talk about my technical skills, my projects, and how I approach problem-solving. I'm very good at explaining things and I love learning new stuff. Here's a joke: Why do programmers prefer dark mode? Because light attracts bugs! 🐛`,
                conversational: `Thank you for asking! For interviews, I focus on my technical expertise, problem-solving approach, and my key projects. I'm very good at explaining complex concepts and I have experience across multiple domains.`
            };
            return responses[this.responseStyle] || responses.conversational;
        }
    }

    generateGeneralResponse(input) {
        const responses = {
            simple: [
                "I'd be happy to help! You can ask me about my skills, projects, experience, or any interview questions.",
                "That's interesting! I have experience in data science, AI, web development, and more. What would you like to know about?",
                "I can tell you about my background, skills, or projects. I'm a Data Scientist and Software Engineer who loves building innovative solutions.",
                "Great question! I've worked on various projects including AI systems, trading bots, and web platforms. What interests you most?"
            ],
            technical: [
                "I'd be happy to provide detailed information about my technical expertise, projects, or professional experience. What specific aspect would you like to explore?",
                "That's an interesting inquiry! I have comprehensive experience in data science, AI, machine learning, and web development. Which domain would you like to discuss?",
                "I can provide detailed insights into my background, technical skills, or project portfolio. I'm a Data Scientist and Software Engineer with expertise in multiple domains.",
                "Excellent question! I've developed various projects including AI-powered applications, automated trading systems, and web platforms. Which area would you like to explore?"
            ],
            casual: [
                "Sure! Ask me anything about my skills, projects, or experience. I'm pretty open about what I do! 😊",
                "Cool question! I work with data science, AI, web development, and stuff like that. What would you like to know?",
                "I can tell you about my background, skills, or projects. I'm a Data Scientist and Software Engineer who loves building cool stuff.",
                "Nice! I've worked on some pretty interesting projects - AI systems, trading bots, web platforms. What catches your interest?"
            ],
            conversational: [
                "I'd be happy to help! You can ask me about my skills, projects, experience, or any interview questions.",
                "That's interesting! I have experience in data science, AI, web development, and more. What would you like to know about?",
                "I can tell you about my background, skills, or projects. I'm a Data Scientist and Software Engineer who loves building innovative solutions.",
                "Great question! I've worked on various projects including AI systems, trading bots, and web platforms. What interests you most?"
            ]
        };
        
        const styleResponses = responses[this.responseStyle] || responses.conversational;
        return styleResponses[Math.floor(Math.random() * styleResponses.length)];
    }

    addMessage(message) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageElement = document.createElement('div');
        messageElement.className = `chatbot-message ${message.type}-message`;
        
        const icon = message.type === 'user' ? 'fas fa-user' : 'fas fa-robot';
        const alignment = message.type === 'user' ? 'right' : 'left';
        
        messageElement.innerHTML = `
            <div class="message-content ${alignment}">
                <div class="message-icon">
                    <i class="${icon}"></i>
                </div>
                <div class="message-text">
                    ${message.content.replace(/\n/g, '<br>')}
                </div>
            </div>
        `;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NyenzoChatbot();
}); 