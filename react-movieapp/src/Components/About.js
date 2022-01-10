export function About(){
    const styles ={
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        flexWrap: "wrap"
    }
    const underline ={
        textDecoration: "underline"
        
    }

    const lineHeight ={
        lineHeight:"30px"
    }
    return(<div style={styles}>
     
        <h3 style={underline}>ABOUT ME</h3> 
        <p style={lineHeight}> An Experiencd UI developer who is very passionate on learning new technologies and developing new component based on requirements and showcasing my skills on the developing projects</p>
    </div>)
}