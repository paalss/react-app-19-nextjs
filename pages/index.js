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

function HomePage() {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </>
  );
}

export default HomePage;
