const [home, dashboard, profile] = document.querySelectorAll(`.divideCenter > ul > li`)

home.addEventListener(`click`, () => {
    // window.location.href = `/`
})


dashboard.addEventListener(`click`, () => {
  fetch('/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(response => {
    if (response.ok) {
      return response.json() // Converte a resposta para JSON
    } else {
      throw new Error('Erro na autenticação')
    }
  })
  .then(data => {
    if (data.auth) {
      window.location.href = data.redirectUrl
    }
  })
  .catch(error => {
    console.error('Erro:', error)
  })
})

profile.addEventListener("click", () => {
    // window.location.href = `profile`
})