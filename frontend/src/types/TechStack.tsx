import { FC } from "react";

export enum TechStack {
  // programming languages
  Python = "python",
  C = "c",
  Cpp = "cplusplus",
  Csharp = 'c#',
  React = "react",
  TypeScript = "typescript",
  JavaScript = "javascript",
  CSS3 = "css3",
  HTML5 = "html5",
  Verilog = 'verilog',

  // frameworks
  TailwindCSS = "tailwindcss",
  Firebase = "firebase",
  NodeJS = "nodejs",
  MongoDB = "mongodb",
  Express = "express",
  ASPDotnet = 'aspdotnet',

  // libraries
  NumPy = 'numpy',
  SciPy = 'scipy',
  OpenCv = 'opencv',
  Tensorflow = 'tensorflow',
  PyTorch = 'pytorch',
  Matplotlib = 'matplotlib',
  Pandas = 'pandas',
  Pygame = 'pygame',
  ScikitLearn='sklearn',

  // software
  MATLAB = "matlab",
  TiaPortal = 'tiaportal',
  Docker = 'docker',

  // operating systems
  Linux = "linux",
  MacOs = 'macos',
  Windows =  'windows'
}

const iconMap: Record<TechStack, { src: string; link: string }> = {
  // programming languages
  [TechStack.Python]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    link: "https://www.python.org"
  },
  [TechStack.C]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    link: "https://en.wikipedia.org/wiki/C_(programming_language)"
  },
  [TechStack.Cpp]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    link: "https://isocpp.org/"
  },
  [TechStack.Csharp]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/"
  },
  [TechStack.React]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    link: "https://reactjs.org/"
  },
  [TechStack.TypeScript]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    link: "https://www.typescriptlang.org/"
  },
  [TechStack.JavaScript]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  [TechStack.CSS3]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  [TechStack.HTML5]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
  },
  [TechStack.Verilog]: {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/27/Verilog_logo.svg",
    link: "https://en.wikipedia.org/wiki/Verilog"
  },

  // frameworks
  [TechStack.TailwindCSS]: {
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    link: "https://tailwindcss.com/"
  },
  [TechStack.Firebase]: {
    src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    link: "https://firebase.google.com/"
  },
  [TechStack.NodeJS]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    link: "https://nodejs.org/"
  },
  [TechStack.MongoDB]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    link: "https://www.mongodb.com/"
  },
  [TechStack.Express]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    link: "https://expressjs.com/"
  },
  [TechStack.ASPDotnet]: {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
    link: "https://dotnet.microsoft.com/en-us/apps/aspnet"
  },

  // libraries
  [TechStack.NumPy]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
    link: "https://numpy.org/"
  },
  [TechStack.SciPy]: {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg",
    link: "https://scipy.org/"
  },
  [TechStack.OpenCv]: {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
    link: "https://opencv.org/"
  },
  [TechStack.Tensorflow]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
    link: "https://www.tensorflow.org/"
  },
  [TechStack.PyTorch]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
    link: "https://pytorch.org/"
  },
  [TechStack.Matplotlib]: {
    src: "https://matplotlib.org/_static/images/logo2.svg",
    link: "https://matplotlib.org/"
  },
  [TechStack.Pandas]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
    link: "https://pandas.pydata.org/"
  },
  [TechStack.Pygame]: {
    src: "https://www.pygame.org/ftp/pygame-head-party.png",
    link: "https://www.pygame.org/news"
  },
  [TechStack.ScikitLearn]: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    link: "https://scikit-learn.org/stable"
  },

  // software
  [TechStack.MATLAB]: {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
    link: "https://www.mathworks.com/products/matlab.html"
  },
  [TechStack.TiaPortal]: {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Siemens-logo.svg",
    link: "https://new.siemens.com/global/en/products/automation/industry-software/automation-software/tia-portal.html"
  },
  [TechStack.Docker]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    link: "https://www.docker.com/"
  },

  // operating systems
  [TechStack.Linux]: {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    link: "https://www.kernel.org/"
  },
  [TechStack.MacOs]: {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    link: "https://www.apple.com/macos/"
  },
  [TechStack.Windows]: {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2021.svg",
    link: "https://www.microsoft.com/windows"
  },
};

interface GeneratedIconProps{
  tech: TechStack;
}

export const GeneratedIcon : FC<GeneratedIconProps>= ({ tech }) => {
  const icon = iconMap[tech];

  return (
    <a href={icon.link} target="_blank" rel="noreferrer">
      <img src={icon.src} alt={tech} width="30" height="30" />
    </a>
  );
};