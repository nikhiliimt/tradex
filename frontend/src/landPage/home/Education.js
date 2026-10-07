import React from "react";

function Education(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/education.svg" style={{width:"70%"}}/>

                </div>
                <div className="col-6 mb-5">
                    <h1 className="mb-3 fs-2">Free  and Open Market education</h1>
                    <p >Varsity, the largest online Stock Market education book in the world Covering everything from basics to advanced trading</p>
                    <a href="#"style={{textDecoration:"none"}}>Varsity ➜</a>
                    <p className="mt-5">TradingQ&A, the most active trading and investment Community in India all your Market related Queries</p>
                    <a href="#" style={{textDecoration:"none"}}>TradingQ&A ➜</a>
                </div>

            </div>
        </div>

    );
}
export default Education;