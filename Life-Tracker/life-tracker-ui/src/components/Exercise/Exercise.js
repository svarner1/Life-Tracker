import { useState, useEffect } from "react"
import {Route, Link, BrowserRouter, useNavigate } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ExerciseCard from "../ExerciseActivity/ExerciseActivity"
import NewActivityForm from "../NewExerciseForm/NewExerciseForm"
import "./Exercise.css"

const useStyles = makeStyles((theme) => ({
  buttonBox: {
    display: "flex",
    justifyContent: "center",
  },
}));


export default function Exercise({ user, exerciseEntries, error, isFetching}) {
  const classes = useStyles();

  return (
    <div className="exercisePage">
      {user?.email ? (
                <>
                  <h1 className="exerciseFeedTitle"> Exercise Feed </h1>
                  <Box className={classes.buttonBox} mb={5}>
                    <Link to="/createExercise"><Button variant="contained"> Create Exercise Entry </Button></Link>
                  </Box>
                  {/* <NewActivityForm user={user} addPost={addExerciseActivity} />  */}
                  <div className="feed">
                    {error ? <h2 className="error">{error}</h2> : null}
                    {isFetching ? <h2>Loading...</h2> : null}
                    {exerciseEntries?.map((activityItem) => (
                      <ExerciseCard activity={activityItem} key={activityItem.id} user={user} />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h1 className="unauthenticatedTitle"> Log in to see this tracked activity.</h1>
                </>
       )}
    </div>
  )
}