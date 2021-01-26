function lockedProfile() {





    let buttonsShowMore = document.getElementsByClassName('profile')
    buttonsShowMoreArray = Array.from(buttonsShowMore)
    buttonsShowMoreArray.forEach(x => {
        btn = x.querySelectorAll('div')[0].nextElementSibling
        btn.addEventListener('click', e => {

            if (!e.target.parentElement.querySelectorAll('input')[0].checked) {
                e.target.previousElementSibling.style.display = 'block'
                e.target.textContent = 'Hide it'

            }


            e.target.addEventListener('click', e => {
                if (!e.target.parentElement.querySelectorAll('input')[0].checked && e.target.textContent === 'Hide it') {
                    e.target.previousElementSibling.style.display = 'none'
                    e.target.textContent = 'Show more'
                }
            });


        });


    });


}