"use client";

import React, { useState } from "react";
import { Box, Typography, Paper, IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { InfoLabel, InfoValue } from "../../../AppTheme";

export default function LoanForm({
  globalEditMode = false,
}: {
  globalEditMode?: boolean;
}) {
  const [localEditMode, setLocalEditMode] = useState(false);

  const isEditMode = globalEditMode || localEditMode;

  const [loanData, setLoanData] = useState({
    loanPurpose: "Purchase",
    purposeOfPurchase: "Shopping",
    purchasePrice: "$ 500,000.00",
    baseLoanAmount: "$ 400,000.00",
  });

  const [loanBackup, setLoanBackup] = useState(loanData);

  const handleLocalEdit = () => {
    setLoanBackup(loanData);
    setLocalEditMode(true);
  };

  const handleLocalSave = () => {
    setLocalEditMode(false);
  };

  const handleLocalCancel = () => {
    setLoanData(loanBackup);
    setLocalEditMode(false);
  };

  const FormField = ({
    label,
    value,
    onChange,
    isEditing,
    name,
    type = "text",
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    isEditing: boolean;
    name: string;
    type?: string;
  }) => (
    <Box sx={{ mb: 1.5 }}>
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
    </Box>
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
          sx={{ fontWeight: 700, fontSize: "16px", color: "#333" }}
        >
          LOAN
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

      <Box sx={{ flex: 1 }}>
        <FormField
          label="Loan Purpose"
          value={loanData.loanPurpose}
          onChange={(value) => setLoanData({ ...loanData, loanPurpose: value })}
          isEditing={isEditMode}
          name="loanPurpose"
        />

        <FormField
          label="Purpose of Purchase"
          value={loanData.purposeOfPurchase}
          onChange={(value) =>
            setLoanData({ ...loanData, purposeOfPurchase: value })
          }
          isEditing={isEditMode}
          name="purposeOfPurchase"
        />

        <FormField
          label="Purchase Price"
          value={loanData.purchasePrice}
          onChange={(value) =>
            setLoanData({ ...loanData, purchasePrice: value })
          }
          isEditing={isEditMode}
          name="purchasePrice"
        />

        <FormField
          label="Base Loan Amount"
          value={loanData.baseLoanAmount}
          onChange={(value) =>
            setLoanData({ ...loanData, baseLoanAmount: value })
          }
          isEditing={isEditMode}
          name="baseLoanAmount"
        />
      </Box>
    </Paper>
  );
}
