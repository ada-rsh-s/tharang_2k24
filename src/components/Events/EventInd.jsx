import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../Supabaseconffig";
import { useEffect, useState } from "react";

function EventInd({ sendDeptChild }) {
  const [deptData, setDeptData] = useState([]);
  const navigate = useNavigate();

  const fetchAllEvents = async () => {
    let query = supabase.from("events").select("*");
    if (sendDeptChild) {
      query = query.eq("department", sendDeptChild);
    }
    const { data, error } = await query;
    if (error) {
      console.error(error);
    } else {
      setDeptData(data);
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, [sendDeptChild]);

  const handleClick = (event) => {
    // Navigate to the details page with the event data
    navigate("/event-details", { state: { event } });
  };

  return (
    <div className="evegrid">
      {deptData.map((event, index) => (
        <div onClick={() => handleClick(event)} key={index} className="ecardi">
          <div className="event-card">
            <div className="econtainer">
              <img className="codooo" src={event.poster_url} alt="Event" />
              <div className="eoverlay">
                <h3 className="etext">{event.event_name}</h3>
                <p>{event.loc_dt_tm}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventInd;
