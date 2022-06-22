import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function NavBar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBS sticky="top" className="nav bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/menu" as={NavLink}>
            Menu
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle mb-1"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaShoppingCart size="1.5em" style={{ alignItems: "center" }} />
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(35%,35%)",
                }}
              >
                {cartQuantity}
              </div>
            </div>
          </Button>
        }
      </Container>
    </NavbarBS>
  );
}
