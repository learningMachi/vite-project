const Card2 = () => {
  return(
    <div>
      <div className="card" style={{"width": "18rem"}}>
        <div className="card-body">
          <p className="para">PLUS</p>
          <h5 className="card-title">$9/month</h5>
          <p className="card-text">✔ 5 Users</p>
          <p>✔ 50GB Storage</p>
          <p>✔ Unlimited Public Project</p>
          <p>✔ Community Access</p>
          <p>✔ Unlimited Private Projects</p>
          <p>✔ Dedicated Phone Support</p>
          <p>✔ Free Subdomain</p>
          <p>✘ Monthly Status Report</p>
        </div>
        <div className="card-body">
        <button type="button" className="btn btn-primary">BUTTON</button>
        </div>
      </div>
    </div>
 )
}   
export default Card2;
