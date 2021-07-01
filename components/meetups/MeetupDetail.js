import classes from "./MeetupDetail.module.css";

function MeetupDetail({ imageSrc, title, address, description }) {
  return (
    <section className={classes.detail}>
      <img src={imageSrc} alt="first meetup" />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetail;
