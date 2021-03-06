import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import NewQuestion from "../Modal/NewQuestion";
import ModalPortal from "components/Modal/ModalPortal";
import { isNewQuestionModalOpenState } from "store/question";

interface EmptyQuestionProps {
    onClickNewQuestion: () => void;
}

const EmptyQuestion = ({ onClickNewQuestion }: EmptyQuestionProps) => {
    const isNewQuestionModalOpen = useRecoilValue(isNewQuestionModalOpenState);

    return (
        <React.Fragment>
            <StyledDiv onClick={onClickNewQuestion}>
                <span>
                    첫 질문의 <strong>주인공</strong>이 되어 보세요 !
                </span>
            </StyledDiv>

            <ModalPortal>
                {isNewQuestionModalOpen ? <NewQuestion /> : null}
            </ModalPortal>
        </React.Fragment>
    );
};

export default EmptyQuestion;

const StyledDiv = styled.div`
    position: sticky;
    top: 80px;

    width: 40%;
    height: 110px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border_intensity};

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: all 0.3s;
    &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.emph};
    }
`;
