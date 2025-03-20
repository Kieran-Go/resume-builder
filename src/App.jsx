import { useState } from "react";
import InputSection from "./components/InputSection";
import ResumeSection from "./components/ResumeSection";

function App() {

  // Contains all resume data
  const [resumeData, setResumeData] = useState({
    personalDetails: {
      name: "",
      email: "",
      phone: "",
      address: ""
    },
    education: [
      { institution: "College of Winterhold", degree: "Ph.D in Destruction Magic", startDate: "", endDate: "" }
    ],
    workExperience: [
      { jobTitle: "", company: "", startDate: "", endDate: "", responsibilities: [""] }
    ],
    summary: "Write something about yourself."
  });

  // Generic handler for all input fields
  const handleInputChange = (event, section) => {
    const { name, value } = event.target;
    setResumeData(prevData => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: value
      }
    }));
  };

  // Handle the text area field for the summary
  const handleTextAreaChange = (event) => {
    const newText = event.target.value;
    setResumeData(prevData => ({
      ...prevData,
      summary: newText
    }));
  };

  // Add a new education to the resume data's education array
  const submitEducation = (newEducation) => {
    setResumeData(prevData => {
      const updatedData = {
        ...prevData,
        education: [...prevData.education, newEducation]
      };
      console.log("Updated resumeData:", updatedData);
      return updatedData;
    });
  };
  

  

  return (
    <div className="content">
        <InputSection 
            data={resumeData}
            onInputChange={handleInputChange}
            onTextAreaChange={handleTextAreaChange}
            onEducationSubmit={submitEducation}
        />
        <ResumeSection data={resumeData} />
    </div>
  );
}

export default App;
