import React from "react";
import { useNavigate } from "react-router-dom";
import { useFlashcardContext } from "../../../../contexts/flashcard";
import { Box, Button, Textarea, VStack } from "@chakra-ui/react";
import FlashcardRow from "../../FlashcardComponents/FlashcardRow/FlashcardRow";

export default function CreateSetOverview({
    description,
    setDescription,
    setIsCreateOverviewShown,
    chosenSet,
    userCreatedSet,
}) {
    const { mySets, setMySets } = useFlashcardContext();
    const navigate = useNavigate();

    return (
        <>
            <Box w={"45%"}>
                <VStack align={"center"}>
                    <Textarea
                        type="text"
                        className="description"
                        name="description"
                        bg={"gray.100"}
                        _hover={{
                            border: "3px solid",
                            borderColor: "green.300",
                        }}
                        color={"black"}
                        textAlign={"center"}
                        fontSize={"20px"}
                        value={description}
                        placeholder="Add Description"
                        _placeholder={{
                            opacity: 0.6,
                            color: "black",
                        }}
                        onChange={(e) => {
                            setDescription(e.target.value);
                            userCreatedSet.description = e.target.value;
                        }}
                    />
                </VStack>
            </Box>
            <Box className="flashcard-row-container">
                {chosenSet.flashcards ? (
                    chosenSet.flashcards.map((e, idx) => (
                        <FlashcardRow
                            key={idx}
                            idx={idx}
                            term={e.term}
                            definition={e.definition}
                            chosenSet={chosenSet}
                        />
                    ))
                ) : (
                    <Box className="empty-flashcard-row" />
                )}
            </Box>
            <Box>
                <VStack align={"center"} justify={"center"}>
                    <Button
                        className="add-cards-button"
                        bg={"gray.100"}
                        borderRadius={"22px"}
                        fontSize={"2xl"}
                        fontWeight={"medium"}
                        color={"black"}
                        _hover={{ bg: "green.100" }}
                        onClick={(e) => {
                            setIsCreateOverviewShown(false);
                        }}
                    >
                        Add Cards
                    </Button>
                    <Button
                        className="save-button"
                        bg={"gray.100"}
                        borderRadius={"25px"}
                        fontSize={"2xl"}
                        color={"black"}
                        _hover={{ bg: "green.100" }}
                        title="Add to My Sets"
                        onClick={() => {
                            if (
                                userCreatedSet.flashcards?.length >= 2 &&
                                userCreatedSet.title
                            ) {
                                mySets.push(userCreatedSet);
                                setMySets([...mySets]);
                                navigate("/mysets");
                            } else {
                                console.error(
                                    "The set needs a title and at least 2 flashcards"
                                );
                            }
                        }}
                    >
                        Save This Set
                    </Button>
                </VStack>
            </Box>
        </>
    );
}
