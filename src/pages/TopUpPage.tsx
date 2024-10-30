import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ProfileBanner from "../components/home/ProfileBanner";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const nominalList = [100000, 200000, 300000, 500000, 1000000, 2000000];

export default function TopUpPage() {
  return (
    <Box paddingX={10}>
      <ProfileBanner />
      <Typography>Silakan masukan</Typography>
      <Typography variant="h6">Nominal Top Up</Typography>
      <Box display="flex" gap={1} alignItems="center">
        <Box flex={0.6}>
          <TextField
            type="number"
            variant="outlined"
            margin="normal"
            placeholder="masukan nominal top up"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MonetizationOnOutlinedIcon style={{ color: "#abadb0" }} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            sx={{ bgcolor: "orangered", padding: 2 }}
            variant="contained"
            fullWidth
          >
            Top Up
          </Button>
        </Box>
        <Box bgcolor="InactiveCaption" flex={0.4}>
          <Grid container spacing={1}>
            {nominalList.map((nominal, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Box
                  bgcolor="white"
                  borderRadius={1}
                  padding={2}
                  boxShadow={1}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ cursor: "pointer", "&:hover": { boxShadow: 3 } }} // Efek hover
                >
                  <Typography variant="body1">{`Rp ${nominal.toLocaleString()}`}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
