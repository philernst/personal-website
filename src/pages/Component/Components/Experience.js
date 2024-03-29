import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const jobs = [
    {
        title: 'Product manager, web production',
        employer: 'GitHub',
        dates: '2023 - present',
        description:
            'Make marketing web pages through a CMS, streamline the publishing process, and enhance page quality for a better user experience with a focus on increasing conversions.',
    },
    {
        title: 'Front End/Full Stack Engineer (project)',
        employer: 'CUED-In Inc.',
        dates: '2020 - present',
        description:
            "Build job posting mobile app (React Native) and web app (React and NodeJS) for a startup company. Collaborate with engineers and designers to plan and code functionality. You can see it in action here: <a href='https://cuedin.us' target='blank'>https://cuedin.us</a>",
    },
    {
        title: 'Software Engineer',
        employer: 'James Madison University',
        dates: '2015 – 2023',
        description:
            'Support enterprise-wide software. Collaborate with business analysts, designers, and users to understand requirements to create or enhance features. Develop applications based on technical requirements using a Java-like language (PeopleCode), SQR, SQL, and shell scripting.',
    },
    {
        title: 'Web Developer',
        employer: 'James Madison University',
        dates: '2012 – 2015',
        description:
            'Developed 10+ websites per year using Cascade CMS with HTML, CSS, JavaScript, and Velocity. Collaborated with designers and users to build and maintain websites. Designed and coded reusable features used across multiple websites.',
    },
]

const Experience = () => {
    return (
        <>
            <div id="Experience"></div>
            <div className="exp-main heading">
                <div className="exp">
                    <h2 className="text-center title">Experience</h2>
                </div>
                <Container>
                    <Row>
                        {jobs.map((job) => (
                            <Col lg={6} md={6} sm={12} key={job.title}>
                                <div className="exp-card" data-aos="flip-left">
                                    <Card className="exp-block">
                                        <Card.Body className="exp-body">
                                            <Card.Title
                                                className="exp-title"
                                                role="heading"
                                            >
                                                {job.title}
                                                <p>
                                                    {job.dates} | {job.employer}
                                                </p>
                                            </Card.Title>
                                            <hr />
                                            <Card.Text
                                                className="exp-text"
                                                dangerouslySetInnerHTML={{
                                                    __html: job.description,
                                                }}
                                            />
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Experience
