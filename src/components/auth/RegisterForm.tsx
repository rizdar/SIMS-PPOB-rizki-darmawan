import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "all" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        type="email"
        variant="outlined"
        margin="normal"
        placeholder="masukan email anda"
        {...register("email", {
          required: "email wajib diisi",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "email tidak valid",
          },
        })}
        error={!!errors.email}
        helperText={errors.email ? String(errors.email.message) : ""}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AlternateEmailOutlinedIcon style={{ color: "#abadb0" }} />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        type="text"
        variant="outlined"
        margin="normal"
        placeholder="nama depan"
        {...register("firstName", { required: "nama depan wajib diisi" })}
        error={!!errors.firstName}
        helperText={errors.firstName ? String(errors.firstName.message) : ""}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonOutlineOutlinedIcon style={{ color: "#abadb0" }} />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        type="text"
        variant="outlined"
        margin="normal"
        placeholder="nama belakang"
        {...register("lastName", { required: "nama belakang wajib diisi" })}
        error={!!errors.lastName}
        helperText={errors.lastName ? String(errors.lastName.message) : ""}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonOutlineOutlinedIcon style={{ color: "#abadb0" }} />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        type={showPassword ? "text" : "password"}
        variant="outlined"
        margin="normal"
        placeholder="buat password"
        {...register("password", { required: "password wajib diisi" })}
        error={!!errors.password}
        helperText={errors.password ? String(errors.password.message) : ""}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlinedIcon style={{ color: "#abadb0" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        type={showConfirmPassword ? "text" : "password"}
        variant="outlined"
        margin="normal"
        placeholder="konfirmasi password"
        error={!!errors.confirmPassword}
        helperText={
          errors.confirmPassword ? String(errors.confirmPassword.message) : ""
        }
        {...register("confirmPassword", {
          required: "konfirmasi password wajib diisi",
          validate: (value) =>
            value === watch("password") ||
            "konfirmasi password harus sama dengan password",
        })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlinedIcon style={{ color: "#abadb0" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        fullWidth
        variant="contained"
        sx={{ marginY: 2, backgroundColor: "orangered" }}
        type="submit"
      >
        Registrasi
      </Button>
      <Typography textAlign="center" color="textSecondary">
        Sudah punya akun? login{" "}
        <span style={{ color: "orangered" }}>disini</span>
      </Typography>
    </form>
  );
}
