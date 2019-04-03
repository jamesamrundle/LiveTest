import React from "react";
// import { UncontrolledAlert } from 'reactstrap';

let Contact = (props) => {

    let isError = () =>{
        if(props.error){
            return(
                <div className="alert alert-danger alert-dismissible fade show main-col">

                    <strong>Sending Error!!!</strong>  Failed to send feedback. Error : {props.error}
                </div>
            )
        }
        return null
    }



    return(
<section id="contact">



    <div className="grid">

        <form id="contact-form">
            <p className="lead">Feel free to contact me. I'll return your message so we can keep in touch.</p>
            <br/>
            <fieldset>

                <div>
                  <label>Name *</label>
                    <input type="text" placeholder="name required" name="name" required onChange={props.saveData} />
                </div>

                <div>
                    <label>Email address *</label>
                    <input type="text" placeholder="email required" required name="email" onChange={props.saveData}/>
                </div>

                <div>
                    <label>Subject</label>
                    <input type="text" placeholder=" message subject" name="subject" onChange={props.saveData}/>
                </div>

                <div>
                    <label>Message *</label>
                    <textarea cols="40" rows="15" placeholder="main message"  name="message" onChange={props.saveData} />
                </div>

                {isError()}

                <button type="submit" className="submit" onClick={props.submitData} >Submit</button>

            </fieldset>

        </form>



    </div>



</section>

    )

}

export default Contact