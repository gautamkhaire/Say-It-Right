// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { IoIosSearch } from "react-icons/io";
// import axios from 'axios';

// type Props = {
//   value: string;
//   onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
//   onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
//   setData : React.Dispatch<React.SetStateAction<any[]>>;
// };

// const Search = ({value,onChange,onSubmit,setData}:Props) => {

  
//   const searchClick = () =>{
//     axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`).then((res) => {
//         setData(res.data);
//         console.log(res.data)
//       })
//   }

//   return (
//     <form onSubmit={onSubmit} className="flex items-center w-full relative">
//       <input placeholder="Search any word..." className=" placeholder:font-bold rounded-2xl outline-purple-700 bg-gray-200 h-12  sm:h-[64px] w-full px-4 pr-12 dark:bg-slate-900 z-10" type="text" value={value} onChange={onChange} ></input>
//       <Button
//         className="absolute border-none bg-gray-200 z-20 hover:bg-gray-200 flex content-center top-3 right-2 text-black"
//         size="icon"
//         onClick={searchClick}
//       >
//         <IoIosSearch className="w-6 h-6" />
//       </Button>
//     </form>
//   );
// };

// export default Search;


import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  setData : React.Dispatch<React.SetStateAction<any[]>>;
};

const Search = ({value,onChange,onSubmit,setData}:Props) => {

  
  const searchClick = () =>{
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setData([]); // Set data to empty array on error
      });
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center w-full relative">
      <input placeholder="Search any word..." className=" placeholder:font-bold rounded-2xl outline-purple-700 bg-gray-200 h-12  sm:h-[64px] w-full px-4 pr-12 dark:bg-slate-900 z-10" type="text" value={value} onChange={onChange} ></input>
      <Button
        className="absolute border-none bg-gray-200 z-20 hover:bg-gray-200 flex content-center top-3 right-2 text-black"
        size="icon"
        onClick={searchClick}
      >
        <IoIosSearch className="w-6 h-6" />
      </Button>
    </form>
  );
};

export default Search;
