import React from "react";

function Stats(){
    return(
        <div className="container p-5">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-2 mb-5">
                        Trust with confidence
                    </h1>
                    <h2 className="fs-4">
                        Customer-first always

                    </h2>
                    <p className="text-muted">
                        That's why 1.3+ crore customers trust Our platform with 3.5 lakh crores worth  of equity investment.
                    </p>
                    <h2 className="fs-4">
                        No spam or gimmicks

                    </h2>
                    <p className="text-muted">
                        No gimmicks ,spam "gamifiaction", or annoying push notifications. High Quality apps that you use at your pace ,the way You like
                    </p>
                    <h2 className="fs-4">
                        TradeX Universe

                    </h2>
                    <p className="text-muted">
                        Not just a Platform,but a whole ecosytem . Our investments in 30+ fintech StartUps Offer a tailored services specific to your needs.
                    </p>
                    <h2 className="fs-4">
                        Do better with money

                    </h2>
                    <p className="text-muted">
                       with initiatives like Nudge and kill Switch "we don't facilate transactions"but actively help you to do better with your money.
                    </p>

                </div>
                <div className="col-6  p-5">
                    <img src="media/ecosystem.png" style={{width:"95%"}}/>
                                    <div className="text-center">
                    <a href="#" className="mx-5" style={{textDecoration:"none"}}>Explore our products ➜ </a>
                    <a href="#" style={{textDecoration:"none"}}>Try Kite ➜</a>
                    
                </div>
                </div>


            </div>

        </div>
    );
}
export default Stats;