import React, { ReactElement, useContext, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import SettingsLayout from 'layouts/settingsLayout';
import SectionInfoUserSetting from '@/components/SectionInfoUserSetting';
import { AuthenContext } from 'context/AuthenContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getUser, updateUser } from 'api/user.api';
import { confirmUploadAPI, uploadFilesAPI } from 'api/upload.api';
import useToastify from 'hook/useToastify';

const PersonalSettings = () => {
  const { user, setUser } = useContext(AuthenContext);
  const toast = useToastify();
  const [fullName, setFullName] = useState(
    user?.fullName ? user?.fullName : ''
  );
  const [avatar, setAvatar] = useState<string>('');
  const [avatarPreview, setAvatarPreview] = useState<string>(
    user?.avatar ? user?.avatar : ''
  );

  const queryClient = useQueryClient();
  const formData = new FormData();

  const getUserInfo = () => {
    queryClient.fetchQuery({
      queryKey: ['user'],
      queryFn: () =>
        getUser(user?._id)
          .then((res) => {
            setUser(res?.data);
            setFullName(res?.data.fullName);
            return res;
          })
          .catch((err) => console.log(err)),
    });
  };

  const updateUserMutate = useMutation({
    mutationFn: (data: {
      id: string;
      body: { fullName?: string; avatar?: string };
    }) => updateUser(data),
  });

  const uploadMutate = useMutation({
    mutationFn: (body: any) => uploadFilesAPI(body),
  });

  const confirmUploadMutate = useMutation({
    mutationFn: (body: { files: string[] }) => confirmUploadAPI(body),
  });

  const confirmFiles = (body) => {
    confirmUploadMutate.mutate(body, {
      onSuccess: (res) => {
        setAvatar(res?.data[0][0]);
        return res;
      },
      onError: (error: any) => {
        console.log(error);
      },
    });
  };

  const uploadFiles = (body: any) => {
    uploadMutate.mutate(body, {
      onSuccess: (res) => {
        confirmFiles({ files: res.data.files });
      },
      onError: (error: any) => {
        console.log(error);
      },
    });
  };

  const handleUpdateUser = (data: { fullName?: string; avatar?: string }) => {
    updateUserMutate.mutate(
      { id: user?._id, body: data },
      {
        onSuccess: (res) => {
          setUser(res?.data);
          toast.handleOpenToastify('success', 'Update thành công!', 1000);
          getUserInfo();
          setAvatar('');
          return res;
        },
        onError: (err) => {
          toast.handleOpenToastify('error', 'Update không thành công!', 1000);
          return err;
        },
      }
    );
  };

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
        value={fullName}
        setValue={(v) => setFullName(v)}
        click={() => handleUpdateUser({ fullName: fullName })}
        desc={
          'Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.'
        }
      />
      <SectionInfoUserSetting
        title="Avatar"
        isEdit={true}
        value={avatarPreview}
        setValue={(v) => {
          setAvatarPreview(URL.createObjectURL(v));
          formData.append('files', v);
          uploadFiles(formData);
        }}
        desc={
          'Ảnh của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.'
        }
        userName={user.fullName}
        click={() => handleUpdateUser({ avatar: avatar })}
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
