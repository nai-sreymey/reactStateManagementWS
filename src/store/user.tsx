import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    name: string;
}

const initialState: User = {
    name: "Mey",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name=action.payload;
        },
    },
});

export const { setName } = userSlice.actions;
export default userSlice.reducer;