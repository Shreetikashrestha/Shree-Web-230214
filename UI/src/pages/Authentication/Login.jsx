// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   InputAdornment,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import { Email as Mail, Lock } from "@mui/icons-material";

// const GlassCard = styled(Box)({
//   background: "rgba(255, 255, 255, 0.1)",
//   backdropFilter: "blur(10px)",
//   borderRadius: "20px",
//   padding: "40px",
//   boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//   border: "1px solid rgba(255, 255, 255, 0.18)",
// });

// const StyledTextField = styled(TextField)({
//   "& .MuiOutlinedInput-root": {
//     color: "white",
//     "& fieldset": {
//       borderColor: "rgba(255, 255, 255, 0.3)",
//     },
//     "&:hover fieldset": {
//       borderColor: "rgba(255, 255, 255, 0.5)",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#f8a5c2",
//     },
//   },
//   "& .MuiInputLabel-root": {
//     color: "rgba(255, 255, 255, 0.7)",
//   },
//   marginBottom: "20px",
// });

// const LoginPage = () => {
//   // State hooks for email and password
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Replace with your actual API endpoint
//     const apiUrl = "https://example.com/api/login";

//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         throw new Error("Login failed");
//       }

//       const data = await response.json();
//       console.log("Login successful:", data);
//       // Handle successful login (e.g., redirect or store a token)
//     } catch (error) {
//       console.error("Error during login:", error);
//       // Optionally, add error handling or display a message to the user
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ py: 8 }}>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <GlassCard>
//           <Typography
//             variant="h3"
//             sx={{ color: "white", mb: 2, textAlign: "center" }}
//           >
//             Welcome Back
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{ color: "#f8a5c2", mb: 4, textAlign: "center" }}
//           >
//             Login to your account
//           </Typography>

//           <form onSubmit={handleSubmit}>
//             <StyledTextField
//               fullWidth
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Mail sx={{ color: "#f8a5c2" }} />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <StyledTextField
//               fullWidth
//               label="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Lock sx={{ color: "#f8a5c2" }} />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Button
//               fullWidth
//               variant="contained"
//               size="large"
//               type="submit"
//               sx={{
//                 mt: 2,
//                 bgcolor: "#f8a5c2",
//                 color: "#2c3e50",
//                 "&:hover": {
//                   bgcolor: "#f8a5c2cc",
//                 },
//                 py: 1.5,
//               }}
//             >
//               Login
//             </Button>
//           </form>
//         </GlassCard>
//       </motion.div>
//     </Container>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
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
import { Email as Mail, Lock } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const API = {
    BASE_URL: "http://localhost:4000",
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log("Logging in with:", data);

    try {
      const response = await axios.post(`${API.BASE_URL}/api/auth/login`, data, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Login Response:", response.data.data.access_token);

      if (response.data && response.data.data.access_token) {
        console.log("Access Token:", response.data.data.access_token);
        localStorage.setItem("token", response.data.data.access_token);
        navigate("/dashboard");
      } else {
        alert("Login failed! Check credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error logging in. Please try again.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <GlassCard>
          <Typography variant="h3" sx={{ color: "white", mb: 2, textAlign: "center" }}>
            Welcome Back
          </Typography>
          <Typography variant="h6" sx={{ color: "#f8a5c2", mb: 4, textAlign: "center" }}>
            Login to your account
          </Typography>
          <form onSubmit={onSubmit}>
            <StyledTextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail sx={{ color: "#f8a5c2" }} />
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#f8a5c2" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              type="submit"
              sx={{
                mt: 2,
                bgcolor: "#f8a5c2",
                color: "#2c3e50",
                "&:hover": { bgcolor: "#f8a5c2cc" },
                py: 1.5,
              }}
            >
              Login
            </Button>
          </form>
        </GlassCard>
      </motion.div>
    </Container>
  );
};

export default LoginPage;
