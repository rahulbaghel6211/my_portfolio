/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Rahul Baghel",
  logo_name: "Rahul.B()",
  nickname: "rahulb02 / picleric",
  full_name: "Rahul Baghel",
  subTitle:
    "Full Stack Developer, Mobile Application. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1-9U8AipRANXrGTd_-rphCCQToMmkXcEx/view?usp=sharing",
  mail: "mailto:rahulbaghel6211@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/rahulbaghel6211",
  linkedin: "https://www.linkedin.com/in/rahul-baghel-296327200/",
  gmail: "rahulbaghel6211@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/rahulbaghel02",
  instagram: "https://www.instagram.com/rahul_baghel000/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and Angular",
        "⚡ Developing mobile applications using React native Android",
        "⚡ Backend development using NodeJS, ExpressJS and mongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Visual Basic",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Android App Development",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Certified AWS Developer Associate and Cloud Practioner",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing web apps on AWS",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Shri Ram Group",
      subtitle: "B.Tech in Electronics & Communication Engineering",
      logo_path: "shri.jpg",
      alt_name: "shri",
      duration: "2017- 2021",
      descriptions: [
        "⚡ Specialized in Signal Processing and Communication Protocols",
        "⚡ Delved into Microelectronics and Integrated Circuit Design:",
        "⚡ Conducted Research in Wireless Communication and RF Engineering",
      ],
      website_link: "https://sritgroup.net/",
    },
    {
      title: " Masai School",
      subtitle: "Full Stack Web Development",
      logo_path: "masai1.png",
      alt_name: "masai",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ Proficient in Front-End Development: Skilled in creating responsive and user-friendly web interfaces.",
        "⚡ Back-End Expertise: Experienced in server-side scripting and database management.",
        "⚡ Full Stack Integration: Capable of seamlessly connecting the front-end and back-end.",
      ],
      website_link: "https://www.masaischool.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Problem Solving (Basic) Certificate",
      subtitle: "HackerRank",
      logo_path: "hackerrank.svg",
      certificate_link:
        "https://www.hackerrank.com/certificates/f614f31df5d3",
      alt_name: "hacker",
      color_code: "black",
    },
    {
      title: "React (Basic) Certificate",
      subtitle: "HackerRank",
      logo_path: "hackerrank.svg",
      certificate_link:
        "https://www.hackerrank.com/certificates/b6619feb2770",
      alt_name: "AWS",
      color_code: "black",
    },
    {
      title: "Node (Basic) Certificate",
      subtitle: "HackerRank",
      logo_path: "hackerrank.svg",
      certificate_link: "https://www.hackerrank.com/certificates/c000ae550153",
      alt_name: "Google",
      color_code: "black",
    },
    {
      title: "JavaScript (Intermediate) Certificate",
      subtitle: "HackerRank",
      logo_path: "hackerrank.svg",
      certificate_link: "https://www.hackerrank.com/certificates/ece649c78368",
      alt_name: "Google",
      color_code: "black",
    },
    {
      title: "Prompt Engineering for ChatGPT",
      subtitle: "Coursera",
      logo_path: "sparc.png",
      certificate_link: "https://coursera.org/share/45cc4654707e07c751ad6a4c97e8aba6",
      alt_name: "Google",
      color_code: "#ffbfae",
    },
    {
      title: "Masai School",
      subtitle: "Full-Stack Web Development",
      logo_path: "masai1.png",
      certificate_link: "https://drive.google.com/file/d/1KHQ-ZXULw1EqceHM1vEWIPjqyNCEGk4R/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fedfe5",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "React Native Developer",
          company: "Cyberium.info",
          company_url: "https://www.cyberium.info/",
          logo_path: "cyberium.png",
          duration: "Dec 2022 - Oct 2023",
          location: "Pune",
          description:
            "Build & Host Business Apps Instantly With AI & Lowcode Powered Builder and Cloud.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Training",
      experiences: [
        {
          title: "Full-Stack Web Developer",
          company: "Masai School",
          company_url:"https://www.masaischool.com/",
          logo_path: "masai1.png",
          duration: "Nov 2021 - Oct 2022",
          location: "Bangalore",
          description: "Develop a portfolio and  website",
          color: "#800000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "rahulbaghel.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@rahulbaghel6211",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "HelloDr Mobile Application",
      url: "https://play.google.com/store/apps/details?id=mirror.hellodr.com",
      description: "HelloDr is a holistic hub that provides online physical, economic, and social well-being services. Our services are designed to help you live a better life.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
        },
      ],
    },
    {
      name: "The Bowl Company",
      url: "the-bowl-company.vercel.app/",
      description: "This is a clone of the website The-Bowl-Company where we implemented some additional features for better user experience",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
        },
      ],
    },
    {
      name: "Uboric-Clone",
      url: "uboric-clone1-hazel.vercel.app/",
      description: "uboric-clone this is the react of website where I used Mongodb to store my data and I used Material UI",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
        },
      ],
    },
    {
      name: "Myglamm",
      url: "nikeshandgroup.netlify.app/index.html",
      description: "MYGLAMM is an ecommerce shopping web application which provides international beauty products - skin care, makeup kit, cosmetics. We had to clone this website. ",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
        },
      ],
    },
    {
      name: "opPortfolio",
      url: "",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
