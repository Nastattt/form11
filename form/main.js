// console.log(document.forms[0])
let form = document.forms.register 

// console.log(form.elements[1])
// console.log(form.elements.email)
// let elem = form.elements.email

// for (let i of form.elements){
//     console.log(i)
// }

// console.log(elem.form)

// console.log(form.elements[0].value)
// console.log(form.elements[2].value)

// console.log(form.elements[5].checked)

// console.log(form.elements.gendef[0].checked)

// console.log(form.elements[3].value)
// console.log(form.elements[3].options[2].selected = true)

// let select = form.elements[3]
// // console.log(options[2].selected = true);
// // select.selectedIndex = 1;
// // select.value = "kazan";

// let option = new Option('minsk', 'minsk')
// select[select.options.length] = option
// console.log(option.text)

let email = form.elements[1]

// email.onblur = () => {
//     if (email.value.includes('@')){
//         console.log('error')
//     }
// }

// email.onblur = () => {
//     if (!email.value.includes('@') || !email.value.includes('.')){
//         let error = document.querySelector('.error');
//         error.innerHTML = 'Email error'
//     }
// }

// email.onfocus = () => {
//     let error = document.querySelector('.error');
//     error.innerHTML = ''
// }

email.addEventListener('focus', () => console.log('focus'));
email.addEventListener('blur', () => console.log('blur'));
email.addEventListener('focusin', () => console.log('focus'));
email.addEventListener('focusout', () => console.log('blur'));



function subm(event){
    event.preventDefault();
    console.log('fcgvhbjn')
}