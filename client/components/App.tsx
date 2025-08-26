import DelStore, { AddItemForm } from './Store.tsx'
function App() {
  return (
    <>
      <header className="header">
        <h1> 🍇 Grocery Store 🍇 </h1>
      </header>
      <section className="main"> 
        <DelStore/> 
        <AddItemForm/>
      </section>
    </>
  )
}

export default App
