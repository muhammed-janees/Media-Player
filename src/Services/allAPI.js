import { BASE_URL } from './baseURL'
import { commonAPI} from './commonAPI'

// uploading video
export const uploadVideo = async(video)=>{
    // http request to post to http://localhost:4000/videos for adding videos in json server and return response to add component
    return await commonAPI("POST",`${BASE_URL}/videos`,video)
}

//get all videos from json server
export const getAllVideos = async()=>{
    // http request to get to http://localhost:4000/videos for getting videos in json server and return response to videoCard component
    return await commonAPI("GET",`${BASE_URL}/videos`,"")
}

//get a single videos from json server
export const getVideo = async(id)=>{
    // http request to get to http://localhost:4000/videos for getting videos in json server and return response to videoCard component
    return await commonAPI("GET",`${BASE_URL}/videos/${id}`,"")
}

//delete a single videos from json server
export const deleteVideo = async(id)=>{
    // http delete request to http://localhost:4000/videos for deleting videos in json server and return response to videoCard component
    return await commonAPI("DELETE",`${BASE_URL}/videos/${id}`,{})
}

//insert video in watching history
export const addToHistory = async (videoHistory)=>{
        // http post request to http://localhost:4000/history for adding video history in json server and return response to videoCard component
    return await commonAPI("POST",`${BASE_URL}/history`,videoHistory)
}

//get video watching history from json server
export const getHistory = async ()=>{
    // http get request to http://localhost:4000/history to get video history in json server and return response to watch history
return await commonAPI("GET",`${BASE_URL}/history`,"")
}

//delete video watching history from json server
export const deleteHistory = async (id)=>{
    // http delete request to http://localhost:4000/history to delete video history in json server and return response to watch history
return await commonAPI("DELETE",`${BASE_URL}/history/${id}`,{})
}

// adding category
export const addCategory = async(body)=>{
    // http request to post to http://localhost:4000/categories for adding videos in json server and return response to category component
    return await commonAPI("POST",`${BASE_URL}/categories`,body)
}

// get all category
export const getAllCategory = async()=>{
    // http request to post to http://localhost:4000/categories for adding videos in json server and return response to category component
    return await commonAPI("GET",`${BASE_URL}/categories`,"")
}

// remove category from json server
export const deleteCategory = async(id)=>{
    // http request to http://localhost:4000/categories/id for deleting videos in json server and return response to category component
    return await commonAPI("DELETE",`${BASE_URL}/categories/${id}`,{})
}

//update category from json server
export const updateCategory = async(id,updatedCategoryBody)=>{
    // http put request to http://localhost:4000/categories/id for updating existing category in json server and return response to category component
    return await commonAPI("PUT",`${BASE_URL}/categories/${id}`,updatedCategoryBody)
}