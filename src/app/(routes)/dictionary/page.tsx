// "use client"

// import Search from "./components/Search";
// import { ModeToggle } from "./components/ModeToggle";
// import { useEffect, useState } from "react";
// import Phoneticstext from "./components/Phoneticstext";
// import PhoneticsAudio from "./components/PhoneticsAudio";
// import axios from 'axios';
// import Link from "next/link";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import DictionaryIcon from "../../../assets/icons/icons-dictionary.png";
// import Image from "next/image";

// export default function Home() {

//   const [searchWord, setSearchWord] = useState("practise")
//   const [data, setData] = useState<any[]>([]);

//   useEffect(() => {
//     axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`).then((res) => {
//       setData(res.data);
//       console.log(res.data)
//     })
//   }, [])

//   // const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
//   // console.log(api)

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     // Handle form submission if needed
//   }

//   function handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const word = e.target.value;
//     setSearchWord(word);
//   }

//   return (
//     // <main className="max-w-[689px] m-auto mt-[35px] flex flex-col border-none ">
//     <main className="max-w-[800px] flex flex-col gap-6  mx-auto py-10  px-4 ">
//       {/* header */}
//       <div className="flex justify-center gap-6 flex-wrap content-center h-[60px]">
//         {/* <RiBookLine className="text-4xl text-gray-400 " /> */}
//         <Image src={DictionaryIcon} alt="Dictionary Icon" width={60} height={60}/>
//         <p className="text-purple-500 font-bold text-5xl mt-2">Dictionary</p>
//         {/* <ModeToggle></ModeToggle> */}
//       </div>

//       {/* SearchBar */}
//       <Search
//         value={searchWord}
//         onChange={handleSearchInputChange}
//         onSubmit={handleSubmit}
//         setData={setData}
//       />

//       {/*main section  */}
//       {data.map((item, index) => (
//         <div key={index} className="flex flex-col gap-8">
//           <div className="flex flex-col gap-1">
//             <div className="flex justify-between w-full h-16 items-center">
//               <h1 className="text-[64px] font-bold">{item.word}</h1>
//               <PhoneticsAudio item={item}></PhoneticsAudio>
//             </div>

//             <Phoneticstext item={item}></Phoneticstext>

//           </div>

//           {item.meanings.map((meaning: { partOfSpeech: string, definitions: { definition: string }[], synonyms: { synonym: string }[] }, m_index: number) => (
//             <div className="flex flex-col gap-8">
//               <div className="flex flex-row gap-5 items-center">
//                 <p key={m_index} className="text-2xl font-semibold italic">{meaning.partOfSpeech}</p>
//                 <div className="w-full h-[2px] bg-gray-200 rounded-full"></div>
//               </div>
//               <section className="flex flex-col gap-2">
//                 <p className="text-xl font-medium">Meaning</p>
//                 <ul className="list w-11/12 m-auto flex flex-col gap-2">
//                   {meaning.definitions.map((definition, d_index) => (
//                     <li key={d_index} className="flex flex-row gap-2">
//                       <div className="min-h-[6px] min-w-[6px] h-[6px] w-[6px] bg-purple-300 rounded-full mt-3" />
//                       <p className="text-lg">{definition.definition}</p>
//                     </li>
//                   ))}
//                 </ul>
//                 {/* <div className="flex gap-2 align-middle">
//                   <p className="text-gray-400 text-xl">Synonyms: </p>
//                   {meaning.synonyms && meaning.synonyms.length > 0 ? (
//                     meaning.synonyms.map((synonym, s_index) => (
//                       <p key={s_index} className="text-xl">{synonym.synonym}</p>
//                     ))
//                   ) : (
//                     <p>No synonyms</p>
//                   )}
//                 </div> */}
//                 {meaning.synonyms.length > 0 && (
//                   <div className="flex gap-2 items-center">
//                     <p className="text-xl text-gray-400">Synonyms :</p>

//                     <p className="text-xl">{meaning.synonyms.map((d, i) => d).join(", ")}</p>
//                   </div>
//                 )}
//               </section>
//             </div>
//           ))}

//           <div className="w-full h-[1px] bg-gray-200 rounded-full"></div>
//           <div>
//             {
//               item?.sourceUrls.length > 0 && (
//                 // <p>Source url is present</p>
//                 <div className="flex gap-2">
//                   <p>Source :</p>

