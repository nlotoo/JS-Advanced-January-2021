function toggle() {
    let btn = document.getElementsByClassName('button')[0].textContent;
    
    if (btn == 'More') {
        document.querySelector('#extra').style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less'
    } else if (btn !== 'More') {
        document.querySelector('#extra').style.display = 'none'
        document.getElementsByClassName('button')[0].textContent = 'More'
    }


}