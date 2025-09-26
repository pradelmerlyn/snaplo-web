"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useTheme } from "@mui/material";
import LoanSummary from "./tabs/loan-summary/LoanSummary";
import LeadSummary from "./tabs/lead-summary/LeadSummary";
import PricingSummary from "./tabs/pricing-summary/PricingSummary";
import DocumentSummary from "./tabs/document-summary/DocumentSummary";
import type { TabPanelProps } from "@mui/lab/TabPanel";
import ServicesSummary from "./tabs/service-summary/ServiceSummary";
import BorrowerSummary from "./tabs/borrower-summary/BorrowerSummary";

export default function MainContent() {
  const theme = useTheme();
  const [value, setValue] = React.useState("4"); // default selected is Pricing

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", backgroundColor: theme.palette.background.paper }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: `1px solid ${theme.palette.grey[100]}` }}>
          <TabList
            onChange={handleChange}
            aria-label="loan process tabs"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              minHeight: 36,
              ".MuiTab-root": {
                ...theme.typography.body2,
                textTransform: "none",
                fontWeight: 600,
                minHeight: 36,
                minWidth: 120,
                px: 2,
                py: 1,
                color: theme.palette.text.primary,
              },
              ".Mui-selected": {
                color: theme.palette.primary.main,
              },
              ".MuiTabs-indicator": {
                height: 2,
                backgroundColor: theme.palette.primary.main,
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
        <StyledTabPanel value="1">
          <LeadSummary />
        </StyledTabPanel>
        <StyledTabPanel value="2">
          <ServicesSummary />
        </StyledTabPanel>
        <StyledTabPanel value="3">
          <BorrowerSummary />
        </StyledTabPanel>
        <StyledTabPanel value="4">
          <PricingSummary />
        </StyledTabPanel>
        <StyledTabPanel value="5">
          <LoanSummary />
        </StyledTabPanel>
        <StyledTabPanel value="6">
          <DocumentSummary />
        </StyledTabPanel>
      </TabContext>
    </Box>
  );
}

function StyledTabPanel({ children, sx, ...props }: TabPanelProps) {
  const theme = useTheme();
  return (
    <TabPanel
      {...props}
      sx={{
        backgroundColor: theme.palette.background.paper,
        p: 0,
        ...sx,
      }}
    >
      {children}
    </TabPanel>
  );
}
