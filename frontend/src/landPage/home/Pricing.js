import React from "react";

function Pricing(){
    return(
        <div className="container mb-5">
            <div className="row">
                <div className="col-4">
                    <h1 className="fs-2">Unbeatable pricing</h1>
                    <p>We pioneered the concept and discount broking and price transparency</p>
                    <div>
                        <a href="#" style={{textDecoration:"none"}}>See pricing ➜</a>
                    </div>

                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col-6 p-3 border">
                            <h1 mb-3>₹0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className="col-6 p-3 border">
                            <h1 mb-3>₹20</h1>
                            <p>Intraday and F&O</p>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}
export default Pricing;