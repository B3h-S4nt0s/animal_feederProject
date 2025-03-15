const btnLogin = document.querySelector(`#cad_res`)

btnLogin.addEventListener(`click`, (event) => {
  event.preventDefault()
  const formData = new FormData(document.querySelector(`form`))
  const dados = {}
  formData.forEach((value, key) => {
    dados[key] = value
  })

  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Erro na autenticação')
    }
  })
  .then(data => {
    if (data.success) {
      window.location.href = data.redirectUrl
    }
  })
  .catch(error => {
    console.error('Erro:', error)
  })
})