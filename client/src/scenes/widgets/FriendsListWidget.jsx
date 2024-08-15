import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const FriendsListWidget = () => {
    const dispatch = useDispatch();
    const { palette } = useTheme();
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);

    const getFriends = async () => {
        const response = await fetch(`http://localhost:1234/users/${userId}/friends`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`},
        });

        const date = await response.json();
        dispatch(setFriends({ friends: data }));
    };
}