"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import {
  CloudUpload as UploadIcon,
  GetApp as DownloadIcon,
  GridView as GridIcon,
  ViewList as ListIcon,
  Folder as FolderIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Sidebar = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 8,
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  border: "1px solid #e0e0e0",
  height: "fit-content",
}));

const UploadZone = styled(Box)(({ theme }) => ({
  border: "2px dashed #d0d7de",
  borderRadius: 8,
  padding: theme.spacing(6),
  textAlign: "center",
  backgroundColor: "#fafbfc",
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    borderColor: "#1976d2",
    backgroundColor: "#f5f7fa",
  },
}));

const DocumentThumbnail = styled(Card)(({ theme }) => ({
  borderRadius: 8,
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  border: "1px solid #e0e0e0",
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    transform: "translateY(-2px)",
  },
}));

const CategoryItem = styled(ListItemButton)(({ theme }) => ({
  borderRadius: 6,
  marginBottom: theme.spacing(0.5),
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
  "&.selected": {
    backgroundColor: "#e3f2fd",
    color: "#1976d2",
  },
}));

interface Document {
  id: string;
  name: string;
  type: "pdf" | "doc" | "excel" | "image";
  status: "approved" | "pending" | "rejected" | "review";
  uploadDate: string;
  size: string;
  category: string;
}

const documentCategories = [
  { name: "Disclosures", count: 10 },
  { name: "Credit Report", count: 1 },
  { name: "Gen - 1003 (initial)", count: 2 },
  { name: "Lock Form", count: 2 },
  { name: "Compliance Report", count: 1 },
  { name: "Property - Flood Certification", count: 1 },
  { name: "Income - Tax Returns (personal)", count: 3 },
];

const mockDocuments: Document[] = [
  {
    id: "1",
    name: "Pre-Approval Letter",
    type: "pdf",
    status: "approved",
    uploadDate: "9/26/2022",
    size: "2.4 MB",
    category: "Disclosures",
  },
  {
    id: "2",
    name: "Wire Instructions",
    type: "pdf",
    status: "approved",
    uploadDate: "9/8/2022",
    size: "1.2 MB",
    category: "Credit Report",
  },
  {
    id: "3",
    name: "Loan Estimate",
    type: "pdf",
    status: "approved",
    uploadDate: "9/2/2022",
    size: "3.8 MB",
    category: "Gen - 1003 (initial)",
  },
  {
    id: "4",
    name: "Understanding Your Appraisal",
    type: "pdf",
    status: "approved",
    uploadDate: "9/16/2022",
    size: "1.8 MB",
    category: "Lock Form",
  },
  {
    id: "5",
    name: "Homeowner Insurance Quote",
    type: "pdf",
    status: "approved",
    uploadDate: "9/20/2022",
    size: "0.5 MB",
    category: "Compliance Report",
  },
  {
    id: "6",
    name: "Pay Stubs Statement Document",
    type: "pdf",
    status: "approved",
    uploadDate: "9/10/2022",
    size: "2.1 MB",
    category: "Property - Flood Certification",
  },
  {
    id: "7",
    name: "Self Employment Financial Statements",
    type: "pdf",
    status: "approved",
    uploadDate: "9/9/2022",
    size: "4.2 MB",
    category: "Income - Tax Returns (personal)",
  },
  {
    id: "8",
    name: "Loan Facts Disclosure",
    type: "pdf",
    status: "approved",
    uploadDate: "9/8/2022",
    size: "1.9 MB",
    category: "Disclosures",
  },
];

