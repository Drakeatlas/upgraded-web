function sendEmail() {

    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    };

    emailjs.send("service_6zjsen7", "template_sotqx5t", templateParams)
    .then(() => {
        alert("Email sent successfully!");

        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#subject").value = "";
        document.querySelector("#message").value = "";
    })
    .catch((error) => {
        console.log(error);
        alert("Email not sent.");
    });
}