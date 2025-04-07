import "./App.css";
import { observer } from "mobx-react-lite";
import { HeaderSection } from "./layout/HeaderSection";
import { ProjectSection } from "./layout/ProjectSection";
import { EducationSection } from "./layout/EducationSection";
// import { JobSection } from "./layout/JobSection";
import { QuoteSection } from "./layout/QuoteSecton";
import {TableOfContents} from "./layout/TableOfContents";
import { BookSection } from "./layout/BookSection";
import { useColorContext } from "./hooks/useColorContext";

const App = observer(() => {
  const {themeColor} = useColorContext();

  return (
    <div className={`App bg-background text-foreground ${themeColor}`}>
      <TableOfContents className='fixed right-5 top-5 z-50' />
      <HeaderSection />
      <ProjectSection />
      <EducationSection />
      {/* <JobSection /> */}
      <BookSection/>
      <QuoteSection />
    </div>
  );
});

export default App;
