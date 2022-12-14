const throttle = require('lodash.throttle');

const form = document.querySelector('form')
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')
const btn = document.querySelector('button')


form.addEventListener('input', throttle(onFormInput, 500))
updateInput()
btn.addEventListener('click', onBtnClick)


//* 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні 
//*    значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".
function onFormInput() {
    localStorage.setItem("feedback-form-state",
        JSON.stringify({ email: input.value, msg: textarea.value }))
}

//* 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку 
//*    поля повинні бути порожніми.
function updateInput() {
    const data = localStorage.getItem("feedback-form-state")
    if (data) {
        const parsedData = JSON.parse(data)
        input.value = parsedData.email
        textarea.value = parsedData.msg
    }
}

//* 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
function onBtnClick(e) {
    const myFormData = new FormData(form)
    const formDataObj = {}
    myFormData.forEach((value, key) => (formDataObj[key] = value))
    console.log(formDataObj)

    localStorage.clear()
    e.preventDefault()
    form.reset()
}