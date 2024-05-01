import { Component, Fragment } from "react";
import Contact from "./Contact";
import Navigation from "./nav";
import Mywork from "./Mywork";
import Skill from "./skills";
import Home from "./Home";

class Maincontainer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <div className="container">
                    <Navigation/>
                    <Home/>
                    <Skill/>
                    <Mywork/>
                    <Contact/>
                </div>
            </>
        )
    }
}

export default Maincontainer