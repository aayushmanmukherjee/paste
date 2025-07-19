import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"
const pasteslices = createSlice(
    {
        name:"paste",
        initialState:{
            pastes:localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
        },
        reducers:{
            addToPaste:(state,action)=>{
                const paste = action.payload
                const index = state.pastes.findIndex((i)=>i._id===paste._id)
                if(index>=0) {
                    toast.error("paste already exists")
                    return
                }
                state.pastes.push(paste)
                localStorage.setItem("pastes",JSON.stringify(state.pastes))
                toast.success("paste created")
            },
            updatePaste:(state,action)=>{
                const paste = action.payload
                const index = state.pastes.findIndex((i)=>i._id===paste._id)
                if(index>=0) {
                    state.pastes[index]=paste
                    localStorage.setItem("pastes", JSON.stringify(state.pastes))
                    toast.success("paste updated")
                }
            },
            removeFromPaste:(state,action)=>{
                const paste = action.payload
                const index = state.pastes.findIndex((i)=>i._id===paste._id)
                if(index>=0) {
                    // toast.success(`paste ${state.pastes[index].title} deleted`)
                    state.pastes.splice(index,1)
                    localStorage.setItem("pastes",JSON.stringify(state.pastes))
                    toast.success("paste deleted")
                }
            },
            resetPaste:(state)=>{
                if(state.pastes.length>0) {
                state.pastes=[]
                localStorage.setItem("pastes",JSON.stringify(state.pastes))
                toast.success("all pastes deleted")
                } else {
                    toast.error("no paste available to delete")
                }
                
            }
        }
    }
)
export const{addToPaste,updatePaste,removeFromPaste,resetPaste}=pasteslices.actions
export default pasteslices.reducer
