import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,

    walmart,
    jpmorgan,
    meta,
    starbucks,
    tesla,
    shopify,
    skyscanner,

    ai_summarizer,
    noteTaking,
    travel,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
      my_work_link: "https://github.com/nikbhaladhare2104"
    },
    {
      title: "React Developer",
      icon: mobile,
      my_work_link: "https://github.com/nikbhaladhare2104"

    },
    {
      title: "Python Developer",
      icon: backend,
      my_work_link: "https://github.com/nikbhaladhare2104/Python-Projects"
    },
    {
      title: "ML engineer",
      icon: creator,
      my_work_link: "https://github.com/nikbhaladhare2104/TensorFlow-Deep-Learning-Projects"
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },

    {
      title: "Software Engineer Intern",
      company_name: "J.P. Morgan Software Engineering Job Simulation",
      icon: jpmorgan,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - May 2023",
      points: [
        "Set up a local dev environment by downloading the necessary files, tools and dependencies.",
        "Fixed broken files in the repository to make web application output correctly.",
        "Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor."
        
      ],
    },

    {
      title: "Software Engineer Intern",
      company_name: "Walmart USA Advanced Software Engineering Job Simulation",
      icon: walmart,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "Completed the Advanced Software Engineering Job Simulation where I solved difficult technical projects for a variety of teams at Walmart.",
        "Developed a novel version of a heap data structure in Java for Walmart’s shipping department, showcasing strong problem-solving and algorithmic skills.",
        "Designed a UML class diagram for a data processor, considering different operating modes and database connections.",
        "Created an entity relationship diagram to design a new database accounting for all requirements provided by Walmart’s pet department.",
      ],
    },

    {
      title: "Front-End Software Engineer",
      company_name: "Skyscanner",
      icon: skyscanner,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Sept 2023",
      points: [
        "Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner.",        
        "Developed a page for picking a travel date using Skyscanner’s open-source Backpack React library.",
        "Customised my application and ran automated tests to ensure it rendered properly."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Article Summarizer",
      description:
        "Simplify your reading with Summarize, an open source article summarrizer that transform lengthy articles into clear and consize summary",
        // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Redux Toolkit",
          color: "green-text-gradient",
        },
        {
          name: "Rapid API",
          color: "pink-text-gradient",
        },
      ],
      website_url : "https://ai-article-summarizer-nb.netlify.app/",
      image: ai_summarizer,
      source_code_link: "https://github.com/nikbhaladhare2104/ai-article-summarizer",
    },
    {
      name: "Note Taking App",
      description:
        "Web application that enables users to keep track of their time and take notes of schedule.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "components",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      website_url: "https://note-taking-app-nb.netlify.app/",
      image: noteTaking,
      source_code_link: "https://github.com/nikbhaladhare2104",
    },
    {
      name: "Travel",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "hooks",
          color: "pink-text-gradient",
        },
      ],
      website_url : "https://travel-nb.netlify.app/",
      image: travel,
      source_code_link: "https://github.com/nikbhaladhare2104/travel-nb-react",
    },

  ]
  
  export { services, technologies, experiences, testimonials, projects };

  