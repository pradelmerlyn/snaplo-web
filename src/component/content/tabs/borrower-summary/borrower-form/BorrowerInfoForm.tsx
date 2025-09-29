"use client";

import {
  Box,
  Grid,
  Typography,
  IconButton,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";
import {
  CardHeaderTitle,
  StyledPaper,
  InfoLabel,
  ActionButton,
} from "@/theme/AppTheme";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import CollapsibleSection from "@/component/ui/CollapsibleSection";

export default function BorrowerInfoForm() {
  return (
    // <StyledPaper>
      <CollapsibleSection title="Borrower Information">
        <Grid container spacing={3}>
          {["Borrower", "Co-Borrower"].map((label, index) => (
            <Grid key={label} size={{ xs: 12, md: 6 }}>
              <Typography variant="body2" fontWeight={600} sx={{ mb: 3 }}>
                {label}
              </Typography>

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="First Name"
                    fullWidth
                    defaultValue={index === 0 ? "John" : "Mary"}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField label="Middle Name" fullWidth />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField label="Last Name" fullWidth defaultValue="Smith" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel>Suffix</InputLabel>
                    <Select defaultValue="">
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem value="Jr">Jr</MenuItem>
                      <MenuItem value="Sr">Sr</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <TextField
                      label="Social Security Number"
                      fullWidth
                      defaultValue={index === 0 ? "***-**-7825" : "***-**-3425"}
                    />
                    <IconButton size="small">
                      <VisibilityIcon color="primary" fontSize="small" />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <TextField
                      label="Date of Birth"
                      fullWidth
                      defaultValue="01/05/1986"
                    />
                    <IconButton size="small">
                      <CalendarMonthIcon color="primary" fontSize="small" />
                    </IconButton>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <InfoLabel>Contact Information</InfoLabel>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Home Phone"
                    fullWidth
                    defaultValue="(619) 957-6438"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Cell Phone"
                    fullWidth
                    defaultValue={
                      index === 0 ? "(909) 867-5309" : "(213) 540-5512"
                    }
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Work Phone"
                    fullWidth
                    defaultValue={index === 0 ? "(213) 321-6690" : ""}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Email Address"
                    fullWidth
                    defaultValue={
                      index === 0 ? "jsmith@email.com" : "msmith@email.com"
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <InfoLabel>Marriage Information</InfoLabel>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel>Marital Status</InputLabel>
                    <Select defaultValue="">
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem value="Single">Single</MenuItem>
                      <MenuItem value="Married">Married</MenuItem>
                      <MenuItem value="Divorced">Divorced</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <InfoLabel>Current Address</InfoLabel>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    label="Street Address"
                    fullWidth
                    defaultValue={index === 0 ? "192 Kanhin St" : ""}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    label="City"
                    fullWidth
                    defaultValue={index === 0 ? "Brea" : ""}
                  />
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                  <TextField label="State" fullWidth defaultValue="CA" />
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                  <TextField label="Zip Code" fullWidth defaultValue="92821" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField label="County" fullWidth defaultValue="Orange" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Years at Address"
                    fullWidth
                    defaultValue={index === 0 ? "3" : ""}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Months"
                    fullWidth
                    defaultValue={index === 0 ? "2" : ""}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel>Housing</InputLabel>
                    <Select defaultValue="">
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem value="Rent">Rent</MenuItem>
                      <MenuItem value="Own">Own</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    label="Monthly Rent"
                    fullWidth
                    defaultValue={index === 0 ? "$1,100" : ""}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button startIcon={<AddIcon />} size="small">
                    Add previous address
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>

      <Divider sx={{ my: 4 }} />
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <InfoLabel>Subject Property Information</InfoLabel>
              <ActionButton variant="contained" size="small">
                COPY FROM PRESENT
              </ActionButton>
            </Box>

            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <Checkbox size="small" />
              <Typography variant="body2">TBD</Typography>
              <Checkbox size="small" />
              <Typography variant="body2">TBD Property Found</Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Street Address"
                  fullWidth
                  defaultValue="456 Main St"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField label="City" fullWidth defaultValue="Brea" />
              </Grid>
              <Grid size={{ xs: 6, md: 4 }}>
                <TextField label="State" fullWidth defaultValue="CA" />
              </Grid>
              <Grid size={{ xs: 6, md: 4 }}>
                <TextField label="Zip Code" fullWidth defaultValue="92821" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField label="County" fullWidth defaultValue="Orange" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <ActionButton variant="contained" size="small">
                  VALIDATE COUNTY
                </ActionButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box height={88} />
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Property Type"
                  fullWidth
                  defaultValue="Detached 1 Unit"
                  select
                >
                  <MenuItem value="Detached 1 Unit">Detached 1 Unit</MenuItem>
                </TextField>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Estimated Value"
                  fullWidth
                  defaultValue="$500,000"
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Appraised Value"
                  fullWidth
                  defaultValue="$550,000"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CollapsibleSection>
    // </StyledPaper>
  );
}
