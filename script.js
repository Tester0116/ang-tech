const articleList = document.getElementById('articleBlock')
const searchBar = document.getElementById('articleSearch')
const nextBtn = document.getElementById('articleNext')
const prevBtn = document.getElementById('articlePrev')
const articleItem = document.getElementById('articleItem')

let articles = []

let pageSize = articles.length
let curPage = 10

searchBar.addEventListener('keyup', (e) => {
  const inputValue = e.target.value.toLowerCase()

  const filteredArticles = articles.filter((character) => {
    return (
      character.userId == inputValue ||
      character.title.toLowerCase().includes(inputValue) ||
      character.body.toLowerCase().includes(inputValue)
    )
  })
  displayArticles(filteredArticles)
})

const loadArticles = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    articles = await res.json()
    displayArticles(articles)
  } catch (err) {
    console.error(err)
  }
}

const displayArticles = (characters) => {
  const htmlString = characters
    .slice(curPage - 10, curPage)
    .map((el) => {
      // <a href='#'>
      return `
      <li class='article__item'  onclick="navigateToDetail(this)">
      <a href='detailPage.html'>
      <span class='article__item--author'>${el.userId}</span>.
      <span class='article__item--title'>${el.title}</span>.
      <p class='article__item--body'>${el.body}</p>
      </a>
      </li>
      `
    })
    .join('')
  articleList.innerHTML = htmlString
}

function previousPage() {
  if (curPage >= 10) {
    prevBtn.disabled = false
  } else {
    prevBtn.disabled = true
  }
  if (curPage < 21) prevBtn.disabled = true
  curPage -= 10
  loadArticles()
}

function nextPage() {
  if (curPage + 10 == articles.length) {
    nextBtn.disabled = true
  }
  if (curPage + 10 >= 10) {
    prevBtn.disabled = false
  } else {
    prevBtn.disabled = true
  }

  curPage += 10
  loadArticles()
}

const navigateToDetail = (el) => {
  const author = el.querySelector('span').textContent
  const title = el.querySelector('.article__item--title').textContent
  const body = el.querySelector('.article__item--body').textContent

  const detailData = { author: author, title: title, body: body }

  localStorage.setItem('detailData', JSON.stringify(detailData))
}

if (curPage >= 10) {
  prevBtn.disabled = true
} else {
  prevBtn.disabled = false
}

prevBtn.addEventListener('click', previousPage)
nextBtn.addEventListener('click', nextPage)

loadArticles()
