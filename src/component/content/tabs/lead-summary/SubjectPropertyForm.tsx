"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { InfoLabel, InfoValue } from "../../../../theme/AppTheme";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

export default function SubjectPropertyForm({
  globalEditMode = false,
}: {
  globalEditMode?: boolean;
}) {
  const [localEditMode, setLocalEditMode] = useState(false);

  const isEditMode = globalEditMode || localEditMode;

  // Property form state
  const [propertyData, setPropertyData] = useState({
    address: "456 Main Street",
    city: "Brea",
    state: "CA",
    zipCode: "98224",
    occupancyType: "Primary Residence",
    propertyType: "Detached 1 Unit",
    legalDescription: "",
    numberOfUnits: "1",
  });

  // Backup state for cancel functionality
  const [propertyBackup, setPropertyBackup] = useState(propertyData);

  const handleLocalEdit = () => {
    setPropertyBackup(propertyData);
    setLocalEditMode(true);
  };

  const handleLocalSave = () => {
    setLocalEditMode(false);
    console.log("Saving property data:", propertyData);
  };

  const handleLocalCancel = () => {
    setPropertyData(propertyBackup);
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
    gridSize = { xs: 12, md: 4 },
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
    <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: 1000, width: "100%" }}>
        {/* Subject Property Form */}
        <Paper
          elevation={1}
          sx={{ borderRadius: 3, border: "1px solid #e0e0e0", p: 2.5 }}
        >
          {/* Form Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "#333", fontSize: "16px" }}
            >
              SUBJECT PROPERTY
            </Typography>
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

          <Grid container spacing={1.5}>
            {/* First Row */}
            <FormField
              label="Address"
              value={propertyData.address}
              onChange={(value) =>
                setPropertyData({ ...propertyData, address: value })
              }
              isEditing={isEditMode}
              name="address"
            />
            <FormField
              label="Occupancy Type"
              value={propertyData.occupancyType}
              onChange={(value) =>
                setPropertyData({ ...propertyData, occupancyType: value })
              }
              isEditing={isEditMode}
              name="occupancyType"
            />
            <FormField
              label="Legal Description"
              value={propertyData.legalDescription}
              onChange={(value) =>
                setPropertyData({ ...propertyData, legalDescription: value })
              }
              isEditing={isEditMode}
              name="legalDescription"
            />

            {/* Second Row */}
            <FormField
              label="City"
              value={propertyData.city}
              onChange={(value) =>
                setPropertyData({ ...propertyData, city: value })
              }
              isEditing={isEditMode}
              name="city"
            />
            <FormField
              label="Property Type"
              value={propertyData.propertyType}
              onChange={(value) =>
                setPropertyData({ ...propertyData, propertyType: value })
              }
              isEditing={isEditMode}
              name="propertyType"
            />
            <Grid size={{ xs: 12, md: 4 }}>{/* Empty space */}</Grid>

            {/* Third Row */}
            <FormField
              label="State"
              value={propertyData.state}
              onChange={(value) =>
                setPropertyData({ ...propertyData, state: value })
              }
              isEditing={isEditMode}
              name="state"
              gridSize={{ xs: 12, md: 2 }}
            />
            <FormField
              label="ZIP Code"
              value={propertyData.zipCode}
              onChange={(value) =>
                setPropertyData({ ...propertyData, zipCode: value })
              }
              isEditing={isEditMode}
              name="zipCode"
              gridSize={{ xs: 12, md: 2 }}
            />
            <FormField
              label="# of Units"
              value={propertyData.numberOfUnits}
              onChange={(value) =>
                setPropertyData({ ...propertyData, numberOfUnits: value })
              }
              isEditing={isEditMode}
              name="numberOfUnits"
              type="number"
            />
            <Grid size={{ xs: 12, md: 4 }}>{/* Empty space */}</Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}
