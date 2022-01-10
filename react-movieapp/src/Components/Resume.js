import { About } from "./About";
import { Contact } from "./Contact";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
export function Resume() {
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  const leftStyle = {
    width: "30%",
  };
  const rightStyle = {
    width: "70%",
  };
  return (
    <div style={styles}>
      <div style={leftStyle}>
        <About />
        <Skills />
        <Experience/>
        <Contact />
      </div>
      <div style={rightStyle}>
        <Projects />
        <Education />
      </div>
    </div>
  );
}
