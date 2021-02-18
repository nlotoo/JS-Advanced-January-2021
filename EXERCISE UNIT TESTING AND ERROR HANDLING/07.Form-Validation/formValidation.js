function validate() {

    let flag = false

    document.querySelector("#submit").addEventListener('click', Submiting)

    // cheking chelBox 

    document.querySelector("#company").addEventListener('change', cheking)

    function cheking() {
        document.querySelector("#valid").style.display = 'none'
        if (document.querySelector("#company").checked) {
            document.querySelector("#companyInfo").style.display = 'block'
            flag = true
        } else {
            document.querySelector("#companyInfo").style.display = 'none'
            flag = false
        }
    }


    function Submiting() {
        document.querySelector("#valid").style.display = 'none'
        event.preventDefault()
        // cheking userName
        patternUsername = /[A-z0-9]{3,20}/g
        let usernameInputElement = document.querySelector("#username")
        if (patternUsername.exec(usernameInputElement.value)) {
            usernameInputElement.style.border = 'none'
        } else {
            usernameInputElement.style.borderColor = "red"
        }

        // chekingEmail 
        patternEmail = /\w+@\w+\.\w+/g

        let emailInputElement = document.querySelector("#email")

        if (patternEmail.exec(emailInputElement.value)) {
            emailInputElement.style.border = 'none'
        } else {
            emailInputElement.style.borderColor = "red"
        }


        // cheking password
        patternPassword = /[A-z0-9_]{5,15}/g
        let passwordInputElement = document.querySelector("#password")
        let comfirmPasswordElement = document.querySelector("#confirm-password")
        let paswordFlag = false
        if (patternPassword.exec(passwordInputElement.value)) {
            paswordFlag=true
            passwordInputElement.style.border = 'none'
        } else {
            passwordInputElement.style.borderColor = "red"
            comfirmPasswordElement.style.borderColor = "red"
        }

        // comfirt passowrd


        if (paswordFlag) {
            if (passwordInputElement.value === comfirmPasswordElement.value) {
                comfirmPasswordElement.style.border = 'none'
                passwordInputElement.style.border = 'none'
            } else {
                passwordInputElement.style.borderColor = "red"
                comfirmPasswordElement.style.borderColor = "red"
            }
        }




        // cheking for company Number 

        let companyInputElement = document.querySelector("#companyNumber")
        if (flag) {
            if (companyInputElement.value > 1000 && companyInputElement.value <= 9999) {
                companyInputElement.style.border = 'none'
            } else {
                companyInputElement.style.borderColor = 'red'
            }
        }


        //   cheking for style border at inputBars

        console.log(document.querySelectorAll('input'))

        if (flag == false) {
            let counter = 0;
            let inputData = document.querySelectorAll('input')
            for (let i = 0; i < inputData.length - 2; i++) {

                if (inputData[i].style.borderColor !== 'red') {
                    counter++
                }
            }
            if (counter == 4) {
                document.querySelector("#valid").style.display = 'block'
            }
        } 
        // else {
        //     let counter = 0;
        //     let inputData = document.querySelectorAll('input')
        //     for (let i = 0; i < inputData.length - 2; i++) {

        //         if (inputData[i].style.borderColor !== 'red') {
        //             counter++
        //         }
        //     }
        //     if (companyInputElement.value > 1000 && companyInputElement.value <= 9999) {
        //         counter++
        //     }
        //     if (counter == 5) {
        //         document.querySelector("#valid").style.display = 'block'
        //     }
        // }

    }
}
