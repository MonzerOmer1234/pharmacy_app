import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactData = [
    {
        id : 1,
        icon : <CiLocationOn/>,
        content : '203 Fake St. Mountain View, San Francisco, California, USA',
    },
    {
        id : 2,
        icon : <IoMdCall/>,
        content : '+2 392 3929 210',
    },
    {
        id : 3,
        icon: <MdEmail/>,
        content : 'emailaddress@domain.com',
    },

]
export default ContactData;