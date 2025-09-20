"use client";

import { Box, Grid } from "@mui/material";
import ReferralForm from "./ReferralForm";
import LoanForm from "./LoanForm";

export default function ReferalLoanContent({
  globalEditMode = false,
}: {
  globalEditMode?: boolean;
}) {
  return (
    <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: 1000, width: "100%" }}>
        <Grid container spacing={2} alignItems="stretch">
          {/* Referral Form - 3/4 width */}
          <Grid size={{ xs: 12, lg: 9 }} sx={{ height: "100%" }}>
            <ReferralForm globalEditMode={globalEditMode} />
          </Grid>

          {/* Loan Form - 1/4 width */}
          <Grid size={{ xs: 12, lg: 3 }} sx={{ height: "100%" }}>
            <LoanForm globalEditMode={globalEditMode} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
