import { Button, Image, VStack } from "@chakra-ui/react";

interface Props {
  hidden?: boolean;
  horizontal?: boolean;
}

const VoteActions = ({ hidden = false, horizontal = false }: Props) => {
  return (
    <VStack
      gap={0}
      mt={1}
      hidden={hidden}
      flexDir={horizontal ? "row" : "column"}
    >
      <Button
        size="sm"
        w="full"
        borderTopLeftRadius="lg"
        borderTopRightRadius={horizontal ? "none" : "lg"}
        borderBottomLeftRadius={horizontal ? "lg" : "none"}
        borderBottomRightRadius="none"
        bg="veryLightGray.500"
      >
        <Image src="/images/icons/icon-plus.svg" />
      </Button>
      <Button
        size="sm"
        w="full"
        borderRadius="none"
        bg="veryLightGray.500"
        color="moderateBlue.500"
      >
        12
      </Button>
      <Button
        size="sm"
        w="full"
        borderTopLeftRadius="none"
        borderTopRightRadius={horizontal ? "lg" : "none"}
        borderBottomLeftRadius={horizontal ? "none" : "lg"}
        borderBottomRightRadius="lg"
        bg="veryLightGray.500"
      >
        <Image src="/images/icons/icon-minus.svg" />
      </Button>
    </VStack>
  );
};

export default VoteActions;
