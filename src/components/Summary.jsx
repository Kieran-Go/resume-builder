import showButton from "../assets/images/show-button.svg";
import documentImg from "../assets/images/document.svg";
import { useState } from "react";

function Summary({ summary, onTextAreaChange }){
    const [showing, setShowing] = useState(false); // Determine whether to show the comonpent's form

    // Toggles showing the form
    const toggleShowing = () => {
        setShowing(prev => !prev);
    };
    
    return(
        <div className="input-component">
            {/* Component header */}
            <div className="input-head">
                <img src={documentImg} className="input-icon" alt="Summary Icon"/>
                <h1>Summary</h1>
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
                    <textarea
                        id="summary"
                        name="summary"
                        readOnly={false}
                        placeholder={summary}
                        onChange={onTextAreaChange}
                    >
                    </textarea>
                </div>
            </form>
        </div>
    );
}
export default Summary;