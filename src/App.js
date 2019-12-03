import React, { Component } from 'react';
// import '../App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import Contact from "./Components/Contact";
// import "./css/layout.css"
import {data} from "./resumeInfo"


class App extends Component {
    constructor(props) {


        super(props);
        this.state = {name:"",message:"",email:"",subject:""}
    }

    required = ["email","name","message"];

    saveData = (event) => {
      let  target = event.target
        let field = target.name
        let value = target.value

        this.setState({[field]:value})
    };
   // env = require('env2')('../.env');

// your app goes here
    submitData=(event)=>{
        event.preventDefault()


        let validated = true;

        let re =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        let validationMessage = (word) => <p>"Please enter a valid " {word} </p>;
        let errorMessage = []
        for(let each of this.required){
            console.log("each",each ,":", this.state.each)
            console.log("each = ",each==="")
            if(each === "email"){
                let isEmail = re.test(this.state.email)
                validated = isEmail;
                if(!isEmail) errorMessage = errorMessage.concat(validationMessage(each))
            }
            if (this.state[each] === "" || this.state[each] === undefined ){
                validated =false;
                errorMessage = errorMessage.concat(validationMessage(each))
            }


        };



        console.log("submit data : ",this.state,validated)

        if(validated === true) {
            this.sendFeedback()

            this.setState({
                formSubmitted: true
            })
        }
        else {
            this.setState({
                formSubmitted: false,
                error:errorMessage
            })
        }

    }

    sendFeedback () {
        let {name,message,email,subject} = this.state;
        const {REACT_APP_EMAILJS_USERID: userID,
            // REACT_APP_EMAILJS_RECEIVER: receiverEmail,
            REACT_APP_EMAILJS_TEMPLATEID: templateID
        } = process.env

        window.emailjs.send(
            'jamesamrundle@gmail.com',
            templateID,
            {   name,
                message,
                email,
                subject
            },userID)
            .then(res => {
                this.setState({ formEmailSent: true },
                    document.getElementById("contact-form").reset())
            }).then(res => {
                this.setState({error :"Thanks, Ill be in touch." })
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => {
                console.log('Failed to send feedback. Error: ', err);
                this.setState({error :'Failed to send feedback. Error ' +err.status+':'+ err.text })
            })
    }


    render() {
	console.log(process.env)
	console.log(process.env.NODE_ENV)
        return (

        <div className="App">
            <Header data={data.main}/>
            <About  data={data.main}/>
            <Resume data={data.resume} />
            <Contact saveData={this.saveData} submitData={this.submitData} error={this.state.error}/>
            <Footer />

        </div>
    );
  }
}

export default App;
