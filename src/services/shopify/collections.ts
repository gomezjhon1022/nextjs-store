import { env } from "app/config/env"
import { shopifyUrls } from "./urls"
import { withCoalescedInvoke } from "next/dist/lib/coalesced-function"

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all,{
      headers: new Headers(
        {
          'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
        }
      )
    })

    const { smart_collections} = await response.json()
    const transformedColections = smart_collections.map((collection:any)=> {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle
      }
    })
    return transformedColections
  } catch(error) {
    console.log(error)
  }
}