import React from "react";

function Awards(){
    return(
        <div className="container p-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/largestBroker.svg"/>
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>
                        Largest stock broker in India
                    </h1>
                    <p className="mb-5">
                        world most trusted trading platform
                    </p>
                    <div className="row">
                        <div className="col-6 ">
                    <ul>
                        <li>
                            <p>
                                Futures and options
                            </p>
                        </li>
                        <li>
                            <p>
                                Commodity derivatives

                            </p>
                        </li>
                        <li>
                            <p>
                                Currency derivatives
                            </p>
                        </li>

                    </ul>
                    </div>
                        <div className="col-6">
                    <ul>
                        <li>
                            <p>
                                Stocks and Ipos
                            </p>
                        </li>
                        <li>
                            <p>
                                Direct mutual funds

                            </p>
                        </li>
                        <li>
                            <p>
                                Bonds and Govt Securities
                            </p>
                        </li>

                    </ul>
                    </div>
                    </div>
                    <img src="media/pressLogos.png" style={{width:"90%"}}/>
                </div>

            </div>
        </div>
    );
}
export default Awards;