import React from "react";
import img from "../images/pricing.jpg"
import PriceCard from "../home/price/PriceCard";
import Back from "../common/Back";

const Pricing = () => {
    return (
        <>
            <section className="services mb">
                <Back name="30 Days Money Back Guarantee" title="No Extra Fees. Friendly Support" cover={img} />
                <div className="price container">
                    <PriceCard />
                </div>
            </section>
        </>
    )
}

export default Pricing;