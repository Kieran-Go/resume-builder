import PersonalDetails from "./PersonalDetails";
import Summary from "./Summary";
import "../css/InputSection.css";

function InputSection({ data, onInputChange, onTextAreaChange}) {
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
        </section>
    );
}
export default InputSection;