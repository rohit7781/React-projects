import React from "react";
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OtherAnalytics = () => {
    return (
    <>
    <div className="other-analytics">
    <div className="balance">

    </div>
    <div className="send-amount-card">
     <p>Pay to</p>
     <p className="id-analytic">
     sxsfsffdvdgdgdgdgddvfdvdfbdffffgfgrggfgrg
     </p>
     <p>Amount</p>
     <input type="number" placeholder="$"/>
     <button><FontAwesomeIcon icon={faPaperPlane} ></FontAwesomeIcon> Send</button>
    </div>
    <div className="security"> 

    </div>
       
    </div>
    </>)
}

export default OtherAnalytics;