import React, {useState} from "react";
import axios from 'axios';
import './Add.css';

export function Add(){
    
    //const [userid, setUserId] = usesState("");
    const [empNo, setEmpNo]= useState("");
    const [empName, setEmpName]=useState("");
    const [empSal, setEmpSal]= useState("");

    async function addHandler(e)
    {
        e.preventDefault();
        try
        {
            
            const response = await axios.post('https://emp-record-project.onrender.com/api/employees', {empNo, empName, empSal});
            //alert(JSON.stringify(response.data,null,2));
            alert (response.data.message);
        }
        catch(err)
        {
            alert(err);
        }
    }
    return (
        <div className="Add">
            <h1>Login Portal</h1>
            <form onSubmit={addHandler}>
                <label for ="Employee No"><b><u>Enter the Employee Number:</u></b></label>
                <input type="text" 
                placeholder="Employee No"
                value={empNo}
                onChange={(e) => setEmpNo(e.target.value)} />
                <br></br><br></br><br></br>
                <label for ="Employee Name"><b><u>Enter the Employee Name:</u></b></label>

                <input type="text" 
                placeholder="Employee Name"
                value={empName}
                onChange={(e) => setEmpName(e.target.value)} />
                <br></br><br></br><br></br>
                
                <label for ="Employee Salary"><b><u>Enter the Employee Salary:</u></b></label>
                <input type="text" 
                placeholder="Employee Salary"
                value={empSal}
                onChange={(e) => setEmpSal(e.target.value)} />
                <br></br><br></br><br></br>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    )
}

