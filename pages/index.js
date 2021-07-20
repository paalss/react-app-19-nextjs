import { MongoClient } from "mongodb";
import Head from "next/head";
import { useEffect, useState } from "react";
import MeetupDetail from "../components/meetups/MeetupDetail";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="finn meetups og legg til" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// pre-rendering page
// executed when page is pre-generated
export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://Paal:${process.env.REACT_APP_PASS}@cluster0.eltz4.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // update regurarly after deployment i antall sekunder:
    revalidate: 1,
  };
}

// per request
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export default HomePage;
