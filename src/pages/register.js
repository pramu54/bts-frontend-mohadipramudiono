import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };
    
    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleRegister = () => {
        axios
          .post("/register", {
            email: email,
            password: password,
            username: username,
          })
          .then((res) => {
            const { data } = res;
            console.log(data);
            navigate("/");
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
                    <Typography variant="h4">Register</Typography>
                    <Box sx={{
                        marginY: "10px"
                    }}>
                        <TextField
                            required
                            id="outlined-email-input"
                            label="Email"
                            onChange={(e) => handleEmail(e)}
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
                    <Box>
                        <Button onClick={handleRegister}>
                            Register
                        </Button>
                    </Box>
                    <Box sx={{ 
                        display:"flex",
                        flexDirection:"row",               
                    }}>
                        <Typography>
                            Already have an account? 
                        </Typography>
                        <Button onClick={()=>navigate('/')}>
                            Login
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
export default Register;