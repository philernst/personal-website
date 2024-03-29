import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const degrees = [
  {
    school: "James Madison University",
    type: "M.B.A.",
    concentrations: ["Concentration: Info. Security"],
  },
  {
    school: "James Madison University",
    type: "B.S.",
    concentrations: ["Major: Computer Science", "Major: Media Arts & Design"],
  },
];

const skills = [
  {
    title: "Web Development Knowledge",
    percent: "90",
  },
  {
    title: "UX/UI Understanding",
    percent: "85",
  },
  {
    title: "Data Analysis",
    percent: "80",
  },
  {
    title: "Project Management",
    percent: "75",
  },
];

const EducationSkills = () => {
  return (
    <>
      <div id="Skills"></div>
      <div className="educationSkill heading">
        <h2 className="text-center title">Education &amp; Skills</h2>
      </div>
      <div>
        <Container>
          <Row className="education-box-main">
            <Col lg={4} md={4} className="educationColBox">
              <div className="education-box">
                {degrees.map((degree, index) => (
                  <div key={degree.type}>
                    <div className="education">
                      <span className="school">{degree.school}</span>
                      <h3>{degree.type}</h3>
                      {degree.concentrations.map((concentration) => (
                        <p className="concentration" key={concentration}>{concentration}</p>
                      ))}
                    </div>
                    {index !== degrees.length - 1 ? <hr /> : ""}
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={8} md={8}>
              {skills.map((skill) => (
                <div className="skill-bar" key={skill.title}>
                  <Row className="skill-box">
                    <Col xs={1}>
                      <span>{skill.percent}%</span>
                    </Col>
                    <Col>
                      <div className="bar">
                        <div className="info">
                          <span>{skill.title}</span>
                        </div>
                        <div className={`progress-line width${skill.percent}`}>
                          <span role="presentation"></span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EducationSkills;
