"use client";

import { Box, Typography, Paper } from "@mui/material";
import dynamic from "next/dynamic";

const DynamicCalendar = dynamic(
  async () => {
    if (typeof window === "undefined") {
      return () => null;
    }
    const [
      { DateCalendar, PickersDay },
      { LocalizationProvider },
      { AdapterDayjs },
      { default: dayjs },
      { styled },
      { useState, useEffect },
    ] = await Promise.all([
      import("@mui/x-date-pickers"),
      import("@mui/x-date-pickers"),
      import("@mui/x-date-pickers/AdapterDayjs"),
      import("dayjs"),
      import("@mui/material/styles"),
      import("react"),
    ]);

    const CustomPickersDay = styled(PickersDay)(() => ({
      position: "relative",
      flexDirection: "column",
      height: "auto",
      minHeight: 40,
      borderRadius: 8,
      fontSize: "12px",
      fontWeight: 500,
      color: "#212121",
      "&.Mui-selected": {
        backgroundColor: "#1a237e",
        color: "#fff",
      },
      "&::after": {
        content: "attr(data-event)",
        position: "absolute",
        bottom: 3,
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "8px",
        color: "#666",
        whiteSpace: "nowrap",
        display: "none",
        textAlign: "center",
      },
      "&.est-closing::after": {
        display: "block",
        content: '"Est. Closing"',
        color: "#00bcd4",
      },
      "&.lock-exp::after": {
        display: "block",
        content: '"Lock Exp"',
        color: "#d32f2f",
      },
    }));

    return function Calendar() {
      const [isMounted, setIsMounted] = useState(false);
      useEffect(() => setIsMounted(true), []);
      if (!isMounted) return null;

      const estClosingDate = dayjs("2023-03-16");
      const lockExpDate = dayjs("2023-03-31");
      const selectedDate = dayjs("2023-03-10");

      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={selectedDate}
            slots={{ day: CustomPickersDay }}
            slotProps={{
              day: (ownerState) => ({
                className: ownerState.day.isSame(estClosingDate, "day")
                  ? "est-closing"
                  : ownerState.day.isSame(lockExpDate, "day")
                  ? "lock-exp"
                  : "",
              }),
            }}
            sx={{
              width: "100%",
              "& .MuiPickersCalendarHeader-root": {
                px: 1,
                mt: 0,
                mb: 1,
              },
              "& .MuiPickersCalendarHeader-label": {
                fontSize: "15px",
                fontWeight: 600,
                color: "#212121",
              },
              "& .MuiDayCalendar-weekDayLabel": {
                fontSize: "11px",
                fontWeight: 500,
                color: "#666",
              },
              "& .MuiPickersDay-root": {
                width: 48,
                height: 40,
                fontSize: "11px",
                fontWeight: 400,
              },
              "& .MuiDayCalendar-slideTransition": {
                minHeight: 240,
              },
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 3,
              mt: 1,
              ml: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  bgcolor: "#00bcd4",
                  borderRadius: 0.5,
                }}
              />
              <Typography fontSize="12px" color="#333">
                Est. Closing
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  bgcolor: "#d32f2f",
                  borderRadius: 0.5,
                }}
              />
              <Typography fontSize="12px" color="#333">
                Lock Exp
              </Typography>
            </Box>
          </Box>
        </LocalizationProvider>
      );
    };
  },
  {
    ssr: false,
    loading: () => (
      <Box
        sx={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Loading calendar...
        </Typography>
      </Box>
    ),
  }
);

export default function CalendarCard() {
  return (
    <Box>
      <Typography
        variant="h6"
        fontWeight={700}
        sx={{ color: "#1a237e", mb: 2, fontSize: "18px" }}
      >
        Calendar
      </Typography>

      <Paper
        elevation={1}
        sx={{
          px: 2,
          py: 2,
          borderRadius: 3,
          backgroundColor: "#fff",
          width: "100%",
          border: "1px solid #e0e0e0",
        }}
      >
        <DynamicCalendar />
      </Paper>
    </Box>
  );
}
