import React from "react";
import Heading from "../../common/Heading";
import { awards } from "../../data/Data";
import './Awards.css'

const Awards = () => {
    return (
        <>
            <section className="awards padding">
                <div className="container">
                    <Heading title='Over 1,240,000+ Happy Users With Us They Love Our Services' subtitle='Our Awards'/>
                    <div className="content grid4 mtop">
                        {awards.map((val,index)=> {
                            return (
                                <div  className="box" key={index}>
                                    <div className="icon">
                                        <span>{val.icon}</span>
                                    </div>
                                    <h1>{val.num}</h1>
                                    <p>{val.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Awards;