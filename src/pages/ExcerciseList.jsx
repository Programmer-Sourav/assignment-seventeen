import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchExcercise } from "../actionCreators/actions"

export default function ExcerciseList(){

   const excerciseState =  useSelector((state)=>state.excerciseList)
   const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(fetchExcercise())
   }, [])
    return(
        <div>{
            excerciseState.map((excercise, index)=>(
                <ul key={index}> 
                    <h2>{excercise.excerciseName}</h2>
                    <p> {excercise.duration}</p>
                    <p>{excercise.caloriesBurned}</p>
                </ul>
            ))  
            } </div>
    )
}