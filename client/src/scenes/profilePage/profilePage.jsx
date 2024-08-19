import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import navBar from './navBar/navBar'
import FriendsListWidget from "scenes/widgets/FriendListWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import UserWidget from "scenes/widgets/UserWidget";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const getUser = async () => {
      const response = await fetch(`http://localhost:1234/users/${userId}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}`},
      });

      const date = await response.json();
      setUser(data);
  };

  useEffect(() => {
      getUser();
  }, []);

  if (!user) return null;

  return (
    <Box>
      <navBar />
      <Box 
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath}/>
          <Box m="2rem 0"/>
          <FriendsListWidget userId={_id}/>
        </Box>
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined} mt={isNonMobileScreens ? undefined : "2rem"}>
          <MyPostWidget picturePath={picturePath}/>
          <PostsWidget userId={_id}/>
        </Box>
      </Box>
    </Box>
  )
}

export default ProfilePage