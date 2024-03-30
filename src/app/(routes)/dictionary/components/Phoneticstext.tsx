import React, { useState } from 'react';

const Phoneticstext = ({ item }: { item: { phonetics?: { text: string; audio: string }[] } }) => {

  const findFirstValidPhonetic = (): { text: string; audio: string } | undefined => {
    return item.phonetics?.find((phonetic) => phonetic.text && phonetic.audio);
  };

  const firstPhonetic = findFirstValidPhonetic();

  return (
    <>
      {/* Render only the first valid phonetic, if found */}
      {firstPhonetic && (
        <p key="phonetic" className="text-purple-700 text-[25px]">
          {firstPhonetic.text}
        </p>
      )}

      {/* Handle empty data or missing properties */}
      {!firstPhonetic && <p>No phonetics data available.</p>}
    </>
  );
};

export default Phoneticstext;