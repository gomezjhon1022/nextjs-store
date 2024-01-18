import { MainProducts } from "app/components/home/MainProducts"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Destiny Store",
  description: "Explore the latest in cutting-edge gadgets and gear",
  keywords:["ecommerce", "future", "Digital", "technology"]
}

export default function Home() {
  return (
    <main >
      <MainProducts />
    </main>
  )
}
