import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { signOutUser } from "../auth/authActions";

const SignedInMenu = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const history = useHistory();

  return (
    <Menu.Item position="right">
      <Image
        avatar
        position="right"
        src={currentUser.photoURL || "/assets/user.png"}
      />
      <Dropdown pointing="top left" text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item as={Link} text="My Profile" icon="user" />
          <Dropdown.Item
            onClick={() => {
              dispatch(signOutUser());
              history.push("/");
            }}
            as={Link}
            text="Sign out"
            icon="power"
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
