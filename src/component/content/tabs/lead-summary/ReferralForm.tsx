"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { InfoLabel, InfoValue } from "../../../../theme/AppTheme";

export default function ReferralForm({
  globalEditMode = false,
}: {
  globalEditMode?: boolean;
}) {
  const [localEditMode, setLocalEditMode] = useState(false);

  const isEditMode = globalEditMode || localEditMode;

  const [referralData, setReferralData] = useState({
    referralType: "Business",
    businessType: "Realtor",
    businessName: "Acme Real Estate, Inc.",
    businessPhoneNumber: "(562) 339-0012",
    businessAddress: "203 S Curtis Ave",
    city: "Springfield",
    state: "CA",
    zipCode: "90247",
    contactFirstName: "Kevin",
    contactLastName: "Johnson",
    contactPhoneNumber: "(112) 330-4456",
    contactEmail: "kjohnson@email.com",
  });

  const [referralBackup, setReferralBackup] = useState(referralData);

  const handleLocalEdit = () => {
    setReferralBackup(referralData);
    setLocalEditMode(true);
  };

  const handleLocalSave = () => {
    setLocalEditMode(false);
  };

  const handleLocalCancel = () => {
    setReferralData(referralBackup);
    setLocalEditMode(false);
  };

  const handleNewReferral = () => {
    const emptyReferral = {
      referralType: "",
      businessType: "",
      businessName: "",
      businessPhoneNumber: "",
      businessAddress: "",
      city: "",
      state: "",
      zipCode: "",
      contactFirstName: "",
      contactLastName: "",
      contactPhoneNumber: "",
      contactEmail: "",
    };
    setReferralData(emptyReferral);
    setReferralBackup(emptyReferral);
    setLocalEditMode(true);
  };

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
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "12px",
              "& .MuiOutlinedInput-input": {
                padding: "6px 8px",
              },
            },
          }}
        />
      ) : (
        <InfoValue>{value}</InfoValue>
      )}
    </Grid>
  );

  return (
    <Paper
      elevation={1}
      sx={{
        height: "100%",
        minHeight: "350px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        p: 2.5,
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, fontSize: "16px", color: "#333" }}
        >
          REFERRAL
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button variant="outlined" onClick={handleNewReferral}>
            New Referral
          </Button>
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
        <FormField
          label="Referral Type"
          value={referralData.referralType}
          onChange={(value) =>
            setReferralData({ ...referralData, referralType: value })
          }
          isEditing={isEditMode}
          name="referralType"
        />
        <FormField
          label="Business Phone Number"
          value={referralData.businessPhoneNumber}
          onChange={(value) =>
            setReferralData({ ...referralData, businessPhoneNumber: value })
          }
          isEditing={isEditMode}
          name="businessPhoneNumber"
        />
        <FormField
          label="Contact First Name"
          value={referralData.contactFirstName}
          onChange={(value) =>
            setReferralData({ ...referralData, contactFirstName: value })
          }
          isEditing={isEditMode}
          name="contactFirstName"
        />
        <FormField
          label="Business Type"
          value={referralData.businessType}
          onChange={(value) =>
            setReferralData({ ...referralData, businessType: value })
          }
          isEditing={isEditMode}
          name="businessType"
        />
        <FormField
          label="Business Address"
          value={referralData.businessAddress}
          onChange={(value) =>
            setReferralData({ ...referralData, businessAddress: value })
          }
          isEditing={isEditMode}
          name="businessAddress"
        />
        <FormField
          label="Contact Last Name"
          value={referralData.contactLastName}
          onChange={(value) =>
            setReferralData({ ...referralData, contactLastName: value })
          }
          isEditing={isEditMode}
          name="contactLastName"
        />
        <FormField
          label="Business Name"
          value={referralData.businessName}
          onChange={(value) =>
            setReferralData({ ...referralData, businessName: value })
          }
          isEditing={isEditMode}
          name="businessName"
        />
        <FormField
          label="City"
          value={referralData.city}
          onChange={(value) =>
            setReferralData({ ...referralData, city: value })
          }
          isEditing={isEditMode}
          name="city"
        />
        <FormField
          label="Contact Phone Number"
          value={referralData.contactPhoneNumber}
          onChange={(value) =>
            setReferralData({ ...referralData, contactPhoneNumber: value })
          }
          isEditing={isEditMode}
          name="contactPhoneNumber"
        />
        <FormField
          label="State"
          value={referralData.state}
          onChange={(value) =>
            setReferralData({ ...referralData, state: value })
          }
          isEditing={isEditMode}
          name="state"
        />
        <FormField
          label="ZIP Code"
          value={referralData.zipCode}
          onChange={(value) =>
            setReferralData({ ...referralData, zipCode: value })
          }
          isEditing={isEditMode}
          name="zipCode"
        />
        <FormField
          label="Contact Email"
          value={referralData.contactEmail}
          onChange={(value) =>
            setReferralData({ ...referralData, contactEmail: value })
          }
          isEditing={isEditMode}
          name="contactEmail"
        />
      </Grid>
    </Paper>
  );
}
