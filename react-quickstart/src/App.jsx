import './App.css'


function Admin() {
  return (
    <h1>AdminPanel</h1>
  )
}
function LogInForm() {
  return (
    <h1>Log in form</h1>
  )
}

function App() {
  
  let content;
  const isLoggedIn = true;
  if (isLoggedIn) {
    content = <Admin />
  } else {
    content = <LogInForm />
  }
  return (
    <p>{ content }</p>
  )
}
export default App
