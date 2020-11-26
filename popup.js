
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("search-button").addEventListener('click', onclick, false)
  document.body.addEventListener('keyup', function (e) {
    if (e.code === 'Enter') {
      onclick();
    }
  });

  function onclick() {
    let query = document.getElementById('search').value;
    window.open(`https://developer.mozilla.org/en-US/search?q=${query}`, "_blank")
  }
})