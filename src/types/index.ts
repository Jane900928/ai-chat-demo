export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatResponse {
  message: string;
  id: string;
}

export interface SendMessageInput {
  message: string;
  conversationId?: string;
}