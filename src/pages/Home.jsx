import { Link } from "react-router-dom";
import Add from "../components/Add";
import View from "../components/View";
import Category from "../components/Category";
import { useState } from "react";

function Home() {
    const [uploadVideoStatus, setUploadVideoStatus]=useState({})
    return (
        <div>
            <div className="container  d-flex justify-content-between-align-items-center mt-5 mb-5">
                <div className="add_videos">
                <Add setUploadVideoStatus={setUploadVideoStatus} />
                </div>
                <div style={{marginLeft:"800px"}}>
             <button className='btn btn-warning'>  <Link to={'/watchhistory'} style={{ fontFamily: "-moz-initial", fontSize: "30px", textDecoration: "none", color: "white" }}>
                     Watch History</Link></button> 
                </div>
                
            </div>
            <div className="container   d-flex justify-content-between align-items-center  mt-5 mb-5">
            <div className="mt-5 ">
                <h4 style={{fontFamily:"-moz-initial"}}>All Videos</h4>
               <View uploadVideoStatus={uploadVideoStatus}/>
                </div>
                <div className="mt-5 ms-5">
                    <Category/>
                </div>
            

            </div>
          
        </div>
    )
}
export default Home;