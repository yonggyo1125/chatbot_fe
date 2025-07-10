import React from 'react';
import styled from 'styled-components';
import color from '../../global/styles/color';
import fontsize from '../../global/styles/fontsize';
const { light, dark } = color;
const { normal } = fontsize;

const Wrapper = styled.ul`
  flex-grow: 1;
  background: ${light};
  font-size: ${normal};
  color: ${dark};
  border: 3px solid ${dark};
`;

const ChatLog = () => {
  return (
    <Wrapper>
      <li>사용자 대화..</li>
      <li>AI 대화...</li>
    </Wrapper>
  );
};

export default React.memo(ChatLog);
