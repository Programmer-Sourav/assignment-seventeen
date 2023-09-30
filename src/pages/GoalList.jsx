import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGoals } from "../actionCreators/actions"


export default function GoalList(){

    const goalsState =  useSelector((state)=>state.goalsList)
    const dispatch = useDispatch()
 
    useEffect(()=>{
     dispatch(fetchGoals())
    }, [])
     return(
         <div>{
             goalsState.map((goal, index)=>(
                 <ul key={index}> 
                      <h3>{goal.goalName}</h3>
                    <p><span>Description: {goal.description}</span> Target Date: {goal.targetDate} </p>
                    <p><span>Target Calories: {goal.targetCalories}</span> Status: {goal.status}</p>
                 </ul>
             ))  
             } </div>
     )
 }