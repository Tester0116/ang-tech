const storageData = JSON.parse(localStorage.getItem('detailData'))
const title = document.getElementById('detailTitle')
const author = document.getElementById('detailAuthor')
const body = document.getElementById('detailBody')

title.textContent = storageData.title
author.textContent = storageData.author
body.textContent = storageData.body

document.addEventListener('mousemove', parallax)
const parallaxThings = document.querySelectorAll('.detail__parallax')

function parallax(e) {
  parallaxThings.forEach((el) => {
    const position = el.getAttribute('data-position')
    const x = (window.innerWidth - e.pageX * position) / 100
    const y = (window.innerHeight - e.pageY * position) / 100
    el.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}
