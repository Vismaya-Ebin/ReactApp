import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import IconButton from "@mui/material/IconButton";
export function About() {
  const [less, more] = useState(false);
  const toggleStyle = { display: less ? "none" : "block" };
  return (
    <div>
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={(e) => {
          more(!less);
        }}
      >
     
        ABOUT ME {less ? <ExpandMoreSharpIcon /> : <ExpandLessIcon />}
      </IconButton>
      <div style={toggleStyle}>
        <p>
        
          An Experiencd UI developer who is very passionate on learning new
          technologies and developing new component based on requirements and
          showcasing my skills on the developing projects
        </p>
      </div>
    </div>
  );
}
