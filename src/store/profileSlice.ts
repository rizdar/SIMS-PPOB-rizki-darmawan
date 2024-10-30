import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProfile } from "../actions/profileAction";

interface ProfileData {
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string;
}

interface ProfileResponse {
  status: number;
  message: string;
  data: ProfileData;
}

interface ProfileState {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  profileImage: string | null;

  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  email: null,
  firstName: null,
  lastName: null,
  profileImage: null,

  loading: false,
  error: null,
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducer untuk fetchProfile
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProfile.fulfilled,
        (state, action: PayloadAction<ProfileResponse | any>) => {
          const { email, first_name, last_name, profile_image } =
            action.payload.data;

          state.loading = false;
          state.email = email;
          state.firstName = first_name;
          state.lastName = last_name;
          state.profileImage = profile_image;
        }
      )
      .addCase(fetchProfile.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching profile";
      });
  },
});

export default profileSlice.reducer;
