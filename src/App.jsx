import { useState } from "react";
import InputSection from "./components/InputSection";
import ResumeSection from "./components/ResumeSection";

function App() {
  // Object to store all resume data
  const [resumeData, setResumeData] = useState({
    personalDetails: {
      name: "John Doe",
      email: "john.doe@gmail.com",
      phone: "123456789",
      address: "123 fake street"
    },

    education: [
    ],

    workExperience: [
    ],

    skills: [],

    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel quam vitae lorem fermentum scelerisque. Donec in nisi et nisl aliquet faucibus. Integer nec odio nec magna pulvinar malesuada. Nulla facilisi. Phasellus at lorem eget tortor pharetra ullamcorper. Nam euismod urna a ligula tincidunt, id facilisis neque hendrerit."
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
