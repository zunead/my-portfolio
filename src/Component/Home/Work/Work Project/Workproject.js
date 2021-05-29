import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './workproject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Workproject = ({project}) => {
    const {title, descripstion, image, project_link, github_link} = project;


    return (
        <Row className="mt-4">

            <Col className="project" xs={12} sm={6} md={6} lg={6}>
                <div className="project_image">
                    <Image src={image} fluid />
                </div>
            </Col>

            <Col className="" xs={12} sm={6} md={6} lg={6}>
                <div className="Info_Container">
                        <div className="project_info px-4 py-2">
                        <p className="small-text-band">{title}</p>
                        <p>{descripstion}</p>

                        <a href={project_link} className="btn-band-outline" target="_blank" rel="noreferrer">Live</a>
                        <a href={github_link} className="btn-band-outline" target="_blank" rel="noreferrer">Github</a>

                        <hr />
                        <a href={project_link} className="small-text-band mr-3" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare} />
                        </a>
                        <a href={github_link} className="small-text-band" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                    </div>
                    
                </div>
            </Col>
        </Row>
    );
};

export default Workproject;