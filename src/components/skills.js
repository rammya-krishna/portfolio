import { Col, Row,Card } from "react-bootstrap";
const { Component } = require("react");

class Skill extends Component{

    constructor(props){
        super(props)
        this.state={
            title:['python','Flask','Django','Sql','Mongodb','Html','css','JavaScript','Git','Node JS','React'],
        }
    }
    render(){
        return (
            <>
               <h4 className="subheading pt-5" id="skills">Skills</h4>
               <hr></hr>
               <Row sm={2}  className="g-4">
                    {this.state.title.map(
                        (index,item)=>
                        <Col md={3} key={index}>
                            <SkillCard  title={this.state.title[item].toUpperCase()}/>
                        </Col>  
                        )}
                </Row>
            </>
        )
    }

}
function SkillCard(props){
    return (
            <>
                <Row>
                    <Col>
                        <Card className='skillcard'>
                            <Card.Body>
                            <Card.Title className='center'>{props.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        );
      
}

export default Skill;