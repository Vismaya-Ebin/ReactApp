import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import IconButton from "@mui/material/IconButton";

export function Skills() {
  const [less, more] = useState(false);
  const toggleStyle = {
    display: less ? "none" : "block",
  };
  return (
    <div>
        
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={(e) => {
          more(!less);
        }}
      > SKILLS {less?<ExpandMoreSharpIcon/>:<ExpandLessIcon/>}</IconButton>
      
      <div style={toggleStyle}>

      <ul>
        <li>React JS</li>
        <li>HTML</li>
        <li>Javascript</li>
        <li>Es6</li>
        <li>CSS</li>
        <li>Angular</li>
        <li>Git</li>
      </ul>
      </div>
    </div>
  );
}
