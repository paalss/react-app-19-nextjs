import { useEffect, useState } from "react";
import MeetupDetail from "../components/meetups/MeetupDetail";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Castelli.JPG",
    address: "address, eeeee",
    description: "first",
  },
  {
    id: "m2",
    title: "second meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Castelli.JPG",
    address: "address, eeeee",
    description: "second",
  },
];

function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// pre-rendering page
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // update regurarly after deployment i antall sekunder:
    revalidate: 3600,
  };
}

export default HomePage;
