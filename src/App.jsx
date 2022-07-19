import { useEffect, useState } from "react"
import * as C from "./styles"

import QuoteCard from "./components/Quotes/QuoteCard"
import Timer from "./components/Timer/Timer"
import Details from "./components/Details/DetailsCard"

import ArrowUp from "./assets/svgs/icon-arrow-up.svg"
import ArrowDown from "./assets/svgs/icon-arrow-down.svg"


import API from "./api/Api"
import { FormatHours } from "./helpers/FormatHours";

function App() {
  const [timer, setTimer] = useState('')
  const [quote, setQuote] = useState([])
  const [timeZone, setTimeZone] = useState([])
  const [locale, setLocale] = useState([])
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    handleTimer()
    handleRandomQuotes()
    handleTimeZone()
    handleLocale();
  }, [])

  const handleTimer = async () =>{

    const current = new Date();

    const hour =  FormatHours(current.getHours());
    const minutes = FormatHours(current.getMinutes());

    const timeNow = `${hour}:${minutes}`
    handleUptadeTimer()
    setTimer({fullHour: `${timeNow}`, h: `${hour}`, min: `${minutes}`})
  }

  const handleUptadeTimer = () =>{
    let interval = (60 - (new Date().getSeconds()) * 1000)
    setTimeout(() => handleTimer(), interval)
  }

  const handleRandomQuotes = async () =>{
      const json = await API.getQuotes();
      return setQuote(json)
  }
  const handleTimeZone = async () =>{
    const json = await API.getTimeZone();
    return setTimeZone(json)
  }
  const handleLocale = async () =>{
    const json = await API.getLocation();
    return setLocale(json)
  }

  return (
   <C.Container >
      <C.Home bg={timer.h}>
        <QuoteCard data={quote} event={handleRandomQuotes}/>
        <Timer data={timer} info={locale}/>
        <C.Toggle onClick={() => !showElement? setShowElement(true):setShowElement(false)}>
          <C.ToggleTitle>{showElement? "LESS": "MORE"}</C.ToggleTitle>
          <C.IconUpOrDown src={showElement? ArrowUp:ArrowDown}/>
        </C.Toggle> 
      </C.Home>
      {showElement &&
        <Details data={timeZone} bg={timer}/>
      }
   </C.Container>
  )
}

export default App
