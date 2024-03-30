import React from 'react';
// import 'react-h5-audio-player/lib/styles.css';
import { IoIosPlay } from "react-icons/io";
import useSound from 'use-sound';

const PhoneticsAudio = ({ item }: { item: { phonetics?: { text: string; audio: string }[] } }) => {
    const findFirstValidPhonetic = (): { text: string; audio: string } | undefined => {
        return item.phonetics?.find((phonetic) => phonetic.text && phonetic.audio);
    }

    const firstPhonetic = findFirstValidPhonetic();

    // Ensure firstPhonetic?.audio is always a string or an array of strings
    const audio = firstPhonetic?.audio || '';
    const [play] = useSound(audio);


    const playAudio = () => {
        if (audio) {
            play();
        }
    };

    return (
        <>
            <button onClick={playAudio} className="h-16 w-16 bg-purple-300 opacity-70 rounded-full flex justify-center flex-wrap items-center text-4xl transition-all text-purple-700 hover:text-white hover:bg-purple-700">
                <IoIosPlay />
            </button>
        </>
    );
};

export default PhoneticsAudio;