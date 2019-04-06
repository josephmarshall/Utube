import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Image, Menu, Button, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  rightNavItems = () => {
    const {
      auth: { user, handleLogout },
      location
    } = this.props;

    if (user) {
      return (
        <Menu.Menu position='right'>
            <Menu.Item as={Link} to="/videoform"> 
              <Button size="mini" color="red"> Upload Video</Button>
            </Menu.Item>
          <Menu.Item
            onClick={ () => handleLogout(this.props.history) }
          >
          <Button icon size="mini" color="red"> 
            <Icon name="sign-out" />
          </Button>
          </Menu.Item>
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item
              id="login"
              name="login"
              active={location.pathname === "/login"}
            />
          </Link>
          <Link to="/register">
            <Menu.Item
              id="register"
              name="register"
              active={location.pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      );
    }
  };

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to="/">
          <Menu.Item>
            <Button size="mini" color="red">
              uToob
            </Button>
          </Menu.Item>
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default withRouter(ConnectedNavbar);
