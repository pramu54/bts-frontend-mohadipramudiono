import { Button, List, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

const Checklist = () => {
    const[checklists, setChecklists] = useState([]);
    const[newChecklist, setNewChecklist] = useState("");

    // useEffect(()=>{
    //     fetchData();
    // }, [])

    const fetchData = async() => {
        await axios
        .get("/checklist",
            {headers : {"Authorization" : "Bearer "+ localStorage.getItem('token')}})
        .then((res)=>{
            const { data } = res;
            setChecklists(data)
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    const storeChecklist = async() => {
        await axios
        .post("/checklist", { name: newChecklist }
        , {headers : {"Authorization" : "Bearer "+ localStorage.getItem('token')}})
    }

    const handleNewChecklist = (e) => {
        const value = e.target.value;
        setNewChecklist(value);
    };

    return(
        <>
            <TextField onChange={(e) => handleNewChecklist(e)} />
            <Button onClick={storeChecklist}>Submit</Button>
            {checklists.map((item)=>(
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Trash" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Spam" />
                        </ListItemButton>
                    </ListItem>
              </List>
            ))}
        </>
    )
}
export default Checklist;