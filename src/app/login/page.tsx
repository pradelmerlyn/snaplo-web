"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Stack,
  Alert,
  InputAdornment,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { StyledPaper, ActionButton, CardHeaderTitle } from "../../theme/AppTheme";
import { login } from "@/services/api/auth.service";

export default function LoginPage() {
  const [userName, setUserName] = useState("lrlotest1");
  const [password, setPassword] = useState("limeclam49!");
  const [impersonateUser, setImpersonateUser] = useState("mmaine");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);
    try {
      await login({ userName, password, impersonateUser });
      const next = new URLSearchParams(window.location.search).get("next") || "/";
      console.log("Login successful, redirecting to:", next);
      window.location.href = next;
    } catch (err: any) {
      setErrorMsg(err?.message ?? "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        background:
          "linear-gradient(180deg, rgba(25,118,210,0.06) 0%, rgba(25,118,210,0.02) 100%)",
      }}
    >
      <StyledPaper sx={{ width: "100%", maxWidth: 460, p: 4, borderRadius: 4 }}>
        <form onSubmit={onSubmit} noValidate>
          <Stack spacing={2}>
            <CardHeaderTitle textAlign="center">Sign in</CardHeaderTitle>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Use your AFN credentials to continue
            </Typography>

            {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

            <TextField
              label="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              fullWidth
              autoFocus
            />

            <TextField
              label="Password"
              type={showPwd ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPwd((s) => !s)} edge="end" aria-label="toggle password">
                      {showPwd ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Impersonate User (optional)"
              value={impersonateUser}
              onChange={(e) => setImpersonateUser(e.target.value)}
              fullWidth
            />

            <ActionButton
              type="submit"
              variant="contained"
              disabled={loading}
              fullWidth
              sx={{ mt: 1 }}
            >
              {loading ? "Signing in..." : "Sign in"}
            </ActionButton>

            <Divider />

            <ActionButton
              variant="text"
              color="inherit"
              fullWidth
              onClick={async () => {
                await fetch("/api/logout", { method: "POST" });
                window.location.href = "/login";
              }}
            >
              Clear session
            </ActionButton>
          </Stack>
        </form>
      </StyledPaper>
    </Box>
  );
}
