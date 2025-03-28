import showButton from "../assets/images/show-button.svg";
import personImg from "../assets/images/person.svg";
import { useState } from "react";

function PersonalDetails({ personalDetails, onInputChange }) {
    const [showing, setShowing] = useState(false); // Determine whether to show the comonpent's form

    // Toggles showing the form
    const toggleShowing = () => {
        setShowing(prev => !prev);
    };

    return (
        <div className="input-component">
            {/* Component header */}
            <div className="input-head">
                <img src={personImg} className="input-icon" alt="Personal Details Icon"/>
                <h1>Personal Details</h1>
                <img 
                    src={showButton} 
                    className={`show-button ${showing ? "showing" : ""}`} 
                    onClick={toggleShowing} 
                    alt="Show Personal Details Button"
                />
            </div>

            {/* Component form */}
            <form hidden={!showing}>
                <div className="input-field">
                    <label htmlFor="full-name">Full Name</label>
                    <input 
                        type="text" 
                        id="full-name" 
                        name="name"
                        value={personalDetails.name} 
                        onChange={onInputChange} 
                        required 
                        maxLength={50}
                    />
                </div>
                
                <div className="input-field">
                    <label htmlFor="email">Email <span className="optional-span">Optional</span></label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={personalDetails.email} 
                        onChange={onInputChange} 
                        maxLength={254}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="phone">Phone Number <span className="optional-span">Optional</span></label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={personalDetails.phone} 
                        onChange={onInputChange} 
                        maxLength={15}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="address">Address <span className="optional-span">Optional</span></label>
                    <input 
                        type="text" 
                        id="address" 
                        name="address"
                        value={personalDetails.address} 
                        onChange={onInputChange} 
                        maxLength={255}
                    />
                </div>
            </form>
        </div>
    );
}
export default PersonalDetails;