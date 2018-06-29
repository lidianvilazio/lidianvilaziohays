// import React from 'react';
// import { Button } from 'reactstrap';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';
//
//
// class NavBar extends React.Component {
//   render() {
//     return (
//       <div className="container-fluid">
//         <Navbar className='nav-bar' expand="md">
//           <NavbarBrand className='nav-brand' href="/about">Lidian Vilazio-Hays</NavbarBrand>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink className='nav-brand' href="/projects">Projects</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className='nav-brand' href="/about">About</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className='nav-brand' href="/resume">Resume</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className='nav-brand' href="/contact">Contact</NavLink>
//               </NavItem>
//             </Nav>
//         </Navbar>
//       </div>
//     )
//   }
// }
//
// export default NavBar;

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className='nav-bar' color="light" light expand="md">
          <NavbarBrand className='nav-brand' href="/about">Lidian Vilazio-Hays</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className='nav-brand' href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-brand' href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-brand' href="/resume">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-brand' href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
