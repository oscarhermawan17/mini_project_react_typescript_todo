// index.js
import React from "react"
// import ReactDOM from "react-dom"
import ReactDOM from "react-dom/client"

// ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root-test"))

const component = ReactDOM.createRoot(document.getElementById("root2"))
component.render(
  <React.StrictMode>
    <h1>Baru</h1>
  </React.StrictMode>
)
