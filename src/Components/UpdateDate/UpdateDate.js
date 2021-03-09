import React from "react";

function UpdateDate({ date }) {
  //coverts 24hr time to 12hr time
  const date1 = new Date(date);
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const timeString = date1.toLocaleString("en-US", options);

  //converts numerical year to month day, year
  const d = new Date(date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = d.getDate();
  const month = months[d.getMonth()]; // Since getMonth() returns month from 0-11 not 1-12
  const year = d.getFullYear();

  const dateStr = `${month} ${day}, ${year}`;
  return (
    <div style={{ padding: "2rem 1rem 0", textAlign: "center" }}>
      <p style={{ fontSize: "1.1rem" }}>
        <b>
          Last Updated:
          {` ${dateStr} at ${timeString}  
          `}
        </b>
      </p>
    </div>
  );
}

export default UpdateDate;
