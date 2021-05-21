const ApiSend = (data) => {
  return fetch('send.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  }).then(async (response) => {
    return await response.json()
  }).catch((error) => {
    throw Error(error)
  })
}

export default ApiSend