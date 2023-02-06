import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon, Popup, Button } from 'semantic-ui-react';

const PreText = styled.pre`
  background: #eee;
  padding: 1rem;
  overflow: auto;
  border-radius: 1px;
  max-width: auto;
  display: flex;
  justify-content: space-between;
`;

const Code = styled.code`
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1;
  font-family: Courier;
  font-style: italic;
`;

const tooltipStyle = {
  height: 'fit-content',
};

const CodeText = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const timeoutLength = 2000;

  const handleCopyText = () => {
    navigator.clipboard.writeText(children as string);
    setIsOpen(true);

    setTimeout(() => {
      setIsOpen(false);
    }, timeoutLength);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <PreText data-testid="code-text">
        <Code>{children}</Code>
        <Popup
          // Using styled components pushes the tooltip to top of page
          trigger={
            <Button
              icon
              style={tooltipStyle}
              data-testid="code-text-copy-button"
            >
              <Icon name="copy outline" />
            </Button>
          }
          position="top left"
          basic
          content={'copied!'}
          on={'click'}
          open={isOpen}
          onClose={handleClose}
          onOpen={handleCopyText}
        />
      </PreText>
    </>
  );
};

export default CodeText;
