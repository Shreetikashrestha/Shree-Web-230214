import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import {
  Email as Mail,
  Phone,
  Person as User,
  Lock,
} from "@mui/icons-material";

const GlassCard = styled(Box)({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  padding: "40px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f8a5c2",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
  },
  marginBottom: "20px",
});

const RegisterPage = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <GlassCard>
          <Typography
            variant="h3"
            sx={{ color: "white", mb: 2, textAlign: "center" }}
          >
            Join Us
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#f8a5c2", mb: 4, textAlign: "center" }}
          >
            Create your account
          </Typography>

          <form>
            <StyledTextField
              fullWidth
              label="Full Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <User color="#f8a5c2" size={20} />
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              fullWidth
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail color="#f8a5c2" size={20} />
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              fullWidth
              label="Phone"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone color="#f8a5c2" size={20} />
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              fullWidth
              label="Password"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="#f8a5c2" size={20} />
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              fullWidth
              label="Confirm Password"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="#f8a5c2" size={20} />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                bgcolor: "#f8a5c2",
                color: "#2c3e50",
                "&:hover": {
                  bgcolor: "#f8a5c2cc",
                },
                py: 1.5,
              }}
            >
              Register
            </Button>
          </form>
        </GlassCard>
      </motion.div>
    </Container>
  );
};

export default RegisterPage;
