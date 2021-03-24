import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { signOutFirebase } from "../../app/firestore/firebaseService";

const SignedInMenu = () => {
  const { currentUserProfile } = useSelector((state) => state.profile);
  const history = useHistory();

  async function handleSignOut() {
    try {
      await signOutFirebase();
      history.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Menu.Item position="right">
      <Image
        avatar
        position="right"
        src={currentUserProfile.photoURL || "/assets/user.png"}
      />
      <Dropdown pointing="top left" text={currentUserProfile.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item
            as={Link}
            to={`/profile/${currentUserProfile.id}`}
            text="My profile"
            icon="user"
          />
          <Dropdown.Item
            as={Link}
            to={`/account`}
            text="My account"
            icon="settings"
          />
          <Dropdown.Item onClick={handleSignOut} text="Sign out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
