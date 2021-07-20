import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title} | React Meetups</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        imageSrc={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticProps(context) {
  // fetch data for single meetup
  // url er ikke tilgjengelig i build time
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    `mongodb+srv://Paal:${process.env.REACT_APP_PASS}@cluster0.eltz4.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // MongoDB bruker object ID ting som ID, ikke string. Konverter slik at det blir sammenlignbart
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.description,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

// describe dynamic values
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://Paal:${process.env.REACT_APP_PASS}@cluster0.eltz4.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // empty object 1ste param. ikke noe filter, altså, finner alle objekter.
  //  andre parameter: hent id, og ingen andre field values
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    // fallback: false === paths inneholder alle mulige meetupIds
    // fallback: true === man kan pregenerate de mest populære sidene, så kan next.js dynamisk finne ut resten
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export default MeetupDetails;
