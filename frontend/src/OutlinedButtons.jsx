import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GenderTypeUsageCart from './GenderTypeUsageCart';
import { useState } from 'react';
import "./Part4.css";

export default function OutlinedButtons() {
    const [genderType, setGenderType] = useState("male")
    return (
        <Stack direction="row" spacing={2}>
            <div style={{ display: "flex", margin: "20px", padding:"100px 5vw 80px", flexDirection:"column", borderTop:"1px solid #D3D3D333"}}>
                <div style={{gap:"20px", display:"flex", paddingBottom:"40px"}}>
                    <Button className='outlineBTN' onClick={() => { setGenderType("male") }} variant="outlined" style={{ border: "1px solid #fff", color: "#fff", fontWeight:"600", opacity: ".75" }}>Male</Button>
                    <Button className='outlineBTN' onClick={() => { setGenderType("female") }} variant="outlined" style={{ border: "1px solid #fff", fontWeight:"600", color: "#fff", opacity: ".75" }}>Female</Button>
                </div>
                <div>
                    <GenderTypeUsageCart type={genderType} />   
                </div>
            </div>
        </Stack>
    );
}
