import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
  email: string | null;
  id: number | null;
}

const initialState: AuthState = {
  accessToken: null,
  email: null,
  id: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogin: (state, action: PayloadAction<AuthState>) => {
      state = action.payload;
    },
    onLogout: (state) => {
      state.accessToken = null;
      state.email = null;
      state.id = null;
    },
  },
});

export const { onLogin, onLogout } = authSlice.actions;

export default authSlice.reducer;
