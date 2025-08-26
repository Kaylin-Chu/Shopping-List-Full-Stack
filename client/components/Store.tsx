// const store = [
//     {id: 1, itemName: 'Apples', price: 0.50, stockQuantity: 100},
//     {id: 2, itemName: 'Bread', price: 1.50, stockQuantity: 50},
//     {id: 3, itemName: 'Milk', price: 1.00, stockQuantity: 75}
// ]

import { getStore } from "../apis/store"
import { useQuery } from "@tanstack/react-query"

// async function useStore() {
//   const query = useQuery({queryKey: ['item'], queryFn: getStore})
// }

function Store() {
  const {
    data: store, 
    isPending, 
    isError,
  } = useQuery({
    queryKey: ['store'],
     queryFn: getStore
    })

  if (isPending) {
    return <p>loading...</p>
  }
  
  if (isError) {
    return <p>WHOOPS!</p>
  }

  return (
    <>
        <h1> Store Stock: </h1>
        <ul>
          {store.map((stock) => (<li key={stock.itemName} > {stock.itemName}</li>))}
        </ul>
    </>
  )
}

export default Store