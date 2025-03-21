import PersonalDetails from "./PersonalDetails";
import Summary from "./Summary";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import "../css/InputSection.css";

function InputSection({ data, onInputChange, onTextAreaChange, setEducation, setWorkExp}) {
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
            <WorkExperience
                workExp = {data.workExperience}
                setWorkExp = {setWorkExp}
            />
        </section>
    );
}
export default InputSection;