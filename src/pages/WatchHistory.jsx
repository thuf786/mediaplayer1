import { Link } from "react-router-dom";
import { deleteHistory, getHistory } from "../services/allAPI";
import { useEffect, useState } from "react";


function WatchHistory(){


  const [history,setHistory]=useState([])
  const getAllHistory= async ()=>{
    const response= await getHistory();
    console.log("===history===");
    console.log(response);
    setHistory(response.data)

    
  }
  useEffect(()=>{
    getAllHistory();
    },[])

     const handleDelete = async(id)=>{
      const response = await deleteHistory(id);
        document.location.reload()
        } 


    return(
      <>
      <div className=" container d-flex justify-content-between mt-5 mb-5">
        <h3 style={{fontFamily:"-moz-initial"}}>Watch History</h3>
        <Link style={{color:"white",fontFamily:"-moz-initial",textDecoration:"none"}} to={'/Home'}>  <i class="fa-solid fa-arrow-left" className='btn btn-warning'> Home<br /></i></Link>
      </div>
      <table className="table mt-5 mb-5 container">
        <thead>
            <tr style={{fontFamily:"-moz-initial"}}>
                <th>#</th>
                <th>Caption</th>
                <th>URL</th>
                <th>Time</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {
            history.length>0?
            history.map((item)=>(
              <tr style={{fontFamily:"-moz-initial"}}>
                <td>{item.id}</td>
                <td>{item.caption}</td>
                <td>{item.embededLink}</td>
                  <td>{item.timestamp}</td>
               
                  <td><button type='button' class='btn btn-outline-danger'onClick={()=>handleDelete(item.id)} >Delete</button></td>
                  </tr>
                  )):<p>No Data</p>
                  
            }

  
        </tbody>
      </table>
      </>
    )
}
export default WatchHistory;