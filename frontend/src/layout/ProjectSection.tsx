import projectMap, { ProjectCategories } from "@/data/projectsData";
import { Project } from "../components/Project";

export const ProjectSection = () => {
  if (projectMap == null) return;
  

  return (
    <section className="project flex flex-col items-center w-full">
      <h1>My Projects </h1>
      <h3>Machine Learning Projects</h3>
      {
        projectMap[ProjectCategories.MachineLearning].map((p, i) => <Project project={p} key={i}/>)
      }

      <h3>Algorithms </h3>
      {
        projectMap[ProjectCategories.Algorithms].map((p, i) => <Project project={p} key={i}/>)
      }

      <h3>Web Development Projects </h3>
      {
        projectMap[ProjectCategories.webDevelopment].map((p, i) => <Project project={p} key={i}/>)
      }
    </section>
  );
};
