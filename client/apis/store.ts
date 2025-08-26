import request from "superagent"
import { Store } from "../../models/shoppingList"

const rootUrl = new URL(`api/vi`, document.baseURI)

export async function getStore() {
  const response = await request.get(`${rootUrl}/store`)
  return response.body as Store[]
}