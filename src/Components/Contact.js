import React from "react";

let Contact = (props) => {
    return(
<section id="contact">

    <p className="">feel free to contact me. ill return your message so we can keep in touch.</p>

    <div className="">
        <form id="contact-form">
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
                    <textarea cols="40" rows="15" placeholder="main message" required name="message" onChange={props.saveData} />
                </div>

                <button type="submit" className="submit" onClick={props.submitData} >Submit</button>

            </fieldset>

        </form>

        <div id="message-warning"> Error boy</div>
        <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!<br />
        </div>

    </div>



</section>

    )

}

export default Contact