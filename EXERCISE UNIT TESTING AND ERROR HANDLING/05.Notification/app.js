function notify(message) {
  document.querySelector("#notification").style.display = 'block'
  document.querySelector("#notification").textContent=`${message}`
  document.querySelector("#notification").addEventListener('click', () => {
    document.querySelector("#notification").style.display = 'none'
  })
}