export function Skills(){
    const styles ={
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        flexWrap: "wrap"
    }
    const underline ={
        textDecoration: "underline"
    }
    return(<div style={styles}>
        <h3 style={underline}>SKILLS</h3>
        
    <ul>
        <li>React JS</li>
        <li>HTML</li>
        <li>Javascript</li>
        <li>Es6</li>
        <li>CSS</li>
        <li>Angular</li>
        <li>Git</li>
        </ul>    


    </div>)
}