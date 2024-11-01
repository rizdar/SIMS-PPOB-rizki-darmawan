import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ProfileBanner from "../components/home/ProfileBanner";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import * as Constant from "../constant/Constant";
import useShowAlert from "../hooks/use-sweet-alert";
import { getAuthToken } from "../utils/getAuthToken";

interface FormValues {
  nominal: number;
}

export default function BayarPage() {
  const { showAlert } = useShowAlert();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      nominal: 10000,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const token = getAuthToken();
    try {
      const res = await axios.post(
        `${Constant.BASEURL}/transaction`,
        {
          service_code: "PLN",
          total_amount: data.nominal,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        showAlert("Success!", "Pembayaran berhasil!", "success");
      }
    } catch (error) {
      showAlert("Error!", "Pembayaran Gagal", "error");
      console.log(error);
    }
  };

  return (
    <Box paddingX={10}>
      <ProfileBanner />
      <Typography>Pembayaran</Typography>
      <Typography variant="h6">PLN</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="nominal"
          type="number"
          variant="outlined"
          margin="normal"
          placeholder="masukan nominal pembayaran"
          fullWidth
          {...register("nominal", {
            required: "nominal wajib diisi",
          })}
          error={!!errors.nominal}
          helperText={errors.nominal ? String(errors.nominal.message) : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MonetizationOnOutlinedIcon style={{ color: "#abadb0" }} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          fullWidth
          sx={{ bgcolor: "orangered", color: "white" }}
        >
          Bayar
        </Button>
      </form>
    </Box>
  );
}
