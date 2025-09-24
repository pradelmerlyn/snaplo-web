"use client";

import { Box, Typography, Paper, Chip } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { CardHeaderTitle, StyledPaper } from "@/theme/AppTheme";

export default function LoanLock() {
  return (
    <Box>
      <CardHeaderTitle>Loan Lock</CardHeaderTitle>

      {/* Card */}
      <StyledPaper
        elevation={1}
        sx={{
          height: 380,
        }}
      >
        {/* Interest Rate Row with Unlocked Chip */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2.5,
            pb: 1.5,
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: "#666666",
                fontSize: "12px",
                mb: 0.5,
              }}
            >
              Interest Rate
            </Typography>
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{
                color: "#333333",
                fontSize: "28px",
              }}
            >
              4.50%
            </Typography>
          </Box>

          <Chip
            label="Unlocked"
            icon={<LockOpenIcon sx={{ fontSize: "1rem" }} />}
            variant="outlined"
            sx={{
              bgcolor: "#f8f8f8",
              color: "#666666",
              fontWeight: 500,
              fontSize: "12px",
              height: 32,
              borderColor: "#e0e0e0",
              "& .MuiChip-icon": {
                color: "#666666",
              },
            }}
          />
        </Box>

        {/* Vertical List of Fields */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <LabelValue label="Lock Date" value="N/A" />
          <LabelValue label="Lock Expiration Date" value="N/A" />
          <LabelValue label="Base Price" value="N/A" />
          <LabelValue label="Borrower Price" value="N/A" />
        </Box>
      </StyledPaper>
    </Box>
  );
}

// Reusable label-value component to match screenshot
function LabelValue({ label, value }: { label: string; value: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
        borderBottom: "1px solid #f5f5f5",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "#666666",
          fontSize: "11px",
          fontWeight: 400,
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="body2"
        fontWeight={600}
        sx={{
          color: "#333333",
          fontSize: "11px",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
