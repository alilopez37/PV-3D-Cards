import Cards from "../molecules/Cards";
import mysql from "../../data/mysql";
import './Section.css'

function Section() {
    return (
        <div id="cards_section">
            {
                mysql.contacts.map(contact => 
                <Cards image={contact.image} text={contact.text}></Cards>)
            }
        </div>
    );
}

export default Section;