import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";



interface ShoppingItem {
  items: string[];
}



const initialState: ShoppingItem = {
  items: ["Milk", "Bread"],
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data.map((task: {title: string}) => task.title)
});

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      const newItem: string = action.payload;
      state.items.push(newItem);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.items.push(...action.payload);
      });
  }
});

export const { addItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;
