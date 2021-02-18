function validate() {
    let email = document.querySelector("#email")
    email.addEventListener('change', Change)


    function Change() {

        pattern = /\w+@\w+\.\w+/g
        if (pattern.exec(email.value)) {
            email.classList.remove('error')
        } else {

            email.classList.add('error')
        }
    }

}

