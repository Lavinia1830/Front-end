export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_TO_FAVORITE = 'REMOVE_TO_FAVORITE';
export const GET_JOBS = 'GET_JOBS'


const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToFavoriteAction = (company) => {
    return {type: ADD_TO_FAVORITE, payload: company}

}

export const removeFormFavoriteAction = (company) => {
    return {type: REMOVE_TO_FAVORITE, payload: company}
}

export const getJobsAction = (query) => {
    return async (dispatch) => {
        try {
            const response = await fetch (baseEndpoint + query + '&limit=20')
            if(response.ok){
                const {data} = await response.json()
                dispatch({
                    type: GET_JOBS, payload: data
                })
            }else {
                alert('Error fetching results')
            }
        }catch (err) {
            console.log(err)
        }
    }
}