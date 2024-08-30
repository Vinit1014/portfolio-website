"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Github } from 'lucide-react';

export default function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Projects",
    "Tech",
    "Contact"
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-neutral-900 text-neutral-200"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-neutral-200"
        />
        <NavbarBrand>
          <span className="text-neutral-200 font-bold ml-2">Vinit | Developer</span>
        </NavbarBrand>
      </NavbarContent>
      
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href="#" className="text-neutral-200">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link target="_blank" href="https://github.com/Vinit1014" className="text-neutral-200">
            <Github />
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu className="bg-neutral-900 text-neutral-200">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full text-neutral-200"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
