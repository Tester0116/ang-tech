import { articles } from './getUsers.js'
const articleBlock = document.getElementById('articleBlock')
const articleInput = document.getElementById('articleSearch')

const setArticle = () => {
  articles
    // .filter((article) => {
    //   if (value == '') {
    //     return article
    //     // } else if (article.userId.includes(value)) {
    //     // return article
    //   } else if (article.title.toLowerCase().includes(value.toLowerCase())) {
    //     return article
    //   } else if (article.body.toLowerCase().includes(value.toLowerCase())) {
    //     return article
    //   }
    // })
    .forEach((el, index) => {
      const item = document.createElement('li')
      item.classList.add('article__item')
      item.innerHTML = `
      <a href='#'>
    <span class='article__item--author'>${el.userId}</span>:
    <span class='article__item--title'>${el.title}</span>
    <span class='article__item--body'>${el.body}</span>
    </a>
    `
      articleBlock.append(item)
    })
}

const filterArticle = () => {
  const value = document.getElementById('articleSearch').value.toLowerCase()
  const li = document.querySelectorAll('.article__item')

  li.forEach((el, index) => {
    if (value === '') {
      return el
    }
    // filter by author
    else if (
      el
        .querySelector('.article__item--author')
        .textContent.toLowerCase()
        .includes(value)
    ) {
      return (el.style.display = '')
    }
    // filter by title
    else if (
      el
        .querySelector('.article__item--title')
        .textContent.toLowerCase()
        .includes(value)
    ) {
      return (el.style.display = '')
    }
    // filter by body
    else if (
      el
        .querySelector('.article__item--body')
        .textContent.toLowerCase()
        .includes(value)
    ) {
      return (el.style.display = '')
    } else if (value.length === 0) {
      return el
    }
    return (el.style.display = 'none')
  })
}

setTimeout(() => {
  setArticle()
}, 1000)

articleInput.addEventListener('keyup', filterArticle)
