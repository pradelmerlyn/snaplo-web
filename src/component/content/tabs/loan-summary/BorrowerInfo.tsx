"use client";

import { Box, Typography, Button, Divider, Grid } from "@mui/material";
import {
  CardHeaderTitle,
  InfoLabel,
  InfoValue,
  StyledPaper,
} from "../../../../theme/AppTheme";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import PhoneIcon from "@mui/icons-material/Phone";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import EmailIcon from "@mui/icons-material/Email";

export default function BorrowerInfoCard() {
  return (
    <Box>
      <CardHeaderTitle>Borrower</CardHeaderTitle>

      <StyledPaper>
        {/* Header Row */}
        <Grid
          container
          spacing={2}
          alignItems="center"
          suppressHydrationWarning
          sx={{ mb: 3 }}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                borderColor: "#5c6bc0",
                color: "#5c6bc0",
                "&:hover": {
                  borderColor: "#3f51b5",
                  backgroundColor: "rgba(92, 107, 192, 0.04)",
                },
              }}
            >
              Invite Borrower
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }} className="centered-grid">
            <InfoLabel variant="body2">Borrower</InfoLabel>
            <InfoValue variant="body1">John Smith</InfoValue>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }} className="centered-grid">
            <InfoLabel variant="body2">Co-Borrower</InfoLabel>
            <InfoValue variant="body1">Mary Smith</InfoValue>
          </Grid>
        </Grid>

        {/* Info Rows */}
        <Box sx={{ mb: 3 }}>
          <InfoRow
            icon={<CreditScoreIcon fontSize="small" sx={{ color: "#666" }} />}
            label="Credit Scores"
            borrowerValue="755 / 750 / 745"
            coBorrowerValue="765 / 760 / 755"
          />
          <InfoRow
            icon={<PhoneIcon fontSize="small" sx={{ color: "#666" }} />}
            label="Phone Number"
            borrowerValue="(909) 867-5309"
            coBorrowerValue="(909) 867-4302"
          />
          <InfoRow
            icon={<PaidIcon fontSize="small" sx={{ color: "#666" }} />}
            label="Income"
            borrowerValue="$80,000.00"
            coBorrowerValue="$80,000.00"
          />
          <InfoRow
            icon={<PersonIcon fontSize="small" sx={{ color: "#666" }} />}
            label="Indiv. Mthly Debt"
            borrowerValue="$1000.00"
            coBorrowerValue="$0.00"
          />
          <InfoRow
            icon={<GroupIcon fontSize="small" sx={{ color: "#666" }} />}
            label="Joint Mthly Debt"
            borrowerValue="$1000.00"
            coBorrowerValue="$0.00"
          />
        </Box>

        {/* Email Buttons */}
        <Grid container spacing={2} suppressHydrationWarning>
          <Grid size={{ xs: 12, md: 4 }}>
            {/* Empty space to align with the invite button column */}
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} className="centered-grid">
            <Button
              variant="contained"
              size="small"
              startIcon={<EmailIcon />}
              sx={{
                textTransform: "none",
                fontSize: "11px",
                py: 0.5,
                px: 1,
                backgroundColor: "#5c6bc0",
                "&:hover": {
                  backgroundColor: "#3f51b5",
                },
              }}
            >
              Send Email
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} className="centered-grid">
            <Button
              variant="contained"
              size="small"
              startIcon={<EmailIcon />}
              sx={{
                textTransform: "none",
                fontSize: "11px",
                py: 0.5,
                px: 1,
                backgroundColor: "#5c6bc0",
                "&:hover": {
                  backgroundColor: "#3f51b5",
                },
              }}
            >
              Send Email
            </Button>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}

function InfoRow({
  icon,
  label,
  borrowerValue,
  coBorrowerValue,
}: {
  icon: React.ReactNode;
  label: string;
  borrowerValue: string;
  coBorrowerValue: string;
}) {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      suppressHydrationWarning
      sx={{ py: 1.5 }}
    >
      <Grid size={{ xs: 12, md: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {icon}
          <InfoLabel variant="body2">{label}</InfoLabel>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
        <InfoValue variant="body2">{borrowerValue}</InfoValue>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
        <InfoValue variant="body2">{coBorrowerValue}</InfoValue>
      </Grid>
    </Grid>
  );
}
