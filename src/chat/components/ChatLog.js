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

const ChatLog = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item, i) => (
        <ChatItem key={item.type + '-' + i} item={item} />
      ))}
    </Wrapper>
  );
};

const ChatItem = ({ item }) => {
  const { type, message } = item;
  return (
    <>
      <li className={type}>
        {type === 'system' ? <SiProbot /> : <FaRegUser />}
        <span>{message}</span>
      </li>
    </>
  );
};

export default React.memo(ChatLog);
