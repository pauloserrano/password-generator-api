import app from "./app"

const port = process.env.PORT || 5000
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up and running on port ${port}`)
})
