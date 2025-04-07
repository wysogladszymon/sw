import CodeWindow from "@/components/CodeWindow/CodeWindow";
import szymonIMG from "@/assets/szymonIMG.jpg";
import { useTheme } from "next-themes";
import {
  vscDarkPlus,
  oneLight as baseOneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import styles from "./HeaderSection.module.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRef, useState } from "react";
import {SocialButtons} from "@/components/SocialButtons/SocialButtons";

// fix of the background of default oneLight theme
const oneLight = {
  ...baseOneLight,
  'pre[class*="language-"]': {
    ...baseOneLight['pre[class*="language-"]'],
    background: "#ffffff",
  },
  'code[class*="language-"]': {
    ...baseOneLight['code[class*="language-"]'],
    background: "#ffffff",
  },
};

const terminalCode = [
  "import matplotlib.pyplot as plt",
  "try:",
  "  print('mediocre')",
  "except BrillianceOverflowException as brilliance_overflow:",
  "  plt.imshow(brilliance_overflow)",
  "  plt.show()",
];

export const HeaderSection = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);

  const [leftCardScale, setLeftCardScale] = useState<number>(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    // start showing the picture
    const bottomBorder = 0.25;
    const topBorder = 0.35;
    const scaleValue = (latest - bottomBorder) / (topBorder - bottomBorder);
    setScale(Math.min(Math.max(scaleValue, 0), 1));

    // card styles animation
    if (latest > 0.52) {
      setShowContent(true);
    }

    if (latest < 0.5) {
      setShowContent(false);
    }

    const bottomBorder2 = 0.52;
    const topBorder2 = 0.6;

    const scaleValue2 = (latest - bottomBorder2) / (topBorder2 - bottomBorder2);
    const val = Math.min(Math.max(scaleValue2, 0), 1)
    setLeftCardScale(val);
  });
  return (
    <>
      <section ref={sectionRef} className={styles.section_class}>
        <div className={styles.container}>
          <CodeWindow
            className={styles.terminal}
            codeLines={terminalCode}
            language="python"
            style={theme === "light" ? oneLight : vscDarkPlus}
          />
          <Card
            className={`${styles.card}`}
            style={showContent ? {} : 
          {
            border: "none",
            background: "none",
            boxShadow: "none",
          }}
          >
            <img
              className={styles.img_class}
              src={szymonIMG}
              alt="Szymon Wysogląd"
              style={{
                display: scale == 0 ? "none" : "block",
                opacity: scale,
                transform: `scale(${0.9 + scale * 0.1})`,
              }}
            />
            <div
              className={styles.leftcard}
              style={{
                width: `${leftCardScale * 100}%`,
                height:`${leftCardScale * 100}%`,
                scale: `${leftCardScale }`,
              }}
            >
              <CardHeader className="pb-2">
                <CardTitle>Hi, I am Szymon</CardTitle>
              </CardHeader>
              <CardContent className='pb-2'>
                <p className={styles.description}>
                  I'm a software developer and a student of Automation and
                  Robotics at the University of Science and Technology in Cracow.{" "}
                  <br /> <br />
                  Simply put: I love creating cool stuff.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col">
                <div className="w-full flex gap-6 mb-5 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>+48 512 777 045</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>wysogladszymon@gmail.com</span>
                  </div>
                </div>
                <SocialButtons/>
              </CardFooter>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};
