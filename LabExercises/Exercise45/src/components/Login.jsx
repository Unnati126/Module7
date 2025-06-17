import { TextField, Button, Box, Typography } from "@mui/material";

function Login() {
    return (
        <Box sx={{ paddingTop: "80px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h4" gutterBottom>Login Page</Typography>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, width: "300px" }}>
        <TextField label="Username" variant="outlined" fullWidth />
        <TextField label="Password" type="password" variant="outlined" fullWidth />
        <Button variant="contained" color="primary">Login</Button>
      </Box>
    </Box>
  );
}

export default Login;