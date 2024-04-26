import Book from "./components/Book";


const Books =[
  {
    title: "The Anxious Generation",
    author: "Jonathan Haidt",
    img: "https://images-na.ssl-images-amazon.com/images/I/81XP4hEXDXL._AC_UL600_SR600,400_.jpg"
  },
  {
    title: "The Lost Book of Herbal Remedies",
    author: "Claude Davis",
    img: "https://images-na.ssl-images-amazon.com/images/I/71++zre30EL._AC_UL600_SR600,400_.jpg"
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    img: "https://images-na.ssl-images-amazon.com/images/I/611X8GI7hpL._AC_UL600_SR600,400_.jpg"
  },
  {
    title: "The Algebra of Wealth",
    author: "Scott Galloway",
    img: "https://images-na.ssl-images-amazon.com/images/I/71Ddra8VABL._AC_UL600_SR600,400_.jpg"
  },
  {
    title: "A Court of Thorns and Roses ",
    author: "Sarah J. Maas",
    img: "https://images-na.ssl-images-amazon.com/images/I/81RrEEMiOCL._AC_UL600_SR600,400_.jpg"
  },
  {
    title: "The Covenant of Water ",
    author: "Abraham Verghese",
    img: "https://images-na.ssl-images-amazon.com/images/I/91b7tm523VL._AC_UL600_SR600,400_.jpg"
  }
]

export default function App() {
  return (
    <div className=" flex bg-slate-400">
      <Book />
      <Book />
      <Book />
      <Book />

    </div>
  )
}