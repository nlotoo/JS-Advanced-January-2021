function attachEventsListeners() {

    list = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }


    // ДНИ

    let daysBtn = document.getElementById('daysBtn')

    daysBtn.addEventListener('click', event => {
        d = event.target.previousElementSibling.value

        resultOfhours = d * list['hours'];
        document.getElementById('hours').value = resultOfhours

        resultOfminutes = d * list['minutes'];
        document.getElementById('minutes').value = resultOfminutes

        resultOfseconds = d * list['seconds'];
        document.getElementById('seconds').value = resultOfseconds


    });

    //ЧАСОВЕ
    let hoursBtn = document.getElementById('hoursBtn')

    hoursBtn.addEventListener('click', event => {
        h = event.target.previousElementSibling.value
        let transferToDays = h / list['hours'];
        document.getElementById('days').value = transferToDays

        resultOfminutes = transferToDays * list['minutes'];
        document.getElementById('minutes').value = resultOfminutes

        resultOfseconds = transferToDays * list['seconds'];
        document.getElementById('seconds').value = resultOfseconds


    });
    //МИНУТИ 
    let minutesBtn = document.getElementById('minutesBtn')

    minutesBtn.addEventListener('click', event => {


        m = event.target.previousElementSibling.value

        transferToDays = m / 60 / list['days'];
        console.log(transferToDays)



        document.getElementById('days').value = transferToDays / list['hours'];


        resultOfhours = transferToDays / list['days'];
        document.getElementById('hours').value = resultOfhours

        resultOfseconds = transferToDays*60 *60;
        document.getElementById('seconds').value = resultOfseconds







    });
    //СЕКУНДИ
    let secondsBtn = document.getElementById('secondsBtn')
    secondsBtn.addEventListener('click', event => {
        s = event.target.previousElementSibling.value
        transferToDays = s / 60 / 60 / list['hours'];

        document.getElementById('days').value = transferToDays

 
        resultOfhours = transferToDays * list['hours'];
        document.getElementById('hours').value = resultOfhours

        resultOfminutes = transferToDays * list['minutes'];
        document.getElementById('minutes').value = resultOfminutes

       

        console.log(transferToDays)
    });


}