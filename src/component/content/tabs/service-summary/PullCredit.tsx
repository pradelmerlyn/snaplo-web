"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import { StyledPaper } from "@/theme/AppTheme";

// Data for Borrower and Co-Borrower
const creditData = {
  borrower: {
    name: "John Smith",
    updated: "September 23, 2023",
    score: 750,
    monthlyLiability: "$1,000",
    totalLiability: "$35,000",
    marks: {
      mortgageBalance: 0,
      mortgageLates: 0,
      derogatory: 1,
      late: 1,
    },
    summary: {
      inquiries: 0,
      disputed: 0,
    },
    accounts: [
      { type: "Mortgage (0)", balance: "$0", payment: "$0" },
      { type: "Installment (1)", balance: "$25,000", payment: "$500" },
      { type: "Revolving (2)", balance: "$20,000", payment: "$500" },
    ],
  },
  coBorrower: {
    name: "Mary Smith",
    updated: "September 26, 2023",
    score: 750,
    monthlyLiability: "$0",
    totalLiability: "$0",
    marks: {
      mortgageBalance: 0,
      mortgageLates: 0,
      derogatory: 1,
      late: 1,
    },
    summary: {
      inquiries: 0,
      disputed: 0,
    },
    accounts: [
      { type: "Mortgage (0)", balance: "$0", payment: "$0" },
      { type: "Installment (0)", balance: "$0", payment: "$0" },
      { type: "Revolving (0)", balance: "$0", payment: "$0" },
    ],
  },
};

export default function CreditReportCard() {
  const [tab, setTab] = useState(0);
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const currentData = tab === 0 ? creditData.borrower : creditData.coBorrower;

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          maxWidth: 1100,
          width: "100%",
          backgroundColor: "common.white",
          borderRadius: 3,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          px: { xs: 2, md: 4 },
          py: { xs: 3, md: 5 },
          mx: "auto",
        }}
      >
        {/* Page Header */}
        <Box
          sx={{
            backgroundColor: "success.main",
            py: 1,
            textAlign: "center",
            borderRadius: 1,
          }}
        >
          <Typography variant="subtitle1" color="common.white" fontWeight={600}>
            Credit Report
          </Typography>
        </Box>

        {/* Borrower / Co-Borrower Tabs */}
        <Tabs value={tab} onChange={handleTabChange} centered sx={{ mt: 2 }}>
          <Tab label="Borrower" sx={{ fontWeight: 600 }} />
          <Tab label="Co-Borrower" />
        </Tabs>

        <StyledPaper sx={{ mt: 3, p: 4, borderRadius: 4 }}>
          {/* Name and Credit Score */}
          <Typography variant="h3" gutterBottom>
            <Typography
              variant="h3"
               component="span"
              color="primary"
              fontWeight={600}
            >
              {currentData.name}
            </Typography>{" "}
            - Credit Score
          </Typography>

          <Paper variant="outlined" sx={{ p: 3, mb: 3 }}>
            <Grid container alignItems="center" spacing={3}>
              <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  Updated {currentData.updated}
                </Typography>
                <Typography variant="h3" fontWeight={700} sx={{ my: 2 }}>
                  {currentData.score}
                </Typography>
                <Typography variant="body2" color="primary" fontWeight={600}>
                  See all 3 bureau FICO® Scores
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  Monthly Liability
                </Typography>
                <Typography variant="subtitle1" fontWeight={600}>
                  {currentData.monthlyLiability}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  Total Liability
                </Typography>
                <Typography variant="subtitle1" fontWeight={600}>
                  {currentData.totalLiability}
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* Important Credit Marks and Summary */}
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper variant="outlined" sx={{ p: 3, height: "100%" }}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                  Important Credit Marks
                </Typography>
                <Typography variant="body2">
                  Mortgage Balance: {currentData.marks.mortgageBalance}
                </Typography>
                <Typography variant="body2">
                  Mortgage Lates: {currentData.marks.mortgageLates}
                </Typography>
                <Typography variant="body2">
                  Derogatory Marks: {currentData.marks.derogatory}
                </Typography>
                <Typography variant="body2">
                  30/60/90 Days Late: {currentData.marks.late}
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper variant="outlined" sx={{ p: 3, height: "100%" }}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                  Credit Report Summary
                </Typography>
                <Typography variant="body2">
                  Inquiries (Last 120 days): {currentData.summary.inquiries}
                </Typography>
                <Typography variant="body2">
                  Disputed Accounts: {currentData.summary.disputed}
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Active / Inactive Accounts Tabs */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Tabs
              value={0}
              onChange={handleTabChange}
              sx={{
                mt: 4,
                border: "1px solid",
                borderColor: "primary.main",
                borderRadius: 1,
                width: "fit-content", // Only as wide as content
                minHeight: "unset", // Allow it to shrink
              }}
            >
              <Tab
                label="Active Accounts"
                sx={{
                  px: 3,
                  py: 1,
                  minHeight: "unset",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "text.primary",
                  "&.Mui-selected": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              />
              <Tab
                label="Inactive Accounts"
                sx={{
                  px: 3,
                  py: 1,
                  minHeight: "unset",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  backgroundColor: "#fff",
                  color: "text.primary",
                  "&.Mui-selected": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              />
            </Tabs>
          </Box>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {currentData.accounts.map((acc, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Paper variant="outlined" sx={{ p: 3, textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    fontWeight={600}
                  >
                    {acc.type}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="body2">
                    Total Balance: {acc.balance}
                  </Typography>
                  <Typography variant="body2">
                    Total Monthly Payment: {acc.payment}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Rerun Credit Button */}
          <Box sx={{ textAlign: "right", mt: 4 }}>
            <Button
              variant="contained"
              color="success"
              sx={{ px: 2, py: 1, borderRadius: 1, color: "white" }}
            >
              Rerun Credit
            </Button>
          </Box>
        </StyledPaper>
      </Box>
    </Box>
  );
}
