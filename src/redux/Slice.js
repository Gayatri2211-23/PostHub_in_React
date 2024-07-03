import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:'myuser',
    initialState:{value :{name:undefined,token:undefined,image:undefined,isLoginStatus:false}},
    reducers :{
        changeUserInfo:(state, action)=>{
            var data= action.payload;
            console.log("My Slice Data is : "+JSON.stringify(data));
            state.value = data;
            console.log("My Slice Value is : "+JSON.stringify(state.value));
        }
    }
})
export  const{changeUserInfo} = Slice.actions;
export default Slice.reducer