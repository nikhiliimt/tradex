import React from "react";

function Footer(){
    return(
        <footer style={{backgroundColor:"rgb(250,250,250"}}>
        <div className="container border-top mt-5 ">
            <div className="row mt-5">
                <div className="col">
                    <img src="media/Tradex.png" style={{width:"50%"}}/>
                    <p>&copy; 2010-2026 , Not Tradex Ltd. All Rights Reserved.</p>
                </div>
                <div className="col">
                    <p>Company</p>
                    <a href="#">About</a>
                    <br/>
                    <a href="#">Products</a> <br/>
                    <a href="#">Pricing</a> <br/>
                    <a href="#">Referral Programs</a> <br/>
                    <a href="#">TradeX Tech</a> <br/>
                    <a href="#">Press & Media</a> 
                </div>
                <div className="col">
                    <p>Support</p>
                    <a href="#">Contact</a>
                    <br/>
                    <a href="#">Support Portal</a> <br/>
                    <a href="#">Connect Blog</a> <br/>
                    <a href="#">List of Charges</a> <br/>
                    <a href="#">Download & Resources</a> <br/>

                </div>
                <div className="col">
                    <p>Account</p>
                    <a href="#">Open Account</a> <br/>
                    <a href="#">Fund Transfer</a> <br/>
                    <a href="#">60 Day Challenge</a>
                </div>
            </div>
            <div className="mt-5 fs-6 text-muted">
            <p>
                TradeX is committed to protecting the privacy and security of its users. We collect only the information necessary to provide and improve our trading platform, including account details, transaction information, and usage data. Your personal information is handled responsibly and is not sold or shared with third parties except where required to provide our services or comply with applicable laws.

            </p>
            <p>
               By using TradeX, you agree to provide accurate information and use the platform responsibly. Users are responsible for maintaining the confidentiality of their account credentials and for all activities performed through their accounts. TradeX may temporarily suspend or restrict accounts involved in fraudulent, abusive, or unauthorized activities.

            </p>
            <p>
                TradeX may update its policies, services, and features from time to time to improve the platform or comply with regulatory requirements. Continued use of the platform after policy changes constitutes acceptance of the updated terms. For questions regarding privacy, security, or these policies, users can contact the TradeX support team

            </p>
        </div>
        </div>
        </footer>
    );
}
export default Footer;
