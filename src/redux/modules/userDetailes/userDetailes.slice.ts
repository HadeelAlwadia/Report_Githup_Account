import {createSlice} from '@reduxjs/toolkit'
const userDetailesObject={
    error:'',
    loading:false,
    userDetailes:{},
    reposGitHup:[]

}
const userDetaliesSlice=createSlice({
 name:'userDetalies',
 initialState:userDetailesObject,
 reducers:{

 }
 ,extraReducers(builder) {
     
 },
})

const userDetaliesReducer=userDetaliesSlice.reducer

export {
    userDetaliesReducer
}
