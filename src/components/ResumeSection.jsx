import "../css/ResumeSection.css";

function ResumeSection({ data }) {
    return (
        <section className="resume-section">
            <div className="resume-head">
                <h2>Resume</h2>
                <p><strong>Name:</strong> {data.personalDetails.name}</p>
                <p><strong>Email:</strong> {data.personalDetails.email}</p>
                <p><strong>Phone:</strong> {data.personalDetails.phone}</p>
                <p><strong>Address:</strong> {data.personalDetails.address}</p>
            </div>

            <div className="resume-summary">
                <p>{data.summary}</p>
            </div>
        </section>
    );
}
export default ResumeSection;
