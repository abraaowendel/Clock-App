import { useEffect, useState } from "react"
import * as C from "./styles"

import API from "./api/Api"
import { QuoteCard } from "./components/Quotes/QuoteCard"
import { Timer } from "./components/Timer/Timer"
import { DetailsCard } from "./components/Details/DetailsCard"

function App() {
  const [time, setTime] = useState([])
  const [ip, setIP] = useState([])
  const [quotes, setQuotes] = useState([])

  useEffect(() => handleQuotes, [])

  const handleQuotes = async () =>{
    const json = await API.getQuotes();
    return setQuotes(json)
  }
  
  const handleWorldTime = async () =>{
    const json = await API.getWorldTime()
    return setTime(json);
  }

  const handleIpLocal =  async () =>{
    const json = await API.getIpLocal()
    return setIP(json)
  } 
  
  return (
    <C.Container>
      <C.Home>
        <QuoteCard data={quotes} event={handleQuotes}/>
        <Timer/>
      </C.Home>
      <DetailsCard/>
    </C.Container>
  )
}

export default App
