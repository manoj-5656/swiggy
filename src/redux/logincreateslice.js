import { createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice(
    {
        name: "login",
        initialState: {
            user: []
        },
        reducers: {
            adduser: (state, action) => {
                state.user.push(action.payload)
            }
        }
    }
)
export const { adduser } = loginSlice.actions
export default loginSlice.reducer