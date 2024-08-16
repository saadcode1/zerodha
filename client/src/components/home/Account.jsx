import { Button } from "@mui/material"
export default function Account(){
    return(
        
        <div className="container p-5">
            <div className="row text-center">
                <h1 className="pb-2">Open a Zerodha account</h1>
                <p className="text-muted">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <h1><Button variant="contained" className="text-center" style={{width:"10vw"}}>Signup now</Button></h1>
            </div>
        </div>
    )
}