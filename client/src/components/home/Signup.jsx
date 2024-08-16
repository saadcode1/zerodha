import {Button} from "@mui/material";

export default function Signup(){
    return(
        <div className="container">
            <div className="row text-center">
                <h1>Invest in everything</h1>
                <h3 className="text-muted">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h3>
                <h1><Button variant="contained" className="text-center" style={{width:"10vw"}}>Signup now</Button></h1>
            </div>
        </div>
    )
}