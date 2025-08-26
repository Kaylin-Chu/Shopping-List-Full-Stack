const store = [
    {id: 1, itemName: 'Apples', price: 0.50, stockQuantity: 100},
    {id: 2, itemName: 'Bread', price: 1.50, stockQuantity: 50},
    {id: 3, itemName: 'Milk', price: 1.00, stockQuantity: 75}
  ]

function Store() {
  return (
    <>
        <h1> Store Stock</h1>
        <ul>
          {store.map((stock) => (<li key={stock.itemName} > {stock.itemName}</li>))}
        </ul>
    </>
  )
}

export default Store