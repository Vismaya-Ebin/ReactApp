export function Experience() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap"
  };
  const underline = {
    textDecoration: "underline",
  };
  return (
    <div style={styles}>
      <h3 style={underline}> WORK EXPERIENCE</h3>
      <ul>
        <li>
          <p>
          
            <strong>Tata Consultancy Services, Kochi</strong>{" "}
          </p>
          <p>
        
            <strong>Duration:</strong> 25 July 2018 to till date.
          </p>
          <p>
         
            <strong> Designation: </strong>IT Analyst
          </p>
        </li>
        <li>
        <p>  <strong> UST Global, Trivandrum</strong></p>
        <p>  <strong>Duration:</strong> 27th October 2015 to 20 July 2018.</p>
         <p> <strong>Designation: </strong>Software Developer</p>
        </li>
      </ul>
    </div>
  );
}
