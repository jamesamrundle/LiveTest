//import {creds} from "./creds"

const AWS = require('aws-sdk')




const ses = new AWS.SES();

let message = {}


export let sendMessage=(data)=> {

    console.log("PWD!",window.location.pathname)

    message = ({
        Destination: {
            ToAddresses: ['jamesamrunle@gmail.com']
        },
        Message: {
            Body: {

                Text: {
                    Charset: 'UTF-8',
                    Data:"Sender : " + data.email + "\n"+ data.message
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: "WEB CONTACT from " + data.name + " : " + data.subject
            }
        },
        ReplyToAddresses:[data.email],
        ReturnPath: 'jamesamrundle@gmail.com',
        Source: 'jamesamrundle@gmail.com'
    });

    ses.sendEmail(message, (err, data) => {
        if (err) console.log(err, err.stack)
        else console.log(data)
    })

}

