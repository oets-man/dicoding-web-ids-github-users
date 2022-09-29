import $ from "jquery";
import moment from "moment";

const displayTime = () => {
  moment.locale("id");
  $(".time").text(moment().format("DD/MM/YYYY h:mm:ss"));
  $(".date").text(moment().format("LL"));
};

const updateTime = () => {
  displayTime();
  setTimeout(updateTime, 1000);
};
// updateTime();

export default updateTime;
