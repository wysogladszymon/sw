import { TechStack } from "@/types/TechStack";
export enum ProjectCategories {
  MachineLearning = 'machinelearning',
  Algorithms = 'algorithms',
  webDevelopment = 'webdevelopment'
}

export interface ProjectInterface {
  title: string;
  description?: string[]; // each element is next row :P
  url?: string;
  techStack?: TechStack[]
}

const machineLearningProjects: ProjectInterface[] = [
  {
    title: "Predictive Analysis of Diabetes Risk",
    description: [
      "This project is my first predictive model using Neural Network. The cause of the project was to implement Neural Network Layers from scratch for better understanding of the topic.", 
      "It covers ideas like:",
      "- Dence Neural Network Layers",
      "- Batch Normalization",
      "- Adam - optimizing algorithm",
      "- Hyperparameter tuning"
    ], 
    url: "https://github.com/wysogladszymon/Predictive-Analysis-of-Diabetes-Risk.git",
    techStack:[
      TechStack.Python,
      TechStack.NumPy
    ]
  } as ProjectInterface,
  {
    title: "Machine learning classes",
    description: [
      "This repository contains basic Machine Learning concepts that I learned during my studies."
    ], 
    url: "https://github.com/wysogladszymon/Machine-Learning.git",
    techStack:[
      TechStack.Python,
      TechStack.NumPy,
      TechStack.Pandas,
      TechStack.ScikitLearn
    ]
  } as ProjectInterface
];


const algorithmProjects: ProjectInterface[] = [
  {
    title: "A* the Path Finding Algorithm",
    description: ["I created this to visualize how one of the most common and accurate path-finding algorithm works."], // need to define
    url: "https://github.com/wysogladszymon/Astar-Path-finding-Algorithm.git",
    techStack: [
      TechStack.Python,
      TechStack.NumPy,
      TechStack.Pygame
    ],
  } as ProjectInterface,
  {
    title: "Algorithms and Data Structures",
    description: ["Throughout the course, I gained practical knowledge of fundamental data structures and classical algorithms that are essential for efficient problem-solving and software development. The labs focused on both implementation and understanding of the underlying concepts, with a strong emphasis on algorithmic thinking and code optimization."],
    url: "https://github.com/wysogladszymon/Algorithms-and-Data-Structures.git",
    techStack: [
      TechStack.Python,
      TechStack.NumPy,
      TechStack.OpenCv
    ],
  } as ProjectInterface,
  {
    title: "LeetCode and CSES.fi",
    description: ["There are some of my sollutions to the common CSES.fi or LeetCode problems."],
    url: "https://github.com/wysogladszymon/Problem-solving.git",
    techStack: [
      TechStack.Cpp,
      TechStack.Python,
    ],
  } as ProjectInterface,
  {
  title: "Operational Research",
  description: ["Theese are couple of algorithms mainly focused on optimization problems."],
  url: "https://github.com/wysogladszymon/Operations-Research.git",
  techStack: [
    TechStack.Python,
    TechStack.NumPy,
    TechStack.Pandas,
    TechStack.Matplotlib
  ],
} as ProjectInterface
]


const webDevelopmentProjects: ProjectInterface[] = [
  {
    title: "Artificial Bee Colony",
    description: [
      "The main goal was to create a system that will optimize the delivery route for a courier company. The system is based on the Artificial Bee Colony algorithm, which is a metaheuristic optimization algorithm inspired by the foraging behavior of honey bees."
    ], // need to define
    url: "https://github.com/wysogladszymon/Artificial-Bee-Colony.git",
    techStack: [
      TechStack.React,
      TechStack.TypeScript,
      TechStack.CSS3,
      TechStack.HTML5,
      TechStack.TailwindCSS
    ],
  } as ProjectInterface,
  {
    title: "Chat App",
    description: [
      "This project is my own version of a chat application. It allows users to message others in real-time."
    ], // need to define
    url: "https://github.com/wysogladszymon/chat-app.git",
    techStack: [
      TechStack.React,
      TechStack.TypeScript,
      TechStack.CSS3,
      TechStack.HTML5,
      TechStack.TailwindCSS,
      TechStack.Firebase
    ],
  } as ProjectInterface,
  {
    title: "Fit Project Newsletter",
    description: [
      "This is a Newsletter project for my friend Asia and for her company. I promised it as a overdue birthday gift, but unfortunately she has never opened it."
    ], // need to define
    url: "https://github.com/wysogladszymon/Newsletter.git",
    techStack: [
      TechStack.Csharp,
      TechStack.ASPDotnet,
      TechStack.Python,
      TechStack.React,
      TechStack.TypeScript,
      TechStack.CSS3,
      TechStack.HTML5,
      TechStack.TailwindCSS
    ],
  } as ProjectInterface,
  {
    title: "Expense Tracker",
    description: [
      "This project is a simple expense tracker that allows you to add and remove transactions and see the balance, income, and expenses. It also allows user to see some statistics about the transactions."
    ], // need to define
    url: "https://github.com/wysogladszymon/Expense-Tracker.git",
    techStack: [
      TechStack.React,
      TechStack.TypeScript,
      TechStack.CSS3,
      TechStack.HTML5,
      TechStack.TailwindCSS,
      TechStack.NodeJS,
      TechStack.MongoDB,
    ],
  } as ProjectInterface,
]

const projectMap: Record<ProjectCategories, ProjectInterface[]> = {
  [ProjectCategories.MachineLearning]: machineLearningProjects,
  [ProjectCategories.Algorithms]: algorithmProjects,
  [ProjectCategories.webDevelopment]: webDevelopmentProjects
};

export default projectMap;

// {
//   title: "",
//   description: [""],
//   url: "",
//   techStack: [
//     TechStack.
//   ],
// } as ProjectInterface

