// profileData.ts


import {UserProfileDetails} from "@/app/(pages)/profile/types/profileDetailTypes";

export const userProfileDetails: UserProfileDetails = {
  isOnline: 'Online',
  isFollowing: 'Following',
  username: "Brian",
  location: "Kuala Lumpur, KL 🌉",
  bio: "Front End Developer | Lifelong Learner 🚀",
  aboutMe: `Hey there! 👋 I'm Brian, a passionate front end developer with 1+ years of experience. 
  I love building scalable web applications and exploring new technologies. 
  When I'm not coding, you can find me hiking 🏞️ or playing chess ♟️. 
  Always excited to learn and connect with fellow tech enthusiasts!`,
  quickFacts: [
    "🎓 Computer Science graduate from Warwick University",
    "🏆 Won 1st place in the UCL Startup Pitch Competition",
    "🌱 Currently learning Next and exploring the world of PM",
    "🎯 Goal: Contribute to 10 open-source projects this year",
    "🎸 Fun fact: I play league",
  ],
  skills: [
    {name: "JavaScript/TypeScript", level: 95},
    {name: "React & Next.js", level: 90},
    {name: "Node.js & Express", level: 85},
    {name: "AWS & Cloud Technologies", level: 80},
  ],
  experience: [
    {
      title: "Senior Full Stack Developer - Tech Innovators Inc. 🚀",
      date: "2020 - Present",
      details: [
        "Led development of a microservices-based e-commerce platform",
        "Mentored junior developers and conducted knowledge-sharing sessions",
      ],
    },
    {
      title: "Full Stack Developer - WebSolutions Co. 💻",
      date: "2018 - 2020",
      details: [
        "Developed and maintained multiple client websites using React and Node.js",
        "Implemented performance optimizations, improving load times by 40%",
      ],
    },
  ],
  learningGoals: [
    "Mastering Rust programming language 🦀",
    "Exploring Web3 and blockchain technologies 🔗",
    "Deepening knowledge in system design and architecture 🏗️",
    "Improving skills in AI and machine learning 🤖",
  ],
  favoriteBooks: [
    "Clean Code by Robert C. Martin",
    "Designing Data-Intensive Applications by Martin Kleppmann",
    "The Pragmatic Programmer by Andrew Hunt and David Thomas",
  ],
  onlineCourses: [
    "CS50's Web Programming with Python and JavaScript",
    "Advanced React and GraphQL by Wes Bos",
    "Machine Learning by Andrew Ng (Coursera)",
  ],
  certifications: [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "Certified Kubernetes Administrator",
    "Certified Scrum Master",
  ],
  communityInvolvement: [
    {
      title: "Mentorship",
      description: `I'm passionate about giving back to the community. I mentor 3 junior developers, helping 
      them navigate their career paths and tackle technical challenges.`,
    },
    {
      title: "Hackathons & Events",
      description: `I regularly participate in and organize local hackathons. Last year, I helped organize a 
      charity hackathon that raised $10,000 for coding education in underserved communities.`,
    },
    {
      title: "Teaching & Workshops",
      description: `I run a monthly workshop series on web development basics for beginners. So far, we've helped 
      over 100 aspiring developers start their coding journey!`,
    },
  ],
  openSourceContributions: [
    {
      title: "React Performance Optimizer",
      description: `Created and maintained a popular open-source React library for optimizing component performance, 
      with over 5k GitHub stars.`,
    },
    {
      title: "Contributions to Next.js",
      description: `Actively contribute to Next.js, having submitted several pull requests to improve documentation 
      and fix minor bugs.`,
    },
  ],
  connectionMessage: `I'm always excited to meet fellow developers, share knowledge, and collaborate on interesting projects.
  Whether you're a seasoned pro or just starting out, feel free to reach out! Let's learn and grow together in
  this amazing world of technology. 🚀`,
  followers: 1502,
  following: 843,
  watched: 72,
  starred: 128,
};
