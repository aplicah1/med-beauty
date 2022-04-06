import styled from 'styled-components'

export const Container = styled.div`
    .flex {
      @media(max-width: 1024px) {
        flex-direction: column;
      }
    }
    .w-50 {
      @media(max-width: 1024px) {
        width: 100% !important;
      }
    }
    .text {
      color: #6460AA;
      max-width: 500px;
      margin-right: auto;
      h2 {
        display: block;
        font-size: 3rem;
        font-family: Bree;
        font-weight: normal;
        i {
          display: block;
          font-weight: 100;
          font-style: normal;
          font-size: 2rem;
          font-family: Source Sans Pro;
        }
      }
      p {
        line-height: 1.7;
        font-size: 18px;
      }
    }
    .description-1 {
      padding: 30px;
      max-width: 1366px;
      margin: 0 auto;
      @media(max-width: 1024px) {
        padding: 15px;
      }
     .row-1 {
        padding-bottom: 30px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        @media(max-width: 1024px) {
          flex-direction: column;
        }
        .text {
          width: 50%;
          @media(max-width: 1024px) {
            width: 100%;
          }
        }
        .img {
          width: 50%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          @media(max-width: 1024px) {
            width: 100%;
          }
          img {
            display: block;
          }
        }
        @media(max-width: 1024px) {
          padding-bottom: 15px;
        }
      }
     .row-2 {
        display: flex;
        justify-content: space-between;
        @media(max-width: 1024px) {
          flex-direction: column;
        }
        img {
          @media(max-width: 1024px) {
            margin-top: 30px;
          }
        }
     }
    }
    .description-2 {
      background-color: #FBEFF0;
      > div {
        margin-top: 30px;
        padding: 30px;
        justify-content: space-between;
        max-width: 1366px;
        margin: 0 auto;
        @media(max-width: 1024px) {
          padding: 15px;
          flex-direction: column;
        }
        .col-1 {
          padding-right: 30px;
          @media(max-width: 1024px) {
            padding-right: 0;
          }
          img {
            margin-top: 30px;
          }
        }
        .col-2 {
        }
      }
    }
`