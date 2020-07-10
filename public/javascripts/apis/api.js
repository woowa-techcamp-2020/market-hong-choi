const METHOD = {
  POST(data) {
    return {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
      }),
    }
  },
}

const api = (() => {
  const request = (url, config) => {
    console.log('[REQUEST]')
    console.log(JSON.stringify({ url, ...config }, null, 2))
    return fetch(url, config)
  }
  const requestWithReturn = (url, config) =>
    request(url, config).then((response) => response.json())
  return {
    checkIdDuplication(id) {
      return request('/user/duplicatuon', METHOD.POST({ id }))
    },
<<<<<<< HEAD
    requestJoin(args) {
      return request('/user', METHOD.POST(args))
    },
    requestLogin({ id, password }) {
=======
    requestLogin(id, password) {
>>>>>>> [#38] refactor(login) - 로그인 페이지 리팩토링
      return request('user/auth', METHOD.POST({ id, password }))
    },
  }
})()

export default api
