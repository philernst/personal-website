import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsGithub, BsLinkedin, BsEnvelope } from 'react-icons/bs'
import Form from './Components/Form'

export default class Footer extends Component {
    render() {
        const today = new Date()

        return (
            <>
                <footer className="footer heading" id="Contact">
                    <div className="footer-head">
                        <Container>
                            <Row>
                                <Col lg={6} md={12}>
                                    <div className="f-left">
                                        <div className="f-content">
                                            <h2 className="f-contact">
                                                Contact Me
                                            </h2>
                                        </div>
                                        <div>
                                            <h3 className="f-icon">
                                                <i
                                                    className="icon"
                                                    role="presentation"
                                                >
                                                    <BsEnvelope
                                                        size={20}
                                                        role="presentation"
                                                    />
                                                </i>
                                                <a href="mailto:phil@philernst.com">
                                                    phil@philernst.com
                                                </a>
                                            </h3>
                                            <h3 className="f-icon">
                                                <i
                                                    className="icon"
                                                    role="presentation"
                                                >
                                                    <BsLinkedin
                                                        size={20}
                                                        role="presentation"
                                                    />
                                                </i>
                                                <a
                                                    href="https://www.linkedin.com/in/phil-ernst/"
                                                    target="_blank"
                                                    aria-label="Opens in new tab"
                                                >
                                                    linkedin.com/in/phil-ernst
                                                </a>
                                            </h3>
                                            <p className="f-icon">
                                                <i
                                                    className="icon"
                                                    role="presentation"
                                                >
                                                    <BsGithub
                                                        size={20}
                                                        role="presentation"
                                                    />
                                                </i>
                                                <a
                                                    href="https://github.com/philernst"
                                                    target="_blank"
                                                    aria-label="Opens in new tab"
                                                >
                                                    github.com/philernst
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={12} className="f-end">
                                    <Form />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </footer>
                <div className="f-link">
                    Copyright © {today.getFullYear()}. All Rights Reserved.
                </div>
            </>
        )
    }
}
