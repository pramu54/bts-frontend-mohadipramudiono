import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };
    
    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSignIn = () => {
        axios
          .post("/login", {
            password: password,
            username: username,
          })
          .then((res) => {
            const { data } = res.data;
            localStorage.setItem("token", data.token);
            console.log(data)
            navigate("/checklist");
          })
          .catch((err) => {
            const { data } = err.response;
            console.log(data);
          });
      };

    return(
        <>
            <Box sx={{
                border: '1px solid grey',
                marginX: "100px",
                display:"flex",
                flexDirection:"column",
            }}>
                <Container>
                    <Typography variant="h4">Login</Typography>
                    <Box sx={{
                        marginY: "10px"
                    }}>
                        <TextField
                            required
                            id="outlined-username-input"
                            label="Username"
                            onChange={(e) => handleUsername(e)}
                        />
                    </Box>
                    <Box sx={{
                        marginY: "10px"
                    }}>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e) => handlePassword(e)}
                        />
                    </Box>
                    <Box>
                        <Button onClick={handleSignIn} >
                            Submit
                        </Button>
                    </Box>
                    <Box sx={{ 
                        display:"flex",
                        flexDirection:"row",               
                    }}>
                        <Typography>
                            Don't have an account?
                        </Typography>
                        <Button onClick={()=>navigate("/register")}>
                            Register
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
export default Login;