import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { DateTime } from "luxon";

const ParkingTag = () => {
    const tag = useSelector((state) => state.global.Tag)
    const [valid, setValid] = useState(false)
    const dateValid = tag ? DateTime.fromSQL(tag.effective) : null
    const dateExpire = tag ? DateTime.fromSQL(tag.expiration) : null
    const now = useState(DateTime.now())
    
    useEffect(() => {
        if (tag)
        {
            if(tag != ' ' && now > dateExpire || tag != ' ' && now < dateValid) {
                setValid(false);
            } else {
                setValid(true);
            }
        }
    })

  useEffect(() => {
    if ((tag !== " " && now > dateExpire) || (tag !== " " && now < dateValid)) {
      setValid(false);
    } else {
      setValid(true);
    }
  });

  return (
    <div>
      <h1> Is the Pass Valid.</h1>
      {valid ? <h1>True</h1> : <h1>False</h1>}
      <button>Purchase</button>
    </div>
  );
};

export default ParkingTag;
