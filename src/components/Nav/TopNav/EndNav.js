import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Toolbar, IconButton, Hidden, Tooltip } from "@material-ui/core";
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
const useStyles = makeStyles((theme) => ({
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
    }
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
