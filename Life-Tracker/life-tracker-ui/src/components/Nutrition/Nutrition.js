//import Activity from "../Activity/Activity"
//import NewActivityForm from "../NewActivityForm/NewActivityForm"
import "./Nutrition.css"

export default function Nutrition({ user, setUser}) {
  return (
    <div className="nutritionPage">
      {user?.email ? (
              <h1> Nutrition Feed </h1>
              ) : (
                <>
                  <h1 className="unauthenticatedTitle"> Log in to see this tracked activity.</h1>
                </>
       )}
    </div>
  )
}