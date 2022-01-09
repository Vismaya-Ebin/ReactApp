import {About} from './About';
import { Contact } from './Contact';
import {Skills} from './Skills';
import {Education} from './Education';
import {Experience} from './Experience';
 export function Resume(){
    const styles ={
         display:"flex",
        flexDirection:"row"
        ,backgroundColor:"red",
        gap:"60px",
        padding:"10px",
        justifyContent:"space-between"}
    return(<div style={styles}>
        <div><About/><Contact/><Skills/></div>
        <div><Experience/><Education/></div>
    </div>)

}