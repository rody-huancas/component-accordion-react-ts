import { Accordion } from "./components/Accordion"

const App = () => {
  return (
    <div className="bg-[#f2f2f2] h-screen flex items-center justify-center">
      <div className="list flex flex-col gap-5">
        <Accordion />
        <Accordion />
      </div>
    </div>
  )
}

export default App