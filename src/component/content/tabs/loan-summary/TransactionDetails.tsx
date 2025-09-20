"use client";

import { Box, Typography, Paper } from "@mui/material";

export default function TransactionDetails() {
  return (
    <Box>
      {/* Section Title */}
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{
          color: "#1a237e",
          mb: 1.5,
          fontSize: "18px",
        }}
      >
        Details of Transaction
      </Typography>

      {/* Card */}
      <Paper
        elevation={1}
        sx={{
          px: 2,
          py: 2,
          borderRadius: 2,
          backgroundColor: "#fff",
          border: "1px solid #e0e0e0",
          height: 380,
        }}
      >
        {/* Main Content Container */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            mb: 3,
          }}
        >
          {/* Left Column - COSTS */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                color: "#333333",
                mb: 2,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              COSTS
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <TransactionRow label="Purchase" value="$400,000" />
              <TransactionRow label="Prepaids" value="$3,421" />
              <TransactionRow label="CC's" value="$4,543" />
              <TransactionRow label="MIP" value="$6,200" />
              <TransactionRow label="Discount" value="$2,500" />
            </Box>

            {/* Total Row */}
            <Box
              sx={{
                mt: 1.5,
                pt: 1.5,
                borderTop: "2px solid #333333",
              }}
            >
              <TransactionRow label="Total" value="$416,664" isTotal={true} />
            </Box>
          </Box>

          {/* Right Column - CREDITS */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                color: "#333333",
                mb: 2,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              CREDITS
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <TransactionRow label="Loan" value="$400,000" />
              <TransactionRow label="Deposit" value="$3,421" />
              <TransactionRow label="Seller" value="$4,543" />
              <TransactionRow label="LC" value="$6,200" />
              <TransactionRow label="Other" value="$2,500" />
              <TransactionRow label="Subord." value="$2,500" />
            </Box>

            {/* Total Row */}
            <Box
              sx={{
                mt: 1.5,
                pt: 1.5,
                borderTop: "2px solid #333333",
              }}
            >
              <TransactionRow label="Total" value="$416,664" isTotal={true} />
            </Box>
          </Box>
        </Box>

        {/* Cash from Borrower Section */}
        <Box
          sx={{
            bgcolor: "#e8f5e8",
            px: 2.5,
            py: 1.5,
            borderRadius: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography
            variant="body1"
            fontWeight={600}
            sx={{
              color: "#333333",
              fontSize: "12px",
            }}
          >
            Cash from Borrower
          </Typography>
          <Typography
            variant="body1"
            fontWeight={700}
            sx={{
              color: "#333333",
              fontSize: "1rem",
            }}
          >
            $100,000
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

// Reusable transaction row component
function TransactionRow({
  label,
  value,
  isTotal = false,
}: {
  label: string;
  value: string;
  isTotal?: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 0.5,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: isTotal ? "#333333" : "#666666",
          fontSize: "11px",
          fontWeight: isTotal ? 700 : 400,
        }}
      >
        {label}
      </Typography>

      {/* Dotted line */}
      <Box
        sx={{
          flex: 1,
          mx: 1.5,
          borderBottom: "1px dotted #cccccc",
          height: 1,
        }}
      />

      <Typography
        variant="body2"
        fontWeight={isTotal ? 700 : 600}
        sx={{
          color: "#333333",
          fontSize: "11px",
          textAlign: "right",
          minWidth: "70px",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
