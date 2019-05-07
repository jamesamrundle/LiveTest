import React, {Component} from 'react';
// import'../css/layout.css'
//import {MYFACE} from "../images/MYFACE.jpg"


class About  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "James Rundle",
            bio: "Hi " +
                "I am " +
                "James Rundle\n" +
                "Culinarian turned programmer, \n" +
                "I specialize in Java and React and have an interest in Arduinos/Raspberry Pi for hardware level coding",
            address0:{
                street: "123 Drury Lane",
                city: "Seattle",
                state: "Washington",
                zip: "67460",
            },
            address : { street : "361 Arlington Drive",
                        theRest : "Charleston, SC 29414"},
            phone: "111-222-3333",
            email: "jamesamrundle@gmail.com",
            image: "./images/MYFACE.jpg"
        }
    }

    render() {
	console.log("env?",this.props.env);
        let {bio,address,phone,email,name} = this.props.data;
        return (
            <section id="about" >
            <div className="">

                <div className="pic">
                <img className="profile-pic" src={require("../images/MYFACE.jpg")} alt="my beautiful personage" />
                {/*<img className="profile-pic" src={"images/redhat.jpg"} alt="my beautiful personage" />*/}

                </div>

                < div className="main-col">


                    <h2>About Me</h2>
                    <p>{bio}</p>


                    <div className="contact-details">
                    <h2>Contact Details</h2>
                    <p>
                        <span>{name}</span> <br />
                        <span>{address.street}</span> <br />
                        <span>{address.city} {address.state}, {address.zip}</span>
                    </p>
                    </div>


                    <span style={{float:"right"}}><a href={process.env.PUBLIC_URL+"/resume.pdf"} className="button" download>
                            <i className="fa fa-download"/><span>Download Resume</span></a></span><br />



                        <p>
                        <span>{phone}</span><br/>
                        <span>{email}</span><br />
                    </p>



                    </div>



            </div>
            </section>
        );
    }
}

export default About;
