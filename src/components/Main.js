import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index"
import Show from "../pages/Show"

export default function Main(props) {
  const [people, setPeople] = useState(null)

  const URL = "http://localhost:3001/people" //this is the backend url

  const getPeople = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setPeople(data)
  }

  const createPeople = async (person) => {
    await fetch(URL, {
      method: "POST", 
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(person)
    })
    getPeople()
  }

  useEffect(() => getPeople(), [])

  return (
  <main>
    <Routes>
      <Route exact path="/" element={<Index people={people} createPeople={createPeople} />} />
      <Route path="/people/:id" element={<Show people={people} />} />
    </Routes>
  </main>
  )
}
