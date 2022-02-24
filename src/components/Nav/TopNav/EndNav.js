import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt}from '@fortawesome/free-solid-svg-icons'
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Toolbar, IconButton, Hidden, Tooltip} from "@material-ui/core";
import {
  Search as SearchIcon,
  MoreVert as MoreIcon,
  Apps as AppsIcon,
  Notifications as NotificationsIcon,
} from "@material-ui/icons";
import {ReactComponent as ConnectWallet} from '../../../assets/connect-wallet.svg'
import { setMobileSearch } from "../../../redux/actions/layout";
import NavUserMenuBtn from "./NavUserMenuBtn";
import NavVidMenuBtn from "./NavVidMenuBtn";
import MetaMaskOnboarding from "@metamask/onboarding"
import { svg } from "caniuse-lite/data/features";
import cssLetterSpacing from "caniuse-lite/data/features/css-letter-spacing";
const useStyles = makeStyles((theme) => ({
  signButton:{
    color: "white",
    border: "0.5px solid white",
    margin: "1rem 1rem",
    padding: "0.5rem",
    fontWeight: "500",
    fontSize: "smaller",
  },
  toolbar: {
    paddingLeft: "0px",
    paddingRight:"9px",
    backgroundColor:"black",
    color:"white",
  },
  walletBtn: {
   padding: "0.2rem",
   width: "23px",
   height: "25px"
  },
  walletText: {
    margin: "10px 1px",
    fontSize: "smaller",
    cursor: "pointer",
    fontWeight: "500",
  },
  iconButton: {
    backgroundColor: "black",
    color:"white",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "black",
      color:"white",
    },
    "&:focus": {
      outline: "white",
    },
  }
}));


const NavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(({ channel }) => channel.isAuth);
  const classes = useStyles();
  const theme = useTheme();

  const [walletStatus,setWalletStatus] = useState("CONNECT WALLET")
  const [accountAddress, setAccountAddress] = useState("");
  const onboarding = new MetaMaskOnboarding();
  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  useEffect(() => {
    if (accountAddress === "") {
    !isAuth ? setWalletStatus("CONNECT WALLET") : isMetaMaskInstalled() ? setWalletStatus("CONNECT WALLET") : setWalletStatus("Install Metamask") 
  } else {
    setWalletStatus("CONNECTED")
  }
  },[accountAddress])

  const installMetaMask = () => {
    onboarding.startOnboarding();
  }

  async function getAccount() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    return account;
  }

  const walletConnect = () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      getAccount().then((response) => {
        setAccountAddress(response);
      });
    } else {
      console.log("error");
    }
  };
  
  return (
    <Toolbar
      classes={{
        gutters: classes.toolbar,
      }}
    >
      <>
        <Hidden smUp>
          <IconButton
            onClick={() => dispatch(setMobileSearch(true))}
            size={theme.breakpoints.up("md") ? "small" : "medium"}
            className={classes.iconButton}
          >
            <SearchIcon />
          </IconButton>
        </Hidden>
        <Tooltip title="Create">
          <NavVidMenuBtn />
        </Tooltip>
        <Hidden smDown>
        
        {!isAuth && (
          <Tooltip title="Notifications">
            <IconButton className={classes.iconButton}>
              <NotificationsIcon />
            </IconButton>
          </Tooltip>
        )}
        </Hidden>

        <Tooltip title="Signin">
        <Button className= {classes.signButton}>
        <div style = {{marginRight: "7.5px", fontSize: "14px"}}>
        <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></div>
        Sign up</Button>
        </Tooltip>
        <Tooltip title={`${walletStatus}`} >
          <div style={{display:"flex",alignItems:"center",cursor:"pointer",border:"1px solid white",borderRadius: "5px",padding:"2px 2px"}}>
            <ConnectWallet className={classes.walletBtn}/>
            <p className={classes.walletText} onClick={()=> {
              if (isAuth) {
              walletStatus === "Install Metamask" ? installMetaMask() : walletConnect()
              }
            }}>{walletStatus}</p>
          </div>
        </Tooltip>
        {isAuth && <NavUserMenuBtn />}
      </>
    </Toolbar>
  );
};

export default NavBar;
