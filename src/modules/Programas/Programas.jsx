import React from 'react'
import SideBar from "../Sidebar/SideBar";

const Programas = () => {
    return (
        <div className="d-flex flex-row-reverse">
        <SideBar/>  
        <div className="col-8 col-sm-10 p-4">
            <h1>Programas</h1>            
        </div>
    </div>
    )
}

export default Programas