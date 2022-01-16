import React from "react";
import "./styles.css"
import {MonthArray} from "./StaticData"

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
                <div className="progress" style={{height: `${month.progress}px`}}></div>
                <div className="hover-details"></div>
                <div className="hover-circle-parent" style={{marginBottom: `${month.progress - 4}px`}}>
                    <div className="hover-circle-child"></div> 
                </div>
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