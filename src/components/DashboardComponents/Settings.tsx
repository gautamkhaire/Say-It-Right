import Image from "next/image"
import SettingsImg from "../../assets/images/Settings.png";
import ProfilePic from "../../assets/images/profile-pic.png";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "../ui/button";
// Social Media Icon from react-icons
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function Settings() {
  const {user} = useKindeBrowserClient();

  return (
    <div className="flex flex-row justify-evenly w-full h-screen p-14 gap-6">
      <Image src={SettingsImg} alt="Settings Banner" width={570} height={400}/>
      <div className="w-3/6">
        <div className="text-2xl font-extrabold text-purple-500">Profile Details</div>
        <hr className="my-4"/>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold">Profile</div>
          <div className="flex flex-row items-center gap-2"><Image src={ProfilePic} alt="Profile Picture" width={50} height={50}/> {user?.given_name} {user?.family_name}</div>
        </div>
        <hr className="my-4"/>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold">Email addresses</div>
          <div className="text-md font-medium text-gray-600">{user?.email}</div>
        </div>
        <hr className="my-4"/>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold">Phone</div>
          <div className="text-md font-medium text-gray-600">+91 - 8010889607</div>
        </div>
        <hr className="my-4"/>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold">Given name</div>
          <div className="text-md font-medium text-gray-600">{user?.given_name}</div>
        </div>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold">Family name</div>
          <div className="text-md font-medium text-gray-600">{user?.family_name}</div>
        </div>
        <hr className="my-4"/>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold">Say-It-Right ID</div>
          <div className="text-md font-medium text-gray-600">{user?.id}</div>
        </div>
        <hr className="my-4"/>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold">Social media </div>
          <div className="flex flex-row items-center gap-4"><GrInstagram/><FaXTwitter/><FaMeta/><FaLinkedinIn/></div>
        </div>

        <div className="flex flex-row justify-end"><Button className="bg-purple-500 text-white font-medium my-10 rounded-full hover:bg-purple-600 hover:text-white">Edit details</Button></div>
        
      </div>
    </div>
  )
}

export default Settings