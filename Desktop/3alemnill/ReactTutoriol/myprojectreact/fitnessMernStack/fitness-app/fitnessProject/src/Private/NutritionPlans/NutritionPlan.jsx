import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Select,
  MenuItem,
  Chip,
  FormControl,
  InputLabel,
  OutlinedInput,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Snackbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatshotIcon from "@mui/icons-material/Whatshot";
// import DeleteIcon from '@mui/icons-material/Delete';
import styles from "./nutrition.module.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const NutritionPlan = () => {
  const [nutritionPlans, setNutritionPlans] = useState(() => {
    const savedPlans = localStorage.getItem("nutritionPlans");
    return savedPlans ? JSON.parse(savedPlans) : [];
  });
  const [newPlan, setNewPlan] = useState({
    title: "",
    description: "",
    imageUrl: "",
    months: [],
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const fetchNutritionPlans = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/nutrition/plans"
        );
        localStorage.setItem("nutritionPlans", JSON.stringify(response.data));
        setNutritionPlans(response.data);
      } catch (error) {
        console.error("Error fetching nutrition plans:", error);
      }
    };

    fetchNutritionPlans();
  }, []);

  const handleChange = (e) => {
    setNewPlan({ ...newPlan, [e.target.name]: e.target.value });
  };

  const handleMonthsChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewPlan((prevPlan) => ({
      ...prevPlan,
      months: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleMonthDelete = (monthToDelete) => () => {
    setNewPlan((prevPlan) => ({
      ...prevPlan,
      months: prevPlan.months.filter((month) => month !== monthToDelete),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/nutrition/plans/add",
        newPlan
      );
      const updatedPlans = [...nutritionPlans, response.data];
      localStorage.setItem("nutritionPlans", JSON.stringify(updatedPlans));
      setNutritionPlans(updatedPlans);
      setNewPlan({ title: "", description: "", imageUrl: "", months: [] });

      alert("Nutrition plan added successfully!");
    } catch (error) {
      console.error("Error adding nutrition plan:", error);
      alert("Error adding nutrition plan. Please try again.");
    }
  };

  const handleDelete = async (planId) => {
    try {
      await axios.delete(`http://localhost:5000/api/nutrition/plans/${planId}`);
      const updatedPlans = nutritionPlans.filter((plan) => plan._id !== planId);
      localStorage.setItem("nutritionPlans", JSON.stringify(updatedPlans));
      setNutritionPlans(updatedPlans);
    } catch (error) {
      console.error("Error deleting nutrition plan:", error);
      alert("Error deleting nutrition plan. Please try again.");
    }
  };

  const handleShare = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "36px", xs: "24px" } }}
        mb="46px"
        textAlign="center"
      >
        Nutrition Plans
      </Typography>
      <Box
        className={styles.nutritionplans}
        sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
      >
        {nutritionPlans.map((plan) => (
          <Card key={plan._id} sx={{ maxWidth: 345, mb: 2 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="inherit" component="span">
                      {plan.title}
                    </Typography>
                    {plan.hot && (
                      <WhatshotIcon color="warning" sx={{ ml: 1 }} />
                    )}
                  </Box>
                </Typography>
                <Typography variant="body2" color="text.warning">
                  {plan.description}
                </Typography>
                <Typography variant="body2" color="text.warning">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="inherit" component="span">
                      Months: {plan.months.join(", ")}
                    </Typography>
                    {plan.hot && (
                      <WhatshotIcon color="warning" sx={{ ml: 1 }} />
                    )}
                  </Box>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="warning" onClick={handleShare}>
                Share
              </Button>
              <Button
                size="small"
                color="warning"
                onClick={() => handleDelete(plan._id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Box component="form" onSubmit={handleSubmit} mt={4}>
        <Typography variant="h4">Add New Nutrition Plan</Typography>
        <TextField
          label="Title"
          name="title"
          value={newPlan.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ style: { color: "var(--text-light)" } }}
          InputProps={{
            style: {
              color: "var(--text-light)",
              backgroundColor: "var(--primary-color-extra-light)",
            },
          }}
        />
        <TextField
          label="Description"
          name="description"
          value={newPlan.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          InputLabelProps={{ style: { color: "var(--text-light)" } }}
          InputProps={{
            style: {
              color: "var(--text-light)",
              backgroundColor: "var(--primary-color-extra-light)",
            },
          }}
        />
        <TextField
          label="Image URL"
          name="imageUrl"
          value={newPlan.imageUrl}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ style: { color: "var(--text-light)" } }}
          InputProps={{
            style: {
              color: "var(--text-light)",
              backgroundColor: "var(--primary-color-extra-light)",
            },
          }}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="months-label" style={{ color: "var(--text-light)" }}>
            Months
          </InputLabel>
          <Select
            labelId="months-label"
            id="months"
            multiple
            value={newPlan.months}
            onChange={handleMonthsChange}
            input={<OutlinedInput id="select-multiple-chip" label="Months" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={handleMonthDelete(value)}
                    deleteIcon={
                      <CloseIcon sx={{ color: "var(--text-light)" }} />
                    }
                    sx={{
                      backgroundColor: "var(--secondary-color)",
                      color: "var(--text-light)",
                    }}
                  />
                ))}
              </Box>
            )}
            MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: "var(--primary-color-extra-light)",
                  color: "var(--text-light)",
                },
              },
            }}
            sx={{
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--secondary-color)",
              },
              ".Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--secondary-color)",
              },
              ".MuiSelect-icon": { color: "var(--secondary-color)" },
            }}
          >
            {months.map((month) => (
              <MenuItem
                key={month}
                value={month}
                style={{
                  backgroundColor: "var(--primary-color-extra-light)",
                  color: "var(--text-light)",
                }}
              >
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="warning"
          type="submit"
          sx={{
            backgroundColor: "var(--secondary-color)",
            color: "var(--text-light)",
          }}
        >
          Add Plan
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Plan shared successfully!"
      />
    </Container>
  );
};

export default NutritionPlan;
