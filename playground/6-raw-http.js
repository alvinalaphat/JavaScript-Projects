const https = require('https')
const url = 'https://api.darksky.net/forecast/296d89b54641b747cbc795319bcb3ba3/40,-75'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('Error: ', error)
})

request.end()