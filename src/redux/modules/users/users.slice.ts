import {createSlice} from '@reduxjs/toolkit'
const usersSlice=createSlice({
 name:'users',
 initialState:[],
 reducers:{

 }
 ,extraReducers(builder) {
     
 },
})

const usersReducer=usersSlice.reducer

export {
    usersReducer
}