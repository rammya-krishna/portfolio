import { Component } from "react";
import { Col, Row,Button,Card } from "react-bootstrap";
import quiz_img from '../img/project/quiz.png'
import task_img from '../img/project/task.jpg'


class Mywork extends Component{

    constructor(props){
        super(props)
        this.state={
            project_details:[
                {   image:quiz_img,
                    title:'Quiz application',
                    description:'A common platform to connect students and teachers online '
                },
                {   image:task_img,
                    title:'Task Manger',
                    description:'Organize your life and complete tasks more reliably by using the right to-do app'
                }]
        }
    }
    render(){
        return(
           <>
                <h4 className="subheading pt-5" id="work">Mywork</h4>
                <hr></hr>
                <Row xs={1}  className="g-3">
                    {this.state.project_details.map(
                        (item,index)=>
                        <Col md={4} key={index}>
                            <ProjectCard img={item.image}  title={item.title} description={item.description}/>
                        </Col>  
                        )}
                </Row>
            </>

        );
    }
}

function ProjectCard(props){
    return (
            <>
                <Row>
                    <Col>
                        <Card className='projectcard'>
                            {/* <Card.Img src={props.img}  className='projectcard-img'></Card.Img> */}
                            <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text>{props.description}</Card.Text>
                            <a href="https://github.com/rammya-krishna/">
                            <Button variant="outline-secondary">View Project</Button>
                            </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        );    
}

export default Mywork;