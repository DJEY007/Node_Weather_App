console.log('this is the message for console from client side javascript')

const weatherForm = document.querySelector('form')
const searchText = document.querySelector('input')
const msg1 = document.querySelector("#msg-1")
const msg2 = document.querySelector("#msg-2")

msg1.textContent = ''
msg2.textContent =''
weatherForm.addEventListener('submit', (event) => {
    msg1.textContent = 'Loading....'
    msg2.textContent = ''
    event.preventDefault()
    const location = searchText.value
    const url = '/weather?address=' + location
    //console.log(location)
    fetch(url).then((response) => {
    response.json().then((data) => {
       if(data.error){
        msg1.textContent = data.error
       } else {
            msg1.textContent = data.location
            msg2.textContent = data.forecast
        }
    })
})
})