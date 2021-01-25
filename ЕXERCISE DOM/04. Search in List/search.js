function search() {

  let searchElementBox = document.getElementById('searchText').value
  let townsList = document.getElementsByTagName('li')
  let resultElement = document.getElementById('result')
  let log = 0;
  for (let i = 0; i < townsList.length; i++) {

    if (townsList[i].textContent.includes(searchElementBox)) {
      log++
      townsList[i].style.textDecoration = "underline"
      townsList[i].style.fontStyle = "bold"
    }

  }
  console.log(resultElement.textContent = `${log} matches found`)

}
