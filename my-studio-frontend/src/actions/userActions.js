import{
    GET_USER,
    CREATE_STORE,
    GET_STORE,
    USER_LOADING,
} from '../types/userTypes'

import axios from "axios";


export const getUser = (id)=> async (dispatch)=>{


    dispatch({
        type: USER_LOADING
    })

    
    const config ={
        Headers:{
            'Content-Type' : 'application/json'
        }
    }
    
  

    await axios.get(`${process.env.REACT_APP_API_URL}user/${id}/`,config).then((res)=>{
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    })
}

export const getStore = (userId)=> async (dispatch)=>{


    dispatch({
        type: USER_LOADING
    })

    
    const config ={
        Headers:{
            'Content-Type' : 'application/json'
        }
    }
    
  

    await axios.get(`${process.env.REACT_APP_API_URL}store/${userId}/`,config).then((res)=>{
        dispatch({
            type: GET_STORE,
            payload: res.data
        })
    })
}

export const createStore = (dataForm)=> async (dispatch)=>{


    dispatch({
        type: USER_LOADING
    })

    
    const config ={
        Headers:{
            'Content-Type' : 'application/json'
        }
    }
    
  

    await axios.post(`${process.env.REACT_APP_API_URL}store/`,dataForm,config).then((res)=>{
        dispatch({
            type: CREATE_STORE,
            payload: res.data
        })
    })
}
