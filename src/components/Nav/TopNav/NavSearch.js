import React, { useState } from "react";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase, Tooltip } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { withRouter } from "react-router";
const useStyles = makeStyles((theme) => ({
  searchButton: {
    color: grey[700],
    backgroundColor: grey[500],
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: grey[500],
    },
    "&:focus": {
      outline: "none",
    },
    borderLeftStyle: "solid",
    borderLeftWidth: "1px",
    borderLeftColor: grey[300],

    borderRadius: 0,
  },
  border: {
    borderColor: grey[300],
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: 0,
  },
  searchForm: {
    backgroundColor: "#222329",
    width: "47%"
  },
  input: {
    padding: theme.spacing(0, 1),
    color: "white"
  },
}));

const MiddleNav = ({ history }) => {
  const [searchValue, setSearch] = useState("");
  const classes = useStyles();

  const handleSearch = () => {
    if (searchValue) {
      history.push(`/results?search_query=${searchValue}`);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className={classes.searchForm}>
      <InputBase
        fullWidth
        value={searchValue}
        onChange={handleSearchChange}
        className={classes.border}
        classes={{
          input: classes.input,
        }}
        placeholder="Search a video"
        inputProps={{ "aria-label": "search" }}
        endAdornment={
          <Tooltip title="Search">
            {/* <Button
              disableRipple
              size=""
              type="submit"
              className={classes.searchButton}
              onClick={handleSearch}
              aria-label="search"
            >
            </Button> */}
            <SearchIcon fontSize="small" style={{fill:"white"}} />
          </Tooltip>
        }
      />
    </div>
  );
};

export default withRouter(MiddleNav);
