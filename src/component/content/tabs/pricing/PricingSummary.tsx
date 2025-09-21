"use client";

import React from "react";
import { Box, Divider } from "@mui/material";
import PricingBuilder from "./PricingBuilder";
import LoanPropertyForm from "./LoanPropertyForm";

export default function PricingSummary() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        py: 3,
        px: 2,
      }}
    >
      {/* Container */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, md: 4, lg: 6 },
        }}
      >
        {/* Main Container - 2 Column Layout with Divider */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "2fr 1px 1fr",
            },
            gap: 4,
            width: "100%",
            alignItems: "start",
          }}
        >
          {/* Left Side - Pricing Builder */}
          <Box>
            <PricingBuilder />
          </Box>

          {/* Center Divider - Only on md+ screens */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              height: "100%",
              minHeight: 600,
            }}
          >
            <Divider
              orientation="vertical"
              sx={{
                borderColor: "#E2E8F0",
                borderWidth: 1,
                height: "100%",
              }}
            />
          </Box>

          {/* Right Side - Loan & Property Form */}
          <Box>
            <LoanPropertyForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
