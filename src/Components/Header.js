import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
         <Navbar bg="" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://tse1.mm.bing.net/th?id=OIP._4P0iFMkOm75hNo5t5OhcwHaHa&pid=Api&P=0"
          width="80"
          height="70"
          className="d-inline-block align-top"
        />{' '}
        Espresso Cafe
      </Navbar.Brand>
    </Container>
  </Navbar>
  </>
  )
}

export default Header