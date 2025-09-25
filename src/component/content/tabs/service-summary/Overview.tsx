"use client";

import { Box, Typography, Grid } from "@mui/material";
import { CardHeaderTitle, StyledPaper } from "@/theme/AppTheme";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Overview() {
  return (
    <Box
      sx={{
        // width: "100%",
        //  display: "flex",
        justifyContent: "center",
        marginLeft: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          // maxWidth: "900px",
          // width: "100%",
        }}
      >
        {/* Credit Report */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <CardHeaderTitle>Credit Report</CardHeaderTitle>

          <StyledPaper
            sx={{
              // px: 2,
              // py: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
                minHeight: 160, // smaller height
              textAlign: "center",
              width: "300px",
            }}
          >
            {/* Updated row */}
            <Box display="flex" alignItems="center" mb={2}>
              <DescriptionIcon
                fontSize="small"
                sx={{ color: "primary.main", mr: 0.5 }}
              />
              <Typography
                variant="caption"
                sx={{ color: "#666",}}
              >
                Updated on Sept 26, 2023
              </Typography>
            </Box>

            {/* Scores row */}
            <Box display="flex" justifyContent="center" gap={6}>
              <ScoreCard name="John Smith" score="750" status="Excellent" />
              <ScoreCard name="Mary Smith" score="750" status="Excellent" />
            </Box>
          </StyledPaper>
        </Grid>

        {/* Automated Underwriting System */}
        <Grid>
          <CardHeaderTitle>Automated Underwriting System</CardHeaderTitle>

          <StyledPaper sx={{ padding: 1.5 }}>
            <MiniCard
              title="DU"
              description="Desktop Underwriting is a report provided by Fannie Mae"
            />
            <MiniCard
              title="LPA"
              description="Loan Products Advisor is a report provided by Freddie Mac"
            />
          </StyledPaper>
        </Grid>
      </Box>
    </Box>
  );
}

/* ------------------------------
   Score Card for Borrowers
--------------------------------*/
function ScoreCard({
  name,
  score,
  status,
}: {
  name: string;
  score: string;
  status: string;
}) {
  return (
    <Box textAlign="center">
      <Typography
        variant="caption"
        sx={{ color: "#333", mb: 0.25 }}
      >
        {name}
      </Typography>
      <Typography
      variant="body1"
        fontWeight={700}
        sx={{ color: "#111", lineHeight: 1.2 }}
      >
        {score}
      </Typography>
      <Typography
        variant="body2"
        fontWeight={600}
        sx={{ color: "success.main", fontSize: "10px" }}
      >
        {status}
      </Typography>
    </Box>
  );
}

/* ------------------------------
   Mini Card for DU / LPA blocks
--------------------------------*/
function MiniCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Box
      sx={{
        p: 0.8,
        mb: 1.5,
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        border: "1px solid #f0f0f0",
        backgroundColor: "#fafafa",
      }}
    >
      <Typography
        variant="body1"
        fontWeight={700}
        sx={{ color: "#111", mb: 0.25 }}
      >
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.3 }}>
        {description}
      </Typography>
    </Box>
  );
}
