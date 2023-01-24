import styled from "styled-components";

export const BgcItem = styled.li`
border-radius: 4px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.599));
width: 70px;
background-color: ${({lable}) => {switch (lable) {
    case 'docx':
      return 'blue';
    case 'pdf':
      return 'orange';
    case 'mp3':
      return 'deeppink';
    case 'psd':
      return 'royalblue';
    default:
      return 'blue';
    }}}`