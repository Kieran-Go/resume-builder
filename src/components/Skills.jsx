import showButton from "../assets/images/show-button.svg";
import skillsImg from "../assets/images/fire.svg";
import cross from "../assets/images/cross.svg";
import { useState } from "react";

function Skills({ skills, setSkills }){
    const [showing, setShowing] = useState(false); // Determine whether to show the comonpent's form
    const [skillInput, setSkillInput] = useState("");

    // Toggles showing the form
    const toggleShowing = () => {
        setShowing(prev => !prev);
    };

    // Handles when the user changes the skill input field
    const handleSkillInputChange = (event) => {
        setSkillInput(event.target.value);
    }

    // Adds a skill to the skills array
    const addSkill = () => {
        if (skillInput.trim() !== "") {
            setSkills([...skills, skillInput]); // Add new skill to the array
            setSkillInput(""); // Clear input field
        }
    };

    // Removes a skill from the selected index
    const removeSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index)); // Filter out the skill at the given index
    };
    
    return(
        <div className="input-component">
            {/* Component header */}
            <div className="input-head">
                <img src={skillsImg} className="input-icon" alt="Skills Icon"/>
                <h1>Skills</h1>
                <img 
                    src={showButton} 
                    className={`show-button ${showing ? "showing" : ""}`} 
                    onClick={toggleShowing} 
                    alt="Show Skills Button"
                />
            </div>

            {/* Component form */}
            <div className="form-section" hidden={!showing}>
                <form>
                    <div className="input-field">
                        <label htmlFor="responsibility-input">Skills</label>
                        <input type="text" id="responsibility-input" name="responsibility-input" value={skillInput}
                         onChange={handleSkillInputChange}/>
                        <button className="submit-button" type="button" onClick={() => addSkill()} >Add Skill</button>
                    </div> 

                    {skills.length > 0 && (
                        <div className="responsibility-list">
                            {skills.map((skill, index) => (
                                <div key={index} className="responsibility-container">
                                    <p>{skill}</p>
                                    <img src={cross} className="responsibility-delete-button" onClick={() => removeSkill(index)}></img>
                                </div>
                            ))}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
export default Skills;