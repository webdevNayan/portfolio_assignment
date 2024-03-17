import { useEffect } from "react";
import { useSelector } from "react-redux";
import { activeSkillProgress } from "../utilits";

const Skills = ({ dark }) => {
  // Get skills data from Redux store
  const skills = useSelector((state) => state.user?.user?.user?.skills) || [];

  // Add scroll event listener to track skill progress
  useEffect(() => {

    window.addEventListener("scroll", activeSkillProgress);
   
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", activeSkillProgress);
    };

  }, []);


  // Function to determine color based on skill proficiency percentage
  const getColor = (percentage) => {
    if (percentage >= 90) {
      return "green"; // High proficiency
    } else if (percentage >= 70) {
      return "orange"; // Intermediate proficiency
    } else {
      return "red"; // Basic proficiency
    }
  };

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              {/* Title and description */}
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>Design is Life</span>
                <h3>I Develop Skills Regularly to Keep Me Update</h3>
                <p>
                  Most common methods for designing websites that work well on
                  desktop is responsive and adaptive design
                </p>
              </div>
              {/* Skills progress */}
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration="1s"
              >
                {skills.map((skill, i) => (
                  <div
                    className="progress_inner skillsInner___"
                    data-value={skill.percentage}
                    key={skill._id}
                  >
                    {/* Skill information */}
                    <span className="skill-wrapper">
                      <img src={skill.image.url} alt={skill.name} className="skill-image" />
                      <span className="label">{skill.name}</span>
                      <span className="number">{skill.percentage}%</span>
                    </span>
                    {/* Skill progress bar */}
                    <div className="background">
                      <div
                        className="bar"
                        style={{
                          width: `${skill.percentage}%`,
                          background: getColor(skill.percentage),
                        }}
                      >
                        <div className="bar_in" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right section with image */}
            <div className="right">
              <img src={`img/skills/${dark ? 2 : 1}.jpg`} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
