import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
export default function AboutusPage(){
    return (
        <div className="aboutus">
            <h1>About US</h1>
            <p>
                 B&B is an app that facilitates college students to book their hostel rooms. This app will provide the complete details of the hostel room. Through B&B App, it will be easier for the students to have a complete overview of the room beforehand. Students can choose their room based on ratings and other features.

            </p>
            <p>
                <Link to ="./"><button>go to login page</button></Link>
            </p>
        </div>
    )
}