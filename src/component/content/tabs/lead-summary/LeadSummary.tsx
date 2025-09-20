"use client";

import React, { useState } from "react";
import { Box, Grid, Button, Divider } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import LeadBorrowerForm from "./LeadBorrowerForm";
import ApplicationSideBar from "./ApplicationSideBar";
import ReferalLoanContent from "./ReferalLoanContent";
import SubjectPropertyForm from "./SubjectPropertyForm";

export default function LeadSummary() {
  const [globalEditMode, setGlobalEditMode] = useState(false);

  const handleGlobalEdit = () => {
    setGlobalEditMode(true);
  };

  const handleGlobalSave = () => {
    setGlobalEditMode(false);
    console.log("Saving all forms globally");
  };

  const handleGlobalCancel = () => {
    setGlobalEditMode(false);
    console.log("Cancelling all forms globally");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", gap: 2, alignItems: "stretch" }}>
        {/* Left Column - Borrower Information */}
        <Box sx={{ flex: "0 0 66.666%" }}>
          {/* Global Edit All Button positioned above the forms */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Box
              sx={{
                maxWidth: 1000,
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                pr: 2.5,
              }}
            >
              {globalEditMode ? (
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="contained"
                    onClick={handleGlobalSave}
                    startIcon={<SaveIcon />}
                    sx={{
                      backgroundColor: "#4caf50",
                      color: "white",
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      fontWeight: 600,
                      fontSize: "12px",
                      textTransform: "none",
                      minWidth: "auto",
                      "&:hover": {
                        backgroundColor: "#388e3c",
                      },
                    }}
                  >
                    Save All
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleGlobalCancel}
                    startIcon={<CancelIcon />}
                    sx={{
                      borderColor: "#f44336",
                      color: "#f44336",
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      fontWeight: 600,
                      fontSize: "12px",
                      textTransform: "none",
                      minWidth: "auto",
                      "&:hover": {
                        borderColor: "#d32f2f",
                        backgroundColor: "rgba(244, 67, 54, 0.04)",
                      },
                    }}
                  >
                    Cancel All
                  </Button>
                </Box>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleGlobalEdit}
                  sx={{
                    backgroundColor: "#5c6bc0",
                    color: "white",
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                    fontWeight: 600,
                    fontSize: "12px",
                    textTransform: "none",
                    minWidth: "auto",
                    "&:hover": {
                      backgroundColor: "#3f51b5",
                    },
                  }}
                >
                  Edit All
                </Button>
              )}
            </Box>
          </Box>

          <LeadBorrowerForm
            globalEditMode={globalEditMode}
            onGlobalSave={handleGlobalSave}
            onGlobalCancel={handleGlobalCancel}
          />
          <ReferalLoanContent globalEditMode={globalEditMode} />
          <SubjectPropertyForm globalEditMode={globalEditMode} />
        </Box>

        {/* Vertical Divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "#e0e0e0" }}
        />

        {/* Right Column - Start Application & Notes */}
        <Box sx={{ flex: "0 0 33.333%" }}>
          <ApplicationSideBar />
        </Box>
      </Box>
    </Box>
  );
}
