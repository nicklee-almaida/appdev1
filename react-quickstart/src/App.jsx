import './App.css'

const user = {
  name: "Nicklee Almaida",
  age: 21
}
function App() {
  return(
    <>
      <h1 className='h1' style={{color: 'lightcoral'}}>My Info</h1>
      <p className='paragraph' style={{color: 'black', fontSize: 20, textAlign: 'start'}}>Hello my name is {user.name} <br /> I am {user.age} years old</p>
    </>
  )
}
export default App
