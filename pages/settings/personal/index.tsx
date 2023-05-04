import React, { ReactElement, useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import SettingsLayout from 'layouts/settingsLayout';
import SectionInfoUserSetting from '@/components/SectionInfoUserSetting';
import { AuthenContext } from 'context/AuthenContext';

const PersonalSettings = () => {
  const { user } = useContext(AuthenContext);
  return (
    <Box w={['full', '70%']} pl={[0, 4]}>
      <Box borderBottom={'1px'} borderColor={'gray.300'} mb={5}>
        <Text fontWeight={'medium'} fontSize={'2xl'}>
          Thông tin cá nhân
        </Text>
      </Box>
      <SectionInfoUserSetting
        title="Họ và tên"
        isEdit={true}
        value={user.fullName}
        desc={
          'Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.'
        }
      />
      <SectionInfoUserSetting
        title="Avatar"
        isEdit={true}
        value={user.avatar}
        desc={
          'Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.'
        }
        userName={user.fullName}
      />
      <SectionInfoUserSetting title="Email" isEdit={false} value={user.email} />
      <SectionInfoUserSetting
        title="User Name"
        isEdit={false}
        value={user.slug}
      />
      <SectionInfoUserSetting
        title="Số điện thoại"
        isEdit={false}
        value={user.phone}
        desc={'Điện thoại liên kết với E8.'}
      />
    </Box>
  );
};

PersonalSettings.getLayout = function getLayout(page: ReactElement) {
  return <SettingsLayout>{page}</SettingsLayout>;
};
export default PersonalSettings;
