"use client";

import { Box, Typography } from "@mui/material";
import LoanInfo from "./LoanInfo";
import CalendarCard from "./CalendarCard";
import LoanLock from "./LoanLock";
import TransactionDetails from "./TransactionDetails";
import BorrowerInfo from "./BorrowerInfo";
import PropertyInfo from "./PropertyInfo";

export default function LoanSummary() {
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
          maxWidth: 1000,
          mx: "auto",
          px: { xs: 2, md: 4, lg: 6 },
        }}
      >
        {/* Welcome Header */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            color: "#666666",
            mb: 3,
            textAlign: "left",
          }}
        >
          Welcome back,{" "}
          <Box component="span" sx={{ fontWeight: 600, color: "#333" }}>
            Matthew
          </Box>
        </Typography>

        {/* Main Container - 2 Column Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 3,
            width: "100%",
          }}
        >
          {/* Left Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <CalendarCard />
            <LoanLock />
            <BorrowerInfo />
          </Box>

          {/* Right Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <LoanInfo />
            <TransactionDetails />
            <PropertyInfo />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
