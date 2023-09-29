import { useSelector } from "react-redux"

export default function ExcerciseList(){

   const excerciseState =  useSelector((state)=>state.excerciseList)
    return(
        <div>{
            excerciseState.map((excercise)=>(
                <ul> 
                    <h2>{excercise.excerciseName}</h2>
                    <p> {excercise.duration}</p>
                    <p>{excercise.caloriesBurned}</p>
                </ul>
            ))  
            } </div>
    )
}