import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Workproject from './Work Project/Workproject';
import './Work.css';
import ProjectData from "./projectData.json";
import { Link } from 'react-router-dom';


const Work = () => {
    document.title ="Work project Area";

    const [project, setProject] = useState([]);

    useEffect(() => {
        setProject(ProjectData)
    },[])


    return (
        <div className="work-conteiner container-fluid" >
            <div className="Work_Area pt-5">
                <Row>

                    <Col xs={12} sm={12} md={6} lg={6} className="work_Row">
                        <h2>
                            <span className="small-text-band">Some of</span> my work
                        </h2>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6} className="work_Row">
                        <div className="allWorkBtn">
                            <Link to="/work" className="btn-band" rel="noreferrer"> 
                                All Works
                            </Link>
                        </div>
                    </Col>

                </Row>
                {
                   project.map(project => <Workproject project={project} key={project.id}></Workproject>)
                }
            </div>
        </div>
    );
};

export default Work;
