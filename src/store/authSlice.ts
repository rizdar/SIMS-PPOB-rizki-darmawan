import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../actions/authAction";

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
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<AuthResponse | any>) => {
          state.loading = false;
          state.success = true;
          state.userInfo = action.payload.data;
          state.userToken = action.payload.data.token;
        }
      )
      .addCase(
        registerUser.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.loading = false;
          state.error = action.payload as string;
        }
      )

      // handle login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<AuthResponse | any>) => {
          state.loading = false;
          state.success = true;
          state.userInfo = action.payload.data.data;
          state.userToken = action.payload.data.token;

          localStorage.setItem("token", action.payload.data.data.token);
        }
      )
      .addCase(loginUser.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
