import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGoals, fetchTrackedExcercises } from "../actionCreators/actions"
import GoalCard from "../components/GoalCard"
import ExcerciseCard from "../components/ExcerciseCard"



export default function TrackedExcercise(){

    const trackedState =  useSelector((state)=>state.trackedExcercise)
    
    const dispatch = useDispatch()
 
    useEffect(()=>{
     dispatch(fetchTrackedExcercises())
    }, [])

    // const totalTargetCalories = trackedState.reduce((acc, goalItem)=>(acc+ goalItem.targetCalories), 0)
    // localStorage.setItem("targetCalories", totalTargetCalories)  
     return(
         <div>{
             trackedState.map((tracked, index)=>(
                 <ul key={index}> 
                    <ExcerciseCard excerciseDetails ={tracked} dispatch={dispatch}/>
                 </ul>
             ))  
             } </div>
     )
 }