const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const app = express()
var root = {
  hello: ()=> {
    return "Hello World"
  }
}
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  
}),)

app.listen(4000, ()=> {
  console.log('now listening on 4000')
})