export default function DocumentSummary() {
  const [selectedCategory, setSelectedCategory] = useState("ASSIGNED");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredDocuments =
    selectedCategory === "ASSIGNED"
      ? mockDocuments
      : mockDocuments.filter((doc) => doc.category === selectedCategory);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log("Selected files:", Array.from(files));
    }
  };

  const handleBrowseClick = () => {
    document.getElementById("file-upload-input")?.click();
  };

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh", p: 2 }}>
      <Grid container spacing={2} sx={{ maxWidth: 1400, mx: "auto" }}>
        {/* Left Sidebar */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Sidebar>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#333",
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FolderIcon sx={{ color: "#666" }} />
              ASSIGNED
            </Typography>

            <List sx={{ p: 0 }}>
              <CategoryItem
                className={selectedCategory === "ASSIGNED" ? "selected" : ""}
                onClick={() => handleCategorySelect("ASSIGNED")}
              >
                <ListItemText
                  primary="All Documents"
                  secondary={`${mockDocuments.length} documents`}
                  slotProps={{
                    primary: { fontSize: "14px", fontWeight: 500 },
                    secondary: { fontSize: "12px" },
                  }}
                />
              </CategoryItem>

              <Divider sx={{ my: 1 }} />

              {documentCategories.map((category) => (
                <CategoryItem
                  key={category.name}
                  className={
                    selectedCategory === category.name ? "selected" : ""
                  }
                  onClick={() => handleCategorySelect(category.name)}
                >
                  <ListItemText
                    primary={category.name}
                    secondary={`${category.count} documents`}
                    slotProps={{
                      primary: { fontSize: "13px", fontWeight: 400 },
                      secondary: { fontSize: "11px" },
                    }}
                  />
                </CategoryItem>
              ))}
            </List>
          </Sidebar>
        </Grid>

        {/* Main Content */}
        <Grid size={{ xs: 12, md: 9 }}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 2,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {/* Upload Zone */}
            <UploadZone onClick={handleBrowseClick}>
              <input
                id="file-upload-input"
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.xlsx,.xls,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />
              <UploadIcon sx={{ fontSize: 48, color: "#666", mb: 2 }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: 500, color: "#333", mb: 1 }}
              >
                Drag and drop to upload documents
              </Typography>
              <Button
                variant="contained"
                onClick={handleBrowseClick}
                sx={{
                  backgroundColor: "#1976d2",
                  textTransform: "none",
                  fontWeight: 500,
                  px: 3,
                }}
              >
                Browse
              </Button>
            </UploadZone>

            {/* Header with count and view options */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 4,
                mb: 3,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                {selectedCategory} ({filteredDocuments.length})
              </Typography>

              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  sx={{
                    textTransform: "none",
                    borderColor: "#ddd",
                    color: "#666",
                  }}
                >
                  Download
                </Button>
                <Button
                  variant={viewMode === "grid" ? "contained" : "outlined"}
                  onClick={() => setViewMode("grid")}
                  sx={{ minWidth: 40, p: 1 }}
                >
                  <GridIcon />
                </Button>
                <Button
                  variant={viewMode === "list" ? "contained" : "outlined"}
                  onClick={() => setViewMode("list")}
                  sx={{ minWidth: 40, p: 1 }}
                >
                  <ListIcon />
                </Button>
              </Box>
            </Box>

            {/* Document Thumbnails Grid */}
            <Grid container spacing={2}>
              {filteredDocuments.map((doc) => (
                <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={doc.id}>
                  <DocumentThumbnail>
                    <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
                      {/* Document thumbnail/preview */}
                      <Box
                        sx={{
                          width: "100%",
                          height: 120,
                          backgroundColor: "#f5f5f5",
                          borderRadius: 1,
                          mb: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundImage: "url('/api/placeholder/120/120')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        {/* Placeholder for document preview */}
                        <Box
                          sx={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "white",
                            border: "1px solid #ddd",
                            borderRadius: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "10px",
                            color: "#666",
                            textAlign: "center",
                            p: 1,
                          }}
                        >
                          PDF Document Preview
                        </Box>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 500,
                          color: "#333",
                          fontSize: "12px",
                          lineHeight: 1.2,
                          mb: 0.5,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {doc.name}
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{ color: "#888", fontSize: "11px" }}
                      >
                        {doc.uploadDate}
                      </Typography>
                    </CardContent>
                  </DocumentThumbnail>
                </Grid>
              ))}
            </Grid>

            {filteredDocuments.length === 0 && (
              <Box sx={{ textAlign: "center", py: 6 }}>
                <Typography variant="h6" sx={{ color: "#666", mb: 1 }}>
                  No documents in this category
                </Typography>
                <Typography variant="body2" sx={{ color: "#888" }}>
                  Upload documents to get started
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
