import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";
// to upload a new video
const uploadAllVideo = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}videos`,reqBody);
}
export default uploadAllVideo

// to get all video.
export const getAllVideo = async ()=>{
    return await commonAPI('GET',`${serverURL}videos`,"");
}
// to delete a specific video
export const deleteVideo = async(id) =>{
    return await commonAPI('DELETE',`${serverURL}videos/${id}`,{});
    
    }

    // add details to watch history.
    export const addToHistory=async(videoDetails)=>{
            return await commonAPI('POST', `${serverURL}history`,videoDetails );
            }


            // getall details of watch History
            export const getHistory = async()=>{
                return await commonAPI("GET", `${serverURL}history`,'');
            }

            // to delete specific History.
            export const deleteHistory = async(id)=> {
                return await commonAPI('DELETE',`${serverURL}history/${id}` ,{});
                };

                // to upload category.
               
   export const addCategory = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}category`,reqBody);
}

// get all category.
export const getCategory = async ()=>{
    return await commonAPI('GET',`${serverURL}Category`,'');
}

    // to delete category.
    export const deleteCategory=async(id)=>{
        return await commonAPI('DELETE',`${serverURL}Category/${id}`,{})
   }

   // to get data when video id pass
   export const getVideoDetails=async(id)=>{
    return await commonAPI('GET',`${serverURL}videos/${id}`,"")
}

// to update category with video details.
export const updateCategory=async(id,body)=>{
    return await commonAPI('PUT',`${serverURL}category/${id}`,body)
} 

