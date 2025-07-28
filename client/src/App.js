import { Add } from "./components/Add";
import { Delete } from "./components/Delete";
import { Find } from "./components/Find";
import { FindAll } from "./components/FindAll";
import { Update } from "./components/Update";
import { NavLink,Route,Routes }from "react-router-dom";
import './App.css';

function App(){
    return(
        <div className="App">
            <h1>Employee Management System</h1>
            <nav>
                <NavLink to = "/" end>Add</NavLink>
                <NavLink to = "/Find" end>Find</NavLink>
                <NavLink to = "/Delete" end>Delete</NavLink>
                <NavLink to = "/Update" end>Update</NavLink>
                <NavLink to = "/FindAll" end>FindAll</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Add/>} />
                <Route path="/Find" element={<Find/>} />
                <Route path="/Delete" element={<Delete/>} />
                <Route path="/Update" element={<Update/>} />
                <Route path="/FindAll" element={<FindAll/>} />
            </Routes>


        </div>
    )
}

export default App;