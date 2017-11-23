const headers = new Headers({
    "Content-Type": "application/json"
});
const endpoint = "https://ec2-54-205-28-204.compute-1.amazonaws.com/api/v1/webhooks/stackstorm-demo/test-action?st2-api-key=MGM3MTkyMDZjYmJhMGY3ZjYzYTZmOTFjZmM5YzcyODVjZDM3Nzc0ZTIzYTRlNDhjOTk5MGIxN2YyODA4YzhiYg";

const button = document.querySelector('button');
const inputLocation = document.querySelector('input[name="location"]');
const inputEmails = document.querySelector('input[name="emails"]');
const successAlert = document.querySelector('.success');
const errorAlert = document.querySelector('.error');

button.addEventListener('click', ev => {
    const options = {
        "method": "POST",
        headers,
        "body": JSON.stringify({
            "alertId": Math.round(1000 +(Math.random()*(3000-1000))),
            "details":{
                "location": inputLocation.value,
                "emails": inputEmails.value.split(',')
            }
        })
    };
    const request = new Request(endpoint, options);

    fetch(request).then(data =>{
        console.log(data);
        errorAlert.hidden = !false;
        successAlert.hidden = false;
    }).catch(err => {
        console.log(err);
        successAlert.hidden = !false;
        errorAlert.hidden = false;
    })
});
