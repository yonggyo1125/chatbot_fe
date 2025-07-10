import React from 'react';
import styled from 'styled-components';
import { SiProbot } from 'react-icons/si';
import { FaRegUser } from 'react-icons/fa';
import color from '../../global/styles/color';
import fontsize from '../../global/styles/fontsize';
const { light, dark } = color;
const { medium } = fontsize;

const Wrapper = styled.ul`
  flex-grow: 1;
  background: ${light};
  font-size: ${medium};
  color: ${dark};
  border: 3px solid ${dark};
  li {
    padding: 10px 20px;

    svg {
      margin-right: 10px;
    }
  }

  .user {
    text-align: right;
  }

  .system {
    text-align: left;
  }
`;

const ChatLog = () => {
  return (
    <Wrapper>
      <li className="user">
        <FaRegUser />
        <span>사용자 대화..</span>
      </li>
      <li className="system">
        <SiProbot />
        <span>AI 대화...</span>
      </li>
    </Wrapper>
  );
};

export default React.memo(ChatLog);
