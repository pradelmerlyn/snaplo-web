"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LoanSummary from "./tabs/loan-summary/LoanSummary";
import LeadSummary from "./tabs/lead-summary/LeadSummary";
import PricingSummary from "./tabs/pricing/PricingSummary";
import DocumentSummary from "./tabs/document-summary/DocumentSummary";

export default function MainContent() {
  const [value, setValue] = React.useState("4"); // default selected is Pricing

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffffff" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: "1px solid #e0e0e0" }}>
          <TabList
            onChange={handleChange}
            aria-label="loan process tabs"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              minHeight: 36,
              ".MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.625rem",
                minHeight: 36,
                minWidth: 120,
                px: 2,
                py: 1,
                color: "#212121",
              },
              ".Mui-selected": {
                color: "#1976d2",
              },
              ".MuiTabs-indicator": {
                height: 2,
                backgroundColor: "#1976d2",
              },
            }}
          >
            <Tab label="Lead" value="1" />
            <Tab label="Services" value="2" />
            <Tab label="Borrower Summary" value="3" />
            <Tab label="Pricing" value="4" />
            <Tab label="Loan Summary" value="5" />
            <Tab label="Documents" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ backgroundColor: "#ffffff", p: 0 }}>
          <LeadSummary />
        </TabPanel>
        <TabPanel value="2" sx={{ backgroundColor: "#ffffff", p: 0 }}>
          Services
        </TabPanel>
        <TabPanel value="3" sx={{ backgroundColor: "#ffffff", p: 0 }}>
          Borrower Summary
        </TabPanel>
        <TabPanel value="4" sx={{ backgroundColor: "#ffffff", p: 0 }}>
          <PricingSummary />
        </TabPanel>
        <TabPanel value="5" sx={{ backgroundColor: "#ffffff", p: 0 }}>
          <LoanSummary />
        </TabPanel>
        <TabPanel value="6" sx={{ backgroundColor: "#ffffff", p: 0 }}>
          <DocumentSummary />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
