import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="manishkmr91234@gmail.com.com" Image={HiOutlineMail} />
      <SingleInfo text="8051433148 / 7903940889" Image={FiPhone} />
      <SingleInfo text="Dehli" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
