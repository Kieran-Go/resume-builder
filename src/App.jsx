import { useState } from "react";
import InputSection from "./components/InputSection";
import ResumeSection from "./components/ResumeSection";

function App() {
  // Object to store all resume data
  const [resumeData, setResumeData] = useState({
    personalDetails: {
      name: "",
      email: "",
      phone: "",
      address: ""
    },

    education: [
      { institution: "College of Winterhold", degree: "Ph.D in Destruction Magic", startDate: "25/03/2025", endDate: "26/05/2026" },
      { institution: "Mages Guild", degree: "Master of Illusion Magic", startDate: "01/06/2026", endDate: "30/06/2027" },
      { institution: "Dark Brotherhood", degree: "Shadow Assassin Training", startDate: "01/07/2027", endDate: "01/01/2028" }
    ],

    workExperience: [
      { workplace: "Avalanche", position: "Mercenary", startDate: "", endDate: "", responsibilities: [
        "Escourting the team inside the reactor", 
        "Blowing up the reactor",
      ] }
    ],

    skills: ["Skill 1", "Skill 2", "Skill 3"],

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
  
  // Replaces resumeData.education with a new education array
  const setEducation = (newEducation) => {
    setResumeData(prevData => {
      const updatedData = {
        ...prevData,
        education: newEducation
      };
      return updatedData;
    });
  };

   // Replaces resumeData.workExperience with a new workExperience array
   const setWorkExp = (newWorkExperience) => {
    setResumeData(prevData => {
      const updatedData = {
        ...prevData,
        workExperience: newWorkExperience
      };
      return updatedData;
    });
  };

  // Replaces the skills array in resumeData with a new array
  const setSkills = (newSkills) => {
    setResumeData(prevData => {
      const updatedData = {
        ...prevData,
        skills: newSkills
      };
      return updatedData;
    });
  }
  
  return (
    <div className="content">
        <InputSection 
            data={resumeData}
            onInputChange={handleInputChange}
            onTextAreaChange={handleTextAreaChange}
            setEducation={setEducation}
            setWorkExp={setWorkExp}
            setSkills={setSkills}
        />
        <ResumeSection data={resumeData} />
    </div>
  );
}

export default App;