//                   <Link
//                     target="_blank"
//                     href={item?.sourceUrls[0]}
//                     className="flex gap-1 items-center"
//                   >
//                     {/* <span>https://en.wiktionary.org/wiki/computer</span> */}
//                     <span>{item?.sourceUrls}</span>
//                     <FaExternalLinkAlt className="text-sm text-gray-400" />{" "}
//                   </Link>
//                 </div>
//               )
//             }
//           </div>

//         </div>
//       ))}

//     </main>
//   );
// }
"use client";
import Search from "./components/Search";
import { ModeToggle } from "./components/ModeToggle";
import { RiBookLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import Phoneticstext from "./components/Phoneticstext";
import PhoneticsAudio from "./components/PhoneticsAudio";
import axios from 'axios';
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import DictionaryIcon from "../../../assets/icons/icons-dictionary.png";
import Image from "next/image";

export default function Home() {
  const [searchWord, setSearchWord] = useState("practise");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []); // Update effect when searchWord changes

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Handle form submission if needed
  }

  function handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const word = e.target.value;
    setSearchWord(word);
  }

  return (
    <main className="max-w-[689px] flex flex-col gap-6  mx-auto py-10  px-4 ">
      {/* header */}
      <div className="flex justify-center gap-6 flex-wrap content-center h-[60px]">
        {/* <RiBookLine className="text-4xl text-gray-400 " /> */}
         <Image src={DictionaryIcon} alt="Dictionary Icon" width={60} height={60}/>
         <p className="text-purple-500 font-bold text-5xl mt-2">Dictionary</p>
         {/* <ModeToggle></ModeToggle> */}
       </div>

      {/* SearchBar */}
      <Search
        value={searchWord}
        onChange={handleSearchInputChange}
        onSubmit={handleSubmit}
        setData={setData}
      />

      {/* Main section */}
      {data.length === 0 ? (
        <div className="text-center text-xl">Word not found</div>
      ) : (
        data.map((item, index) =>
          index === 0 && (
            <div key={index} className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between w-full h-16 items-center">
                  <h1 className="text-[64px] font-bold">{item.word}</h1>
                  <PhoneticsAudio item={item}></PhoneticsAudio>
                </div>
                <Phoneticstext item={item}></Phoneticstext>
              </div>

              {item.meanings.map((meaning: { partOfSpeech: string, definitions: { definition: string }[], synonyms: { synonym: string }[] }, m_index: number) => (
                <div className="flex flex-col gap-8" key={m_index}>
                  <div className="flex flex-row gap-5 items-center">
                    <p className="text-2xl font-semibold italic">{meaning.partOfSpeech}</p>
                    <div className="w-full h-[2px] bg-gray-200 rounded-full"></div>
                  </div>
                  <section className="flex flex-col gap-2">
                    <p className="text-xl font-medium">Meaning</p>
                    <ul className="list w-11/12 m-auto flex flex-col gap-2">
                      {meaning.definitions.map((definition, d_index) => (
                        <li className="flex flex-row gap-2" key={d_index}>
                          <div className="min-h-[6px] min-w-[6px] h-[6px] w-[6px] bg-purple-300 rounded-full mt-3" />
                          <p className="text-lg">{definition.definition}</p>
                        </li>
                      ))}
                    </ul>
                    {meaning.synonyms.length > 0 && (
                      <div className="flex gap-2 items-center">
                        <p className="text-xl text-gray-400">Synonyms :</p>
                        <p className="text-xl">{meaning.synonyms.map((d, i) => d).join(", ")}</p>
                      </div>
                    )}
                  </section>
                </div>
              ))}

              <div className="w-full h-[1px] bg-gray-200 rounded-full"></div>
              <div>
                {item?.sourceUrls.length > 0 && (
                  <div className="flex gap-2">
                    <p>Source :</p>
                    <Link
                      target="_blank"
                      href={item?.sourceUrls[0]}
                      className="flex gap-1 items-center"
                    >
                      <span>{item?.sourceUrls}</span>
                      <FaExternalLinkAlt className="text-sm text-gray-400" />{" "}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )
        )
      )}
    </main>
  );
}
