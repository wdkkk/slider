var prices_prev = document.getElementById('prices__prev');
var prices_next = document.getElementById('prices__next');

let page = 1;

prices_next.onclick = function() {
  prices_next_page(page);
  if (prices_next_page(page)) {
    page++;
  }
}
prices_prev.onclick = function() {
  prices_prev_page(page);
  if (page != 1) page--;
}


function prices_next_page(page) {
  let curpage = document.getElementById('prices__par__' + String(page));
  let nextpage = document.getElementById('prices__par__' + String(page + 1));

  let curprice = document.getElementById('prices__price__' + String(page));
  let nextprice = document.getElementById('prices__price__' + String(page + 1));

  if (curpage.nextElementSibling.classList.contains('prices__block__par') == true) {
    curpage.classList.add('none');
    curprice.classList.add('none');

    nextpage.classList.remove('none');
    nextprice.classList.remove('none');
    return true;
  } 
}
function prices_prev_page(page) {
  let curpage = document.getElementById('prices__par__' + String(page));
  let prevpage = document.getElementById('prices__par__' + String(page - 1));

  let curprice = document.getElementById('prices__price__' + String(page));
  let prevprice = document.getElementById('prices__price__' + String(page - 1));

  if (page != 1)  {
    curpage.classList.add('none');
    curprice.classList.add('none');

    prevpage.classList.remove('none');
    prevprice.classList.remove('none');
  }
}