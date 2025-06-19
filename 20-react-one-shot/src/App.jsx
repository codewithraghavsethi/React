import React from "react";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const users = [
    {
      name: "Aarav Sharma",
      age: 26,
      city: "Mumbai",
      profession: "Software Developer",
      profile: "https://example.com/profiles/aarav",
      email: "aarav.sharma@example.com",
      hobbies: ["coding", "cricket", "traveling"],
    },
    {
      name: "Priya Singh",
      age: 30,
      city: "Delhi",
      profession: "Journalist",
      profile: "https://example.com/profiles/priya",
      email: "priya.singh@example.com",
      hobbies: ["writing", "reading", "photography"],
    },
    {
      name: "Raj Patel",
      age: 35,
      city: "Ahmedabad",
      profession: "Chartered Accountant",
      profile: "https://example.com/profiles/raj",
      email: "raj.patel@example.com",
      hobbies: ["investing", "fitness", "gardening"],
    },
    {
      name: "Ananya Roy",
      age: 24,
      city: "Kolkata",
      profession: "Graphic Designer",
      profile: "https://example.com/profiles/ananya",
      email: "ananya.roy@example.com",
      hobbies: ["drawing", "dancing", "watching movies"],
    },
    {
      name: "Vikram Reddy",
      age: 29,
      city: "Hyderabad",
      profession: "Data Scientist",
      profile: "https://example.com/profiles/vikram",
      email: "vikram.reddy@example.com",
      hobbies: ["machine learning", "trekking", "gaming"],
    },
  ];

  return (
    <>
      <Card a="raghav" b="sethi" />
      <Card a="gaurvi" b="sethi" />
      <Card a="khushi" b="sethi" />

      <div></div>
    </>
  );
}

export default App;
