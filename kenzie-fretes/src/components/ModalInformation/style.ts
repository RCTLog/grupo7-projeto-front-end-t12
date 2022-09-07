import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--grey-2);
    border-radius: 10px;
    box-shadow: 4px 4px 4px var(--grey-1);

    .info {
        max-width: 90%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
            font-weight: 600;

            span {
                font-weight: 500;
            }
        }
    }

    svg {
        cursor: pointer;
        margin-top: -10px;
    }
`;

export default Container;