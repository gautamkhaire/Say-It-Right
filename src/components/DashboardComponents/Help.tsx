import HelpHeader from "./HelpHeader";
import CardHeader from "./CardHeader";
import FAQs from "./FAQs";

function Help() {
  return (
    <div className='pb-[20px] bg-gray-100 w-full'>
            <HelpHeader></HelpHeader>
            <CardHeader />
            <FAQs />
        </div>
  )
}

export default Help