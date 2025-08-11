import React from 'react';
import { MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-claude-border">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-claude-orange rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              AI Chat Demo
            </h1>
            <p className="text-sm text-gray-500">
              基于 DeepSeek API 的智能对话助手
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};