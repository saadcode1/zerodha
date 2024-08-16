export default function Pricing() {
  return (
    <div className="container text-center p-5">
      <div className="row col-12 text-center p-5 ">
        <div className="col-4 text-start">
          <h1 className="text-muted">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#">See pricing</a>
        </div>
        <div className="col-8 d-flex">
          <div className="div d-flex justify-content-center align-items-center" style={{width:"15vw",height:"10vw"}}>
            <img
              src="../../src/utils/pricing-eq.svg"
              alt="svg"
              style={{ width: "10vw" }}
            />
            <p  style={{fontSize:"0.6vw",textAlign:"center",marginRight:"-140px",marginTop:"20px",position:"absolute"}}>Free account<br/> opening</p>
          </div>
          <div  className="div d-flex justify-content-center align-items-center" style={{width:"15vw",height:"10vw"}}>
            {" "}
            <img
              src="../../src/utils/pricing-eq-1.svg"
              alt="svg"
              style={{ width: "10vw" }}
            />
            <p  style={{fontSize:"0.6vw",textAlign:"center",marginRight:"-170px",marginTop:"20px",position:"absolute"}}>Free equity delivery<br/> and direct mutual funds</p>
          </div>
          <div className="div d-flex justify-content-center align-items-center" style={{width:"15vw",height:"10vw"}}>
            {" "}
            <img
              src="../../src/utils/other-trades-2.svg"
              alt="svg"
              style={{ width: "10vw" }}
            />
            <p  style={{fontSize:"0.6vw",textAlign:"center",marginRight:"-180px",marginTop:"20px",position:"absolute"}}>Intraday and<br/> F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}
