import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createActivity } from "../../ajax-requests/Api";

const Activities = ({ token, activities, signedIn, getActivities }) => {
  const [activityName, setActivityName] = useState("");
  const [activityDesc, setActivityDesc] = useState("");
  const [error, setError] = useState("");

  const nav = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const activity = { activityName, activityDesc };

    const results = await createActivity(activity, token);

    if (results.error) {
      setError(results.error);
    } else if (results) {
      getActivities();
      nav("/activities");
    }
  }

  return (
    <>
      <h1 className="pagetitle">Activities</h1>
      <div className="activities">
        {signedIn ? (
          <form onSubmit={handleSubmit} className="createact">
            <h1>Create New Activity</h1>
            <input
              type="text"
              placeholder="Create New Activity"
              onChange={(event) => setActivityName(event.target.value)}
            />
            <input
              type="text"
              placeholder="New Activity Description"
              onChange={(event) => setActivityDesc(event.target.value)}
            />
            <button type="submit">Complete</button>
          </form>
        ) : null}

        {error ? <h3>{error}</h3> : null}

        <div className="allactivities">
          {activities.map((activity) => {
            return (
              <div key={activity.id} className="activity">
                <h2>{activity.name}</h2>
                <p>{activity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Activities;
