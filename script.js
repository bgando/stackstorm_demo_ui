const cors = "https://can-cors.herokuapp.com/"
const headers = new Headers({
    "Content-Type": "application/json"
});
const endpoint = "https://ec2-54-205-28-204.compute-1.amazonaws.com/api/v1/webhooks/stackstorm-demo/test-action";

const options = {
    "method": "POST",
    headers,
    "data": {"alertId":"1235","details":{"prop1":"val1"}}
}
const request = new Request(endpoint, options)

const button = document.querySelector('button');
button.addEventListener('click', ev => {
    fetch(request).then(data =>{
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
});
