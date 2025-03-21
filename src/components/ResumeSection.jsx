import "../css/ResumeSection.css";

function ResumeSection({ data }) {
    const personalDetails = data.personalDetails;
    const summary = data.summary;
    const education = data.education;
    return (
        <section className="resume-section">
            <div className="resume-head">
                <h2>Resume</h2>
                <p><strong>Name:</strong> {personalDetails.name}</p>
                <p><strong>Email:</strong> {personalDetails.email}</p>
                <p><strong>Phone:</strong> {personalDetails.phone}</p>
                <p><strong>Address:</strong> {personalDetails.address}</p>
            </div>

            <div className="resume-summary">
                <p>{summary}</p>
            </div>
        </section>
    );
}
export default ResumeSection;
