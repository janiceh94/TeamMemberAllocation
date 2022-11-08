import './App.css';
import Header from "./component/Header/Header";
import Employee from "./Employees";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Employee/>
      <Footer/>
    </div>
  );
}

export default App;
