import React from "react";
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
import { svg } from "caniuse-lite/data/features";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: "0px",
    paddingRight:"9px",
    backgroundColor:"black",
    color:"white",
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
        <Tooltip title="Connect Wallet" >
          <div style={{display:"flex",alignItems:"center",cursor:"pointer",border:"1px solid white",borderRadius: "5px",padding:"2px 2px"}}>
            <ConnectWallet style={{width:"25px",height:"23px"}}/>
            <p style={{margin:"10px 1px",fontSize:"smaller"}}>CONNECT WALLET</p>
          </div>
        </Tooltip>
        {isAuth && <NavUserMenuBtn />}
      </>
    </Toolbar>
  );
};

export default NavBar;
