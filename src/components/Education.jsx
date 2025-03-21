import showButton from "../assets/images/show-button.svg";
import educationImg from "../assets/images/education-cap.svg";
import { useState } from "react";

function Education({ education, setEducation }){
    const hasEducation = (education.length > 0); // Checks if the education array is not empty
    const [editing, setEditing] = useState(false); // Certain buttons are disabled while editing is true
    const [editingIndex, setEditingIndex] = useState(null); // The index in the education array to edit while editing is true
    const [showing, setShowing] = useState(false); // Determine whether to show the comonpent's form

    // Form data object
    const [formData, setFormData] = useState({
        institution: "",
        degree: "",
        startDate: "",
        endDate: ""
    });

    // Toggles showing the form
    const toggleShowing = () => {
        setShowing(prev => !prev);
    };

    // Handles when the user changes an input field by typing into it
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Adds a new education to the array and sets it in the top level
    const newEducation = (event) => {
        event.preventDefault();
        education.push(formData);
        setEducation(education);
        resetForm();
    }

    // Enables editing of an existing index in the education array
    const editEducation = (index) => {
        setEditing(true);
        setEditingIndex(index);

        // Set the formData to the selected education data
        const edu = education[index];
        setFormData({
            institution: edu.institution,
            degree: edu.degree,
            startDate: edu.startDate,
            endDate: edu.endDate
        });
        
    }

    // Commit changes to the edited education
    const finishEditing = () => {
        setEditing(false);
        education[editingIndex] = formData;
        setEditingIndex(null);
        setEducation(education);
        resetForm();
    }

    // Removes an existing education from the education array
    const removeEducation = (index) => {
        const updatedEducation = [...education];
        updatedEducation.splice(index, 1);
        setEducation(updatedEducation);
    };

    const resetForm = () => {
        setFormData({
            institution: "",
            degree: "",
            startDate: "",
            endDate: ""
        })
    }
    
    return(
        <div className="input-component">
            {/* Component header */}
            <div className="input-head">
                <img src={educationImg} className="input-icon" alt="Education Icon"/>
                <h1>Education</h1>
                <img 
                    src={showButton} 
                    className={`show-button ${showing ? "showing" : ""}`} 
                    onClick={toggleShowing} 
                    alt="Show Education Button"
                />
            </div>

            {/* Component form */}
            <div className="form-section" hidden={!showing}>
                <form>
                    <div className="input-field">
                        <label htmlFor="institution">Institution</label>
                        <input type="text" id="institution" name="institution" value={formData.institution} onChange={handleChange} required />
                    </div>

                    <div className="input-field">
                        <label htmlFor="degree">Degree</label>
                        <input  type="text" id="degree" name="degree" value={formData.degree} onChange={handleChange} required />
                    </div>

                    <div className="input-field">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" id="start-date" name="startDate" value={formData.startDate} onChange={handleChange} required />
                    </div>

                    <div className="input-field">
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" id="end-date" name="endDate" value={formData.endDate} onChange={handleChange} />
                    </div> 

                    <button className="submit-button" type="button" hidden={editing} onClick={newEducation}>Submit</button>
                    <button className="submit-button" type="button" hidden={!editing} onClick={finishEditing}>Finish Editing</button>
                </form>

                {/* Only show when the education array is not empty */}
                {hasEducation && (
                    <div className="item-list">
                        {education.map((edu, index) => (
                            <div key={index} className="item">
                                <div className="item-info">
                                    <p>{edu.institution}</p>
                                    <p>{edu.degree}</p>
                                </div>
                                <div className="item-buttons">
                                    <button className="edit-item-button" onClick={() => editEducation(index)} disabled={editing}>Edit</button>
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
export default Education;