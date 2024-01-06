interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?:string
}

export default function Category(props:CategoryProps) {
  const { categories }=props.params
  // throw new Error('Error: Boom!')
  return(
    <h1>Dinamic Categories: {categories}</h1>
  )
}