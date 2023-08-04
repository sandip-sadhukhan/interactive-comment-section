import { Button, HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  hidden?: boolean;
  isCurrentUser: boolean;
  deleteComment: (commentId: number) => void;
  commentId: number;
}

const CommentActions = ({
  hidden = false,
  isCurrentUser,
  deleteComment,
  commentId,
}: Props) => {
  return (
    <HStack hidden={hidden} gap={0}>
      <Button
        size="sm"
        variant="ghost"
        color="moderateBlue.500"
        hidden={isCurrentUser}
        px={2}
      >
        <Image src="/images/icons/icon-reply.svg" mr={2} />
        <Text>Reply</Text>
      </Button>

      <Button
        size="sm"
        variant="ghost"
        color="softRed.500"
        hidden={!isCurrentUser}
        px={2}
        onClick={() => deleteComment(commentId)}
      >
        <Image src="/images/icons/icon-delete.svg" mr={2} />
        <Text>Delete</Text>
      </Button>

      <Button
        size="sm"
        variant="ghost"
        color="moderateBlue.500"
        hidden={!isCurrentUser}
        px={2}
      >
        <Image src="/images/icons/icon-edit.svg" mr={2} />
        <Text>Edit</Text>
      </Button>
    </HStack>
  );
};

export default CommentActions;
