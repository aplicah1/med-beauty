import styled from 'styled-components'

export const Container = styled.div`
  @import url("https://s3-sa-east-1.amazonaws.com/we.digi.tech/fonts/basic/flaticon.css");
  .medbeauty-medbeauty-store-0-x-autoCompleteOuterContainer {
    .vtex-input-prefix__group {
      border: 0;
      background: #c9c9c94d;
      border-radius: 20px;
      .vtex-styleguide-9-x-input {
        background-color: transparent;
      }
      .vtex-input__suffix {
        background-color: transparent;
        padding: 0 5px;
        .medbeauty-medbeauty-store-0-x-searchBarIcon {
          .medbeauty-medbeauty-store-0-x-searchIcon {
            display: none;
          }
          &::before {
            content: "\f1a3";
            font-family: "Flaticon";
            color: #6460AA;
            font-size: 26px;
          }
        }
      }
    }
  }
  .medbeauty-medbeauty-store-0-x-resultsList {
    max-height: 400px;
    overflow: auto;
    @media(max-width: 1024px) {
      bottom: 50px;
    }
    &::-webkit-scrollbar {
        width: 6px;
        border-radius: 6px;
        background: #f3f3f3;
    }
    &::-webkit-scrollbar-thumb { 
      border-radius: 10px;
      background-color: #6460AA;
    }
    &::-webkit-scrollbar-track {
      border-radius: 6px;
      background: #f3f3f3;
    }
    .medbeauty-medbeauty-store-0-x-resultsItem {
      text-decoration: none;
      color: #000;
      font-size: 14px;
    }
  }
`