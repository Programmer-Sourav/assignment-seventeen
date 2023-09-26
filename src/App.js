import logo from './logo.svg';
import './App.css';
import ExcerciseForm from './pages/ExcerciseForm';
import Example from './pages/Example';
import GoalTracking from './pages/GoalTracking';
import FoodTracking from './pages/FoodTracking';

function App() {
  return (
    <div className="App">
       <ExcerciseForm/>
       <GoalTracking/>
       {/* <FoodTracking/> */}
       
    </div>
  );
}

export default App;
