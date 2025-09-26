import {
  Box,
  Paper,
  Stack,
  Typography,
  Button,
  Divider,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import BorrowerInfoForm from "./BorrowerForm/BorrowerInfoForm";
import TransactionDetailsForm from "./TransactionForm/TransactionDetailsForm";
import TransactionDetailsFormContent from "./TransactionForm/TransactionDetailsFormContent";

const steps = ["Borrower", "Transaction", "Credit", "Source"];


export default function BorrowerSummary({
  onCollapseAll,
}: {
  onCollapseAll?: () => void;
}) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        width: "100%",
        mt: 3,
        px: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1400 }}>
          {/* Progress Header */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
            flexWrap="wrap"
            rowGap={2}
          >
            {/* Centered Stepper */}
            <Box display="flex" justifyContent="center" flex={1}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                flexWrap="wrap"
              >
                {steps.map((step, index) => (
                  <Box key={step} display="flex" alignItems="center">
                    <CheckCircleIcon
                      sx={{ fontSize: 18, color: "primary.main", mr: 0.5 }}
                    />
                    <Typography
                      variant="body1"
                      fontWeight={700}
                      color="text.primary"
                      sx={{ mr: 2 }}
                    >
                      {step}
                    </Typography>
                    {index !== steps.length - 1 && (
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ borderColor: "#e0e0e0", mx: 1 }}
                      />
                    )}
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Collapse All Button */}
            <Button
              variant="outlined"
              size="small"
              startIcon={<KeyboardDoubleArrowUpIcon fontSize="small" />}
              sx={{
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 1,
                color: "primary.main",
                borderColor: "primary.main",
                ml: 2,
                "&:hover": {
                  backgroundColor: "rgba(25, 118, 210, 0.04)",
                  borderColor: "primary.main",
                },
              }}
              onClick={onCollapseAll}
            >
              Collapse All
            </Button>
          </Box>

          {/* Borrower Info Content */}
          <BorrowerInfoForm />
          {/* Transaction Details Info Content */}
          <TransactionDetailsFormContent />
      </Box>
    </Box>
  );
}
