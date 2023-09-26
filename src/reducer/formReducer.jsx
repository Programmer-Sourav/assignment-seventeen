export const initialState = {
    excerciseDetails: {excerciseName: "", 
                      duration: "", 
                      caloriesBurned: ""}, 
    foodDetails: {foodName: "", 
                 calories: 0, 
                 protein: 0, 
                 carbohydrates: 0, 
                fat: 0}, 
    goalDetails: {goalName: "", 
                  description: "",
                  targetDate: "",
                  targetCalories: 0,
                  status: ""
                }                               

}


const formReducer = (state, action) =>{
   switch(action.type){
    case "EXCERCISE_FORM_VALUES": 
    return {...state, excerciseDetails: {...state.excerciseDetails, [action.payload]: action.payload}}
    case "FOOD_TRACKER_FORM_VALUE": 
    return {...state, foodDetails: {...state.foodDetails, [action.payload]: action.payload}}
    case "GOAL_TRACKER_FORM_VALUE": 
    return {...state, goalDetails: {...state.goalDetails, [action.payload]: action.payload}}
    default:
    return state
   }
}


export default formReducer
