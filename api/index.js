const app = require("./app")
const PORT = 3001

app.listen(PORT, "0.0.0.0", () => {
  console.log(`server running in port: ${PORT}`)
})
