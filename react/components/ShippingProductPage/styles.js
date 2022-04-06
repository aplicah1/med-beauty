import styled, { css } from "styled-components";
import Cube from "./cube.svg"
export const Container = styled.div`
    ${({ calculatedValue }) => css`
        font-family: "Bree",sans-serif;
        font-weight: 100;
        @media(max-width: 1024px) {
            max-width: 250px;
        }
        .message {
            display: flex;
            align-items: center;
            &::before {
                content: "";
                display: block;
                width: 23px;
                height: 23px;
                background-image: url(${Cube});
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                margin-right: 10px;
            }
            .message-default {
                display: block;
                text-transform: uppercase;
                font-weight: 100;
                color: #6460AA;
                font-family: Source Sans Pro;
            }
            span {
                color: #6460AA;
                font-size: 14px;
            }
            span.price {
                font-size: 12px;
                > div {
                    display: inline-block;
                    font-weight: bold;
                }
            }
        }
        .background-progress {
            background: #dedede;
            border-radius: 30px;
            overflow: hidden;
            width: 100%;
            height: 10px;
            display: block;
            margin-top: 10px;
            .percentage-bar {
                width: ${`${calculatedValue}%`};
                height: 10px;
                background: #6460AA;
                transition: all .5s ease;
            }
        }
    `}
`;