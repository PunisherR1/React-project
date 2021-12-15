import {
  FaCreditCard,
  FaBook,
  FaBriefcase,
  FaPhone,
  FaUser,
  FaLocationArrow,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBehance,
  FaSketch,
  FaMoneyBill,
} from "react-icons/fa";
import React from "react";

/* data for navbar links and submenu links */
export const sublinks = [
  {
    page: "products",
    links: [
      { label: "payment", icon: <FaCreditCard />, url: "/products" },
      { label: "terminal", icon: <FaCreditCard />, url: "/products" },
      { label: "connect", icon: <FaCreditCard />, url: "/products" },
    ],
  },
  {
    page: "astronomers",
    links: [
      { label: "Dr. Schmidt", icon: <FaUser />, url: "/astronomers" },
      { label: "Prof. Ferguson", icon: <FaUser />, url: "/astronomers" },
      { label: "Peter Smith", icon: <FaUser />, url: "/astronomers" },
      { label: "help", icon: <FaBook />, url: "/astronomers" },
    ],
  },
  {
    page: "store",
    links: [
      { label: "pricing", icon: <FaMoneyBill />, url: "/store" },
      { label: "clients", icon: <FaBriefcase />, url: "/store" },
    ],
  },
  {
    page: "contact",
    links: [
      { label: "info", icon: <FaPhone />, url: "/contact" },
      { label: "location", icon: <FaLocationArrow />, url: "/contact" },
      { label: "customers", icon: <FaPhone />, url: "/contact" },
    ],
  },
];

/* data for sidebar social icons */
export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.behance.net",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.sketch.com",
    icon: <FaSketch />,
  },
];
