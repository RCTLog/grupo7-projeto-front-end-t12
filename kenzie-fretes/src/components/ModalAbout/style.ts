import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 1rem;
    background-color: var(--grey-2);
    border-radius: 10px;
    box-shadow: 4px 4px 4px var(--grey-1);

    .description {
        max-width: 90%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
            font-weight: 600;
        }

        span {
            text-align: justify;
        }
    }

    svg {
        cursor: pointer;
        margin-top: -10px;
    }
`;

export default Container;