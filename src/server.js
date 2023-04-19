import http from 'node:http'

const users = []

const server = http.createServer((req, res) =>{

    const {method, url} = req
    console.log(method, url)

    if(method === 'GET' && url==='/users'){
        return res
        .setHeader('Content-Type', 'application/json')
        .end(JSON.stringify(users))

    }

    if(method === 'POST' && url==='/users'){
        users.push({
            id:1,
            name: 'Michel Junior',
            age: 'jrcassunde95@gmail.com'
        })

       return res.writeHead(201).end()
    }

    return res.writeHead(404).end('not found')
})

server.listen(3333)

