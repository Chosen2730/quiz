import React, { useCallback } from "react";
import Countdown from "react-countdown";
import Swal from "sweetalert2";

const Timer = ({ func }) => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your time is up, your attempt has been saved!",
        // footer: '<a href="">Why do I have this issue?</a>',
      }).then(() => {
        setTimeout(() => {
          func();
        }, 2000);
      });
    } else {
      return (
        <span>
          {/* {hours}
          : */}
          {minutes}:{seconds}
        </span>
      );
    }
  };
  return useCallback(
    <Countdown date={Date.now() + 2400000} renderer={renderer} />
  );
};
export default Timer;
