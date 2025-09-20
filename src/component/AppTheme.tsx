"use client";

import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  styled,
  Typography,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
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
  fontWeight: 500,
  color: "#666",
  marginBottom: 4,
  fontSize: "11px",
}));

export const InfoValue = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#333",
  fontSize: "11px",
}));

export default function AppTheme({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
