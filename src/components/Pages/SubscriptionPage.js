import React, { useEffect, useState } from "react";
import { makeStyles, Container, Typography } from "@material-ui/core/";
import axios from "axios";

import VideoGrid from "../Video/VideoGrid";
import { BACKEND_URL } from "../../config";
import AnalyticViewer from "../Analytics/AnalyticViewer";
import OtherAnalytics from "../Analytics/OtherAnalytics";

const api = axios.create({
  withCredentials: true,
  baseURL: BACKEND_URL,
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    backgroundColor: "#1E1240"
    // height: "90vh"
  },
  analyticsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.5rem",
    height: "100%",
    width: "100%"
  }
}));

const HomePage = () => {
  const [videoResults, setVideoResult] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchVideoContent = async () => {
      try {
        const {
          data: { videos },
        } = await api.get(`/api/videos/subscription`);
        setVideoResult(videos || []);
      } catch (err) {
        setVideoResult([]);
      }
    };
    fetchVideoContent();
  }, []);

  return (
    <Container maxWidth="xl" className={classes.root}>

      <div className={classes.analyticsContainer}>
        <AnalyticViewer />
        <OtherAnalytics />
      </div>
      {/* {videoResults.length ? (
        <VideoGrid type="vertical_2" videos={videoResults} />
      ) : (
        <Typography variant="body1">No subscription videos</Typography>
      )} */}
    </Container>
  );
};

export default HomePage;
