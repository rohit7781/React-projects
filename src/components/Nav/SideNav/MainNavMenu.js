import React from "react";
import { useDispatch } from "react-redux";

import { List, Divider, useMediaQuery, useTheme } from "@material-ui/core";
import { Home as HomeIcon, Whatshot as TrendingIcon } from "@material-ui/icons";
import NavItem from "../NavItem";
import { toggleDrawer } from "../../../redux/actions/layout";

const MainNavMenu = () => {
  const theme = useTheme();

  const isMinScreenMd = useMediaQuery(theme.breakpoints.up("md"));
  const dispatch = useDispatch();
  const handleItemClick = () => {
    if (!isMinScreenMd) {
      dispatch(toggleDrawer(isMinScreenMd));
    }
  };

  return (
    <List>
      {[
        {
          title: "Home",
          icon: HomeIcon,
          path: "/",
        },
        {
          title: "Explore",
          icon: TrendingIcon,
          path: "/Explore",
        },
        {
          title: "Creator Rewards",
          icon: TrendingIcon,
<<<<<<< HEAD
          path: "/subscriptions",
=======
          path: "/CreatorRewards",
>>>>>>> 3a575c116153cd0d228c14688daad8aad6230731
        },
        {
          title: "Your Videos",
          icon: TrendingIcon,
<<<<<<< HEAD
          path: "/library",
=======
          path: "/YourVideos",
>>>>>>> 3a575c116153cd0d228c14688daad8aad6230731
        },
        {
          title: "Settings",
          icon: TrendingIcon,
<<<<<<< HEAD
          path: "/history",
=======
          path: "/Settings",
>>>>>>> 3a575c116153cd0d228c14688daad8aad6230731
        }
      ].map((item, index) => {
        return (
          <React.Fragment key={index}>
            <NavItem
              to={item.path}
              title={item.title}
              icon={item.icon}
              onClick={handleItemClick}
            />
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default MainNavMenu;
