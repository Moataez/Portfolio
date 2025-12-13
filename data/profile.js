export const PROFILE = {
  name: 'Moatez Ouaz',
  title: `Master's Student in Data Science | Full-Stack Developer | ML & Voice Systems`,
  location: 'Monastir, Tunisia',
  phone: '+216 29 059 272',
  email: 'mo3tezoz239@gmail.com',
  linkedin: 'https://www.linkedin.com/in/moatez-ouaz',
  github: 'https://github.com/Moataez',
  website: 'https://moatez-portfolio.com',
  summary: `Curious and results-driven Master's student in Data Science with a strong foundation in software engineering and hands-on experience building full-stack systems, AI/ML models, and voice assistants. Experienced in backend and frontend development, cloud-based data engineering, graph databases (Neo4j), and speech processing pipelines. I deliver production-focused solutions that bridge research and product requirements, emphasizing reliability, scalability, and clear measurable outcomes.`,
  skills: {
    technical: [
      { category: 'Backend', items: ['SQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Spring Boot', 'Flask'] },
      { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Angular', 'WordPress'] },
      { category: 'Programming', items: ['Java', 'C#', 'C++', 'C', 'Python', 'Cypher'] },
      { category: 'AI/ML', items: ['TensorFlow', 'Keras', 'scikit-learn', 'NLP (NLTK, Transformers)', 'Speech Processing (librosa, Whisper)'] },
      { category: 'DevOps', items: ['Docker', 'APIs (REST, Google, Twilio)'] },
      { category: 'ETL Pipelines', items: ['AWS Glue', 'S3', 'EC2'] },
      { category: 'Data Modeling', items: ['Data Lakes', 'Graph Modeling (Neo4j)', 'Lake Architecture'] },
      { category: 'Data Viz & UI', items: ['Streamlit', 'Dialogflow'] },
      { category: 'Database Tools', items: ['DBeaver', 'Neo4j'] }
    ],
    soft: [
      'Cross-functional teamwork',
      'Problem solving and troubleshooting',
      'Agile/Scrum collaboration',
      'Clear technical communication',
      'Rapid prototyping and iteration',
      'Attention to detail',
      'Leadership & mentoring',
      'Adaptability & continuous learning'
    ]
  },
  experience: [
    {
      role: 'Data Engineer / AI Model Developer (Intern)',
      employer: 'Tunisie Telecom',
      start: 'Feb 2024',
      end: 'May 2024',
      bullets: [
        'Led migration of a relational PostgreSQL dataset to a Neo4j graph database to enable relationship-centric analytics and network queries.',
        'Designed graph data model and performed data mapping and ETL operations using DBeaver and custom Python scripts.',
        'Developed an AI model to extract structured fields from vehicle registration certificates—improving downstream automation and data quality.'
      ]
    },
    {
      role: 'Full-Stack Developer (Contract)',
      employer: 'Bank of Tunisia & Emirates (BTE)',
      start: 'Jul 2023',
      end: 'Sep 2023',
      bullets: [
        'Built internal banking tools from scratch using a modern stack, improving operational workflows for 3+ bank teams.',
        'Owned integration and maintenance of risk and security modules and provided L1/L2 support for production incidents.',
        'Collaborated in an agile team of three developers to deliver features on bi-weekly sprints.'
      ]
    }
  ],
  education: [
    {
      degree: "Master's in Data Science",
      school: 'Faculty of Sciences of Monastir',
      start: 'Sep 2024',
      end: 'Present',
      gpa: '3.8/4.0',
      highlights: [
        'Advanced Machine Learning & Deep Learning',
        'Data Engineering & Cloud Computing',
        'Big Data Processing & Analytics',
        'Natural Language Processing',
        'Statistical Modeling & Inference'
      ]
    },
    {
      degree: "Bachelor's in Computer Science (Software Engineering)",
      school: 'Faculty of Sciences of Monastir',
      start: 'Sep 2021',
      end: 'Jun 2024',
      gpa: '3.9/4.0',
      highlights: [
        'Full-Stack Web Development',
        'Database Design & Management',
        'Software Architecture & Design Patterns',
        'Object-Oriented Programming',
        'Data Structures & Algorithms'
      ]
    }
  ],
  certifications: [
    {
      title: 'Data Engineering - AWS Academy',
      issuer: 'Amazon Web Services',
      link: 'https://www.credly.com/badges/19184b44-4f39-4f55-af45-7c784dd1aa00',
      badgeUrl: '/assets/aws-logo.png',
      date: '2024'
    },
    {
      title: 'Cloud Foundations - AWS Academy',
      issuer: 'Amazon Web Services',
      link: 'https://www.credly.com/badges/bfb34174-aff1-4949-8ab6-f3658c94c0dd',
      badgeUrl: '/assets/aws-logo.png',
      date: '2024'
    },
    {
      title: 'Cisco Linux 1 & 2',
      issuer: 'Cisco Networking Academy',
      link: 'https://www.cisco.com/c/en/us/training-events/training-certifications.html',
      badgeUrl: '/assets/cisco-logo.png',
      date: '2023'
    }
  ],
  projects: [
    {
      title: 'Multimodal Stress Detection (Voice + Text)',
      date: 'Sep 2025 - Nov 2025',
      summary: 'Developed a multimodal classifier that fuses acoustic and textual features to detect stress from voice recordings and transcribed text. Built as a research-to-product prototype for the Faculty of Sciences of Monastir.',
      bullets: [
        'Aggregated and preprocessed audio datasets (RAVDESS, TESS) and performed feature extraction using librosa (MFCC, chroma, mel-spectrogram).',
        'Transcribed audio using Whisper, engineered textual features (TF-IDF, keyword / sentiment signals) and designed a fusion model in TensorFlow/Keras.',
        'Achieved strong cross-validation performance (prototype results used for further research).'
      ],
      tech: ['Python', 'TensorFlow', 'Keras', 'librosa', 'Whisper', 'scikit-learn']
    },
    {
      title: 'Voice Assistant for Dental Clinic (Twilio)',
      date: 'Apr 2025 - Present',
      summary: 'Freelance project designing and delivering a voice-based appointment system for a dental clinic in France. The assistant handles inbound calls, schedules appointments, and sends SMS/email reminders.',
      bullets: [
        'Implemented real-time speech-to-text using Deepgram / Whisper and built dialogue flows with Dialogflow.',
        'Integrated Twilio for telephony, built backend APIs in Python, and managed persistence with SQLite/PostgreSQL.',
        'Added automated notifications (SMS/email) and calendar sync to reduce no-shows and administrative load.'
      ],
      tech: ['Python', 'Twilio', 'Dialogflow', 'Deepgram', 'Whisper', 'PostgreSQL']
    }
  ],
  languages: ['Arabic (Native)', 'French (Advanced)', 'English (Professional)'],
  socials: {
    linkedin: 'https://www.linkedin.com/in/moatez-ouaz',
    github: 'https://github.com/Moataez',
    twitter: 'https://twitter.com/moatez_ouaz',
    email: 'mo3tezoz239@gmail.com'
  }
};
