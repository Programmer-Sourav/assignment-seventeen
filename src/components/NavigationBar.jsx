import "../stylesheets/navigation.css"


const NavigationBar = () => {
    return (
        <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Dashboard</a>
          </li>
          <li className="nav-item">
            <a href="/excercise">Add Excercise</a>
          </li>
          <li className="nav-item">
            <a href="/food">Add Food</a>
          </li>
          <li className="nav-item">
            <a href="/goal">Add Goal</a>
          </li>
          <li className="nav-item">
            <a href="/excerciselist">Tracked Excercises</a>
          </li>
          <li className="nav-item">
            <a href="/foodslist">Tracked Foods</a>
          </li>
          <li className="nav-item">
            <a href="/goalslist">Tracked Goals</a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavigationBar;