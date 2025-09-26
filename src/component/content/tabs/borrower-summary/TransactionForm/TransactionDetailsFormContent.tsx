import CollapsibleSection from "@/component/ui/CollapsibleSection";
import { InfoLabel } from "@/theme/AppTheme";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import TransactionDetailsForm from "./TransactionDetailsForm";
import MortgageLoanForm from "./MortgageLoanForm";

export default function TransactionDetailsFormContent() {
  return (
    <CollapsibleSection title="Transaction Information">
      <Grid container spacing={3} mt={1}>
        {/* <Grid size={{ xs: 12, md: 6 }}> */}
          <Box px={1}>
            <TransactionDetailsForm />
            <MortgageLoanForm />
          </Box>
        </Grid>
      {/* </Grid> */}
    </CollapsibleSection>
  );
}