import { useQuery } from '@tanstack/react-query';
import { getUser } from 'api/user.api';
import { useRouter } from 'next/router';
import React from 'react';
import { User, UserDetail } from 'types/user.type';

type IProfileContext = { user: UserDetail };

export const ProfileContext = React.createContext<IProfileContext>({
  user: { _id: '', gender: '', fullName: '', myCourses: [] },
});

export const ProfileContextProvider = ({ children }) => {
  const router = useRouter();
  const idUser = String(router.query.id);

  const userQuery = useQuery({
    queryKey: ['userDetail', idUser],
    queryFn: () =>
      getUser(
        idUser,
        'myLearningCourses.idCourse,myClassRooms.idClassRoom,myCourses.idCourse,myLearningClassRooms.idClassRoom'
      ),
    staleTime: 5000,
  });

  return (
    <ProfileContext.Provider value={{ user: userQuery.data?.data }}>
      {children}
    </ProfileContext.Provider>
  );
};
