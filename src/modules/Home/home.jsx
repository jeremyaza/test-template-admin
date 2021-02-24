import React from "react";
import "./homeStyle.scss"
import SideBar from "../Sidebar/SideBar"
function Home() {
    return (
        <div className="d-flex flex-row-reverse">
            <div className="col-8 col-sm-10 p-4">
                <h1>Home</h1>
                <table class="table ">
                    <thead class="headt">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
             </div>
             <SideBar/> 
         </div>
    );
  }
  
  export default Home;