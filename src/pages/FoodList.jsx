import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFoods } from "../actionCreators/actions"

export default function FoodList(){

const foodstate = useSelector((state)=>state.foodList)
const dispatch = useDispatch()

useEffect(()=>{dispatch(fetchFoods())},[])
    return(
        <div> {
            foodstate.map((food, index)=>(
                <ul key={index}> 
                   <h3>{food.foodName}</h3>
                   <p><span> Calories: {food.calories}</span> Proteins: {food.protein}</p>
                   <p><span>Carbohydrates: {food.carbohydrates}</span>Fat: {food.fat}</p>

                </ul>
            ))
            
            }</div>
    )
}