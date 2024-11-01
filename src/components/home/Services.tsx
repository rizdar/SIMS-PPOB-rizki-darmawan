import axios from "axios";
import { useEffect, useState } from "react";
import * as Constant from "../../constant/Constant";
import { Box } from "@mui/material";
import { getAuthToken } from "../../utils/getAuthToken";

type ServiceType = {
  service_code: string;
  service_name: string;
  service_icon: string;
};

export default function Services() {
  const [services, setServices] = useState<ServiceType[]>([]);

  const token = getAuthToken();

  useEffect(() => {
    const fetcService = async () => {
      const response = await axios.get(`${Constant.BASEURL}/services`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServices(response.data.data);
    };

    fetcService();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        marginBottom: 4,
        width: "100%",
      }}
    >
      {services.length > 0 &&
        services.map((service) => (
          <Box
            key={service.service_code}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: 2,
              // width: "100px",
              width: "100%",
            }}
          >
            <img src={service.service_icon} />
            <small
              style={{
                fontSize: 12,
                textAlign: "center",
                fontWeight: 400,
              }}
            >
              {service.service_name}
            </small>
          </Box>
        ))}
    </Box>
  );
}
