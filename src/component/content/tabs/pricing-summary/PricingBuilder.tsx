"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Chip,
  SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 12,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  marginBottom: theme.spacing(3),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 700,
  color: "#1a237e",
  marginBottom: theme.spacing(1.5),
  textTransform: "uppercase",
}));

const SubSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "11px",
  fontWeight: 500,
  color: "#666",
  marginBottom: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  textTransform: "none",
  fontWeight: 500,
  padding: theme.spacing(1, 2),
  minWidth: 80,
}));

const OptionButton = styled(Button)<{ selected?: boolean }>(
  ({ theme, selected }) => ({
    borderRadius: 6,
    textTransform: "none",
    fontWeight: 500,
    fontSize: "11px",
    padding: theme.spacing(0.5, 1.5),
    margin: theme.spacing(0.25),
    minHeight: 28,
    border: selected
      ? `2px solid ${theme.palette.primary.main}`
      : "1px solid #ddd",
    backgroundColor: selected ? theme.palette.primary.main : "white",
    color: selected ? "white" : "#666",
    "&:hover": {
      backgroundColor: selected ? theme.palette.primary.dark : "#f5f5f5",
    },
  })
);

const CheckboxGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(0.5),
  "& .MuiFormControlLabel-root": {
    margin: 0,
    marginRight: theme.spacing(1),
    "& .MuiCheckbox-root": {
      padding: theme.spacing(0.25),
      "& .MuiSvgIcon-root": {
        fontSize: "16px",
      },
    },
    "& .MuiTypography-root": {
      fontSize: "11px",
    },
  },
}));

const YesNoButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  border: "1px solid #ddd",
  borderRadius: 8,
  overflow: "hidden",
  width: "fit-content",
}));

const YesNoButton = styled(Button)<{ selected?: boolean }>(
  ({ theme, selected }) => ({
    borderRadius: 0,
    textTransform: "none",
    fontWeight: 500,
    fontSize: "11px",
    padding: theme.spacing(0.75, 2),
    minHeight: 28,
    border: "none",
    backgroundColor: selected ? theme.palette.primary.main : "white",
    color: selected ? "white" : "#666",
    "&:hover": {
      backgroundColor: selected ? theme.palette.primary.dark : "#f5f5f5",
    },
    "&:not(:last-child)": {
      borderRight: "1px solid #ddd",
    },
  })
);

interface PricingBuilderProps {}

