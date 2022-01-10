import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MailIcon from "@mui/icons-material/Mail";
export function Contact() {
  const styles = {
    display:"flex",
    flexDirection:"column",
    gap:"25px",
    alignItems: "center",
    flexWrap: "wrap"
  }
  const underline ={
    textDecoration: "underline"
}
  return (
    <div style={styles}>
        <h3 style={underline}>CONTACT</h3> 
        <div style={styles}>
      <div>
      
        <LocalPhoneIcon />
        <span>8848342980</span>
        </div>
      <div>
      
        <LocationCityIcon />
     <span>UAE</span>   
      </div>
      <div>
      
        <MailIcon />
       <span> vismayawilson3@gmail.com</span>
      </div>
      </div>
    </div>
  );
}
