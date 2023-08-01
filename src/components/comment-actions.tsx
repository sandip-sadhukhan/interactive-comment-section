import { Button, HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  hidden?: boolean;
}

const CommentActions = ({ hidden = false }: Props) => {
  return (
    <HStack hidden={hidden}>
      <Button variant="ghost" color="moderateBlue.500">
        <Image src="/images/icons/icon-reply.svg" mr={2} />
        <Text>Reply</Text>
      </Button>
    </HStack>
  );
};

export default CommentActions;
