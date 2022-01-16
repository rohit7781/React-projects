import React from "react";
import "./styles.css"
import {rewardData} from "./StaticData"
const CreatorRewards = () => {
    return (<>
    <div className="rewards">
        <h3>Creator Reward History</h3>
        <p>Past 6 months</p>
        <div className="reward-history">
            {
                rewardData.map((reward,key)=> {
                return <ul className={reward.isWithdrawed? "is-deposited": ""}>
                <li className="date">{reward.date}</li>
                <li className="time">{reward.time}</li>
                <li className="amount">{reward.amount}</li>
                <li className="status">{reward.deposit}</li>
            </ul>
                })
            }
        </div>
    </div>
    </>)
}

export default CreatorRewards;