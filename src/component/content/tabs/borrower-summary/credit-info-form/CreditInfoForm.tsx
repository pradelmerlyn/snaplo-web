"use client";

import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CollapsibleSection from "@/component/ui/CollapsibleSection";
import { useState } from "react";

export default function CreditInfoForm() {
  const [formData, setFormData] = useState({
    experianFico: "",
    transUnionEmpirica: "",
    equifaxBeacon: "",
    minRequiredFico: "",
    creditScoreDecision: "",
    avgRepCreditScore: "",
    creditReferenceNo: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <CollapsibleSection title="CREDIT INFORMATION">
      <Grid container spacing={3}>
        {/* LEFT SIDE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                mb={1}
              >
                <Box display="flex" gap={1}>
                  <Button size="small" variant="contained" color="primary">
                    ORDER CREDIT
                  </Button>
                  <Button size="small" variant="contained" disabled>
                    VIEW CREDIT
                  </Button>
                </Box>
              </Box>
              <TextField
                label="Experian / FICO"
                value={formData.experianFico}
                onChange={(e) =>
                  handleInputChange("experianFico", e.target.value)
                }
               // {...textFieldProps}
                sx={{ my: 1 }}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                label="TransUnion / Empirica"
                value={formData.transUnionEmpirica}
                onChange={(e) =>
                  handleInputChange("transUnionEmpirica", e.target.value)
                }
               // {...textFieldProps}
                sx={{ my: 1 }}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                label="Equifax / BEACON"
                value={formData.equifaxBeacon}
                onChange={(e) =>
                  handleInputChange("equifaxBeacon", e.target.value)
                }
               // {...textFieldProps}
                sx={{ my: 1 }}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                label="Minimum Required FICO"
                value={formData.minRequiredFico}
                onChange={(e) =>
                  handleInputChange("minRequiredFico", e.target.value)
                }
               // {...textFieldProps}
                sx={{ my: 1 }}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              {/* <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={0.5}
              >
                <Tooltip title="Used to determine eligibility">
                  <IconButton size="small">
                    <InfoOutlinedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box> */}
              <TextField
                label="Credit Score for Decision Making"
                value={formData.creditScoreDecision}
                onChange={(e) =>
                  handleInputChange("creditScoreDecision", e.target.value)
                }
               // {...textFieldProps}
                sx={{ my: 1 }}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                label="Average Representative Credit Score"
                value={formData.avgRepCreditScore}
                onChange={(e) =>
                  handleInputChange("avgRepCreditScore", e.target.value)
                }
               // {...textFieldProps}
                disabled
                sx={{ my: 1 }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              {/* spacer to align with left-side buttons row */}
              <Box height={32} mb={0.5} />
              <TextField
                label="Experian / FICO"
                disabled
               // {...textFieldProps}
                sx={{ my: 1 }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                label="TransUnion / Empirica"
                disabled
               // {...textFieldProps}
                sx={{ my: 1 }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                label="Equifax / BEACON"
                disabled
               // {...textFieldProps}
                sx={{ my: 1 }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                label="Minimum Required FICO"
                disabled
               // {...textFieldProps}
                sx={{ my: 1 }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                label="Credit Reference #"
                value={formData.creditReferenceNo}
                onChange={(e) =>
                  handleInputChange("creditReferenceNo", e.target.value)
                }
               // {...textFieldProps}
                sx={{ my: 1 }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CollapsibleSection>
  );
}
