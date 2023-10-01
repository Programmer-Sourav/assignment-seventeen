import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchExcercise } from "../actionCreators/actions"
import { FETCH_EXCERCISE_URL } from "../URLs"
import ExcerciseCard from "../components/ExcerciseCard"

export default function ExcerciseList(){

   const excerciseState =  useSelector((state)=>state.excerciseList)
   const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(fetchExcercise())
   }, [])
   const excerciseData = useSelector((state)=>state.excerciseList)
   const totalCaloriesBurned = excerciseData.reduce((acc, excerciseItem)=>(acc+excerciseItem.caloriesBurned), 0)
   localStorage.setItem("caloriesBurned", totalCaloriesBurned)
   console.log(4444, totalCaloriesBurned)
    return(
        <div>{
            excerciseState.map((excercise, index)=>(
                <ul key={index}> 
                     <ExcerciseCard excerciseDetails ={excercise} dispatch={dispatch}/>
                </ul>
            ))  
            } </div>
    )
}