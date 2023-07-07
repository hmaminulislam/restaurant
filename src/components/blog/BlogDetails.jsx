import { useLoaderData } from "react-router-dom"


function BlogDetails() {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>BlogDetails</div>
  )
}

export default BlogDetails
