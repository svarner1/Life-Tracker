import { useState } from "react"
import { useNavigate } from "react-router-dom";
// import axios from "axios"
//import NotAllowed from "../NotAllowed/NotAllowed"
import apiClient from "../../services/apiClient"
import "./NewExerciseForm.css"

export default function NewExerciseForm({ user, setExerciseEntries }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)
  const [exerciseEntry, setExerciseEntry] = useState({
    duration: "",
    intensity: "",
    name: "",
  })

  const handleOnInputChange = (event) => {
    setExerciseEntry((n) => ({ ...n, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async () => {
    setIsProcessing(true)
    setError((e) => ({ ...e, exerciseEntry: null }))

    const { data, error } = await apiClient.createExerciseEntry({ exerciseEntry})
    const currentExerciseEntries = await apiClient.getExerciseEntries()
    if (data) {
      setExerciseEntries(currentExerciseEntries.data.listedExerciseData)
      navigate("/exercise")
    }
    if (error) {
      setError((e) => ({ ...e, exerciseEntry: error }))
    }

    setIsProcessing(false)    
  }
  
    return (
      <div className="createExercise">
        <div className="card">
          <h2>Create Exercise</h2>

          <br />

          <div className="form">
            <div className="input-field">
              <label htmlFor="email">Exercise Name</label>
              <input type="text" name="name" placeholder="Exercise Name" value={exerciseEntry.name} onChange={handleOnInputChange} />
            </div>

            <div className="input-field">
              <label htmlFor="duration"> Duration (in minutes)</label>
              <input
                type="text"
                name="duration"
                placeholder="Duration"
                value={exerciseEntry.duration}
                onChange={handleOnInputChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="instensity">Intensity (Scale: 1 - 10)</label>
              <input
                type="text"
                name="intensity"
                placeholder="Intensity"
                value={exerciseEntry.intensity}
                onChange={handleOnInputChange}
              />
            </div>

            <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
              {isProcessing ? "Loading..." : "Add Exercise"}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // return (
  //   <div className="NewPostForm">
  //     <div className="card">
  //       <h2>Create a new post</h2>

  //       {Boolean(error) && <span className="error">{error}</span>}

  //       {renderForm()}
  //     </div>
  //   </div>
  // )