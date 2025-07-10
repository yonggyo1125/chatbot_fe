import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { SiProbot } from 'react-icons/si';
import { FaRegUser } from 'react-icons/fa';
import color from '../../global/styles/color';
import fontsize from '../../global/styles/fontsize';
import loadingImg from '../../global/images/loading.gif';
const { light, dark } = color;
const { medium } = fontsize;

const Wrapper = styled.ul`
  flex-grow: 1;
  background: ${light};
  font-size: ${medium};
  color: ${dark};
  border: 3px solid ${dark};
  overflow-y: auto;
  li {
    padding: 10px 20px;

    svg {
      margin-right: 10px;
    }

    span {
      word-break: break-all;
    }
  }

  .user {
    text-align: right;
  }

  .system {
    text-align: left;
  }
`;

const ChatLog = ({ items, loading, callback }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current !== null) {
      callback(ref.current);
    }
  }, [ref, callback]);

  return (
    <Wrapper ref={ref}>
      {items.map((item, i) => (
        <ChatItem key={item.type + '-' + i} item={item} />
      ))}
      {loading && <img src={loadingImg} alt="loading" />}
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
