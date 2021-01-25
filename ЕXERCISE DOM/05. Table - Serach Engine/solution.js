function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let body = document.querySelectorAll('tbody tr')

   function onClick() {
      let input = document.querySelector('#searchField').value;

      console.log(body.innerHtml)

      body.innerHtml = Array.from(rows).map(row => {
         if (row.textContent.toLowerCase().includes(input.toLowerCase()) && row.textContent !== '') {
            row.classList.add('select')
         } else {
            row.classList.remove('select')
         }

      })
      document.getElementById('searchField').value = ''

   }
}