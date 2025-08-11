import React from 'react';
import { Message } from '../types';
import { User, Bot } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  const formatContent = (content: string) => {
    // 简单的 markdown 解析
    return content
      .split('\n')
      .map((line, index) => {
        // 代码块
        if (line.startsWith('```') && line.endsWith('```')) {
          const code = line.slice(3, -3);
          return (
            <pre key={index} className="bg-gray-100 rounded p-2 my-2 overflow-x-auto">
              <code>{code}</code>
            </pre>
          );
        }
        // 行内代码
        if (line.includes('`')) {
          const parts = line.split('`');
          return (
            <p key={index} className="mb-2">
              {parts.map((part, i) => 
                i % 2 === 1 ? 
                  <code key={i} className="bg-gray-100 px-1 py-0.5 rounded text-sm">{part}</code> : 
                  part
              )}
            </p>
          );
        }
        // 普通文本
        return line ? <p key={index} className="mb-2">{line}</p> : <br key={index} />;
      });
  };

  return (
    <div className={`flex items-start space-x-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-claude-orange rounded-full flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      
      <div className={`max-w-3xl ${isUser ? 'order-first' : ''}`}>
        <div className={`rounded-2xl px-4 py-3 ${
          isUser 
            ? 'bg-claude-orange text-white ml-12' 
            : 'bg-white border border-claude-border'
        }`}>
          <div className="message-content text-sm leading-relaxed">
            {typeof message.content === 'string' 
              ? formatContent(message.content)
              : message.content
            }
          </div>
        </div>
        
        <div className={`text-xs text-gray-400 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
          {message.timestamp.toLocaleTimeString('zh-CN', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};