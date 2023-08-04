import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Container,
  HStack,
  Textarea,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Comment from "../components/comment";
import data from "../../data/data.json";
import { getCurrentUser, getInitialComments, saveData } from "../../helpers";
import { useState, useEffect } from "react";
import { CommentType } from "../../types";

export default function Home() {
  const isMobileDevice = useBreakpointValue({ base: true, md: false });
  const [comments, setComments] = useState<CommentType[]>([]);
  const currentUser = getCurrentUser();
  const [newCommentContent, setNewCommentContent] = useState<string>("");

  useEffect(() => {
    const initialComments = getInitialComments();
    setComments(initialComments);
  }, []);

  const addComment = () => {
    if (!newCommentContent || !newCommentContent.trim()) {
      return;
    }

    const newComment: CommentType = {
      id: Date.now(),
      content: newCommentContent.trim(),
      createdAt: "Just now",
      score: 0,
      user: currentUser,
      replies: [],
    };

    const newComments = [...comments, newComment];

    setComments(newComments);
    setNewCommentContent("");
    saveData(newComments);
  };

  const deleteComment = (commentId: number) => {
    var newComments = [...comments];

    newComments = newComments.filter((comment) => comment.id !== commentId);
    newComments = newComments.map((comment) => {
      comment.replies = comment.replies?.filter(
        (reply) => reply.id !== commentId
      );
      return comment;
    });

    setComments(newComments);
    saveData(newComments);
  };

  // count will be either +1 or -1
  const upOrDownVote = (commentId: number, count: number) => {
    var newComments = [...comments];

    newComments.forEach(function (vote) {
      if (vote.id === commentId) {
        vote.score = Math.max(vote.score + count, 0);
      } else {
        vote.replies?.forEach(function (reply) {
          if (reply.id === commentId) {
            reply.score = Math.max(reply.score + count, 0);
          }
        });
      }
    });

    setComments(newComments);
    saveData(newComments);
  };

  return (
    <>
      <Head>
        <title>Interactive Comment Section</title>
        <meta name="description" content="Made by sandip sadhukhan." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box as="main" w="full" minH="100vh" py={10} bg="veryLightGray.500">
        <Container maxW="container.md">
          <VStack rowGap={6}>
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                id={comment.id}
                content={comment.content}
                createdAt={comment.createdAt}
                score={comment.score}
                user={comment.user}
                replies={comment.replies}
                upOrDownVote={upOrDownVote}
                deleteComment={deleteComment}
              />
            ))}

            <Card w="full" bg="white">
              <CardBody>
                <HStack
                  align="start"
                  gap={4}
                  flexDir={{ base: "column", md: "row" }}
                >
                  <Avatar
                    src={data.currentUser.image.png}
                    hidden={isMobileDevice}
                  />
                  <Textarea
                    placeholder="Add a comment..."
                    value={newCommentContent}
                    onChange={(e) => setNewCommentContent(e.target.value)}
                  />
                  <Button
                    bg="moderateBlue.500"
                    color="white"
                    fontWeight="medium"
                    px={5}
                    _hover={{ bg: "moderateBlue.500" }}
                    hidden={isMobileDevice}
                    onClick={addComment}
                  >
                    SEND
                  </Button>

                  <HStack
                    hidden={!isMobileDevice}
                    justifyContent="space-between"
                    w="full"
                  >
                    <Avatar src={data.currentUser.image.png} size="sm" />
                    <Button
                      bg="moderateBlue.500"
                      color="white"
                      fontWeight="medium"
                      px={5}
                      _hover={{ bg: "moderateBlue.500" }}
                      onClick={addComment}
                    >
                      SEND
                    </Button>
                  </HStack>
                </HStack>
              </CardBody>
            </Card>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
