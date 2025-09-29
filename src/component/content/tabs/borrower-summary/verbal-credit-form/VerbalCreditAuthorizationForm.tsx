"use client";

import { Box, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { StyledPaper } from "@/theme/AppTheme";
import CollapsibleSection from "@/component/ui/CollapsibleSection";
import dayjs, { Dayjs } from "dayjs";

export default function VerbalCreditAuthorizationForm() {
  const [formData, setFormData] = useState({
    verified: true,
    name: "",
    date: dayjs(),
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <CollapsibleSection title="Verbal Credit Authorization">
      <Box px={2} py={2}>
        {/* Checkbox Label */}
        <Box display="flex" alignItems="center" mb={2}>
          <Checkbox
            size="small"
            checked={formData.verified}
            onChange={(e) => handleChange("verified", e.target.checked)}
            sx={{ p: 0.5, pr: 1 }}
          />
          <Typography variant="body2" fontWeight={600}>
            I hereby verify that I spoke with the borrower(s) and they verbally
            authorized AFN to pull their credit.
          </Typography>
        </Box>

        {/* Name and Date Fields */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              size="small"
              label="Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <DatePicker
              label="Date"
              value={formData.date}
              onChange={(newValue: Dayjs | null) =>
                handleChange("date", newValue)
              }
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                  InputLabelProps: { shrink: true },
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </CollapsibleSection>
  );
}
