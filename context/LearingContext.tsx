/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { LectureType } from 'types/chapter.type';

type ILearningContext = {
  lecture: LectureType;
  setLecture: (lecture: LectureType) => void;
};

export const LeaningContext = React.createContext<ILearningContext>({
  lecture: {},
  setLecture: (lecture: LectureType) => {},
});

export const LearningContextProvider = ({ children }) => {
  const [lecture, setLecture] = useState({});
  return (
    <LeaningContext.Provider value={{ lecture, setLecture }}>
      {children}
    </LeaningContext.Provider>
  );
};
