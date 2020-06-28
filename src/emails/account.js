
const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'hridoyadi7@gmail.com',
        subject:'Thanks for joining!',
        text:`Welcome to the App,${name}.Let me know how you get along with the app.`
    })
}

const sendCancelEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'hridoyadi7@gmail.com',
        subject:'Cencallation successfully done',
        text:`Thanks ${name} for using our app.`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}