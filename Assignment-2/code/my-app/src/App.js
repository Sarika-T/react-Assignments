import logo from './logo.svg';
import './App.css';


function App(props) {
    const { employee, title } = props;

    return (
        
            <div className = "container App">
            /* Start your React code here */
            <div className = "image">
            <img className = "profile"
            src = { employee.profileImg }
            width = "100"
            height = "100"
            alt = "profileImage" />
            </div> 
            <div className = "title">
            <h1> { employee.name } </h1> 
            </div>   
            <div className = "info">
            <label> Location </label>
            <strong> { employee.location } </strong>
            </div> 
            <div className = "info">
            <label> Blood group </label>
            <strong> { employee.bloodGroup } </strong>
            </div>
            <div className = "info">
            <label> Age </label>
            <strong> { employee.age } </strong>
            </div>

            </div>

        );

    }

    export default App;