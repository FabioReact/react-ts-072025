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
        state.accessToken = action.payload.accessToken;
        state.email = action.payload.email;
        state.id = action.payload.id;
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
