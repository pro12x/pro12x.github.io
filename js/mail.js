function SendMail() {
    let tabChoice = []
    choices = document.querySelectorAll('input[name="choice"]:checked').forEach((choice) => {
        tabChoice.push(choice.value)
    })
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,

        subject : tabChoice,

        message : document.getElementById("message").value
    }
    emailjs.send("service_2jrde9k", "template_9du9j6m", params).then(function(res) {
        alert("Success !" + res.status)
    })
}