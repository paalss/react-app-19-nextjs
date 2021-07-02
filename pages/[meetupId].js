import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/9/91/Castelli.JPG"
      title="first meetup"
      address="address"
      description="dsdsd"
    />
  );
}

export async function getStaticProps(context) {
  // fetch data for single meetup
  // url er ikke tilgjengelig i build time
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/91/Castelli.JPG",
        id: meetupId,
        title: "fiiiiiiiirst meetup",
        address: "soooooome street",
        description: "thiiiiiis is a first meetup",
      },
    },
  };
}

// describe dynamic values
export async function getStaticPaths() {
  return {
    // fallback: false === paths inneholder alle mulige meetupIds
    // fallback: true === man kan pregenerate de mest populære sidene, så kan next.js dynamisk finne ut resten
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export default MeetupDetails;