export default function PricingBuilder({}: PricingBuilderProps) {
  const [ausType, setAusType] = useState("");
  const [state, setState] = useState("California");
  const [county, setCounty] = useState("Orange");
  const [loanType, setLoanType] = useState("Conforming");
  const [loanTerms, setLoanTerms] = useState<string[]>(["30 yr"]);
  const [amortizationType, setAmortizationType] = useState("Fixed");
  const [armFixedTerms, setArmFixedTerms] = useState<string[]>([
    "3 yr",
    "5 yr",
  ]);
  const [productTypes, setProductTypes] = useState<string[]>(["Standard"]);
  const [specialtyProduct, setSpecialtyProduct] = useState("N/A");
  const [secondMortgage, setSecondMortgage] = useState<"Yes" | "NO">("NO");

  const handleLoanTermToggle = (term: string) => {
    setLoanTerms((prev) =>
      prev.includes(term) ? prev.filter((t) => t !== term) : [...prev, term]
    );
  };

  const handleArmTermToggle = (term: string) => {
    setArmFixedTerms((prev) =>
      prev.includes(term) ? prev.filter((t) => t !== term) : [...prev, term]
    );
  };

  const handleProductTypeToggle = (type: string) => {
    if (type === "All") {
      setProductTypes((prev) => (prev.includes("All") ? [] : ["All"]));
    } else {
      setProductTypes((prev) => {
        const newTypes = prev.includes(type)
          ? prev.filter((t) => t !== type && t !== "All")
          : [...prev.filter((t) => t !== "All"), type];
        return newTypes;
      });
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: "#1a237e", mb: 2, fontSize: "18px" }}
      >
        Pricing Builder
      </Typography>

      {/* Required Fields Section */}
      <StyledPaper>
        <SectionTitle>REQUIRED FIELDS</SectionTitle>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth size="small">
              <InputLabel>AUS Type</InputLabel>
              <Select
                value={ausType}
                label="AUS Type"
                onChange={(e) => setAusType(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  "& .MuiInputBase-input": {
                    fontSize: "11px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "11px",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      "& .MuiMenuItem-root": {
                        fontSize: "11px",
                      },
                    },
                  },
                }}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="DPA">DPA</MenuItem>
                <MenuItem value="LPA">LPA</MenuItem>
                <MenuItem value="LQA">LQA</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth size="small">
              <InputLabel>State</InputLabel>
              <Select
                value={state}
                label="State"
                onChange={(e) => setState(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  "& .MuiInputBase-input": {
                    fontSize: "11px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "11px",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      "& .MuiMenuItem-root": {
                        fontSize: "11px",
                      },
                    },
                  },
                }}
              >
                <MenuItem value="California">California</MenuItem>
                <MenuItem value="Texas">Texas</MenuItem>
                <MenuItem value="Florida">Florida</MenuItem>
                <MenuItem value="New York">New York</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              size="small"
              label="County"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              sx={{
                backgroundColor: "white",
                "& .MuiInputBase-input": {
                  fontSize: "11px",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "11px",
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "11px", marginBottom: 2 }}
            >
              Please validate the county by entering zip code in PROPERTY
              section on the right first.
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#E2E8F0",
                color: "#666",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "11px",
                padding: "6px 16px",
                "&:hover": {
                  backgroundColor: "#CBD5E0",
                },
              }}
            >
              Validate County
            </Button>
          </Grid>
        </Grid>
      </StyledPaper>

      {/* Search Criteria Section */}
      <Box>
        <SectionTitle sx={{ marginBottom: 1 }}>SEARCH CRITERIA</SectionTitle>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "11px", marginBottom: 2 }}
        >
          Get price results by filling the fields below and/or edit the existing
          info from the right.
        </Typography>

        {/* Loan Type */}
        <Box sx={{ marginBottom: 3 }}>
          <SubSectionTitle>Loan Type:</SubSectionTitle>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {["Conforming", "NonConforming", "FHA", "VA", "USDA"].map(
              (type) => (
                <OptionButton
                  key={type}
                  selected={loanType === type}
                  onClick={() => setLoanType(type)}
                >
                  {type}
                </OptionButton>
              )
            )}
          </Box>
        </Box>

        {/* Loan Term */}
        <Box sx={{ marginBottom: 3 }}>
          <SubSectionTitle>Loan Term:</SubSectionTitle>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {["30 yr", "25 yr", "20 yr", "15 yr", "10 yr", "40 yr"].map(
              (term) => (
                <OptionButton
                  key={term}
                  selected={loanTerms.includes(term)}
                  onClick={() => handleLoanTermToggle(term)}
                >
                  {term}
                </OptionButton>
              )
            )}
          </Box>
        </Box>

        {/* Amortization Type */}
        <Box sx={{ marginBottom: 3 }}>
          <SubSectionTitle>Amortization Type:</SubSectionTitle>
          <TextField
            size="small"
            value={amortizationType}
            onChange={(e) => setAmortizationType(e.target.value)}
            sx={{
              backgroundColor: "#E2E8F0",
              "& .MuiInputBase-input": {
                color: "#666",
                fontSize: "11px",
              },
              width: 150,
            }}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>

        {/* ARM Fixed Term */}
        <Box sx={{ marginBottom: 3 }}>
          <SubSectionTitle>ARM Fixed Term:</SubSectionTitle>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {["3 yr", "5 yr"].map((term) => (
              <OptionButton
                key={term}
                selected={armFixedTerms.includes(term)}
                onClick={() => handleArmTermToggle(term)}
              >
                {term}
              </OptionButton>
            ))}
          </Box>
        </Box>

        {/* Product Type */}
        <Box sx={{ marginBottom: 3 }}>
          <SubSectionTitle>Product Type:</SubSectionTitle>
          <CheckboxGroup>
            {[
              "All",
              "Standard",
              "Affordable",
              "HARP",
              "Hero/Champion",
              "HFA/Bond",
            ].map((type) => (
              <FormControlLabel
                key={type}
                control={
                  <Checkbox
                    checked={productTypes.includes(type)}
                    onChange={() => handleProductTypeToggle(type)}
                    size="small"
                  />
                }
                label={type}
              />
            ))}
          </CheckboxGroup>

          <CheckboxGroup sx={{ marginTop: 1 }}>
            {[
              "HUD Specialty",
              "Reno/Rehab",
              "Student Ln CO Refi",
              "USDA Streamline",
              "Expanded Guidelines",
            ].map((type) => (
              <FormControlLabel
                key={type}
                control={
                  <Checkbox
                    checked={productTypes.includes(type)}
                    onChange={() => handleProductTypeToggle(type)}
                    size="small"
                  />
                }
                label={type}
              />
            ))}
          </CheckboxGroup>
        </Box>

        {/* Specialty Product */}
        <Box sx={{ marginBottom: 3 }}>
          <SubSectionTitle>Specialty Product</SubSectionTitle>
          <TextField
            size="small"
            value={specialtyProduct}
            onChange={(e) => setSpecialtyProduct(e.target.value)}
            sx={{
              backgroundColor: "#E2E8F0",
              "& .MuiInputBase-input": {
                color: "#666",
                fontSize: "11px",
              },
              width: 150,
            }}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>

        {/* Second Mortgage */}
        <Box sx={{ marginBottom: 3 }}>
          <SubSectionTitle>
            Does the borrower have a second mortgage?
          </SubSectionTitle>
          <YesNoButtonGroup>
            <YesNoButton
              selected={secondMortgage === "Yes"}
              onClick={() => setSecondMortgage("Yes")}
            >
              Yes
            </YesNoButton>
            <YesNoButton
              selected={secondMortgage === "NO"}
              onClick={() => setSecondMortgage("NO")}
            >
              NO
            </YesNoButton>
          </YesNoButtonGroup>
        </Box>

        {/* Generate Results Button */}
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#E2E8F0",
            color: "#666",
            textTransform: "none",
            fontWeight: 500,
            fontSize: "11px",
            padding: "8px 24px",
            "&:hover": {
              backgroundColor: "#CBD5E0",
            },
          }}
        >
          Generate Results
        </Button>
      </Box>
    </Box>
  );
}
