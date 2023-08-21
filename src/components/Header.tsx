import {
  User,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from '@nextui-org/react';

import React from 'react'

const Header = () => {
  var loggedIn: Boolean = true;
  return (
    <div className='flex gap-3 items-center'>
      <Navbar position='static'>
        <NavbarBrand>
          <p className='font-bold text-inherit'>wrapped</p>
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href='#' aria-current='page'>
              My Wrap
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Discover
            </Link>
          </NavbarItem>
        </NavbarContent>
        {loggedIn ? (
          <NavbarContent justify='end'>
            <User
              name='Daniel Jun'
              description='Full Stack Engineer'
              avatarProps={{
                src: '../assets/react.svg'
              }}
            />
          </NavbarContent>
        ) : (
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        )
        }
      </Navbar>
    </div>
  )
};

export default Header;