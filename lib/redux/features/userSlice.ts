import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  id:string;
  username: string;
  email: string;
  imgprofile?: string;
  isVerified?: boolean;
  isAuth?: boolean;
}

const initialData: IUser = {
  id: "",
  username: "",
  email: ""
};

const userSlice = createSlice({
  name: "user",
  initialState: { ...initialData },
  reducers: {
    setSignIn: (initialState, action) => {
      console.log("Check action redux from login:", action);
      return { ...action.payload };
    },
    setSignOut: () => {
      return { ...initialData };
    },
  },
});

export const { setSignIn, setSignOut } = userSlice.actions;

export default userSlice.reducer;