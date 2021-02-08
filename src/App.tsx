import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt,
  useHistory,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const [nextLocation, setNextLocation] = useState<string | null>(null);

  const handleCancel = () => {
    setShow(false);
    setNextLocation(null);
  };

  const handleConfirm = () => {
    setShow(false);
    if (nextLocation) {
      history.push(nextLocation);
    }
  };

  const handleBlockedNavigation = (location: any) => {
    setNextLocation(location);
    setShow(true);
    return false;
  };

  return (
    <>
      <h2>About</h2>
      <Prompt when={!nextLocation} message={handleBlockedNavigation} />
      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Navigate</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to navigate?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Users() {
  return <h2>Users</h2>;
}
