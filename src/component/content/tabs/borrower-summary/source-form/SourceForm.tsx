"use client";

import { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Checkbox,
  Typography,
} from "@mui/material";
import CollapsibleSection from "@/component/ui/CollapsibleSection";

export default function SourceForm() {
  const [state, setState] = useState({
    payrollLeadSource: "Self-Generated",
    branchMarketing: "",
    teamLoan: true,
    teamFrom: "Alonzo Graham",
    teamTo: "Matthew Lee",
    transitionalLoan: false,
    transitionalFrom: "",
    terminatedLO: false,
    terminatedFrom: "",
    insideReferral: true,
    insideFrom: "Alonzo Graham",
    insideTo: "Matthew Lee",
    outsideReferralLoan: "",
    outsideReferral: "",
  });

  const setField = (field: string, value: any) =>
    setState((prev) => ({ ...prev, [field]: value }));

  // App-wide small, outlined, full width fields
  const textFieldProps = {
    fullWidth: true,
    variant: "outlined" as const,
    size: "small" as const,
    InputLabelProps: { shrink: true },
  };

  return (
    <CollapsibleSection title="SOURCE">
      <Grid container spacing={3}>
        {/* LEFT COLUMN */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box px={1}>
            <TextField
              label="Payroll Lead Source"
              value={state.payrollLeadSource}
              select
              {...textFieldProps}
              sx={{ mt: 2 }}
              onChange={(e) => setField("payrollLeadSource", e.target.value)}
            >
              <MenuItem value="Self-Generated">Self-Generated</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Referral">Referral</MenuItem>
            </TextField>

            <TextField
              label="Branch Marketing"
              value={state.branchMarketing}
              select
              {...textFieldProps}
              sx={{ mt: 2 }}
              onChange={(e) => setField("branchMarketing", e.target.value)}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Campaign A">Campaign A</MenuItem>
              <MenuItem value="Campaign B">Campaign B</MenuItem>
            </TextField>

            <Box display="flex" alignItems="center" mt={1}>
              <Checkbox
                size="small"
                checked={state.teamLoan}
                onChange={(e) => setField("teamLoan", e.target.checked)}
              />
              <Typography variant="body2">Team Loan</Typography>
            </Box>

            <Grid container spacing={2} sx={{ my: 0.5 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  label="From"
                  value={state.teamFrom}
                  {...textFieldProps}
                  disabled={!state.teamLoan}
                  sx={{ mt: 2 }}
                  onChange={(e) => setField("teamFrom", e.target.value)}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  label="To"
                  value={state.teamTo}
                  {...textFieldProps}
                  disabled={!state.teamLoan}
                  sx={{ mt: 2 }}
                  onChange={(e) => setField("teamTo", e.target.value)}
                />
              </Grid>
            </Grid>

            <Box display="flex" alignItems="center" mt={1}>
              <Checkbox
                size="small"
                checked={state.transitionalLoan}
                onChange={(e) => setField("transitionalLoan", e.target.checked)}
              />
              <Typography variant="body2">Transitional Loan</Typography>
            </Box>

            <TextField
              label="From"
              value={state.transitionalFrom}
              {...textFieldProps}
              disabled={!state.transitionalLoan}
              sx={{ mt: 2 }}
              onChange={(e) => setField("transitionalFrom", e.target.value)}
            />
          </Box>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box px={1}>
            <Box display="flex" alignItems="center" mt={1}>
              <Checkbox
                size="small"
                checked={state.terminatedLO}
                onChange={(e) => setField("terminatedLO", e.target.checked)}
              />
              <Typography variant="body2">Terminated LO</Typography>
            </Box>
            <TextField
              label="From"
              value={state.terminatedFrom}
              {...textFieldProps}
              disabled={!state.terminatedLO}
              sx={{ mt: 2 }}
              onChange={(e) => setField("terminatedFrom", e.target.value)}
            />

            <Box display="flex" alignItems="center" mt={1}>
              <Checkbox
                size="small"
                checked={state.insideReferral}
                onChange={(e) => setField("insideReferral", e.target.checked)}
              />
              <Typography variant="body2">Inside Referral</Typography>
            </Box>
            <Grid container spacing={2} sx={{ my: 0.5 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  label="From"
                  value={state.insideFrom}
                  {...textFieldProps}
                  disabled={!state.insideReferral}
                  sx={{ mt: 2 }}
                  onChange={(e) => setField("insideFrom", e.target.value)}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  label="To"
                  value={state.insideTo}
                  {...textFieldProps}
                  disabled={!state.insideReferral}
                  sx={{ mt: 2 }}
                  onChange={(e) => setField("insideTo", e.target.value)}
                />
              </Grid>
            </Grid>

            <TextField
              label="Is this an Outside Referral Loan?"
              value={state.outsideReferralLoan}
              select
              {...textFieldProps}
              sx={{ mt: 2 }}
              onChange={(e) => setField("outsideReferralLoan", e.target.value)}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>

            <TextField
              label="Outside Referral"
              value={state.outsideReferral}
              {...textFieldProps}
              sx={{ mt: 2 }}
              onChange={(e) => setField("outsideReferral", e.target.value)}
            />
          </Box>
        </Grid>
      </Grid>
    </CollapsibleSection>
  );
}
