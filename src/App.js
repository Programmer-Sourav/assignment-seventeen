import logo from './logo.svg';
import './App.css';
import ExcerciseForm from './pages/ExcerciseForm';
import Example from './pages/Example';
import GoalTracking from './pages/GoalTracking';
import FoodTracking from './pages/FoodTracking';
import { Route, Routes } from 'react-router';
import ExcerciseList from './pages/ExcerciseList';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <ExcerciseForm/>
       <GoalTracking/>
       {/* <FoodTracking/> */}
       <Link to="/excerciselist">Tracked Excercise</Link>
       <Routes> 
        <Route path='/excerciselist' element={<ExcerciseList/>}></Route>
      
       </Routes>
       
    </div>
  );
}

export default App;
