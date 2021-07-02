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

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // executes etter component funciton executed
  // loadedMeetups vil være tom i første render cycle
  // det kan føre til unintensjonell loading spinner og dårligere SEO
  // MEN
  // Man kan hente data for pre-rendering. fortelle nextjs når man er ferdig. Page pre-rendering
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return (
    <>
      <MeetupList meetups={loadedMeetups} />
    </>
  );
}

export default HomePage;
