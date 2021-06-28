import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  function addMeetupHabndler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHabndler} />
    </>
  );
}

export default NewMeetup;
