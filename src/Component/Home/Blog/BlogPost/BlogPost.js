import React from 'react';
import { Card, CardImg, Col } from 'react-bootstrap';
import './BlogPost.css';
const Workproject = ({blogPost}) => {
    const {title, descripstion, image, project_link, github_link, date} = blogPost;
    document.title = " Blog Post"
    return (
            <Col xs={12} sm={12} md={6} lg={4}>
                <Card className="mt-3 blogPost_Card">
                    <CardImg  variant="top" src={image} />
                    <Card.Body>
                    <Card.Title className="small-text-band">{title}</Card.Title>
                    <Card.Text className="text-secondary">
                        {descripstion}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{project_link}</small>
                        <small className="text-muted">{github_link}</small>
                        <small className="text-muted">{project_link}</small>
                        <small className="text-muted">{date}</small>
                    </Card.Footer>
                </Card>
            </Col>




    );
};

export default Workproject;



// {Array.from({ length: 4 }).map((_, idx) => (
//     <Col xs={1} md={4}>
//     <Card>
//         <CardImg variant="top" src={image} />
//         <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>
//             {descripstion}
//         </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//             <small className="text-muted">{project_link}</small>
//             <small className="text-muted">{github_link}</small>
//             <small className="text-muted">{project_link}</small>
//             <small className="text-muted">{date}</small>
//         </Card.Footer>
//     </Card>
//     </Col>
// ))}














// <Col className="project" md={7}>
// <div className="project_image">
//     <Image src={image} fluid />
// </div>
// </Col>
// <Col className="" md={5}>
// <div className="project_info px-4 py-2">
//     <p className="small-text-band">{title}</p>
//     <p>{descripstion}</p>

//     <a href={project_link} className="btn-band-outline" target="_blank" rel="noreferrer">Live</a>
//     <a href={github_link} className="btn-band-outline" target="_blank" rel="noreferrer">Github</a>

//     <hr />
//     <a href={project_link} className="btn-band" target="_blank" rel="noreferrer">Live</a>
//     <a href={github_link} className="btn-band" target="_blank" rel="noreferrer">Github</a>
    
// </div>
// </Col>