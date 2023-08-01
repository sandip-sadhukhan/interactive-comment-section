import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Container,
  HStack,
  VStack,
  Text,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import VoteActions from "./vote-actions";
import CommentActions from "./comment-actions";

const Comment = () => {
  const isMobileDevice = useBreakpointValue({ base: true, md: false });

  return (
    <Card bg="white" p={2} borderRadius="lg">
      <CardBody>
        <HStack columnGap={6} align="start">
          <VoteActions hidden={isMobileDevice} />

          <VStack>
            <HStack w="full" justifyContent="space-between">
              <HStack columnGap={4}>
                <Avatar size="sm" src="/images/avatars/image-amyrobson.png" />
                <Heading
                  as="h3"
                  size="sm"
                  fontWeight="semibold"
                  color="darkBlue.500"
                >
                  amyrobson
                </Heading>
                <Text color="grayishBlue.500">1 month ago</Text>
              </HStack>
              <CommentActions hidden={isMobileDevice} />
            </HStack>

            <Text color="grayishBlue.500">
              Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You've nailed the design and the
              responsiveness at various breakpoints works really well.
            </Text>

            <HStack w="full" justify="space-between" hidden={!isMobileDevice}>
              <VoteActions horizontal={true} />
              <CommentActions />
            </HStack>
          </VStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Comment;
