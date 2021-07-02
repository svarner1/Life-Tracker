import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Signup from "../Signup/Signup"
import Login from "../Login/Login"
import NotFound from "../NotFound/NotFound"
import "./App.css"

export default function App() {
  
  const [user, setUser] = useState({})
  const [exerciseActivity, setExerciseActivity] = useState({})
  const [sleepEntry, setSleepEntry] = useState({})
  const [nutritionItem, setNutritionEntry] = useState({})
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  
  
  useEffect(() => {
    const fetchExerciseEntries = async () => {
      setIsFetching(true)
      
      try {
        const res = await axios.get("http://localhost:3001/exercise")
        if (res?.data?.listedExerciseData) {
          setError(null)
          setExerciseActivity(res.data.listedExerciseData)
        } else {
          setError("Error fetching exercise entries.")
        }
      } catch (err) {
        console.log(err)
        const message = err?.response?.data?.error?.message
        setError(message ?? String(err))
      } finally {
        setIsFetching(false)
      }
    }
    
    fetchExerciseEntries()
  }, [])
  
  const addActivity= (newActivity) => {
    setExerciseActivity((oldActivities) => [newActivity, ...oldActivities])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route
            path="/"
            element={<Home user={user} error={error} activityItem={exerciseActivity} addActivity={addActivity} isFetching={isFetching}/>}
          />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/signup" element={<Signup user={user} setUser={setUser}/>} />
          <Route path="*" element={<NotFound user={user} error={error}/>} />
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

