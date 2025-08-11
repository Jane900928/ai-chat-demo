import React from 'react';
import { Bot } from 'lucide-react';

export const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-8 h-8 bg-claude-orange rounded-full flex items-center justify-center">
        <Bot className="w-5 h-5 text-white" />
      </div>
      
      <div className="bg-white border border-claude-border rounded-2xl px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <span className="text-sm text-gray-500">AI正在思考...</span>
        </div>
      </div>
    </div>
  );
};