new Promise((resolve, reject) => {
  console.log('Inside Promise')
  resolve('값')
}).then((res) => {
  console.log('Inside then')
  console.log('res', res)
})
