import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
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
  MongoClient.connect();
  const client = await MongoClient.connect(
    "mongodb+srv://Paal:Oldgodzilla1@cluster0.eltz4.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // update regurarly after deployment i antall sekunder:
    revalidate: 1,
  };
}

/*
// per request
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
*/
export default HomePage;
