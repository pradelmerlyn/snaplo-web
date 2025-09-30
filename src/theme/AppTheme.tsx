"use client";

import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  styled,
  Typography,
  Paper,
  Box,
  Button,
  Tabs,
  Tab,
  Divider,
  Grid,
  ToggleButton,
  TextField,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { alpha } from "@mui/material/styles";

// Define consistent font sizes and weights
const typography = {
  h1: "50px", //Page titles
  h2: "20px", // Section titles
  h3: "18px", // Card titles
  h4: "16px", // Subsection titles
  h5: "14px", // Small titles
  body1: "14px", // Primary text
  body2: "12px", // Secondary text
  caption: "10px", // Caption text
};

const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    success: {
      main: "#4caf50",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
    h1: {
      fontSize: typography.h1,
      fontWeight: fontWeights.bold,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: typography.h2,
      fontWeight: fontWeights.bold,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: typography.h3,
      fontWeight: fontWeights.semibold,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: typography.body1,
      fontWeight: fontWeights.semibold,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: typography.body1,
      fontWeight: fontWeights.regular,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: typography.body2,
      fontWeight: fontWeights.regular,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: typography.caption,
      fontWeight: fontWeights.regular,
      lineHeight: 1.4,
    },

    button: {
      fontSize: typography.body2,
      fontWeight: fontWeights.medium,
      textTransform: "none",
    },
  },
components: {
  // Fix hydration issues
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        margin: 0,
        padding: 0,
      },
    },
  },
  // Ensure Grid works properly with SSR
  MuiGrid: {
    defaultProps: {
      // Prevent hydration mismatches
      suppressHydrationWarning: true,
    },
    variants: [
      {
        props: { className: "centered-grid" },
        style: {
          textAlign: "center",
        },
      },
    ],
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: 4,
        "& .MuiSvgIcon-root": {
          fontSize: "18px", // shrink checkbox icon size
        },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        padding: 4,
        "& .MuiSvgIcon-root": {
          fontSize: "18px", // shrink radio icon size
        },
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: "12px",
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: {
        "& .MuiInputBase-input": {
          fontSize: "13px"
        },
        "& .MuiInputLabel-root": {
          fontSize: "12px",
        },
      },
    },
  },
  MuiSelect: {
    defaultProps: {
      size: "small",
      variant: "outlined",
    },
    styleOverrides: {
      root: {
        fontSize: "12px",
      },
      select: {
        paddingTop: "10px",
        paddingBottom: "10px",
        display: "flex",
        alignItems: "center", // Ensure vertical centering
      },
      icon: {
        top: "calc(50% - 12px)", // Center the dropdown arrow
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        // Align label baseline with TextField and Select consistently
        top: "-6px", // Adjust this based on your font size and padding
        fontSize: "12px",
        transform: "translate(14px, 12px) scale(1)",
      },
      shrink: {
        // When label floats up
        transform: "translate(14px, -9px) scale(0.75)",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: "12px",
        textTransform: "none",
      },
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: {
        border: "1px solid #E2E8F0",
        borderRadius: 8,
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: ({ theme }: any) => ({
        backgroundColor: "#F8FAFC",
        "& .MuiTableCell-root": {
          fontWeight: 600,
          color: theme.palette.text.secondary,
          borderBottom: "1px solid #E2E8F0",
          fontSize: 13,
        },
      }),
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: "1px solid #F1F5F9",
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: 13,
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        "&:hover": {
          backgroundColor: "#F8FAFC",
        },
      },
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      toolbar: {
        paddingLeft: 8,
        paddingRight: 8,
      },
      displayedRows: { fontSize: 12 },
      selectLabel: { fontSize: 12 },
      select: { fontSize: 12 },
    },
  },
   MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 10,
          ...theme.typography.button,
          padding: theme.spacing(0.75, 1.5),
          textTransform: "none",
          border: `1px solid ${theme.palette.divider}`,
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          },
        }),
      },
    },
    
},

   

  // Add breakpoints to ensure consistent rendering
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Styled components for reusable styling
export const InfoLabel = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(0.5),
  fontWeight: fontWeights.medium,
}));

export const InfoValue = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.primary,
  fontWeight: fontWeights.semibold,
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 8,
  backgroundColor: "#fff",
  border: "1px solid #e0e0e0",
  marginBottom: theme.spacing(3),
  elevation: 1,
}));

// Inside Paper card text styles
export const SectionTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  fontWeight: fontWeights.bold,
}));

// Outside Paper card text styles
export const CardHeaderTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
  fontWeight: fontWeights.bold,
}));

export const InfoSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const InfoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}));

export const VerticalDivider = styled(Divider)(({ theme }) => ({
  borderColor: "#E2E8F0",
  borderWidth: 0.5,
  alignSelf: "stretch",
}));

{
  /** Styled Tabs for consistent styling */
}
export const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 36,
  marginTop: theme.spacing(3),
  "& .MuiTabs-indicator": {
    height: 2,
    display: "none",
    backgroundColor: theme.palette.primary.main,
  },
}));

export const StyledTab = styled((props: { label: string } & any) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  ...theme.typography.body1,
  minHeight: 36,
  width: "200px",
  padding: theme.spacing(0.5, 2),
  color: theme.palette.text.primary,
  borderRadius: 4,
  justifyContent: "center",
  fontWeight: fontWeights.semibold,
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: "rgba(25, 118, 210, 0.04)",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: theme.palette.primary.main,
    fontWeight: fontWeights.bold,
    backgroundColor: "rgba(25, 118, 210, 0.12)",
  },
}));

{
  /** Buttons with consistent styling */
}
export const EditButton = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  ...theme.typography.button,
  padding: theme.spacing(0.5, 1),
  minWidth: "auto",
}));

export const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  ...theme.typography.button,
  padding: theme.spacing(0.75, 1.5),
}));

export default function AppTheme({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </LocalizationProvider>
    </AppRouterCacheProvider>
  );
}

export const Pill = styled("span")<
  { tone?: "default" | "info" | "warning" | "error" }
>(({ theme, tone = "default" }) => {
  const map = {
    default: {
      bg: alpha(theme.palette.primary.main, 0.08),
      fg: theme.palette.primary.main,
    },
    info: {
      bg: alpha(theme.palette.primary.main, 0.08),
      fg: theme.palette.primary.main,
    },
    warning: {
      bg: alpha("#F59E0B", 0.15), // amber
      fg: "#92400E",
    },
    error: {
      bg: alpha(theme.palette.error.main, 0.15),
      fg: theme.palette.error.dark,
    },
  } as const;

  const { bg, fg } = map[tone];

  return {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 10px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1,
    backgroundColor: bg,
    color: fg,
  };
});

export const ActionToggleButton = styled(ToggleButton)(({ theme }) => ({
  borderRadius: 6,
  ...theme.typography.button,          
  padding: theme.spacing(0.75, 1.5),
  textTransform: "none",
  border: `1px solid ${theme.palette.divider}`,

  "&&": {
    fontSize: theme.typography.h2.fontSize,
  },

  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export const SearchBox = styled(TextField)(({ theme }) => ({
  minWidth: 280,
  borderRadius: 10,
  "& .MuiOutlinedInput-root": {
    borderRadius: 6,
    backgroundColor: theme.palette.grey[100],
    "& fieldset": {
      borderColor: theme.palette.divider,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.text.primary,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 3px ${theme.palette.primary.main}33`, // 20% alpha
    },
  },
  "& .MuiInputAdornment-root": {
    color: theme.palette.text.secondary,
  },
}));


