"use client";

import { InfoLabel } from "@/theme/AppTheme";
import {
  Box,
  Checkbox,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";

export default function MortgageLoanForm() {
  const [formData, setFormData] = useState({
    enforceCountyLoanLimit: true,
    purchasePrice: "$500,000",
    downPaymentPercent: "20",
    downPaymentAmount: "$100,000.00",
    baseLoanAmount: "$400,000",
    mipFf: "$6,200",
    totalLoanAmount: "$416,664",
    estimatedClosingDate: dayjs("2022-09-30"),
    interestFrom: dayjs("2022-10-01"),
    interestTo: dayjs("2022-11-01"),
    noteRate: "",
    qualRate: "",
    unDiscountedRate: "",
    term: "",
    dueIn: "",
    monthlyPayment: "$1,600",
    interestCredit: "",
    rateLockDescription: "",
    lockDate: dayjs("2022-09-26"),
    numberOfDays: "40",
    lockExpiresDate: dayjs("2022-11-05"),
    lastRateSetDate: dayjs("2022-09-26"),
    totalMonthlyPayment: "$2,000",
    incomeMonthly: "$9,333",
    willThereBeImpounds: "Yes",
    impoundTypes: "Taxes and Insurance (T&I)",
    mipFundingGuaranteeFinanced: "",
    miNotRequired: false,
    uwApprovedInvestors: "",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // const textFieldProps = {
  //   fullWidth: true,
  //   variant: "outlined" as const,
  //   InputLabelProps: { shrink: true },
  // };

  const dateFieldSlotProps = {
    textField: {
      fullWidth: true,
      sx: { my: 1 },
    },
  };

  return (
    <Box>
      <Grid size={{ xs: 12 }} sx={{ mb: 2, mt: 2 }}>
        <Divider />
      </Grid>
      <InfoLabel sx={{ mt: 1, mb: 2 }}>Mortgage Loan Information</InfoLabel>

      <Grid container spacing={2}>
        {/* LEFT COLUMN */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            {/* Checkbox */}
            <Box display="flex" alignItems="center" mb={2}>
              <Checkbox
                size="small"
                checked={formData.enforceCountyLoanLimit}
                onChange={(e) =>
                  handleInputChange("enforceCountyLoanLimit", e.target.checked)
                }
              />
              <Typography variant="body2" ml={1}>
                Enforce County Loan Limit
              </Typography>
            </Box>

            {/* Purchase Price */}
            <TextField
              label="Purchase Price"
              value={formData.purchasePrice}
              onChange={(e) =>
                handleInputChange("purchasePrice", e.target.value)
              }
             //{...textFieldProps}
             // sx={{ mb: 2 }}  
            />

            {/* Down Payment Row */}
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid size={{ xs: 6 }}>
                <TextField
                  label="Down Payment"
                  value={formData.downPaymentPercent}
                  onChange={(e) =>
                    handleInputChange("downPaymentPercent", e.target.value)
                  }
                  InputProps={{ endAdornment: <Typography>%</Typography> }}
                 // {...textFieldProps}
                />
              </Grid>
              <Grid size={{ xs: 6 }}>
                <TextField
                  label="Amount"
                  value={formData.downPaymentAmount}
                  onChange={(e) =>
                    handleInputChange("downPaymentAmount", e.target.value)
                  }
                // {...textFieldProps}
                />
              </Grid>
            </Grid>

            <TextField
              label="Base Loan Amount"
              value={formData.baseLoanAmount}
              onChange={(e) =>
                handleInputChange("baseLoanAmount", e.target.value)
              }
             // {...textFieldProps}
             // sx={{ mb: 2 }}
            />

            <TextField
              label="MIP/FF"
              value={formData.mipFf}
              onChange={(e) => handleInputChange("mipFf", e.target.value)}
             // {...textFieldProps}
             // sx={{ mb: 2 }}
            />

            <TextField
              label="Total Loan Amount"
              value={formData.totalLoanAmount}
              onChange={(e) =>
                handleInputChange("totalLoanAmount", e.target.value)
              }
             // {...textFieldProps}
             // sx={{ mb: 2 }}
            />

            {/* Dates */}
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid size={{ xs: 4 }}>
                <DatePicker
                  label="Estimated Closing Date"
                  value={formData.estimatedClosingDate}
                  onChange={(v) => handleInputChange("estimatedClosingDate", v)}
                  slotProps={dateFieldSlotProps}
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <DatePicker
                  label="Interest From"
                  value={formData.interestFrom}
                  onChange={(v) => handleInputChange("interestFrom", v)}
                  slotProps={dateFieldSlotProps}
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <DatePicker
                  label="Interest To"
                  value={formData.interestTo}
                  onChange={(v) => handleInputChange("interestTo", v)}
                  slotProps={dateFieldSlotProps}
                />
              </Grid>
            </Grid>

            {/* Dropdowns and Date Fields */}
            <TextField
              select
              label="Interest Credit?"
              value={formData.interestCredit}
              onChange={(e) =>
                handleInputChange("interestCredit", e.target.value)
              }
             // {...textFieldProps}
            // sx={{ mb: 2 }}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField>

            <TextField
              label="Rate Lock Description"
              value={formData.rateLockDescription}
              onChange={(e) =>
                handleInputChange("rateLockDescription", e.target.value)
              }
            //  {...textFieldProps}
             // sx={{ mb: 2 }}
            />

            <DatePicker
              label="Lock Date"
              value={formData.lockDate}
              onChange={(v) => handleInputChange("lockDate", v)}
              slotProps={dateFieldSlotProps}
            />
            <TextField
              label="Number of Days"
              value={formData.numberOfDays}
              onChange={(e) =>
                handleInputChange("numberOfDays", e.target.value)
              }
             // {...textFieldProps}
             // sx={{ my: 2 }}
            />
            <DatePicker
              label="Lock Expires Date"
              value={formData.lockExpiresDate}
              onChange={(v) => handleInputChange("lockExpiresDate", v)}
              slotProps={dateFieldSlotProps}
            />
            <DatePicker
              label="Last Rate Set Date"
              value={formData.lastRateSetDate}
              onChange={(v) => handleInputChange("lastRateSetDate", v)}
              slotProps={dateFieldSlotProps}
             sx={{ mt: 2 }}
            />
          </Box>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            {/* Spacer to align with left column's checkbox row */}
            <Box height="25px" mb={2} />
            <TextField
              label="Note Rate %"
              value={formData.noteRate}
              onChange={(e) => handleInputChange("noteRate", e.target.value)}
             // {...textFieldProps}
             // sx={{ mb: 2 }}
            />

            <TextField
              label="Qual Rate %"
              value={formData.qualRate}
              onChange={(e) => handleInputChange("qualRate", e.target.value)}
             // {...textFieldProps}
             sx={{ mb: 2 }}
            />

            <TextField
              label="UnDiscounted Rate %"
              value={formData.unDiscountedRate}
              onChange={(e) =>
                handleInputChange("unDiscountedRate", e.target.value)
              }
             // {...textFieldProps}
             // sx={{ mb: 2 }}
            />

            <TextField
              label="Term"
              value={formData.term}
              onChange={(e) => handleInputChange("term", e.target.value)}
             // {...textFieldProps}
              InputProps={{ endAdornment: <Typography>Months</Typography> }}
             sx={{ mb: 2 }}
            />

            <TextField
              label="Due In"
              value={formData.dueIn}
              onChange={(e) => handleInputChange("dueIn", e.target.value)}
             // {...textFieldProps}
              InputProps={{ endAdornment: <Typography>Months</Typography> }}
             // sx={{ mb: 2 }}
            />

            <TextField
              label="Monthly Payment"
              value={formData.monthlyPayment}
              onChange={(e) =>
                handleInputChange("monthlyPayment", e.target.value)
              }
             // {...textFieldProps}
             // sx={{ mb: 2 }}
            />

            <TextField
              label="Total Monthly Payment"
              value={formData.totalMonthlyPayment}
              onChange={(e) =>
                handleInputChange("totalMonthlyPayment", e.target.value)
              }
             // {...textFieldProps}
             // sx={{ mb: 3}}
            />

            <TextField
              label="Income (Monthly)"
              value={formData.incomeMonthly}
              onChange={(e) =>
                handleInputChange("incomeMonthly", e.target.value)
              }
             // {...textFieldProps}
            // sx={{ mb: 2 }}
            />

            <TextField
              label="Will there be Impounds?"
              value={formData.willThereBeImpounds}
              onChange={(e) =>
                handleInputChange("willThereBeImpounds", e.target.value)
              }
             // {...textFieldProps}
             // sx={{ mb: 2 }}
            />

            <TextField
              label="Impound Types"
              value={formData.impoundTypes}
              onChange={(e) =>
                handleInputChange("impoundTypes", e.target.value)
              }
             // {...textFieldProps}
             // sx={{ mb: 2 }}
            />

            <TextField
              select
              label="MIP / Funding / Guarantee Financed?"
              value={formData.mipFundingGuaranteeFinanced}
              onChange={(e) =>
                handleInputChange("mipFundingGuaranteeFinanced", e.target.value)
              }
             // {...textFieldProps}
             // sx={{ mb: 2 }}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField>

            <Box display="flex" alignItems="center">
              <Checkbox
                size="small"
                checked={formData.miNotRequired}
                onChange={(e) =>
                  handleInputChange("miNotRequired", e.target.checked)
                }
              />
              <Typography variant="body2">MI is not required</Typography>
            </Box>
          </Box>
        </Grid>

        {/* BOTTOM TEXTAREA */}
        <Grid size={{ xs: 12 }}>
          <TextField
            multiline
            rows={3}
            label="UW Approved Investors"
            value={formData.uwApprovedInvestors}
            onChange={(e) =>
              handleInputChange("uwApprovedInvestors", e.target.value)
            }
           // {...textFieldProps}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
