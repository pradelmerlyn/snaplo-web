"use client";

import { CardHeaderTitle, StyledPaper } from "@/theme/AppTheme";
import { Box, Typography, Grid } from "@mui/material";

export default function LoanInfo() {
  return (
    <Box sx={{ width: "100%" }}>
      <CardHeaderTitle>Loan Info</CardHeaderTitle>

      <StyledPaper sx={{ px: 3, py: 3, height: "412px" }}>
        <Grid container spacing={2} alignItems="stretch">
          {/* Row 1 - 3 items */}
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="Loan Type" value="Conventional" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="Loan Program" value="CF30" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="Loan Purpose" value="Purchase" />
          </Grid>

          {/* Row 2 - 3 items */}
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="Loan Position" value="FirstLien" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="Purchase Price" value="$500,000.00" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="Appraised Value" value="$550,000.00" />
          </Grid>

          {/* Row 3 - 3 items */}
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="LTV" value="80%" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="Estimated Close Date" value="Nov 31, 2023" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="Loan Amount" value="$400,000.00" />
          </Grid>

          {/* Row 4 - 3 items */}
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="Subordinate Loan" value="$50,000.00" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="Interest Rate" value="4.50%" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="Loan Term" value="30-yr-fixed" />
          </Grid>

          {/* Row 5 - 3 items */}
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="P&I Payment" value="0" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="Total Payment" value="0" />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <LabelValue label="Impounds" value="Taxes and Insurance" />
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}

function LabelValue({ label, value }: { label: string; value: string }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 400,
          color: "#666",
          mb: 0.5,
          lineHeight: 2,
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#111",
          lineHeight: 2,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
