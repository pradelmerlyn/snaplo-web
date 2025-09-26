"use client";

import {
  Checkbox,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Box,
  Divider,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { InfoLabel } from "@/theme/AppTheme";
import CollapsibleSection from "@/component/ui/CollapsibleSection";
import { useTheme } from "@mui/material";

export default function TransactionDetailsForm() {
  const theme = useTheme();

  return (
      <Grid container spacing={4} >
        {/* LEFT: Transaction Details */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box px={1}>
            <InfoLabel sx={{ mt: 3 }}>Transaction Details</InfoLabel>

            <TextField
              label="Loan Program"
              fullWidth
              defaultValue="CF30"
              sx={{ my: 2.5 }}
            />

            <TextField
              label="Doc Type"
              select
              fullWidth
              defaultValue="Full Documentation"
              sx={{ my: 1 }}
            >
              <MenuItem value="Full Documentation">
                (F) Full Documentation
              </MenuItem>
            </TextField>

            <TextField
              label="AUS Type"
              select
              fullWidth
              defaultValue="DU"
              sx={{ my: 1 }}
            >
              <MenuItem value="DU">DU</MenuItem>
              <MenuItem value="LP">LP</MenuItem>
            </TextField>
          </Box>
        </Grid>

        {/* RIGHT: MCC Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box px={1}>
            <InfoLabel sx={{ mt: 3 }}>
              Mortgage Credit Certificate Details
            </InfoLabel>

            <TextField
              label="Mortgage Credit Certificate (MCC)"
              select
              fullWidth
              defaultValue=""
              sx={{ my: 2.5 }}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField>

            <TextField
              label="Mortgage Credit Certificate Name"
              select
              fullWidth
              defaultValue=""
              sx={{ my: 1 }}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="first_time">First Time Buyer</MenuItem>
              <MenuItem value="veteran">Veteran</MenuItem>
            </TextField>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <DatePicker
                  label="MCC Reservation Date"
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      size: "small",
                      sx: { my: 1 },
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  display="flex"
                  alignItems="center"
                  height="100%"
                  sx={{ pl: 1, pt: 2.5 }}
                >
                  <Checkbox size="small" />
                  <Typography variant="body2">Builder Loan</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  label="MCC Reservation Number"
                  fullWidth
                  sx={{ mt: 1 }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <DatePicker
                  label="Expiration Date"
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      size: "small",
                      sx: { mt: 1 },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Divider before Loan Information */}
        <Grid size={{ xs: 12 }}>
          <Divider/>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box px={1}>
            <InfoLabel >Loan Information</InfoLabel>

            <TextField
              label="Loan Type"
              select
              fullWidth
              defaultValue="Conv"
              sx={{ mt: 3, mb: 1 }} // Top margin adjusted for alignment
            >
              <MenuItem value="Conv">Conventional</MenuItem>
              <MenuItem value="FHA">FHA</MenuItem>
              <MenuItem value="VA">VA</MenuItem>
            </TextField>

            <TextField
              label="Lien Position"
              select
              fullWidth
              defaultValue="First"
              sx={{ my: 1 }}
            >
              <MenuItem value="First">First</MenuItem>
              <MenuItem value="Second">Second</MenuItem>
            </TextField>

            <TextField
              label="Purpose of Loan"
              select
              fullWidth
              defaultValue="Purchase"
              sx={{ my: 1 }}
            >
              <MenuItem value="Purchase">Purchase</MenuItem>
              <MenuItem value="Refinance">Refinance</MenuItem>
            </TextField>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box px={1}>
            <InfoLabel sx={{ mt: 1.5 }}></InfoLabel>

            <TextField
              label="Documentation Type"
              select
              fullWidth
              defaultValue="Full Documentation"
              sx={{ mt: 6, mb: 1 }} // Top margin adjusted for alignment
            >
              <MenuItem value="Full Documentation">Full Documentation</MenuItem>
              <MenuItem value="Alt Doc">Alt Doc</MenuItem>
            </TextField>

            <TextField
              label="Property Will Be"
              select
              fullWidth
              defaultValue="Primary"
              sx={{ my: 1 }}
            >
              <MenuItem value="Primary">Primary</MenuItem>
              <MenuItem value="Secondary">Secondary</MenuItem>
              <MenuItem value="Investment">Investment</MenuItem>
            </TextField>

            <TextField
              label="Amortization Type"
              select
              fullWidth
              defaultValue="Fixed Rate"
              sx={{ my: 1 }}
            >
              <MenuItem value="Fixed Rate">Fixed Rate</MenuItem>
              <MenuItem value="ARM">ARM</MenuItem>
            </TextField>
          </Box>
        </Grid>
      </Grid>
  );
}
