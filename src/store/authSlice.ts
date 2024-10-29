import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "../actions/authAction";

interface UserInfo {
  token: string;
}

interface AuthResponse {
  status: number;
  message: string;
  data: UserInfo;
}

interface AuthState {
  loading: boolean;
  userInfo: UserInfo | null;
  userToken: string | null;
  error: string | null;
  success: boolean;
}

const initialState: AuthState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.success = true;
          state.userInfo = action.payload.data;
          state.userToken = action.payload.data.token;
        }
      )
      .addCase(
        registerUser.rejected,
        (state, action: PayloadAction<string | unknown>) => {
          state.loading = false;
          state.error = action.payload as string;
        }
      );
  },
});

export default authSlice.reducer;
