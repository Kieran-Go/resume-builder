import { useState } from "react";
import InputSection from "./components/InputSection";
import ResumeSection from "./components/ResumeSection";

function App() {

  // State now contains multiple sections
  const [resumeData, setResumeData] = useState({
    personalDetails: {
      name: "",
      email: "",
      phone: "",
      address: ""
    },
    workHistory: [
      { jobTitle: "", company: "", startDate: "", endDate: "" }
    ],
    education: [
      { degree: "", institution: "", startDate: "", endDate: "" }
    ],
    summary: "Write something about yourself."
  });

  // Generic handler for all fields
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

  const handleTextAreaChange = (event) => {
    const newText = event.target.value;
    setResumeData(prevData => ({
      ...prevData,
      summary: newText
    }));
  };

  return (
    <div className="content">
        <InputSection 
            data={resumeData}
            onInputChange={handleInputChange}
            onTextAreaChange={handleTextAreaChange}
        />
        <ResumeSection data={resumeData} />
    </div>
  );
}

export default App;
