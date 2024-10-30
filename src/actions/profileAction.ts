import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Constant from "../constant/Constant";
import axios from "axios";

interface ProfileResponse {
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string;
}

const token = localStorage.getItem("token");

export const fetchProfile = createAsyncThunk(
  "profile/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<ProfileResponse>(
        `${Constant.BASEURL}/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        }
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
