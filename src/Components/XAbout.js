import React, { Component } from 'react';
// import'../css/layout.css';
import ('../public/resumeData.json');

class XAbout extends Component {
  render() {
    if(this.props.data){
        var name = this.props.data.name;
        var image = 'images/MYFACE.jpg';
        var bio = this.props.data.bio;
        var street = this.props.data.address.street;
        var city = this.props.data.address.city;
        var state = this.props.data.address.state;
        var zip = this.props.data.address.zip;
        var phone = this.props.data.phone;
        var email = this.props.data.email;
        var resumeDownload = this.props.data.resumedownload;
    }
    return (
      <section id="about">
      <div className="grid">

         <div className="pic" >
            <img  className="profile-pic" src={image} alt="" />
         </div>

         <div className="main-col">

            <h2>About Me</h2>
            <p>{bio}</p>
            <div>
               <div className="contact-details" >
                  <h2>Contact Details</h2>
                  <p >
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city}, {state} {zip}
                     </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="download">
                  <p>
                     <a href={resumeDownload} className="button"><i ></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default XAbout;
