import { ContentPart, Message } from '../message';
import { IChatModel } from '../models';
import { Schema } from '../schema';

import { ChatPrompt, ChatPromptPlugin } from './chat';

// Mock implementations
const mockChatModel: IChatModel<any> = {
  send: jest.fn().mockResolvedValue({ content: 'mock response', role: 'model' }),
};

type TestPluginArgs = { value: string };

const mockPlugin: ChatPromptPlugin<'test', TestPluginArgs> = {
  name: 'test',
  onUsePlugin: jest.fn(),
  onBuildFunctions: jest.fn().mockImplementation((functions) => [
    ...functions,
    {
      name: 'testFunction',
      description: 'A test function',
      parameters: {},
      handler: jest.fn(),
    },
  ]),
};

type MockPlugins = readonly [typeof mockPlugin];

describe('ChatPrompt', () => {
  let chatPrompt: ChatPrompt<any, MockPlugins>;
  const mockPlugins: MockPlugins = [mockPlugin] as const;

  beforeEach(() => {
    chatPrompt = new ChatPrompt(
      {
        name: 'test-prompt',
        description: 'A test prompt',
        model: mockChatModel,
        instructions: 'Test instructions',
      },
      mockPlugins
    );

    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should initialize with default values', () => {
      const prompt = new ChatPrompt({ model: mockChatModel });
      expect(prompt.name).toBe('chat');
      expect(prompt.description).toBe('an agent you can chat with');
      expect(prompt.messages).toBeDefined();
    });

    it('should initialize with custom values', () => {
      expect(chatPrompt.name).toBe('test-prompt');
      expect(chatPrompt.description).toBe('A test prompt');
    });
  });

  describe('function registration', () => {
    it('should register a function', () => {
      const handler = jest.fn();
      chatPrompt.function('testFn', 'Test function', handler);

      expect(chatPrompt.functions).toHaveLength(1);
      expect(chatPrompt.functions[0]).toEqual({
        name: 'testFn',
        description: 'Test function',
        parameters: {},
        handler,
      });
    });

    it('should register a function with parameters', () => {
      const handler = jest.fn();
      const parameters: Schema = {
        type: 'object',
        properties: {
          test: { type: 'string' },
        },
      };

      chatPrompt.function('testFn', 'Test function', parameters, handler);

      expect(chatPrompt.functions[0].parameters).toEqual(parameters);
    });
  });

  describe('plugin system', () => {
    it('should use plugin', () => {
      const mockUsePlugin = mockPlugin.onUsePlugin as jest.Mock;
      chatPrompt.usePlugin('test', { value: 'test' });
      expect(mockUsePlugin).toHaveBeenCalledWith({ value: 'test' });
    });

    it('should call onBeforeSend hook when sending message', async () => {
      const mockBeforeSend = jest.fn().mockImplementation((params) => params);
      const pluginWithBeforeSend: ChatPromptPlugin<'test', TestPluginArgs> = {
        ...mockPlugin,
        onBeforeSend: mockBeforeSend,
      };
      const prompt = new ChatPrompt(
        {
          name: 'test-prompt',
          model: mockChatModel,
        },
        [pluginWithBeforeSend] as const
      );

      await prompt.send('Hello');

      expect(mockBeforeSend).toHaveBeenCalledWith('Hello');
    });

    it('should allow onBeforeSend to modify the input', async () => {
      const mockBeforeSend = jest.fn().mockImplementation(() => 'Modified Hello');
      const pluginWithBeforeSend: ChatPromptPlugin<'test', TestPluginArgs> = {
        ...mockPlugin,
        onBeforeSend: mockBeforeSend,
      };
      const prompt = new ChatPrompt(
        {
          name: 'test-prompt',
          model: mockChatModel,
        },
        [pluginWithBeforeSend] as const
      );

      await prompt.send('Hello');

      expect(mockChatModel.send).toHaveBeenCalledWith(
        { role: 'user', content: 'Modified Hello' },
        expect.any(Object)
      );
    });

    it('should call onAfterSend hook after receiving response', async () => {
      const mockResponse = { content: 'mock response', role: 'model' };
      const mockAfterSend = jest.fn().mockImplementation((response) => response);
      const pluginWithAfterSend: ChatPromptPlugin<'test', TestPluginArgs> = {
        ...mockPlugin,
        onAfterSend: mockAfterSend,
      };
      const prompt = new ChatPrompt(
        {
          name: 'test-prompt',
          model: mockChatModel,
        },
        [pluginWithAfterSend] as const
      );

      await prompt.send('Hello');

      expect(mockAfterSend).toHaveBeenCalledWith(mockResponse);
    });

    it('should allow onAfterSend to modify the response', async () => {
      const modifiedResponse = { content: 'modified response', role: 'model' };
      const mockAfterSend = jest.fn().mockImplementation(() => modifiedResponse);
      const pluginWithAfterSend: ChatPromptPlugin<'test', TestPluginArgs> = {
        ...mockPlugin,
        onAfterSend: mockAfterSend,
      };
      const prompt = new ChatPrompt(
        {
          name: 'test-prompt',
          model: mockChatModel,
        },
        [pluginWithAfterSend] as const
      );

      const response = await prompt.send('Hello');

      expect(response).toEqual(modifiedResponse);
    });

    it('should chain multiple plugins hooks in order', async () => {
      const mockBeforeSend1 = jest.fn().mockImplementation((input) => `${input}1`);
      const mockBeforeSend2 = jest.fn().mockImplementation((input) => `${input}2`);
      const mockAfterSend1 = jest
        .fn()
        .mockImplementation((response) => ({ ...response, content: `${response.content}1` }));
      const mockAfterSend2 = jest
        .fn()
        .mockImplementation((response) => ({ ...response, content: `${response.content}2` }));

      const plugin1: ChatPromptPlugin<'test1', TestPluginArgs> = {
        name: 'test1',
        onBeforeSend: mockBeforeSend1,
        onAfterSend: mockAfterSend1,
      };
      const plugin2: ChatPromptPlugin<'test2', TestPluginArgs> = {
        name: 'test2',
        onBeforeSend: mockBeforeSend2,
        onAfterSend: mockAfterSend2,
      };

      const prompt = new ChatPrompt(
        {
          name: 'test-prompt',
          model: mockChatModel,
        },
        [plugin1, plugin2] as const
      );

      const response = await prompt.send('Hello');

      // Verify hooks were called in order
      expect(mockBeforeSend1).toHaveBeenCalledWith('Hello');
      expect(mockBeforeSend2).toHaveBeenCalledWith('Hello1');
      expect(mockChatModel.send).toHaveBeenCalledWith(
        { role: 'user', content: 'Hello12' },
        expect.any(Object)
      );
      expect(mockAfterSend1).toHaveBeenCalledWith({ content: 'mock response', role: 'model' });
      expect(mockAfterSend2).toHaveBeenCalledWith({ content: 'mock response1', role: 'model' });
      expect(response.content).toBe('mock response12');
    });
  });

  describe('send', () => {
    it('should send message and receive response', async () => {
      const response = await chatPrompt.send('Hello');

      expect(mockChatModel.send).toHaveBeenCalledWith(
        { role: 'user', content: 'Hello' },
        expect.objectContaining({
          system: { role: 'system', content: 'Test instructions' },
        })
      );

      expect(response).toEqual({
        content: 'mock response',
        role: 'model',
      });
    });

    it('should handle streaming with onChunk callback', async () => {
      const onChunk = jest.fn();
      (mockChatModel.send as jest.Mock).mockImplementationOnce(async (_, options) => {
        await options.onChunk('partial ');
        await options.onChunk('response');
        return { content: 'partial response', role: 'model' };
      });

      const response = await chatPrompt.send('Hello', { onChunk });

      expect(onChunk).toHaveBeenCalledTimes(2);
      expect(onChunk).toHaveBeenNthCalledWith(1, 'partial ');
      expect(onChunk).toHaveBeenNthCalledWith(2, 'response');
      expect(response.content).toBe('partial response');
    });

    it('should call plugin onBuildFunctions when sending message', async () => {
      const customFunction = {
        name: 'customFn',
        description: 'Custom function',
        parameters: {},
        handler: jest.fn(),
      };
      chatPrompt.function('customFn', 'Custom function', customFunction.handler);

      await chatPrompt.send('Hello');

      expect(mockPlugin.onBuildFunctions).toHaveBeenCalledWith([customFunction]);
    });

    it('should send message with functions from both prompt and plugins', async () => {
      const customFunction = {
        name: 'customFn',
        description: 'Custom function',
        parameters: {},
        handler: jest.fn(),
      };
      chatPrompt.function('customFn', 'Custom function', customFunction.handler);

      await chatPrompt.send('Hello');

      expect(mockChatModel.send).toHaveBeenCalledWith(
        { role: 'user', content: 'Hello' },
        expect.objectContaining({
          functions: {
            customFn: customFunction,
            testFunction: expect.objectContaining({
              name: 'testFunction',
              description: 'A test function',
            }),
          },
        })
      );
    });

    it('should send message with custom request options', async () => {
      const customOptions = {
        temperature: 0.7,
        maxTokens: 100,
      };

      await chatPrompt.send('Hello', { request: customOptions });

      expect(mockChatModel.send).toHaveBeenCalledWith(
        { role: 'user', content: 'Hello' },
        expect.objectContaining({
          request: customOptions,
        })
      );
    });

    it('should handle array of content parts', async () => {
      const contentParts: ContentPart[] = [
        { type: 'text', text: 'Hello' },
        { type: 'image_url', image_url: 'https://example.com/image.png' },
      ];

      await chatPrompt.send(contentParts);

      expect(mockChatModel.send).toHaveBeenCalledWith(
        { role: 'user', content: contentParts },
        expect.any(Object)
      );
    });

    it('should send message with custom messages history', async () => {
      const customMessages: Message[] = [
        { role: 'user', content: 'Previous message' },
        { role: 'model', content: 'Previous response' },
      ];

      await chatPrompt.send('Hello', { messages: customMessages });

      expect(mockChatModel.send).toHaveBeenCalledWith(
        { role: 'user', content: 'Hello' },
        expect.objectContaining({
          messages: {
            messages: customMessages,
            options: {
              messages: customMessages,
            },
          },
        })
      );
    });

    it('should handle complex function parameters', async () => {
      const complexParams: Schema = {
        type: 'object',
        properties: {
          name: { type: 'string' },
          age: { type: 'number' },
          preferences: {
            type: 'object',
            properties: {
              color: { type: 'string' },
              size: { type: 'string' },
            },
          },
        },
        required: ['name'],
      };

      const handler = jest.fn();
      chatPrompt.function('complexFn', 'Complex function', complexParams, handler);

      await chatPrompt.send('Hello');

      expect(mockChatModel.send).toHaveBeenCalledWith(
        { role: 'user', content: 'Hello' },
        expect.objectContaining({
          functions: expect.objectContaining({
            complexFn: expect.objectContaining({
              parameters: complexParams,
            }),
          }),
        })
      );
    });
  });

  describe('function calling', () => {
    it('should call registered function', async () => {
      const handler = jest.fn().mockResolvedValue('function result');
      chatPrompt.function('testFn', 'Test function', handler);

      const result = await chatPrompt.call('testFn', { arg: 'test' });

      expect(handler).toHaveBeenCalledWith({ arg: 'test' });
      expect(result).toBe('function result');
    });

    it('should throw error for non-existent function', async () => {
      await expect(chatPrompt.call('nonExistent')).rejects.toThrow(
        'function "nonExistent" not found'
      );
    });
  });

  describe('prompt chaining', () => {
    it('should chain prompts using use()', () => {
      const subPrompt = new ChatPrompt({
        name: 'sub-prompt',
        description: 'A sub prompt',
        model: mockChatModel,
      });

      chatPrompt.use(subPrompt);

      expect(chatPrompt.functions).toContainEqual(
        expect.objectContaining({
          name: 'sub-prompt',
          description: 'A sub prompt',
        })
      );
    });

    it('should chain prompts with custom name', () => {
      const subPrompt = new ChatPrompt({
        name: 'sub-prompt',
        description: 'A sub prompt',
        model: mockChatModel,
      });

      chatPrompt.use('custom-name', subPrompt);

      expect(chatPrompt.functions).toContainEqual(
        expect.objectContaining({
          name: 'custom-name',
          description: 'A sub prompt',
        })
      );
    });
  });
});
