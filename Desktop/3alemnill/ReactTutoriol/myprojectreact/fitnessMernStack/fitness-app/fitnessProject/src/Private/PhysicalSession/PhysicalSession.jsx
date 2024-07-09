import React from "react";
import {
  Typography,
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const sessions = [
  {
    title: "Weightlifting Sessions",
    description:
      "Weightlifting exercises help increase muscle strength and improve body shape.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.KdzXbwbBfIRcs--o-Rs-kwHaEK?rs=1&pid=ImgDetMain",
  },
  {
    title: "Resistance Training Sessions",
    description: "Using resistance bands or machines to exercise muscles.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.tMh4ZLUY33PWr3uzi_Ol2QHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Cardio Sessions",
    description: "Cardio exercises such as running, cycling, and jump rope.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.dGwbXEyrGtaDck7Ae-g4BwHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Yoga Sessions",
    description:
      "Yoga exercises to enhance flexibility, balance, and relaxation.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.tnom4686VAXYQl-wiMqCTwAAAA?rs=1&pid=ImgDetMain",
  },
  {
    title: "Pilates Sessions",
    description:
      "Pilates exercises to strengthen core muscles and improve posture.",
    imageUrl:
      "https://th.bing.com/th/id/R.ebb706f2a9d7ee396a76f6c2ae358c3c?rik=Zio6XxX9hNzs2A&pid=ImgRaw&r=0",
  },
  {
    title: "Group Training Sessions",
    description: "Group training sessions that include a variety of exercises.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.6uVSkW1ETq5se4hFVd0B1gHaD4?w=1600&h=838&rs=1&pid=ImgDetMain",
  },
];

const PhysicalSessions = () => (
  <Box sx={{ mt: { lg: "30px", xs: "15px" } }} p="20px">
    <Typography
      variant="h4"
      fontWeight="bold"
      sx={{ fontSize: { lg: "36px", xs: "24px" } }}
      mb="46px"
      textAlign="center"
    >
      Various Physical Sessions
    </Typography>
    <Stack
      direction="row"
      sx={{ gap: { lg: "20px", xs: "10px" } }}
      flexWrap="wrap"
      justifyContent="center"
    >
      {sessions.map((session, idx) => (
        <Card
          key={idx}
          sx={{
            maxWidth: 345,
            backgroundColor: "var( --primary-color-extra-light)",
            m: "10px",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={session.imageUrl}
            alt={session.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "var(--secondary-color)" }}
            >
              {session.title}
            </Typography>
            <Typography variant="body2" color="var(--text-light)">
              {session.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  </Box>
);

export default PhysicalSessions;
