import "../css/ResumeSection.css";
import emailImg from "../assets/images/email.svg";
import phoneImg from "../assets/images/phone.svg";
import houseImg from "../assets/images/house.svg";

function ResumeSection({ data }) {
    const personalDetails = data.personalDetails;
    const summary = data.summary;
    const education = data.education;
    const workExp = data.workExperience;
    const skills = data.skills;
    return (
        <section className="resume-section">

            {/* Head section */}
            <div className="resume-head">
                <h1>{personalDetails.name}</h1>
                <div className="resume-head-details">

                    {/* Conditionally render details depending on if not empty */}
                    {personalDetails.email.trim() !== "" && (
                        <div className="personal-details-item">
                            <img src={emailImg} alt="Email Icon" />
                            <p><strong>Email:</strong> {personalDetails.email}</p>
                        </div>
                    )}
                    {personalDetails.phone.trim() !== "" && (
                        <div className="personal-details-item">
                            <img src={phoneImg} alt="Phone Icon" />
                            <p><strong>Phone:</strong> {personalDetails.phone}</p>
                        </div>
                    )}
                    {personalDetails.address.trim() !== "" && (
                        <div className="personal-details-item">
                            <img src={houseImg} alt="Address Icon" />
                            <p><strong>Address:</strong> {personalDetails.address}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Summary section */}
            <div className="resume-summary">
                <p>{summary}</p>
            </div>

            {/* Education section */}
            <h2>Education</h2>
            <div className="resume-education">
                {education.length > 0 && (
                    education.map((edu) => (
                        <div className="resume-item">
                            <p><b>Institution:</b> {edu.institution}</p>
                            <p><b>Degree:</b> {edu.degree}</p>
                            <p><b>Start Date:</b> {edu.startDate}</p>
                            {edu.endDate.trim() != "" && (
                                <p><b>End Date:</b> {edu.endDate}</p>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* Work Experience section */}
            <h2>Work Experience</h2>
            <div className="resume-work-experience">
                {workExp.length > 0 && (
                    workExp.map((job) => (
                        <div className="resume-item">
                            <p><b>Workplace:</b> {job.workplace}</p>
                            <p><b>Position:</b> {job.position}</p>
                            <p><b>Start Date:</b> {job.startDate}</p>
                            {job.endDate.trim() !== "" && (
                                <p><b>End Date:</b> {job.endDate}</p>
                            )}
                            {/* Responsibilities as bullet points */}
                            {job.responsibilities.length > 0 && (
                                <div>
                                    <p><b>Responsibilities:</b></p>
                                    <ul>
                                        {job.responsibilities.map((task, index) => (
                                            <li key={index}>{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>


            {/* Skills section */}
            <h2>Skills</h2>
            <div className="resume-skills">
                {skills.length > 0 && (
                    skills.map((skill) => (
                        <p>• {skill}</p>
                    ))
                )}
            </div>

        </section>
    );
}
export default ResumeSection;
