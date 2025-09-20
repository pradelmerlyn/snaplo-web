"use client";

import { Box, Typography, Paper, Divider } from "@mui/material";

export default function PropertyInfo() {
  return (
    <Box>
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: "#1a237e", mb: 2, fontSize: "18px" }}
      >
        Property
      </Typography>

      <Paper
        elevation={1}
        sx={{ borderRadius: 3, border: "1px solid #e0e0e0", p: 3, height: 380 }}
      >
        {/* Centered Container for all content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          {/* Property Address Header */}
          <Box sx={{ mb: 2.5, textAlign: "center", width: "100%" }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, color: "#666", mb: 0.5, fontSize: "11px" }}
            >
              Property Address
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "#333", fontSize: "14px" }}
            >
              456 Main St,{" "}
              <Typography
                component="span"
                sx={{ color: "#666", fontWeight: 400, fontSize: "14px" }}
              >
                Brea, CA 98224
              </Typography>
            </Typography>
          </Box>

          {/* Property Details Container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <PropertyDetailRow label="County" value="Orange" isLast={false} />
            <PropertyDetailRow
              label="Property Type"
              value="Detached 1 Unit"
              isLast={false}
            />
            <PropertyDetailRow
              label="Occupancy"
              value="Primary Residence"
              isLast={false}
            />
            <PropertyDetailRow
              label="Appraisal Ordered"
              value="8/2/2022"
              isLast={false}
            />
            <PropertyDetailRow
              label="Appraisal Completed"
              value="8/6/2022"
              isLast={false}
            />
            <PropertyDetailRow
              label="Appraised Value"
              value="$550,000.00"
              isLast={false}
            />
            <PropertyDetailRow
              label="Value is Supported"
              value="—"
              isLast={true}
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

// Reusable property detail row component
function PropertyDetailRow({
  label,
  value,
  isLast,
}: {
  label: string;
  value: string;
  isLast: boolean;
}) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1.2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#666",
            fontWeight: 500,
            fontSize: "11px",
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#333",
            fontWeight: 600,
            textAlign: "right",
            fontSize: "11px",
          }}
        >
          {value}
        </Typography>
      </Box>
      {!isLast && <Divider sx={{ borderColor: "#f0f0f0" }} />}
    </Box>
  );
}
