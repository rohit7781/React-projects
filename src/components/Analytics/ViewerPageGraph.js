import React from "react";
import "./styles.css"
import {MonthArray} from "./StaticData";
import ReactTooltip from "react-tooltip";

const ViewerPageGraph = () => {


    return (<>
    <div className="graph">
        <h3>Monthly Views</h3>
        <p>Past 30 days</p>
        <div className="monthly-graph">
            <div className="amount-stats">
                <p>100K</p>
                <p>50K</p>
                <p>10K</p>
                <p>0</p>
            </div>
            {MonthArray.map((month,key)=> {
            return <div className="stat"><div className="months">

            <ReactTooltip className="tool-tip" id={`${key}`} place="left" effect="solid" textColor="black" backgroundColor="white">
             Expenes<br></br>${month.progress * 1000}
            </ReactTooltip>
                <div className="progress" style={{height: `${window.innerWidth < 420? (month.progress *40)/100 : month.progress}px`}}></div>
                <div className="hover-details" ></div>
                <div className="hover-circle-parent" style={{marginBottom: `${month.progress - 4}px`}}>
            <div className="hover-circle-child" data-tip data-for={`${key}`} ></div>
            </div>
            {/* </Tooltip> */}
            </div>
                     <p>{month.month}</p>
                     </div>
            })}
        </div>
        <div className="bottom-border"></div>
    </div>
    </>)
}

export default ViewerPageGraph;