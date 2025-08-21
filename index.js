const nodemailer=require("nodemailer")
const {google}=require("googleapis")
const clientIDS="826841499412-jiatb6gtk9u3f008drcecd9tq580f0m4.apps.googleusercontent.com"
const clientSECRET="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"
const redirectURI="https://developers.google.com/oauthplayground"
const refreshTOKEN="1//04hT_oO-66ATxCgYIARAAGAQSNwF-L9Ir_vz4IVU3U7eKvVEIPzq741g9c9VEa2rK0iuOTn-sChWMWQ2v78t8mqaOB7RCqh9qzVU"


const Gauth=new google.auth.OAuth2(clientIDS,clientSECRET,redirectURI)
Gauth.setCredentials({refresh_token:refreshTOKEN})
const sender=async()=>{
    try {
        const acesstoken= await Gauth.getAccessToken()
        const transport=nodemailer.createTransport({
            service:"gmail",
            auth:{
                type:"OAuth2",
                user:"eazybel27@gmail.com",
                clientID:clientIDS,
                clientSecret:clientSECRET,
                refreshToken:refreshTOKEN,
               accessToken: acesstoken.token

            }
        })
        const mail={
            from:"eazybel27@gmail.com",
            to:"eazybel28@gmail.com",
            subject:"check in",
            text:"checkout"
        }
        const sendEmail=await transport.sendMail(mail)
        return sendEmail
    } catch (err) {
        console.log(err)
    }
}
sender().then(()=>{
    console.log("sent")
}).catch(err=>{
    console.log(err)
})