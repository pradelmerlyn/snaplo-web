"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  IconButton,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
} from "@mui/material";
import { InfoLabel, InfoValue } from "../../../AppTheme";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

export default function LeadBorrowerForm({
  globalEditMode = false,
  onGlobalSave,
  onGlobalCancel,
}: {
  globalEditMode?: boolean;
  onGlobalSave?: () => void;
  onGlobalCancel?: () => void;
}) {
  const [localEditMode, setLocalEditMode] = useState(false);
  const [sameAddress, setSameAddress] = useState(true);

  const isEditMode = globalEditMode || localEditMode;

  // Borrower form state
  const [borrowerData, setBorrowerData] = useState({
    firstName: "John",
    middleName: "",
    lastName: "Smith",
    mobilePrimary: "(909) 867-5309",
    work: "(213) 321-6690",
    home: "(619) 957-6438",
    email: "jsmith@email.com",
    dateOfBirth: "01/05/1986",
    annualBaseIncome: "$ 80,000.00",
    address: "456 Main Street",
    city: "Brea",
    state: "CA",
    zipCode: "98224",
  });

  // Co-borrower form state
  const [coBorrowerData, setCoBorrowerData] = useState({
    firstName: "Mary",
    middleName: "",
    lastName: "Smith",
    mobilePrimary: "(909) 867-4302",
    work: "",
    home: "",
    email: "msmith@email.com",
    dateOfBirth: "07/31/1988",
    annualBaseIncome: "$ 80,000.00",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  // Backup states for cancel functionality
  const [borrowerBackup, setBorrowerBackup] = useState(borrowerData);
  const [coBorrowerBackup, setCoBorrowerBackup] = useState(coBorrowerData);

  const handleLocalEdit = () => {
    setBorrowerBackup(borrowerData);
    setCoBorrowerBackup(coBorrowerData);
    setLocalEditMode(true);
  };

  const handleLocalSave = () => {
    setLocalEditMode(false);
    console.log("Saving borrower data:", borrowerData);
    console.log("Saving co-borrower data:", coBorrowerData);
  };

  const handleLocalCancel = () => {
    setBorrowerData(borrowerBackup);
    setCoBorrowerData(coBorrowerBackup);
    setLocalEditMode(false);
  };

  // Helper component for form fields
  const FormField = ({
    label,
    value,
    onChange,
    isEditing,
    name,
    type = "text",
    gridSize = { xs: 12, md: 3 },
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    isEditing: boolean;
    name: string;
    type?: string;
    gridSize?: { xs: number; md: number };
  }) => (
    <Grid size={gridSize}>
      <InfoLabel>{label}</InfoLabel>
      {isEditing ? (
        <TextField
          fullWidth
          value={value}
          onChange={(e) => onChange(e.target.value)}
          variant="outlined"
          size="small"
          type={type}
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "12px",
              fontWeight: 600,
              backgroundColor: "white",
              "& fieldset": {
                borderColor: "#e0e0e0",
              },
              "&:hover fieldset": {
                borderColor: "#5c6bc0",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#5c6bc0",
              },
            },
            "& .MuiOutlinedInput-input": {
              padding: "6px 8px",
            },
          }}
        />
      ) : (
        <InfoValue sx={{ fontSize: "14px", fontWeight: 600 }}>
          {value || ""}
        </InfoValue>
      )}
    </Grid>
  );

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: 1000, width: "100%" }}>
        {/* Combined Form Section */}
        <Paper
          elevation={1}
          sx={{ borderRadius: 3, border: "1px solid #e0e0e0", p: 2.5 }}
        >
          {/* Form Header with Edit Icon */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              {localEditMode ? (
                <>
                  <IconButton
                    size="small"
                    sx={{ color: "#4caf50" }}
                    onClick={handleLocalSave}
                  >
                    <SaveIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{ color: "#f44336" }}
                    onClick={handleLocalCancel}
                  >
                    <CancelIcon fontSize="small" />
                  </IconButton>
                </>
              ) : !globalEditMode ? (
                <IconButton
                  size="small"
                  sx={{ color: "#5c6bc0" }}
                  onClick={handleLocalEdit}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              ) : null}
            </Box>
          </Box>

          {/* Borrower Section */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "#333", fontSize: "16px", mb: 2 }}
            >
              BORROWER
            </Typography>

            <Grid container spacing={2}>
              {/* First Row */}
              <FormField
                label="First Name"
                value={borrowerData.firstName}
                onChange={(value) =>
                  setBorrowerData({ ...borrowerData, firstName: value })
                }
                isEditing={isEditMode}
                name="firstName"
              />
              <FormField
                label="Mobile Primary"
                value={borrowerData.mobilePrimary}
                onChange={(value) =>
                  setBorrowerData({ ...borrowerData, mobilePrimary: value })
                }
                isEditing={isEditMode}
                name="mobilePrimary"
                type="tel"
              />
              <FormField
                label="Email"
                value={borrowerData.email}
                onChange={(value) =>
                  setBorrowerData({ ...borrowerData, email: value })
                }
                isEditing={isEditMode}
                name="email"
                type="email"
              />
              <FormField
                label="Address"
                value={borrowerData.address}
                onChange={(value) =>
                  setBorrowerData({ ...borrowerData, address: value })
                }
                isEditing={isEditMode}
                name="address"
              />

              {/* Second Row */}
              <FormField
                label="Middle Name"
                value={borrowerData.middleName}
                onChange={(value) =>
                  setBorrowerData({ ...borrowerData, middleName: value })
                }
                isEditing={isEditMode}
                name="middleName"
              />
              <FormField
                label="Work"
                value={borrowerData.work}
                onChange={(value) =>
                  setBorrowerData({ ...borrowerData, work: value })
                }
                isEditing={isEditMode}
                name="work"
                type="tel"
              />
              <FormField
                label="Date of Birth"
                value={borrowerData.dateOfBirth}
                onChange={(value) =>
                  setBorrowerData({ ...borrowerData, dateOfBirth: value })
                }
                isEditing={isEditMode}
                name="dateOfBirth"
              />
              <FormField
                label="City"
                value={borrowerData.city}
                onChange={(value) =>
                  setBorrowerData({ ...borrowerData, city: value })
                }
                isEditing={isEditMode}
                name="city"
              />

              {/* Third Row */}
              <FormField
                label="Last Name"
                value={borrowerData.lastName}
                onChange={(value) =>
                  setBorrowerData({ ...borrowerData, lastName: value })
                }
                isEditing={isEditMode}
                name="lastName"
              />
              <FormField
                label="Home"
                value={borrowerData.home}
                onChange={(value) =>
                  setBorrowerData({ ...borrowerData, home: value })
                }
                isEditing={isEditMode}
                name="home"
                type="tel"
              />
              <FormField
                label="Annual Base Income"
                value={borrowerData.annualBaseIncome}
                onChange={(value) =>
                  setBorrowerData({ ...borrowerData, annualBaseIncome: value })
                }
                isEditing={isEditMode}
                name="annualBaseIncome"
              />
              <FormField
                label="State"
                value={borrowerData.state}
                onChange={(value) =>
                  setBorrowerData({ ...borrowerData, state: value })
                }
                isEditing={isEditMode}
                name="state"
                gridSize={{ xs: 12, md: 1.5 }}
              />
              <FormField
                label="ZIP Code"
                value={borrowerData.zipCode}
                onChange={(value) =>
                  setBorrowerData({ ...borrowerData, zipCode: value })
                }
                isEditing={isEditMode}
                name="zipCode"
                gridSize={{ xs: 12, md: 1.5 }}
              />
            </Grid>
          </Box>

          {/* Co-Borrower Section */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#333", fontSize: "16px" }}
              >
                CO-BORROWER
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sameAddress}
                    onChange={(e) => setSameAddress(e.target.checked)}
                    size="small"
                    sx={{
                      color: "#5c6bc0",
                      "&.Mui-checked": {
                        color: "#5c6bc0",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    variant="body2"
                    sx={{ color: "#666", fontSize: "12px" }}
                  >
                    Same address as borrower
                  </Typography>
                }
              />
            </Box>

            <Grid container spacing={2}>
              {/* First Row */}
              <FormField
                label="First Name"
                value={coBorrowerData.firstName}
                onChange={(value) =>
                  setCoBorrowerData({ ...coBorrowerData, firstName: value })
                }
                isEditing={isEditMode}
                name="firstName"
              />
              <FormField
                label="Mobile Primary"
                value={coBorrowerData.mobilePrimary}
                onChange={(value) =>
                  setCoBorrowerData({ ...coBorrowerData, mobilePrimary: value })
                }
                isEditing={isEditMode}
                name="mobilePrimary"
                type="tel"
              />
              <FormField
                label="Email"
                value={coBorrowerData.email}
                onChange={(value) =>
                  setCoBorrowerData({ ...coBorrowerData, email: value })
                }
                isEditing={isEditMode}
                name="email"
                type="email"
              />
              {!sameAddress && (
                <FormField
                  label="Address"
                  value={coBorrowerData.address}
                  onChange={(value) =>
                    setCoBorrowerData({ ...coBorrowerData, address: value })
                  }
                  isEditing={isEditMode}
                  name="address"
                />
              )}
              {sameAddress && (
                <Grid size={{ xs: 12, md: 3 }}>
                  {/* Empty space for same address */}
                </Grid>
              )}

              {/* Second Row */}
              <FormField
                label="Middle Name"
                value={coBorrowerData.middleName}
                onChange={(value) =>
                  setCoBorrowerData({ ...coBorrowerData, middleName: value })
                }
                isEditing={isEditMode}
                name="middleName"
              />
              <FormField
                label="Work"
                value={coBorrowerData.work}
                onChange={(value) =>
                  setCoBorrowerData({ ...coBorrowerData, work: value })
                }
                isEditing={isEditMode}
                name="work"
                type="tel"
              />
              <FormField
                label="Date of Birth"
                value={coBorrowerData.dateOfBirth}
                onChange={(value) =>
                  setCoBorrowerData({ ...coBorrowerData, dateOfBirth: value })
                }
                isEditing={isEditMode}
                name="dateOfBirth"
              />
              {!sameAddress && (
                <FormField
                  label="City"
                  value={coBorrowerData.city}
                  onChange={(value) =>
                    setCoBorrowerData({ ...coBorrowerData, city: value })
                  }
                  isEditing={isEditMode}
                  name="city"
                />
              )}
              {sameAddress && (
                <Grid size={{ xs: 12, md: 3 }}>
                  {/* Empty space for same address */}
                </Grid>
              )}

              {/* Third Row */}
              <FormField
                label="Last Name"
                value={coBorrowerData.lastName}
                onChange={(value) =>
                  setCoBorrowerData({ ...coBorrowerData, lastName: value })
                }
                isEditing={isEditMode}
                name="lastName"
              />
              <FormField
                label="Home"
                value={coBorrowerData.home}
                onChange={(value) =>
                  setCoBorrowerData({ ...coBorrowerData, home: value })
                }
                isEditing={isEditMode}
                name="home"
                type="tel"
              />
              <FormField
                label="Annual Base Income"
                value={coBorrowerData.annualBaseIncome}
                onChange={(value) =>
                  setCoBorrowerData({
                    ...coBorrowerData,
                    annualBaseIncome: value,
                  })
                }
                isEditing={isEditMode}
                name="annualBaseIncome"
              />
              {!sameAddress && (
                <>
                  <FormField
                    label="State"
                    value={coBorrowerData.state}
                    onChange={(value) =>
                      setCoBorrowerData({ ...coBorrowerData, state: value })
                    }
                    isEditing={isEditMode}
                    name="state"
                  />
                  <Grid size={{ xs: 12, md: 9 }}>{/* Empty space */}</Grid>
                  <FormField
                    label="ZIP Code"
                    value={coBorrowerData.zipCode}
                    onChange={(value) =>
                      setCoBorrowerData({ ...coBorrowerData, zipCode: value })
                    }
                    isEditing={isEditMode}
                    name="zipCode"
                  />
                </>
              )}
              {sameAddress && (
                <Grid size={{ xs: 12, md: 3 }}>
                  {/* Empty space for same address */}
                </Grid>
              )}
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
