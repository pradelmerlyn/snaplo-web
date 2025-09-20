"use client";

import {
  Box,
  Typography,
  Button,
} from "@mui/material";
export default function ApplicationSideBar() {
  return (
    <Box>
      {/* Start Application Button */}
      <Box sx={{ mb: 3 }}>
        <Button
          variant="outlined"
          sx={{
            border: "1px solid #5c6bc0",
            color: "#5c6bc0",
            px: 3,
            py: 1,
            borderRadius: 1,
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "none",
            "&:hover": {
              borderColor: "#3f51b5",
              backgroundColor: "rgba(92, 107, 192, 0.04)",
            },
          }}
        >
          Start Application
        </Button>
      </Box>

      {/* NOTE Section */}
      <Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "#333", mb: 2, fontSize: "16px" }}
        >
          NOTE
        </Typography>

        <Box
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: 1,
            p: 2,
            minHeight: 100,
            backgroundColor: "#fafafa",
            mb: 3,
          }}
        >
          <Typography variant="body2" color="#999" sx={{ fontStyle: "italic" }}>
            Add a note
          </Typography>
        </Box>

        {/* Note Items */}
        <Box sx={{ space: 2 }}>
          <Box
            sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 2 }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#333",
                mt: 1,
                flexShrink: 0,
              }}
            />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
                Borrowers need to sign the disclosure
              </Typography>
              <Typography variant="caption" color="#999">
                9/27/2022 3:45pm (miles)
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#333",
                mt: 1,
                flexShrink: 0,
              }}
            />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
                Best time to call: Mon~Wed after 3:30PM
              </Typography>
              <Typography variant="caption" color="#999">
                9/16/2022 12:15pm (miles)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
