import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { APP_ID, SERVER_ID } from "./Constant";

const VideoPage = () => {
  const { id } = useParams();
  const roomID = id;
  const videoContainerRef = useRef(null); // Create a ref for the video container

  useEffect(() => {
    const initMeeting = async () => {
      const appID = APP_ID;
      const serverSecret = SERVER_ID;

      // Generate a userID and userName for the participant
      const userID = String(Math.floor(Math.random() * 10000)); // Use a unique userID
      const userName = `User_${userID}`; // Create a userName based on the userID

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        userID,
        userName
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: videoContainerRef.current, // Attach the container ref
        sharedLinks: [
          {
            name: "Personal link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?roomID=" +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    };

    initMeeting(); // Initialize the meeting on mount
  }, [roomID]);

  return (
    <div
      ref={videoContainerRef}
      style={{ width: "100%", height: "100vh" }}
    ></div>
  );
};

export default VideoPage;
