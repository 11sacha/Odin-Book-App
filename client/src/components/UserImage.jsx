import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
    return (
        <Box>
            <img
                style={{ objectFit: "cover", borderRadius: "50%" }}
                width={size}
                height={size}
                alt="user"
                src={`http://localhost:1234/public/assets/${image}`}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `http://localhost:1234/public/assets/${image}`
                    }}
            />
        </Box>
    )
};

export default UserImage;