import React, { useState, useRef, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface MessageInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSend, disabled }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    
    // 自动调整高度
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end space-x-3">
      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          placeholder={disabled ? "AI正在思考中..." : "输入消息...按Enter发送，Shift+Enter换行"}
          disabled={disabled}
          rows={1}
          className="w-full px-4 py-3 border border-claude-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-claude-orange focus:border-transparent resize-none max-h-32 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            minHeight: '48px',
            maxHeight: '128px'
          }}
        />
      </div>
      
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        className="flex-shrink-0 w-12 h-12 bg-claude-orange text-white rounded-full flex items-center justify-center hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-claude-orange focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};