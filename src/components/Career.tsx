import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>Ethics Infotech LLP, Vadodara</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              May 2026 – Jun 2026. Developed backend APIs for MagBrainAI conversational agent platform using Node.js + Express; 25+ RESTful API endpoints serving AI model inference with &lt;200 ms average response time. Built frontend using React.js; integrated 5+ core features (chat UI, conversation history, user auth); improved UI response time by 30%. Optimized MongoDB queries; reduced query time by 40%; implemented caching for 50% performance improvement in AI inference pipeline.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Lead</h4>
                <h5>Nirma University, Ahmedabad</h5>
              </div>
              <h3>2024–26</h3>
            </div>
            <p>
              Sept 2024 – April 2026. Technical Lead, CSI &amp; Data Science Clubs. Coordinated HackNUThon25: 1500+ participants across 10 colleges; $15K+ sponsorships; managed logistics and execution. Organized 18 technical workshops (Python, ML, cybersecurity); mentored 50+ students; increased engagement by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE</h4>
                <h5>Institute of Technology, Nirma University</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Education: Institute of Technology, Nirma University. B.Tech in Computer Science and Engineering. June 2027 (expected). CGPA 8.07/10 through 6th semester.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications &amp; Achievements</h4>
                <h5>Oracle &amp; LeetCode</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Oracle AI Foundation, Generative AI, Data Science. LeetCode: 300+ problems solved, top 15% globally, 50/100-day streaks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
