import Author from "./Author"
import Image from "./Image"
import Title from "./Title"

const Book = () => {
  return (
    <article className=" flex-col justify-center pt-10 bg-white  rounded-md m-4">
        <Image />
        <Title />
        <Author />
    </article>
  )
}
export default Book