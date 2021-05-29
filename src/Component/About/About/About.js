import React from 'react';
import { Container } from 'react-bootstrap';
import Education from '../Education/Education';
import MyInfo from '../My_Info/My_Info';
import Skill from '../Skill/Skill';
import './About.css';

const About = () => {
    return (
        <Container>
            <section>
                <div className="section-inner about-me">
                    <div className="page-header">
                        <h2>About Me</h2>
                    </div>
                </div>
            </section>
            <MyInfo></MyInfo>
            <Skill></Skill>
            <Education></Education>
        </Container>
    );
};

export default About;