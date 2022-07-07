export const articles = []

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) =>
    json.forEach((element) => {
      articles.push(element)
    })
  )
