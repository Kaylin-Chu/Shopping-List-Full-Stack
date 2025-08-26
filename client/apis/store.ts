import request from "superagent"
import { Store, StoreData } from "../../models/shoppingList"

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getStore() {
  const response = await request.get(`${rootURL}/store`)
  return response.body as StoreData[]
}

export async function addStock(newStock: Store) {
  const result = await request.post(`${rootURL}/store`).send(newStock)
  return result.body as Store[]
}

export async function deleteStock(id: number) {
  await request.delete(`${rootURL}/store/${id}`)
  return
}