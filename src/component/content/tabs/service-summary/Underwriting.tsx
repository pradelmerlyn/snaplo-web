"use client";

import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import { StyledPaper, CardHeaderTitle } from "@/theme/AppTheme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { useState } from "react";


const history = [
  {
    date: "09/22/2023, 9:24 AM",
    type: "LPA",
    recommendation: "Approve/Eligible",
    recommendationIcon: <CheckCircleIcon color="success" fontSize="small" />,
    submittedBy: "James Bond",
    status: "Success",
    casefile: "1104540077",
    reportUrl: "#",
  },
  {
    date: "09/21/2023, 4:52 PM",
    type: "DU",
    recommendation: "Error",
    recommendationIcon: <ErrorIcon color="error" fontSize="small" />,
    submittedBy: "James Bond",
    status: "Failed",
    casefile: "1536930819",
    reportUrl: "#",
  },
];

export default function UnderwritingDecision() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Box>
      {/* AU Options */}
      <StyledPaper>
        <CardHeaderTitle>AU OPTIONS</CardHeaderTitle>

        <FormControl fullWidth sx={{ maxWidth: 300 }}>
          <InputLabel
            sx={{
              fontSize: "14px",
              top: "-2px", // adjust for compact height
            }}
          >
            Select
          </InputLabel>
          <Select
            value={selectedOption}
            label="Select"
            onChange={(e) => setSelectedOption(e.target.value)}
            sx={{
              borderRadius: 1,
              fontSize: "14px",
              minHeight: 36,
              height: 36,
              ".MuiSelect-select": {
                padding: "6px 12px",
              },
            }}
          >
            <MenuItem value="du">Run Desktop Underwriting (DU)</MenuItem>
            <MenuItem value="lpa">Run Loan Products Advisor (LPA)</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            disabled={!selectedOption}
            sx={{
              fontWeight: 600,
              px: 3,
              py: 1,
              minHeight: 36,
              height: 36,
            }}
          >
            Submit
          </Button>
        </Box>
      </StyledPaper>

      {/* Underwriting Decision History */}
      <Box sx={{ mt: 4 }}>
        <CardHeaderTitle>Underwriting Decision History</CardHeaderTitle>

        <TableContainer
          component={Paper}
          elevation={1}
          sx={{ borderRadius: 2 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Submitted</TableCell>
                <TableCell>AUS Type</TableCell>
                <TableCell>Recommendation</TableCell>
                <TableCell>Submitted By</TableCell>
                <TableCell>Report Status</TableCell>
                <TableCell>Casefile ID</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {history.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: 600 }}>{row.date}</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>{row.type}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      {row.recommendationIcon}
                      <Typography fontWeight={600}>
                        {row.recommendation}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>
                    {row.submittedBy}
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>{row.status}</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>{row.casefile}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ fontWeight: 600 }}
                      href={row.reportUrl}
                    >
                      View Full Report
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
