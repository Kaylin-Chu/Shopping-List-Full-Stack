import { deleteStock, addStock, getStore } from "../apis/store.ts"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { StoreData } from "../../models/shoppingList"


function DelStore() {
  const {
    data: store, 
    isPending, 
    isError,
  } = useQuery <StoreData[]> ({
    queryKey: ['store'],
     queryFn: getStore
    })
  
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: deleteStock,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['store'] })
    },
  })

  const deleteItem = async (id: number) => {
    await deleteMutation.mutate(id)
  }
  
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
          {store.map((item) => (
            <li key={item.id}> 
            #{item.id} {item.itemName}, {item.stockQuantity} in stock, only ${item.price} each!!
            <br/>
            <button onClick={() => deleteItem(item.id)}> Purchase all {item.stockQuantity} </button>
            </li>))}
        </ul>
    </>
  )
}

export default DelStore

export function AddItemForm() {
  const queryClient = useQueryClient()
  const addMutation = useMutation({
    mutationFn: addStock,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['store'] })
    },
  })

  interface NewStock {
    itemName: string
    price: number
    stockQuantity: number
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const newStock: NewStock = {
      itemName: formData.get('itemName') as string,
      price: Number(formData.get('price')),
      stockQuantity: Number(formData.get('stockQuantity')),
    }
    await addMutation.mutate(newStock)
  }

  return (
    <>
    <br/>
    <hr/>
    <br/>
    <p>For Office Use Only</p>
    <form onSubmit={handleSubmit}>
      <input name="itemName" placeholder="Item"/>
      <input name="price" placeholder="$"/>
      <input name="stockQuantity" placeholder="Quantity"/>
      <button type="submit">Add Item</button>
    </form>
    </>
  )
}