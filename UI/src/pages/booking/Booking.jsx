import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: "2rem",
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const services = [
  { value: "Eyelash Extensions", label: "Eyelash Extensions - Rs 2000" },
  { value: "Haircut", label: "Haircut - Rs 1000" },
  { value: "Hair Coloring", label: "Hair Coloring - Rs 1000" },
  { value: "Hair Treatment", label: "Hair Treatment - Rs 1000" },
  { value: "Blowouts", label: "Blowouts - Rs 1000" },
  { value: "Updos and Styling", label: "Updos and Styling - Rs 1000" },
  {
    value: "Volume Eyelash Extension",
    label: "Volume Eyelash Extension - Rs 1000",
  },
  { value: "Eyelash Lift", label: "Eyelash Lift - Rs 1000" },
  { value: "Waxing", label: "Waxing - Rs 800" },
  { value: "Manicure", label: "Manicure - Rs 700" },
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setConfirmation(
      `Thank you, ${formData.name}! Your booking for ${formData.service} on ${formData.date} at ${formData.time} has been confirmed.`
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
    });
  };

  return (
    <Box sx={{ py: 8, width: "100%" }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{ color: "white", textAlign: "center", mb: 2, fontWeight: 600 }}
          >
            Booking Form
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "white", textAlign: "center", mb: 6 }}
          >
            Secure Your Appointment Today
          </Typography>
        </motion.div>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <FormContainer>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth
                  select
                  label="Select Service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  margin="normal"
                >
                  {services.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  fullWidth
                  label="Preferred Time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  sx={{ mt: 2 }}
                >
                  Book Now
                </Button>
              </form>
              {confirmation && (
                <Box
                  sx={{
                    mt: 4,
                    p: 2,
                    bgcolor: "#d4edda",
                    color: "#155724",
                    borderRadius: "8px",
                  }}
                >
                  {confirmation}
                </Box>
              )}
            </FormContainer>
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", my: 8 }} />
      </Container>
    </Box>
  );
};

export default BookingForm;
