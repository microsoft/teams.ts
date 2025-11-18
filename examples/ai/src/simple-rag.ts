import Fuse from 'fuse.js';

import { ChatPrompt, IChatModel } from '@microsoft/teams.ai';
import { ActivityLike, IMessageActivity, MessageActivity } from '@microsoft/teams.api';

import { ILogger } from '../../../packages/common/dist/logging/logger';

interface IDocumentationItem {
  id: string;
  title: string;
  content: string;
}

// Our mock documentation corpus
const documentationCorpus = [
  {
    id: 'teams-sdk-overview',
    title: 'Teams SDK Overview',
    content:
      'Teams SDK is a framework for building AI-powered applications for Microsoft Teams. It provides tools for creating chatbots, message extensions, and other conversational experiences.',
  },
  {
    id: 'chat-prompt',
    title: 'ChatPrompt Class',
    content:
      'ChatPrompt is the core class for creating conversational AI experiences. It manages the conversation flow and integrates with language models to generate responses.',
  },
  {
    id: 'message-activity',
    title: 'MessageActivity',
    content:
      'MessageActivity represents a message in Teams. It can contain text, attachments, and other rich content. Use it to send and receive messages in your AI application.',
  },
  {
    id: 'function-calling',
    title: 'Function Calling',
    content:
      'Function calling allows your AI to call predefined functions during a conversation. This enables integration with external systems and data sources.',
  },
];

// Initialize Fuse with our corpus
const fuse = new Fuse(documentationCorpus, {
  includeScore: true,
  threshold: 0.6,
  keys: ['title', 'content'],
});

// Create a documentation assistant that uses RAG
export const handleDocumentationSearch = async (
  model: IChatModel,
  activity: IMessageActivity,
  send: (activity: ActivityLike) => Promise<any>,
  log: ILogger
) => {
  const citedDocs: IDocumentationItem[] = [];
  const documentation = new ChatPrompt({
    instructions: [
      'You are an expert at helping developers understand documentation.',
      'You have access to internal package documentation and can help answer questions.',
      'When answering questions, use the context from the documentation but present it in a helpful, conversational way.',
      'If the search results are not relevant to the question, be honest about not having the specific information.',
    ].join('\n'),
    model,
  }).function(
    'search',
    'search the documentation for relevant information',
    {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'the search query',
        },
      },
      required: ['query'],
    },
    async ({ query }: { query: string }) => {
      // Use Fuse to search docs and return top matches
      const matches = fuse.search(query);
      if (matches.length > 0) {
        citedDocs.push(...matches.map((match) => match.item));
      }
      // Return top 3 most relevant matches
      return matches.slice(0, 3).map((match) => ({
        title: match.item.title,
        content: match.item.content,
        relevance: (1 - (match.score ?? 0)) * 100, // Convert score to percentage
      }));
    }
  );

  const result = await documentation.send(activity.text);

  if (result.content) {
    // :snippet-start: citation-example
    const messageActivity = new MessageActivity(result.content).addAiGenerated();
    for (let i = 0; i < citedDocs.length; i++) {
      const doc = citedDocs[i];
      // The corresponding citation needs to be added in the message content
      messageActivity.text += `[${i + 1}]`;
      messageActivity.addCitation(i + 1, {
        name: doc.title,
        abstract: doc.content,
      });
    }
    // :snippet-end:
    log.info(messageActivity);
    await send(messageActivity);
  }
};
