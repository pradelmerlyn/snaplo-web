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
  Grid,
  InputAdornment,
  Alert,
} from "@mui/material";
import {
  InfoLabel,
  InfoValue,
  StyledPaper,
  SectionTitle,
  EditButton,
  ActionButton,
  InfoSection,
  InfoRow,
} from "@/theme/AppTheme";

interface LoanPropertyFormProps {}

export default function LoanPropertyForm({}: LoanPropertyFormProps) {
  const [isEditingLoan, setIsEditingLoan] = useState(false);
  const [isEditingBorrower, setIsEditingBorrower] = useState(false);
  const [isEditingProperty, setIsEditingProperty] = useState(false);
  const [formData, setFormData] = useState({
    // Loan & Lien
    loanPurpose: "Purchase",
    purchasePrice: "500,000.00",
    appraisedValue: "550,000.00",
    estimatedValue: "500,000.00",
    downPayment: "10,000.00",
    downPaymentPercent: "5.0",
    baseLoanAmount: "400,000.00",
    ausType: "LPA",
    ltv: "80.00",
    monthsOfReserves: "6",

    // Borrower
    fico: "750",
    dtiRatio: "30%",

    // Property
    occupancy: "Primary Residence",
    propertyType: "Detached 1 Unit",
    numberOfUnits: "1",
    numberOfStories: "1",
    state: "CA",
    county: "Orange",
    zip: "98224",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveLoan = () => {
    setIsEditingLoan(false);
    // Handle save logic here
  };

  const handleCancelLoan = () => {
    setIsEditingLoan(false);
    // Reset form data if needed
  };

  const handleSaveBorrower = () => {
    setIsEditingBorrower(false);
    // Handle save logic here
  };

  const handleCancelBorrower = () => {
    setIsEditingBorrower(false);
    // Reset form data if needed
  };

  const handleSaveProperty = () => {
    setIsEditingProperty(false);
    // Handle save logic here
  };

  const handleCancelProperty = () => {
    setIsEditingProperty(false);
    // Reset form data if needed
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Warning Alert */}
      <Alert
        severity="info"
        sx={{
          marginBottom: 2,
          backgroundColor: "#F7FAFC",
          border: "1px solid #E2E8F0",
          borderRadius: 2,
          "& .MuiAlert-message": {
            fontSize: "11px",
            color: "#4A5568",
          },
        }}
      >
        The fields below are for estimation purposes only. Updates made in these
        fields will <strong>never</strong> be pushed to the loan and will
        prevent the loan from being locked.
      </Alert>

      {/* Loan & Lien Section */}
      <StyledPaper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <SectionTitle sx={{ marginBottom: 0 }}>LOAN & LIEN</SectionTitle>
          <EditButton
            variant="outlined"
            onClick={() => setIsEditingLoan(!isEditingLoan)}
            sx={{
              borderColor: "#3182CE",
              color: "#3182CE",
              "&:hover": {
                backgroundColor: "#EBF8FF",
              },
            }}
          >
            Edit
          </EditButton>
        </Box>

        {isEditingLoan ? (
          <Grid container spacing={1.5}>
            <Grid size={{ xs: 6 }}>
              <FormControl fullWidth size="small">
                <InputLabel>Loan Purpose</InputLabel>
                <Select
                  value={formData.loanPurpose}
                  label="Loan Purpose"
                  onChange={(e) =>
                    handleInputChange("loanPurpose", e.target.value)
                  }
                  sx={{
                    backgroundColor: "white",
                    "& .MuiInputBase-input": {
                      fontSize: "11px",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "11px",
                    },
                  }}
                >
                  <MenuItem value="Purchase">Purchase</MenuItem>
                  <MenuItem value="Refinance">Refinance</MenuItem>
                  <MenuItem value="Cash Out">Cash Out</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 6 }}>
              <TextField
                fullWidth
                size="small"
                label="Purchase Price"
                value={formData.purchasePrice}
                onChange={(e) =>
                  handleInputChange("purchasePrice", e.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
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

            <Grid size={{ xs: 6 }}>
              <TextField
                fullWidth
                size="small"
                label="Appraised Value"
                value={formData.appraisedValue}
                onChange={(e) =>
                  handleInputChange("appraisedValue", e.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
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

            <Grid size={{ xs: 6 }}>
              <TextField
                fullWidth
                size="small"
                label="Estimated Value"
                value={formData.estimatedValue}
                onChange={(e) =>
                  handleInputChange("estimatedValue", e.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
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

            <Grid size={{ xs: 8 }}>
              <TextField
                fullWidth
                size="small"
                label="Down Payment"
                value={formData.downPayment}
                onChange={(e) =>
                  handleInputChange("downPayment", e.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
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

            <Grid size={{ xs: 4 }}>
              <TextField
                fullWidth
                size="small"
                label="Down Payment %"
                value={formData.downPaymentPercent}
                onChange={(e) =>
                  handleInputChange("downPaymentPercent", e.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
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

            <Grid size={{ xs: 6 }}>
              <FormControl fullWidth size="small">
                <InputLabel>AUS Type</InputLabel>
                <Select
                  value={formData.ausType}
                  label="AUS Type"
                  onChange={(e) => handleInputChange("ausType", e.target.value)}
                  sx={{
                    backgroundColor: "white",
                    "& .MuiInputBase-input": {
                      fontSize: "11px",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "11px",
                    },
                  }}
                >
                  <MenuItem value="LPA">LPA</MenuItem>
                  <MenuItem value="DPA">DPA</MenuItem>
                  <MenuItem value="LQA">LQA</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 6 }}>
              <TextField
                fullWidth
                size="small"
                label="Base Loan Amount"
                value={formData.baseLoanAmount}
                onChange={(e) =>
                  handleInputChange("baseLoanAmount", e.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
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

            <Grid size={{ xs: 6 }}>
              <TextField
                fullWidth
                size="small"
                label="LTV"
                value={formData.ltv}
                onChange={(e) => handleInputChange("ltv", e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
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

            <Grid size={{ xs: 6 }}>
              <TextField
                fullWidth
                size="small"
                label="Months of Reserves"
                value={formData.monthsOfReserves}
                onChange={(e) =>
                  handleInputChange("monthsOfReserves", e.target.value)
                }
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
          </Grid>
        ) : (
          <InfoSection>
            <InfoRow>
              <InfoLabel>Loan Purpose</InfoLabel>
              <InfoValue>{formData.loanPurpose}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Purchase Price</InfoLabel>
              <InfoValue>$ {formData.purchasePrice}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Appraised Value</InfoLabel>
              <InfoValue>$ {formData.appraisedValue}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Estimated Value</InfoLabel>
              <InfoValue>$ {formData.estimatedValue}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Down Payment</InfoLabel>
              <InfoValue>
                $ {formData.downPayment} ({formData.downPaymentPercent}%)
              </InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Base Loan Amount</InfoLabel>
              <InfoValue>$ {formData.baseLoanAmount}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>AUS Type</InfoLabel>
              <InfoValue>{formData.ausType}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>LTV</InfoLabel>
              <InfoValue>{formData.ltv}%</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Months of Reserves</InfoLabel>
              <InfoValue>{formData.monthsOfReserves}</InfoValue>
            </InfoRow>
          </InfoSection>
        )}

        {isEditingLoan && (
          <Box sx={{ display: "flex", gap: 2, marginTop: 3 }}>
            <ActionButton
              variant="contained"
              onClick={handleSaveLoan}
              sx={{
                backgroundColor: "#3182CE",
                "&:hover": {
                  backgroundColor: "#2C5282",
                },
              }}
            >
              Save
            </ActionButton>
            <ActionButton
              variant="outlined"
              onClick={handleCancelLoan}
              sx={{
                borderColor: "#CBD5E0",
                color: "#4A5568",
                "&:hover": {
                  backgroundColor: "#F7FAFC",
                },
              }}
            >
              Cancel
            </ActionButton>
          </Box>
        )}
      </StyledPaper>

      {/* Borrower Section */}
      <StyledPaper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <SectionTitle sx={{ marginBottom: 0 }}>BORROWER</SectionTitle>
          <EditButton
            variant="outlined"
            onClick={() => setIsEditingBorrower(!isEditingBorrower)}
            sx={{
              borderColor: "#3182CE",
              color: "#3182CE",
              "&:hover": {
                backgroundColor: "#EBF8FF",
              },
            }}
          >
            Edit
          </EditButton>
        </Box>

        {isEditingBorrower ? (
          <Box>
            <Grid container spacing={1.5}>
              <Grid size={{ xs: 6 }}>
                <TextField
                  fullWidth
                  size="small"
                  label="FICO"
                  value={formData.fico}
                  onChange={(e) => handleInputChange("fico", e.target.value)}
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
              <Grid size={{ xs: 6 }}>
                <TextField
                  fullWidth
                  size="small"
                  label="DTI Ratio"
                  value={formData.dtiRatio}
                  onChange={(e) =>
                    handleInputChange("dtiRatio", e.target.value)
                  }
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
            </Grid>

            <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
              <ActionButton
                variant="contained"
                onClick={handleSaveBorrower}
                sx={{
                  backgroundColor: "#3182CE",
                  "&:hover": {
                    backgroundColor: "#2C5282",
                  },
                }}
              >
                Save
              </ActionButton>
              <ActionButton
                variant="outlined"
                onClick={handleCancelBorrower}
                sx={{
                  borderColor: "#CBD5E0",
                  color: "#4A5568",
                  "&:hover": {
                    backgroundColor: "#F7FAFC",
                  },
                }}
              >
                Cancel
              </ActionButton>
            </Box>
          </Box>
        ) : (
          <InfoSection>
            <InfoRow>
              <InfoLabel>FICO</InfoLabel>
              <InfoValue>{formData.fico}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>DTI Ratio</InfoLabel>
              <InfoValue>{formData.dtiRatio}</InfoValue>
            </InfoRow>
          </InfoSection>
        )}
      </StyledPaper>

      {/* Property Section */}
      <StyledPaper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <SectionTitle sx={{ marginBottom: 0 }}>PROPERTY</SectionTitle>
          <EditButton
            variant="outlined"
            onClick={() => setIsEditingProperty(!isEditingProperty)}
            sx={{
              borderColor: "#3182CE",
              color: "#3182CE",
              "&:hover": {
                backgroundColor: "#EBF8FF",
              },
            }}
          >
            Edit
          </EditButton>
        </Box>

        {isEditingProperty ? (
          <Box>
            <Grid container spacing={1.5}>
              <Grid size={{ xs: 6 }}>
                <FormControl fullWidth size="small">
                  <InputLabel>Occupancy</InputLabel>
                  <Select
                    value={formData.occupancy}
                    label="Occupancy"
                    onChange={(e) =>
                      handleInputChange("occupancy", e.target.value)
                    }
                    sx={{
                      backgroundColor: "white",
                      "& .MuiInputBase-input": {
                        fontSize: "11px",
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "11px",
                      },
                    }}
                  >
                    <MenuItem value="Primary Residence">
                      Primary Residence
                    </MenuItem>
                    <MenuItem value="Secondary Residence">
                      Secondary Residence
                    </MenuItem>
                    <MenuItem value="Investment">Investment</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 6 }}>
                <FormControl fullWidth size="small">
                  <InputLabel>Property Type</InputLabel>
                  <Select
                    value={formData.propertyType}
                    label="Property Type"
                    onChange={(e) =>
                      handleInputChange("propertyType", e.target.value)
                    }
                    sx={{
                      backgroundColor: "white",
                      "& .MuiInputBase-input": {
                        fontSize: "11px",
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "11px",
                      },
                    }}
                  >
                    <MenuItem value="Detached 1 Unit">Detached 1 Unit</MenuItem>
                    <MenuItem value="Attached 1 Unit">Attached 1 Unit</MenuItem>
                    <MenuItem value="Condominium">Condominium</MenuItem>
                    <MenuItem value="Townhouse">Townhouse</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 6 }}>
                <TextField
                  fullWidth
                  size="small"
                  label="Number of Units"
                  value={formData.numberOfUnits}
                  onChange={(e) =>
                    handleInputChange("numberOfUnits", e.target.value)
                  }
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
              <Grid size={{ xs: 6 }}>
                <TextField
                  fullWidth
                  size="small"
                  label="Number of Stories"
                  value={formData.numberOfStories}
                  onChange={(e) =>
                    handleInputChange("numberOfStories", e.target.value)
                  }
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
              <Grid size={{ xs: 4 }}>
                <FormControl fullWidth size="small">
                  <InputLabel>State</InputLabel>
                  <Select
                    value={formData.state}
                    label="State"
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    sx={{
                      backgroundColor: "white",
                      "& .MuiInputBase-input": {
                        fontSize: "11px",
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "11px",
                      },
                    }}
                  >
                    <MenuItem value="CA">CA</MenuItem>
                    <MenuItem value="TX">TX</MenuItem>
                    <MenuItem value="FL">FL</MenuItem>
                    <MenuItem value="NY">NY</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 4 }}>
                <TextField
                  fullWidth
                  size="small"
                  label="County"
                  value={formData.county}
                  onChange={(e) => handleInputChange("county", e.target.value)}
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
              <Grid size={{ xs: 4 }}>
                <TextField
                  fullWidth
                  size="small"
                  label="Zip"
                  value={formData.zip}
                  onChange={(e) => handleInputChange("zip", e.target.value)}
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
            </Grid>

            <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
              <ActionButton
                variant="contained"
                onClick={handleSaveProperty}
                sx={{
                  backgroundColor: "#3182CE",
                  "&:hover": {
                    backgroundColor: "#2C5282",
                  },
                }}
              >
                Save
              </ActionButton>
              <ActionButton
                variant="outlined"
                onClick={handleCancelProperty}
                sx={{
                  borderColor: "#CBD5E0",
                  color: "#4A5568",
                  "&:hover": {
                    backgroundColor: "#F7FAFC",
                  },
                }}
              >
                Cancel
              </ActionButton>
            </Box>
          </Box>
        ) : (
          <InfoSection>
            <InfoRow>
              <InfoLabel>Occupancy</InfoLabel>
              <InfoValue>{formData.occupancy}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Property Type</InfoLabel>
              <InfoValue>{formData.propertyType}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Number of Units</InfoLabel>
              <InfoValue>{formData.numberOfUnits}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Number of Stories</InfoLabel>
              <InfoValue>{formData.numberOfStories}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>State</InfoLabel>
              <InfoValue>{formData.state}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>County</InfoLabel>
              <InfoValue>{formData.county}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Zip</InfoLabel>
              <InfoValue>{formData.zip}</InfoValue>
            </InfoRow>
          </InfoSection>
        )}
      </StyledPaper>
    </Box>
  );
}
