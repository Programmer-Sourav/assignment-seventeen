
export const fetchGoalList = (goalsList) => ({
  type: "ADD_TO_GOALS_LIST",
  payload: goalsList,
});

export const fetchFoodList = (foodList) =>({
  type: "ADD_TO_FOOD_LIST", 
  payload: foodList
})

export const fetchExcerciseList = (excerciseList) =>(
  {
    type: "ADD_TO_EXCERCISE_LIST", 
    payload: excerciseList
  }
)

export const addToExcercise = (excerciseDetails) =>async() =>{

  try{
   const response = await fetch("https://assignment-seventeen-backend.developersourav.repl.co/addExcercise",{
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(excerciseDetails),
   })

   if (response.ok) {
    const data = await response.json();
    //console.log("Added Excercise ", data)
    const addedExcercise = data.added
  } else {
    console.error("Some Error occured!");
  }
   
  }
  catch(error){
   console.error("Error ", error)
  }

}

export const addToFoods = (foodDetails) =>async() =>{
  try{
   const response = await fetch("https://assignment-seventeen-backend.developersourav.repl.co/addFood", {
     method: "POST",
     headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(foodDetails),
   })
   if (response.ok) {
    const data = await response.json();
    const addedFood = data.added
  } else {
    console.error("Some Error occured!");
  }
   
  }
  catch(error){
   console.error("Error ", error)
  }

}

export const addToGoals = (goalDetails) =>async (dispatch) =>{
  try{
  const response = await fetch("https://assignment-seventeen-backend.developersourav.repl.co/addGoal", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
    }, 
    body: JSON.stringify(goalDetails),
  })
  
  if (response.ok) {
    const data = await response.json();
    const addedGoals = data.added
  } else {
    console.error("Some Error occured!");
  }
   
  }
  catch(error){
   console.error("Error ", error)
  }

}
export const fetchExcercise = () =>async (dispatch)=>{
  try{
    const response = await fetch(
        "https://assignment-seventeen-backend.developersourav.repl.co/fetchExcercise"
      );
      const receivedData = await response.json();
      const excerciseList = receivedData.excercise
      dispatch(fetchExcerciseList(excerciseList))
  }
  catch(error){
    console.error("Error", error)
  }
}

export const fetchGoals = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://assignment-seventeen-backend.developersourav.repl.co/fetchGoals"
    );
    const receivedData = await response.json();
    const goalsList = receivedData.goals;
    dispatch(fetchGoalList(goalsList));
  } catch (error) {
    console.error("Error", error);
  }
};

export const fetchFoods = () => async (dispatch) =>{
  try{
   const response = await fetch("https://assignment-seventeen-backend.developersourav.repl.co/fetchFoods")
   const receivedData = await response.json()
   const foodList = receivedData.foods;
   dispatch(fetchFoodList(foodList))
  }
  catch(error){
    console.error("Error ", error)
  }
}