import React, { useEffect, useRef } from 'react';
import { MESSAGES_MOCK_DATA } from 'utils/messagesMockData';
import Header from './components/Header';
import MessageContainer from './containers/MessageContainer';

export default function Messenger() {
  const latestConversationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (latestConversationRef.current === null) return;
    latestConversationRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, [MESSAGES_MOCK_DATA.messages]);

  return (
    <div>
      <Header></Header>
      <MessageContainer
        ref={latestConversationRef}
        data={MESSAGES_MOCK_DATA.messages}
      />
    </div>
  );
}
