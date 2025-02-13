import React from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

import Features from "../../components/features/Features";
import {
  ServiceCard,
  ServiceContent,
  ServiceImage,
  ServiceTitle,
} from "../../theme/cards";

const services = [
  {
    id: 1,
    title: "Manicure",
    description:
      "Our manicure services include nail shaping, cuticle care, and a relaxing hand massage. Choose from a variety of polish colors to complete your look.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739426972/Spa-Manicure-Deluxe_rwkuwo.jpg",
  },
  {
    id: 2,
    title: "Pedicure",
    description:
      "Enjoy a soothing pedicure that includes nail trimming, cuticle care, and a foot massage. Finish with your choice of polish for beautiful, healthy feet.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739426981/pedicure-types_zvclak.jpg",
  },
  {
    id: 3,
    title: "Gel Nails",
    description:
      "Get long-lasting, chip-resistant nails with our gel nail services. Choose from a wide range of colors and designs for a flawless finish.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739427043/61xumms8DML._AC_UF1000_1000_QL80__k1vsyw.jpg",
  },
  {
    id: 4,
    title: "Acrylic Nails",
    description:
      "Enhance your nails with our durable acrylic nail services. Perfect for those looking for added length and strength.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739427001/4b25005118cc3212833dddb6aa5e8dfb_oxdakq.jpg",
  },
  {
    id: 5,
    title: "Nail Art",
    description:
      "Express your creativity with our custom nail art services. From simple designs to intricate patterns, our artists can create the perfect look for you.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739427978/a80c7dc04eabfb2172230caf96bbb128_wlwoyq.jpg",
  },
  {
    id: 6,
    title: "Nail Treatments",
    description:
      "Keep your nails healthy and strong with our range of nail treatments. From strengthening to moisturizing, we have the perfect solution for your nail care needs.",
    image: "https://res.cloudinary.com/dawklhf0q/image/upload/v1739428002/Before-After-Nail_1024x1024_2x_lxhers.jpg",
  },
];

const NailCareServices = () => {
  return (
    <Box sx={{ py: 8, width: "100%" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{ color: "white", textAlign: "center", mb: 2, fontWeight: 600 }}
          >
            Nail Care Services
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "white", textAlign: "center", mb: 6 }}
          >
            Elevate Your Nail Beauty
          </Typography>
        </motion.div>
        <Features />

        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", my: 8 }} />

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <ServiceCard>
                  <Box sx={{ overflow: "hidden" }}>
                    <ServiceImage src={service.image} alt={service.title} />
                  </Box>
                  <ServiceContent>
                    <ServiceTitle variant="h5">{service.title}</ServiceTitle>
                    <Typography
                      sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 2 }}
                    >
                      {service.description}
                    </Typography>
                  </ServiceContent>
                </ServiceCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NailCareServices;
