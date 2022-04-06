import styled from 'styled-components'
import Filter from "./filter.svg"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    .button-open {
      display: flex;
      align-items: center;
      color: #000;
      font-family: Montserrat,sans-serif;
      font-size: 12px;
      text-transform: uppercase;
      cursor: pointer;
      &::after {
          content: "";
          width: 12px;
          height: 12px;
          display: block;
          margin-left: 10px;
          background-size: contain;
          background-position: 50%;
          background-repeat: no-repeat;
          background-image: url(${Filter});
      }
    }
    .modal {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      .overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        z-index: -1;
      }
      .content {
        background-color: #fff;
        width: 30%;
        height: 100%;
        position: relative;
        .close {
          position: absolute;
          top: 15px;
          right: 15px;
          cursor: pointer;
          z-index: 1;
          &::before {
              content: "\f213";
              font-family: "feather-icons";
              font-size: 26px;
          }
        }
      }
    }
`