import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <> 
        <nav className="navbar navbar-light bg-light p-3">
  <div className="container  justify-content-center">
    <div className="row col-12">
        <div className="col-6 pt-1" style={{paddingLeft:"5vw"}}>
        <Link to="/" className="navbar-brand" href="#">
      <img src="../src/utils/logo.svg" alt="" width="120" height="20" className="d-inline-block align-text-top "/>
      
    </Link>
        </div>
        <div className="col-6 text-center text-muted">
            <Link to="/signup"style={{fontSize:"1.2vw"}}>signup</Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <Link to="/about" style={{fontSize:"1.2vw"}}>About</Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <Link to="/product" style={{fontSize:"1.2vw"}}>Products</Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <Link to="/pricing" style={{fontSize:"1.2vw"}}>pricing</Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <Link to="/support" style={{fontSize:"1.2vw"}}>support</Link>
        </div>
   
    </div>
   
  </div>
  
</nav>
        </>
    )
}