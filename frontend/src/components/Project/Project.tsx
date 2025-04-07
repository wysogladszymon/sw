import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectInterface } from "@/data/projectsData";
import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";
import styles from "./Project.module.css";
import { GeneratedIcon } from "@/types/TechStack";

interface ProjectProps extends HTMLAttributes<HTMLDivElement> {
  project: ProjectInterface;
}

export const Project: FC<ProjectProps> = ({ project, className, ...props }) => {
  return (
    <Card className={cn(styles.card_container, "group", className)} {...props}>
      <div className="relative z-10 transition duration-300 group-hover:blur-sm">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-">
          <CardDescription>
            {project.description?.map((description, index) => (
              <p key={index} className="p-1">
                {description}
              </p>
            ))}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex gap-2">
          {project.techStack?.map((stack, i) => <GeneratedIcon key={i} tech={stack}/>)}
        </CardFooter>
      </div>

      {/* visible only after hover */}
      <div className={styles.btncontainer}>
        <Button
          className={cn(styles.btn)}
          onClick={() => window.open(project.url, "_blank")}
        >
          Read More
        </Button>
      </div>
    </Card>
  );
};
