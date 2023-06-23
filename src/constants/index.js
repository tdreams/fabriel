import {
  google,
  ucdavis,
  freecodecamp,
  github,
  carrent,
  ecommerce,
  jobit,
  tripguide,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  shopCart,
} from "../assets";
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
  /*  {
    name: "TypeScript",
    icon: typescript,
  }, */
  {
    name: "React JS",
    icon: reactjs,
  },
  /*   {
    name: "Redux Toolkit",
    icon: redux,
  }, */
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  /* {
    name: "MongoDB",
    icon: mongodb,
  }, */
  /* {
    name: "Three JS",
    icon: threejs,
  }, */
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  /*  {
    name: "docker",
    icon: docker,
  }, */
];
const certificates = [
  {
    title: "Foundations of User Experience (UX) Design",
    company_name: "Google",
    icon: google,
    iconBg: "#383E56",
    date: "Jan 2022 - Jun 2022",
    points: [
      "Designing high-fidelity prototypes and user interfaces using Figma.",
      "Creating responsive web designs and layouts with Adobe XD.",
      "Demonstrating a solid understanding of the foundational principles of user experience (UX) design.",
      "Conducting user research and testing early design concepts to refine and improve the user experience.",
      "Developing wireframes and low-fidelity prototypes to test and validate design ideas.",
      "Starting the UX design process by empathizing with users, defining their needs and problems, and ideating possible solutions.",
      "Designing user experiences for social good, with a focus on creating positive impact for communities and users.",
    ],
  },
  {
    title: "JavaScript for Beginners",
    company_name: "University of California, Davis",
    icon: ucdavis,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Practicing foundational programming skills with a focus on JavaScript.",
      "Exploring the differences between vanilla JavaScript and the popular jQuery library.",
      "Developing several smaller projects to showcase these differences and improve JavaScript proficiency..",
      "Using jQuery plugins to advance skill with more complex and challenging scripts.",
      "Focusing on data manipulation with JavaScript and learning basic methods for handling user-provided or external data sources.",
    ],
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    company_name: "freecodecamp",
    icon: freecodecamp,
    iconBg: "#383E56",
    date: "Feb2023 - Feb 2023",
    points: [
      "Learning the fundamentals of JavaScript including variables, arrays, objects, loops, and functions in the JavaScript Algorithm and Data Structures.",
      "Creating algorithms to manipulate strings, factorialize numbers, and calculate the orbit of the International Space Station after acquiring the fundamentals.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Applying Object Oriented Programming (OOP) and Functional Programming (FP) programming styles or paradigms.",
    ],
  },
];

const projects = [
  {
    id: 1,
    name: "The ShoeShop",
    web_url: "https://ecommerce-nine-ebon-99.vercel.app/",
    description:
      "Web application that allows users to browse and purchase shoes online. It provides a user-friendly interface where users can view various shoe products, add them to the cart, and complete the checkout process. The app offers features such as cart management, and order placement. It aims to provide a seamless shopping experience for customers interested in buying shoes",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-context-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },
  {
    id: 2,
    name: "ShopCart",
    web_url: "https://ecommerce-context-api-hackathon.vercel.app/",
    description:
      "Web application that enables users to browse and purchase headphones and phones.It provides a user-friendly interface where users can view various products, check deals, add them to the cart, and complete the checkout process. The app offers features such as cart management, and order placement",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "react-context-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shopCart,
    source_code_link:
      "https://github.com/tdreams/ecommerce-context-API-hackathon",
  },
  {
    id: 3,
    name: "Trip Guide",
    web_url: "https://ecommerce-nine-ebon-99.vercel.app/",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { technologies, certificates, projects };
