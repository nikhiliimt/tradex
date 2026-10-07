import React from "react";
function brokerage() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 text-center border-top">
                <div className="col-8 p-4 ">
                    <h3 className="fs-5">Brokerage Calculator</h3>
                    <ul style={{ textAlign: "left", lineHeight: "2.5",fontSize:"14px" }} className="text-muted ">
                        <li>Call and trade and RMS auto-squareOff: Additional Charges of ₹50 +GST per order
                        </li>
                        <li>Digital Contract notes will be sent via e-mail</li>
                        <li>Physical copies of contract notes, if required,shall be charged ₹20 per contract note. COurier Charges apply
                        </li>
                        <li>For NRI account (non-PIS) 0.5%  or ₹100 per executed order for Equity (whichever is low)

                        </li>
                        <li>
                            for NRI account (PIS) 0.5% or ₹200 per executed order for equity (whichever is low)

                        </li>
                        <li>If the Account is debit balance any order placed will be charged
                            ₹40 per executed order instead  of ₹20 per order executed</li>
                    </ul>

                </div>
                <div className="col-4 p-4">
                    <h3 className="fs-5">
                        List of Charges
                    </h3>

                </div>
            </div>

        </div>
    );
}
export default brokerage;