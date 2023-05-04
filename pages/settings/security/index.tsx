import React, { ReactElement } from 'react';
import SettingsLayout from 'layouts/settingsLayout';
import { Box, Text } from '@chakra-ui/react';
import SectionInfoUserSetting from '@/components/SectionInfoUserSetting';

const SecuritySettings = () => {
  return (
    <Box w={['full', '70%']} pl={[0, 4]}>
      <Box borderBottom={'1px'} borderColor={'gray.300'} mb={5}>
        <Text fontWeight={'medium'} fontSize={'2xl'}>
          Liên kết tài khoản đăng nhập
        </Text>
      </Box>
      <SectionInfoUserSetting
        title="Liên kết Google"
        isEdit={true}
        value={''}
      />
      <SectionInfoUserSetting
        title="Liên kết Facebook"
        isEdit={true}
        value={''}
      />
      <SectionInfoUserSetting
        title="Liên kết số điện thoại"
        isEdit={true}
        value={''}
      />
      <Box borderBottom={'1px'} borderColor={'gray.300'} mb={5}>
        <Text fontWeight={'medium'} fontSize={'2xl'}>
          Mạng xã hội
        </Text>
      </Box>
      <SectionInfoUserSetting title="Facebook" isEdit={true} value={''} />
      <SectionInfoUserSetting title="Youtube" isEdit={true} value={''} />
      <SectionInfoUserSetting title="Số điện thoại" isEdit={true} value={''} />
    </Box>
  );
};

SecuritySettings.getLayout = function getLayout(page: ReactElement) {
  return <SettingsLayout>{page}</SettingsLayout>;
};

export default SecuritySettings;
