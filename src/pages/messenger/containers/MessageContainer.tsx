import React from 'react';
import Message from '../components/Message';

export interface messagesProps {
  userId: string;
  userName: string;
  profileImage: string;
  content: string;
  date: string;
}

interface MessageContainerProps {
  data: messagesProps[];
  WrapperRef: React.RefObject<HTMLDivElement>;
  onClickReply: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MessageContainer({
  data,
  WrapperRef,
  onClickReply,
  onClickDelete,
}: MessageContainerProps) {
  return (
    <div ref={WrapperRef}>
      {data.map((item, i) => (
        <Message
          key={i}
          attr={item}
          onClickReply={onClickReply}
          onClickDelete={onClickDelete}
        />
      ))}
    </div>
  );
}
