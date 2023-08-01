import {
  Avatar,
  Card,
  CardBody,
  HStack,
  VStack,
  Text,
  Heading,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import VoteActions from "./vote-actions";
import CommentActions from "./comment-actions";
import React from "react";

interface CommentType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
    };
    username: string;
  };
  replyingTo?: string;
  replies?: CommentType[];
}

const Comment = (props: CommentType) => {
  const { content, createdAt, score, user, replies = [], replyingTo } = props;
  const isMobileDevice = useBreakpointValue({ base: true, md: false });
  const replyToLeftMargin = useBreakpointValue({ base: 5, md: 20 });
  const replyToDividerLeftMargin = useBreakpointValue({ base: 0, md: 10 });

  return (
    <VStack gap={0}>
      <Card
        bg="white"
        p={{ base: 0, md: 2 }}
        borderRadius="lg"
        ml={replyingTo ? replyToLeftMargin : 0}
      >
        <CardBody>
          <HStack columnGap={6} align="start">
            <VoteActions hidden={isMobileDevice} score={score} />

            <VStack>
              <HStack w="full" justifyContent="space-between">
                <HStack columnGap={4}>
                  <Avatar size="sm" src={user.image.png} />
                  <Heading
                    as="h3"
                    size="sm"
                    fontWeight="semibold"
                    color="darkBlue.500"
                  >
                    {user.username}
                  </Heading>
                  <Text color="grayishBlue.500">{createdAt}</Text>
                </HStack>
                <CommentActions hidden={isMobileDevice} />
              </HStack>

              <Text color="grayishBlue.500">{content}</Text>

              <HStack w="full" justify="space-between" hidden={!isMobileDevice}>
                <VoteActions horizontal={true} score={score} />
                <CommentActions />
              </HStack>
            </VStack>
          </HStack>
        </CardBody>
      </Card>

      {replies.length > 0 ? (
        <>
          <VStack rowGap={6} mt={6} position="relative">
            <Box
              bg="lightGray.500"
              w="2px"
              h="100%"
              position="absolute"
              left={replyToDividerLeftMargin}
              top="0"
              borderRadius="full"
            />
            {replies.map((replyComment) => (
              <Comment
                key={replyComment.id}
                id={replyComment.id}
                content={replyComment.content}
                createdAt={replyComment.createdAt}
                score={replyComment.score}
                user={replyComment.user}
                replyingTo={replyComment.replyingTo}
              />
            ))}
          </VStack>
        </>
      ) : null}
    </VStack>
  );
};

export default Comment;
