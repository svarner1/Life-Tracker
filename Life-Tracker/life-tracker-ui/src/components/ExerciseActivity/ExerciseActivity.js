import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import "./ExerciseActivity.css"

const useStyles = makeStyles({
  root: {
    width: 450,
    backgroundColor: "#009688",
  },
  cardsAndButton: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    marginBottom: 40,
    textAlign: "center",
  },
  createdDetails: {
    fontSize: 14,
  },
  entryInfo: {
    direction: "row",
    justifyContent: "space-around",
    alignItems:"center",
  },
});
export default function ExerciseCard({ activity, user }) {
  console.log("ACTIVITY: ", activity["Exercise Name"])
  const classes = useStyles();
  const userOwnsActivityEntry = user?.id && activity?.users_id === user?.id

  return (
    <div className="ExerciseActivity">
      <Box className={classes.cardsAndButton}>
        <Typography className={classes.createdDetails} color="textSecondary" gutterBottom>
            Created At {activity["Created At"]}
          </Typography>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} variant="h5" component="h2">
              {activity["Exercise Name"]}
            </Typography>
              <Grid container className={classes.entryInfo}>
                <Grid item className={classes.duration}>
                  <Typography variant="h6" component="p">
                    Duration
                  </Typography> <br/>
                  <Typography variant="body1" component="p">
                    {activity.Duration}
                  </Typography>
                </Grid>
                <Grid item className={classes.intensity}>
                  <Typography variant="h6" component="p">
                    Intensity
                  </Typography> <br/>
                  <Typography variant="body1" component="p">
                    {activity.Intensity}/10
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button size="small">Delete Entry</Button>
            </CardActions>
         </Card>
      </Box>
    </div>
  )
}