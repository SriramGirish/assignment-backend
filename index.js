const express = require('express')

const jwt =require('jsonwebtoken')




const app = express()

app.use(express.json())

let database = null

const users=[
  {username:'girish',password:'girish123'}
]

const initializeDbAndServer = async () => {
  

    app.listen(5000, () =>
      console.log('Server Running at http://localhost:5000/'),
    )
}

initializeDbAndServer()


app.post('/login', async (request, response) => {
  const {username, password} = request.body
  

  if (username === undefined) {
    response.status(400)
    response.send('Invalid user')
  } else {
    
    if (password === "girish123" && username==="girish") {
      const payload={username:username}
      const jwtToken=jwt.sign(payload,"MY_SECRET_TOKEN")
      response.send({jwtToken})
    } else {
      response.status(400)
      response.send('Invalid password')
    }
  }
})

