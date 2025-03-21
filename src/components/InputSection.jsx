import PersonalDetails from "./PersonalDetails";
import Summary from "./Summary";
import "../css/InputSection.css";
import Education from "./Education";

function InputSection({ data, onInputChange, onTextAreaChange, setEducation}) {
    return (
        <section className="input-section">
            <PersonalDetails 
                personalDetails={data.personalDetails}
                onInputChange={(event) => onInputChange(event, "personalDetails")}
            />
            <Summary
                summary = {data.summary}
                onTextAreaChange = {onTextAreaChange}
            />
            <Education
                education = {data.education}
                setEducation = {setEducation}
            />
        </section>
    );
}
export default InputSection;