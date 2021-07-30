import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import apiClient from "../../services/apiClient"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Signup from "../Signup/Signup"
import Login from "../Login/Login"
import Exercise from "../Exercise/Exercise"
import Nutrition from "../Nutrition/Nutrition"
import Sleep from "../Sleep/Sleep"
import NotFound from "../NotFound/NotFound"
import NewExerciseForm from "../NewExerciseForm/NewExerciseForm"
import "./App.css"

export default function App() {
  
  const [user, setUser] = useState({})
  const [exerciseEntries, setExerciseEntries] = useState([])
  const [sleepEntries, setSleepEntries] = useState([])
  const [nutritionEntries, setNutritionEntries] = useState([])
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const fetchExerciseData = async () => {
      setIsFetching(true)

      const { data, error } = await apiClient.getExerciseEntries()
      if (data) {
        setExerciseEntries(data.listedExerciseData)
      }
      if (error) {
        setError(error)
      }

      setIsFetching(false)
    }

    fetchExerciseData()
  }, [])
  
  console.log("Exercise Entries", exerciseEntries)
  

  useEffect(() => {
    //The user is being fetched using the api token and the apiClient file
    const fetchUser = async () => {
      //fetchUserFromToken() returns the user (by using auth/me)
      const { data } = await apiClient.fetchUserFromToken()
      if (data) {
        setUser(data.user)
      }
    }

  const token = localStorage.getItem("life_tracker_token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
    }
  }, [])

  const handleLogout = async () => {
    await apiClient.logoutUser()
    setUser({})
    setError(null)
  }


  return (
    <div className="App">
      <BrowserRouter>
        {/* send handleLogout as a prop to navbar*/}
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout}/>
        <Routes>
          <Route
            path="/"
            element={<Home user={user} error={error} isFetching={isFetching}/>}
          />
          <Route path="/exercise" element={<Exercise user={user} setUser={setUser} exerciseEntries={exerciseEntries} error={error} isFetching={isFetching}/>} />
          <Route path="/nutrition" element={<Nutrition user={user} setUser={setUser} nutritionEntries={nutritionEntries}/>} />
          <Route path="/sleep" element={<Sleep user={user} setUser={setUser} sleepEntries={sleepEntries}/>}/>
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/register" element={<Signup user={user} setUser={setUser}/>} />
          <Route path="/createExercise" element={<NewExerciseForm user={user} setUser={setUser} setExerciseEntries={setExerciseEntries}/>} />
          <Route path="*" element={<NotFound user={user} error={error}/>} />
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

