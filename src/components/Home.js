import { Col, Row } from "react-bootstrap";
import RK from '../img/RK.jpg' ;
const { Component } = require("react");
class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
                <Row className="pt-5" id="home">
                    <Col md={{ span: 4, offset: 1 }} sm={0}>
                        <img src={RK} className="image-fluid rounded profile"></img>
                    </Col>
                    <Col md={7} sm={12}>
                        <div className="subtitle">Hey there! My name is</div>
                        <h1 className="main-title small">Rammya Krishna</h1>
                        <div className="subtitle">or you can call me</div>
                        <h1 className="main-title small">RK</h1>
                        <div className="subtitle">I'm a Full Stack Developer<br/>
                        Happy to participate in or help build <br/> something that is appealing</div>
                    </Col>
                </Row>
                
            </>
        )
    }

}
export default Home;