import styles from "./Profile.module.css"

const Profile = (props) => {
    let userId = window.location.pathname.split("/")[2];
    let user = props.function(userId);
    console.log(userId);
  return (
    <div className="row">
      <div className="col-sm-4">
        <img src={user.avatar} className="img-fluid" />
      </div>
      <div className="col-sm-8">
        <h1 className={styles.about}>{user.name} {user.lastname}</h1>
        <h2 style={{backgroundColor: "lightblue"}}>{user.about}</h2>
        <h3>{user.email}</h3>
        <p className={styles.id}>ID: {user.id}</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos illo
          provident tempore quos temporibus. Optio impedit aut sed odit esse,
          temporibus quo mollitia. Eveniet, iste! Voluptates possimus expedita
          eum dolorem.
        </p>
      </div>
    </div>
  );
};

export default Profile;
