import axios from "axios"

const searchImages=async(terms)=>{
   const response= await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization:"Client-ID _aShV0tSIgp_XJLmyPosZFIrCteK4PfFaYUaKZe7RYw"
        },
        params:{
            query:terms
        }
    })
    // debugger
    return response.data.results
}
export default searchImages