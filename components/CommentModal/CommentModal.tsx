import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Heading,
  Text,
  Flex,
  Avatar,
  Box,
  Input,
  Button,
} from '@chakra-ui/react';
import classNames from 'classnames';

type ICommentModalProps = {
  onClose: () => void;
  isOpen: boolean;
};
const CommentModal: React.FC<ICommentModalProps> = ({ onClose, isOpen }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [content, setContent] = useState('');

  const toggleShowing = () => setIsShowing(!isShowing);

  const modules = {
    toolbar: {
      toolbar: true,
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['blockquote', 'code-block'],
        ['link', 'image'],
        ['clean'],
      ],
    },
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'font',
    'align',
    'list',
    'bullet',
    'blockquote',
    'code-block',
    'link',
    'image',
  ];

  return (
    <Modal
      isCentered={false}
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="6xl"
    >
      <ModalOverlay />
      <ModalContent
        bg="white"
        position="fixed"
        top="0"
        marginTop={0}
        overflowY="scroll"
        width="100%"
        maxHeight="100%"
        className="scroll-custom"
      >
        <ModalCloseButton />
        <ModalBody>
          <Heading as="h5" fontSize="20px" fontWeight="600" marginTop={4}>
            7 Hỏi đáp
          </Heading>
          <Text fontStyle="italic" fontSize="14px" marginY="13px">
            (Nếu thấy bình luận spam, các bạn bấm report giúp admin nhé)
          </Text>

          <Flex gap={3} alignItems="start" my={20}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box
              borderBottom={classNames({ '1px': isShowing })}
              borderColor={classNames({ 'gray.300': isShowing })}
              width="100%"
            >
              {isShowing ? (
                <Input
                  placeholder="Bạn có thắc mắc gì trong bài học này?"
                  size="md"
                  border="none"
                  onClick={toggleShowing}
                />
              ) : (
                <Box>
                  <div className="editor-container">
                    <ReactQuill
                      value={content}
                      onChange={setContent}
                      modules={modules}
                      formats={formats}
                    />
                  </div>
                  <Flex mt={2} float="right">
                    <Button
                      onClick={toggleShowing}
                      me={4}
                      rounded="3xl"
                      bg="transparent"
                      color="gray"
                    >
                      HUỶ
                    </Button>
                    <Button
                      onClick={toggleShowing}
                      rounded="3xl"
                      bg="green"
                      color="white"
                      _hover={{
                        backgroundColor: 'transparent',
                        borderColor: 'green',
                        borderWidth: '1px',
                        color: 'green',
                      }}
                    >
                      BÌNH LUẬN
                    </Button>
                  </Flex>
                </Box>
              )}
            </Box>
          </Flex>

          <Box marginY={8}>
            <Flex gap={3}>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Box>
                <Box bg={'gray.100'} px={5} py={2} rounded={'2xl'} maxW="100%">
                  <Text fontSize={'md'} fontWeight={'600'}>
                    User name
                  </Text>
                  <Text whiteSpace={'normal'}>What are you doing?</Text>
                </Box>
              </Box>
            </Flex>
            <Flex ms={50} mt={2} alignItems="center" fontSize="14px">
              <Text ps={4} pe={2} cursor="pointer" color="green.500">
                Thích
              </Text>
              -{' '}
              <Text cursor="pointer" px={2} color="green.500">
                Trả lời
              </Text>{' '}
              -
              <Text px={2} color="gray.500">
                một tháng trước
              </Text>
            </Flex>
          </Box>

          <Box marginY={8}>
            <Flex gap={3}>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Box>
                <Box bg={'gray.100'} px={5} py={2} rounded={'2xl'} maxW="100%">
                  <Text fontSize={'md'} fontWeight={'600'}>
                    User name
                  </Text>
                  <Text whiteSpace={'normal'}>
                    What are you doing? sdf ds fdsakfdjsk fdksl jfkldsjf
                    klsdjalkf jdlksjf ldsj f What are you doing? sdf ds
                    fdsakfdjsk fdksl jfkldsjf klsdjalkf jdlksjf ldsj f What are
                    you doing? sdf ds fdsakfdjsk fdksl jfkldsjf klsdjalkf
                    jdlksjf ldsj f What are you doing? sdf ds fdsakfdjsk fdksl
                    jfkldsjf klsdjalkf jdlksjf ldsj f
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Flex ms={50} mt={2} alignItems="center" fontSize="14px">
              <Text ps={4} pe={2} cursor="pointer" color="green.500">
                Thích
              </Text>
              -{' '}
              <Text cursor="pointer" px={2} color="green.500">
                Trả lời
              </Text>{' '}
              -
              <Text px={2} color="gray.500">
                một tháng trước
              </Text>
            </Flex>
          </Box>

          <Box marginY={8}>
            <Flex gap={3}>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Box>
                <Box bg={'gray.100'} px={5} py={2} rounded={'2xl'} maxW="100%">
                  <Text fontSize={'md'} fontWeight={'600'}>
                    User name
                  </Text>
                  <Text whiteSpace={'normal'}>
                    What are you doing? sdf ds fdsakfdjsk fdksl jfkldsjf
                    klsdjalkf jdlksjf ldsj f What are you doing? sdf ds
                    fdsakfdjsk fdksl jfkldsjf klsdjalkf jdlksjf ldsj f What are
                    you doing? sdf ds fdsakfdjsk fdksl jfkldsjf klsdjalkf
                    jdlksjf ldsj f What are you doing? sdf ds fdsakfdjsk fdksl
                    jfkldsjf klsdjalkf jdlksjf ldsj f
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Flex ms={50} mt={2} alignItems="center" fontSize="14px">
              <Text ps={4} pe={2} cursor="pointer" color="green.500">
                Thích
              </Text>
              -{' '}
              <Text cursor="pointer" px={2} color="green.500">
                Trả lời
              </Text>{' '}
              -
              <Text px={2} color="gray.500">
                một tháng trước
              </Text>
            </Flex>
          </Box>

          <Box marginY={8}>
            <Flex gap={3}>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Box>
                <Box bg={'gray.100'} px={5} py={2} rounded={'2xl'} maxW="100%">
                  <Text fontSize={'md'} fontWeight={'600'}>
                    User name
                  </Text>
                  <Text whiteSpace={'normal'}>
                    What are you doing? sdf ds fdsakfdjsk fdksl jfkldsjf
                    klsdjalkf jdlksjf ldsj f What are you doing? sdf ds
                    fdsakfdjsk fdksl jfkldsjf klsdjalkf jdlksjf ldsj f What are
                    you doing? sdf ds fdsakfdjsk fdksl jfkldsjf klsdjalkf
                    jdlksjf ldsj f What are you doing? sdf ds fdsakfdjsk fdksl
                    jfkldsjf klsdjalkf jdlksjf ldsj f
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Flex ms={50} mt={2} alignItems="center" fontSize="14px">
              <Text ps={4} pe={2} cursor="pointer" color="green.500">
                Thích
              </Text>
              -{' '}
              <Text cursor="pointer" px={2} color="green.500">
                Trả lời
              </Text>{' '}
              -
              <Text px={2} color="gray.500">
                một tháng trước
              </Text>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CommentModal;
