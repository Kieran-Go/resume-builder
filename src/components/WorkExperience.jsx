import showButton from "../assets/images/show-button.svg";
import workExperienceImg from "../assets/images/briefcase.svg";
import cross from "../assets/images/cross.svg";
import { useState } from "react";

function WorkExperience({ workExp, setWorkExp }){
    const hasWorkExp = (workExp.length > 0); // Checks if the experience array is not empty
    const [editing, setEditing] = useState(false); // Certain buttons are disabled while editing is true
    const [editingIndex, setEditingIndex] = useState(null); // The index in the education array to edit while editing is true
    const [showing, setShowing] = useState(false); // Determine whether to show the comonpent's form

    // Form data object
    const [formData, setFormData] = useState({
        workplace: "",
        position: "",
        startDate: "",
        endDate: "",
        responsibilities: [],
    });
    const [responsibilityInput, setResponsibilityInput] = useState("");

    // Toggles showing the form
    const toggleShowing = () => {
        setShowing(prev => !prev);
    };

    // Handles when the user changes an input field by typing into it
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handles when the user changes the responsibility input field
    const handleResponsiblityInputChange = (event) => {
        setResponsibilityInput(event.target.value);
    }

    // Adds a responsibility to the form data's responsibilities array
    const addResponsibility = () => {
        if (responsibilityInput.trim()) {
          setFormData((prev) => ({
            ...prev,
            responsibilities: [...prev.responsibilities, responsibilityInput],
          }));
          setResponsibilityInput("");
          console.log(responsibilityInput);
          console.log(formData);
        }
    };

    // Removes a responsibility from the selected index
    const removeResponsibility = (index) => {
        setFormData((prev) => ({
            ...prev,
            responsibilities: prev.responsibilities.filter((_, i) => i !== index),
        }));
    };
    

    // Adds a new work experience to the array and sets it in the top level
    const newWorkExp = (event) => {
        event.preventDefault();
        workExp.push(formData);
        setWorkExp(workExp);
        resetForm();
    }

    // Enables editing of an existing index in the workExp array
    const editWorkExp = (index) => {
        setEditing(true);
        setEditingIndex(index);

        // Set the formData to the selected education data
        const exp = workExp[index];
        setFormData({
            workplace: exp.workplace,
            position: exp.position,
            startDate: exp.startDate,
            endDate: exp.endDate,
            responsibilities: exp.responsibilities
        });
        
    }

    // Commit changes to the edited work experience
    const finishEditing = () => {
        setEditing(false);
        workExp[editingIndex] = formData;
        setEditingIndex(null);
        setWorkExp(workExp);
        resetForm();
    }

    // Removes an existing work experience from the array
    const removeEducation = (index) => {
        const updatedExp = [...workExp];
        updatedExp.splice(index, 1);
        setWorkExp(updatedExp);
    };

    const resetForm = () => {
        setFormData({
            workplace: "",
            position: "",
            startDate: "",
            endDate: "",
            responsibilities: []
        })
    }
    
    return(
        <div className="input-component">
            {/* Component header */}
            <div className="input-head">
                <img src={workExperienceImg} className="input-icon" alt="Work Experience Icon"/>
                <h1>Work Experience</h1>
                <img 
                    src={showButton} 
                    className={`show-button ${showing ? "showing" : ""}`} 
                    onClick={toggleShowing} 
                    alt="Show Work Experience Button"
                />
            </div>

            {/* Component form */}
            <div className="form-section" hidden={!showing}>
                <form>
                    <div className="input-field">
                        <label htmlFor="workplace">Workplace</label>
                        <input type="text" id="workplace" name="workplace" value={formData.workplace} onChange={handleChange} required />
                    </div>

                    <div className="input-field">
                        <label htmlFor="position">Position</label>
                        <input  type="text" id="position" name="position" value={formData.position} onChange={handleChange} required />
                    </div>

                    <div className="input-field">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" id="start-date" name="startDate" value={formData.startDate} onChange={handleChange} required />
                    </div>

                    <div className="input-field">
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" id="end-date" name="endDate" value={formData.endDate} onChange={handleChange} />
                    </div> 

                    <div className="input-field">
                        <label htmlFor="responsibility-input">Responsibilities</label>
                        <input type="text" id="responsibility-input" name="responsibility-input" value={responsibilityInput}
                         onChange={handleResponsiblityInputChange}/>
                        <button className="submit-button" type="button" onClick={() => addResponsibility()} >Add Responsibility</button>
                    </div> 

                    {formData.responsibilities.length > 0 && (
                        <div className="responsibility-list">
                            {formData.responsibilities.map((resp, index) => (
                                <div className="responsibility-container">
                                    <p key={index}>{resp}</p>
                                    <img src={cross} className="responsibility-delete-button" onClick={() => removeResponsibility(index)}></img>
                                </div>
                            ))}
                        </div>
                    )}

                    <button className="submit-button" type="button" hidden={editing} onClick={newWorkExp}>Submit</button>
                    <button className="submit-button" type="button" hidden={!editing} onClick={finishEditing}>Finish Editing</button>
                </form>

                {/* Only show when the education array is not empty */}
                {hasWorkExp && (
                    <div className="item-list">
                        {workExp.map((exp, index) => (
                            <div key={index} className="item">
                                <div className="item-info">
                                    <p>{exp.workplace}</p>
                                    <p>{exp.position}</p>
                                </div>
                                <div className="item-buttons">
                                    <button className="edit-item-button" onClick={() => editWorkExp(index)} disabled={editing}>Edit</button>
                                    <button className="remove-item-button" onClick={() => removeEducation(index)} disabled={editing}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
export default WorkExperience;