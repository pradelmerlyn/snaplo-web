"use client";

import { Box, Typography, Paper, Grid } from "@mui/material";

export default function LoanInfo() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Section Title */}
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: "#1a237e", mb: 2, fontSize: "18px" }}
      >
        Loan Info
      </Typography>

      {/* Card */}
      <Paper
        elevation={1}
        sx={{
          px: 2,
          py: 2,
          borderRadius: 3,
          backgroundColor: "#fff",
          border: "1px solid #e0e0e0",
          height: 395,
        }}
      >
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2}
          suppressHydrationWarning
          sx={{ height: "100%" }}
        >
          {/* Row 1 */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="Loan Type" value="Conventional" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="Loan Program" value="CF30" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="Loan Purpose" value="Purchase" />
          </Grid>

          {/* Row 2 */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="Loan Position" value="FirstLien" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="Purchase Price" value="$500,000.00" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="Appraised Value" value="$550,000.00" />
          </Grid>

          {/* Row 3 */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="LTV" value="80%" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="Estimated Close Date" value="Nov 31, 2023" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="Loan Amount" value="$400,000.00" />
          </Grid>

          {/* Row 4 */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="Subordinate Loan" value="$50,000.00" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="Interest Rate" value="4.50%" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="Loan Term" value="30-yr-fixed" />
          </Grid>

          {/* Row 5 */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="P&I Payment" value="0" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="Total Payment" value="0" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <LabelValue label="Impounds" value="Taxes and Insurance" />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

// Reusable label-value display component
function LabelValue({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: "11px",
          mb: 0.25,
          fontWeight: 400,
          color: "#666666",
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="body1"
        fontWeight={600}
        sx={{
          fontSize: "11px",
          color: "#333333",
          lineHeight: 1.3,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
