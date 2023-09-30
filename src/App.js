import logo from './logo.svg';
import './App.css';
import ExcerciseForm from './pages/ExcerciseForm';
import Example from './pages/Example';
import GoalTracking from './pages/GoalTracking';
import FoodTracking from './pages/FoodTracking';
import { Route, Routes } from 'react-router';
import ExcerciseList from './pages/ExcerciseList';
import { Link } from 'react-router-dom';
import FoodList from './pages/FoodList';
import GoalList from './pages/GoalList';

function App() {
  return (
    <div className="App">
       {/* <ExcerciseForm/>
       <GoalTracking/> */}
       {/* <FoodTracking/> */}

       <Link to="/excercise">Add Excercise</Link>
       <Link to="/food"> Add Food</Link>
       <Link to="/goal"> Add Goal</Link>


       <Link to="/excerciselist">Tracked Excercise</Link>
       <Link to="/foodslist"> Tracked Foods</Link>
       <Link to="/goalslist"> Tracked Goals</Link>
       <Routes> 
       <Route path='/excercise' element={<ExcerciseForm/>}></Route>
        <Route path='/food' element={<FoodTracking/>}></Route>
        <Route path='/goal' element={<GoalTracking/>}></Route>

        <Route path='/excerciselist' element={<ExcerciseList/>}></Route>
        <Route path='/foodslist' element={<FoodList/>}></Route>
        <Route path='/goalslist' element={<GoalList/>}></Route>
       </Routes>
       
    </div>
  );
}

export default App;
