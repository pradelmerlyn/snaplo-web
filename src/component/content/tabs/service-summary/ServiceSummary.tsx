import * as React from "react";
import Box from "@mui/material/Box";
import { StyledTabs, StyledTab, VerticalDivider } from "@/theme/AppTheme";
import Overview from "./Overview";
import PullCredit from "./PullCredit";
import UnderwritingDecision from "./Underwriting";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      sx={{
        flexGrow: 1,
        display: value === index ? "block" : "none",
        p: 3,
      }}
    >
      {children}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ServicesSummary() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#fff",
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <StyledTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Services tabs"
        sx={{ ml: 3 }}
      >
        <StyledTab label="Overview" {...a11yProps(0)} />
        <StyledTab label="Pull Credit" {...a11yProps(1)} />
        <StyledTab label="AUS" {...a11yProps(2)} />
      </StyledTabs>
      <VerticalDivider orientation="vertical" flexItem sx={{ ml: 5 }} />

      <TabPanel value={value} index={0}>
        <Overview />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PullCredit />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UnderwritingDecision />
      </TabPanel>
    </Box>
  );
}
