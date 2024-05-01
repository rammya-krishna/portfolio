import { Button } from 'react-bootstrap';
const { Component } = require("react");

class Contact extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="row pt-5" id="contact">
                <h3 className="subheading">Contact</h3>
                <hr></hr>
                <div className="col col-sm-6 nopadding ">
                    <p className='text-pad'>Are you interested in collaborating or 
                        want to connect or chat? If so, 
                        hit the contact button
                        or <a href="https://www.linkedin.com/in/rammyakrishna/">contact me via LinkedIn</a>
                    </p>   
                </div>
                <div className="col col-sm-6 d-flex justify-content-center  align-self-center">
                    <a href="mailto:rammyakrishna018.com"><Button className='btn-contact' variant="dark">Contact Me</Button></a>
                </div>
                <h4 className='center thanks'>"Thanks For Scrolling!"</h4>
            </div>
        );
    }
}


export default Contact;