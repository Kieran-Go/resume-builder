import showButton from "../assets/images/show-button.svg";
import documentImg from "../assets/images/document.svg";
import { useState } from "react";

function Education({ onEducationSubmit }){
    const [showing, setShowing] = useState(false);
    const [formData, setFormData] = useState({
        institution: "",
        degree: "",
        startDate: "",
        endDate: ""
    });

    const toggleShowing = () => {
        setShowing(prev => !prev);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const newEducation = (event) => {
        event.preventDefault();
        onEducationSubmit(formData);
    }
    
    return(
        <div className="input-component">
            <div className="input-head">
                <img src={documentImg} className="input-icon" alt="Work Experience Icon"/>
                <h1>Work Experience</h1>
                <img 
                    src={showButton} 
                    className={`show-button ${showing ? "showing" : ""}`} 
                    onClick={toggleShowing} 
                    alt="Show Work Experience Button"
                />
            </div>

            <div className="education-form" hidden={!showing}>
                <form>
                    <div className="input-field">
                        <label htmlFor="institution">Institution</label>
                        <input type="text" id="institution" name="institution" onChange={handleChange} required />
                    </div>

                    <div className="input-field">
                        <label htmlFor="degree">Degree</label>
                        <input  type="text" id="degree" name="degree" onChange={handleChange} required />
                    </div>

                    <div className="input-field">
                        <label htmlFor="start-date">Starting Date</label>
                        <input type="date" id="start-date" name="startDate" onChange={handleChange} required />
                    </div>

                    <div className="input-field">
                        <label htmlFor="end-date">Ending Date</label>
                        <input type="date" id="end-date" name="endDate" onChange={handleChange} />
                    </div> 

                    <button className="submit-button" type="button" onClick={newEducation}>Submit</button>
                </form>
            </div>
            

        </div>
    );
}
export default Education;