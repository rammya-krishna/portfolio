import { Component } from "react";
import { Col, Row,Button,Card } from "react-bootstrap";


class Mywork extends Component{

    constructor(props){
        super(props)
        this.state={
            project_details:[
                {   link:'https://github.com/rammya-krishna/netflix-gpt',
                    title:'Netflix GPT',
                    description:"A Web application that leverages OpenAI's GPT model to provide users with personalized movie recommendations based on natural language queries. It features user authentication, multi-language support, and an intuitive interface for exploring movie details"
                }]
        }
    }
    render(){
        return(
           <>
                <h4 className="subheading pt-5" id="work">Mywork</h4>
                <hr></hr>
                <Row   className="g-3">
                    {this.state.project_details.map(
                        (item,index)=>
                        <Col key={index} >
                            <ProjectCard title={item.title} description={item.description} link={item.link}/>
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
                           
                            <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle></Card.Subtitle>
                            <Card.Text >{props.description}</Card.Text>
                            <a href={props.link}>
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