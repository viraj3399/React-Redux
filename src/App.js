import './App.css';
import Student from "./Student";
// import User from './User';


function App() {
  return (
    <div className="App">
      {/* <User data={{name:"john", age:30}} /> */}
      <Student data={{name:"Peter", email: "peter@gmail.com"}}/>
    </div>
  );
}

export default App;
