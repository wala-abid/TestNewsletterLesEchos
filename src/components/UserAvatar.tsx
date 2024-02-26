import React from "react";
import { Avatar } from "antd";

/**
 * Renders a user avatar component.
 *
 * @return {ReactElement} The rendered user avatar component.
 */
const UserAvatar: React.FC = () => {
  return (
    <Avatar
      style={{ backgroundColor: "#8c82e8" }}
      src="https://api.dicebear.com/7.x/pixel-art/svg?seed=1337"
    />
  );
};

export default UserAvatar;
