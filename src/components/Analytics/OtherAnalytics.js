import React, { useState } from "react";
import { faPaperPlane, faEllipsisH, faShieldAlt, faLock, faCheck, faTimes, faLongArrowAltUp, faLongArrowAltDown}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OtherAnalytics = () => {

    const [ishidedropdown, setIsHideDropdown ] = useState(false);
    const[selectedcurrency, setSelectedCurrency] = useState("$");
    const symbols = ["$","₹","€"];
    return (
    <>
    <div className="other-analytics">
    <div className="balance-container">
    <div className="balance">
        <div className="left">
            <h3>Balance</h3>
            <h1>$ 7,160.00</h1>
            <div className="up-down">
            <div className="analytic-icon bal-icons">
            <FontAwesomeIcon icon={faLongArrowAltUp} ></FontAwesomeIcon>
            </div>
            <span>+$ 6.220.13</span>
            
            <div className="analytic-icon  bal-icons">
            <FontAwesomeIcon icon={faLongArrowAltDown} ></FontAwesomeIcon>
            </div>
            <span>-$ 919.60</span>
            </div>
        </div>
        <div className="right">
            <div className="hover-div" onMouseOver={() => setIsHideDropdown(true)} onMouseLeave= {() => setIsHideDropdown(false)}>
            <div className="dollor-1 analytic-icon">{selectedcurrency}</div>
            {ishidedropdown && <div className="dropdown-content"> 
                <ul>
                {symbols.map((value) => {
                    return <li onClick={() => {
                        setIsHideDropdown(false)
                        setSelectedCurrency(value)}}>{value}</li>;
                })}
                </ul>
            </div>}
            </div>
            <div className="dollor-2 analytic-icon">S/.</div>
        </div>
        
    </div>
    </div>
    <div className="send-amount-card">
     <p>Pay to</p>
     <div className="id-analytic">
     <p>Name</p>
     </div>
     <p className="amount-price">Amount</p>
     <input type="number" placeholder="$"/>
     <button><FontAwesomeIcon icon={faPaperPlane} ></FontAwesomeIcon> Send</button>
    </div>

    <div className="security"> 
        <div className="security-title">
        <h3>Security</h3>
        <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
        </div>
        <div className="auth-toggle">
        <div className="toggle">
        <div className="analytic-icon">
        <FontAwesomeIcon icon={faShieldAlt}></FontAwesomeIcon>
        </div>
        <p>2FA Enabled</p>
        </div>
        <label class="switch">
        <input type="checkbox" />
        <span class="slider round">
        <span class="on"><FontAwesomeIcon icon={faCheck} ></FontAwesomeIcon> </span>
        <span class="off"><FontAwesomeIcon icon={faTimes} ></FontAwesomeIcon></span>
        </span>
        </label>
        </div>
        <div className="key">
        <div className="toggle">
            <div className="analytic-icon">
        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
        </div>
        <p>Key</p>
        </div>
        <button>Change</button>
        </div>

    </div>
       
    </div>
    </>)
}

export default OtherAnalytics;