const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const message1 = document.getElementById('message');


contactMeButton.addEventListener('click', ()=>{
    Email.send({
        Host: "smtp.gmail.com",
        Username: "u.proyectos23@gmail.com",
        Password: "rjll rrce sdxe zpel",
        To: 'hrojas0504@gmail.com',
        From: "u.proyectos23@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
    
});