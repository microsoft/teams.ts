import { LocalMemory } from './local-memory';
import { Message, ModelMessage } from './message';
import { IChatModel } from './models';

// Mock chat model for collapse tests
const mockCollapseModel: IChatModel<any> = {
  send: jest.fn().mockResolvedValue({
    role: 'model',
    content: 'Summarized conversation',
  }),
};

describe('LocalMemory', () => {
  let memory: LocalMemory;

  beforeEach(() => {
    memory = new LocalMemory();
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should initialize with empty messages by default', () => {
      expect(memory.length()).toBe(0);
      expect(memory.values()).toEqual([]);
    });

    it('should initialize with provided messages', () => {
      const messages: Message[] = [
        { role: 'user', content: 'Hello' },
        { role: 'model', content: 'Hi there' },
      ];
      const memoryWithMessages = new LocalMemory({ messages });
      expect(memoryWithMessages.length()).toBe(2);
    });
  });

  describe('get', () => {
    it('should return message at valid index', async () => {
      await memory.push({ role: 'user', content: 'Hello' });
      expect(memory.get(0)).toEqual({ role: 'user', content: 'Hello' });
    });

    it('should return undefined for negative index', () => {
      expect(memory.get(-1)).toBeUndefined();
    });

    it('should return undefined for out of bounds index', () => {
      expect(memory.get(100)).toBeUndefined();
    });

    it('should return undefined for empty memory', () => {
      expect(memory.get(0)).toBeUndefined();
    });
  });

  describe('push', () => {
    it('should add message to memory', async () => {
      await memory.push({ role: 'user', content: 'Hello' });
      expect(memory.length()).toBe(1);
    });

    it('should handle empty memory without crashing', async () => {
      // This tests the fix for null role crash
      const emptyMemory = new LocalMemory({ max: 1 });
      
      // Should not throw when pushing to empty memory
      await expect(emptyMemory.push({ role: 'user', content: 'First' })).resolves.not.toThrow();
      expect(emptyMemory.length()).toBe(1);
    });

    it('should trim messages when exceeding max', async () => {
      const smallMemory = new LocalMemory({ max: 2 });
      
      await smallMemory.push({ role: 'user', content: 'Message 1' });
      await smallMemory.push({ role: 'model', content: 'Response 1' });
      await smallMemory.push({ role: 'user', content: 'Message 2' });
      
      // Should have trimmed to max
      expect(smallMemory.length()).toBeLessThanOrEqual(2);
    });

    it('should not crash when trimming removes all messages', async () => {
      // Edge case: very small max with function messages
      const tinyMemory = new LocalMemory({ max: 1 });
      
      const modelWithFunctionCalls: ModelMessage = {
        role: 'model',
        content: '',
        function_calls: [{ id: '1', name: 'test', arguments: {} }],
      };
      
      await tinyMemory.push(modelWithFunctionCalls);
      // Push another message - should trigger trim logic
      await expect(tinyMemory.push({ role: 'function', content: 'result', function_id: '1' })).resolves.not.toThrow();
    });
  });

  describe('pop', () => {
    it('should remove and return first message', async () => {
      await memory.push({ role: 'user', content: 'First' });
      await memory.push({ role: 'user', content: 'Second' });
      
      const popped = memory.pop();
      expect(popped).toEqual({ role: 'user', content: 'First' });
      expect(memory.length()).toBe(1);
    });

    it('should return undefined for empty memory', () => {
      expect(memory.pop()).toBeUndefined();
    });
  });

  describe('values', () => {
    it('should return a copy of messages array', async () => {
      await memory.push({ role: 'user', content: 'Hello' });
      const values = memory.values();
      
      // Modifying returned array should not affect memory
      values.push({ role: 'user', content: 'Modified' });
      expect(memory.length()).toBe(1);
    });
  });

  describe('where', () => {
    it('should filter messages by predicate', async () => {
      await memory.push({ role: 'user', content: 'Hello' });
      await memory.push({ role: 'model', content: 'Hi' });
      await memory.push({ role: 'user', content: 'How are you?' });
      
      const userMessages = memory.where((msg) => msg.role === 'user');
      expect(userMessages).toHaveLength(2);
    });
  });

  describe('collapse', () => {
    it('should not collapse without collapse option', async () => {
      const memoryNoCollapse = new LocalMemory({ max: 5 });
      
      for (let i = 0; i < 5; i++) {
        await memoryNoCollapse.push({ role: 'user', content: `Message ${i}` });
      }
      
      // Collapse is not configured, so all messages should remain
      expect(memoryNoCollapse.length()).toBe(5);
    });

    it('should collapse with model when configured', async () => {
      const collapseMemory = new LocalMemory({
        max: 3,
        collapse: {
          strategy: 'full',
          model: mockCollapseModel,
        },
      });

      // Add messages up to max
      await collapseMemory.push({ role: 'user', content: 'Message 1' });
      await collapseMemory.push({ role: 'model', content: 'Response 1' });
      await collapseMemory.push({ role: 'user', content: 'Message 2' });

      // This should trigger collapse
      expect(mockCollapseModel.send).toHaveBeenCalled();
    });

    it('should handle collapse with empty messages safely', async () => {
      const collapseMemory = new LocalMemory({
        max: 2,
        collapse: {
          strategy: 'half',
          model: mockCollapseModel,
        },
      });

      // Should not crash when collapse is called with edge cases
      await expect(collapseMemory.push({ role: 'user', content: 'Hello' })).resolves.not.toThrow();
    });

    it('should skip function messages when finding collapse end boundary', async () => {
      const collapseMemory = new LocalMemory({
        max: 4,
        collapse: {
          strategy: 'half',
          model: mockCollapseModel,
        },
      });

      // Add messages including function calls
      await collapseMemory.push({ role: 'user', content: 'Hello' });
      await collapseMemory.push({
        role: 'model',
        content: '',
        function_calls: [{ id: '1', name: 'test', arguments: {} }],
      } as ModelMessage);
      await collapseMemory.push({ role: 'function', content: 'result', function_id: '1' });
      await collapseMemory.push({ role: 'model', content: 'Final response' });

      // This tests that the collapse boundary detection works correctly
      // and doesn't crash when iterating past function messages
      expect(collapseMemory.length()).toBeGreaterThan(0);
    });

    it('should not crash when collapse end boundary exceeds array length', async () => {
      // This is the specific bug fix test
      const collapseMemory = new LocalMemory({
        max: 2,
        collapse: {
          strategy: 'half',
          model: mockCollapseModel,
        },
      });

      // Create a scenario where the while loop in collapse could go out of bounds
      const functionCallMessage: ModelMessage = {
        role: 'model',
        content: '',
        function_calls: [{ id: '1', name: 'fn1', arguments: {} }],
      };

      await collapseMemory.push(functionCallMessage);
      await collapseMemory.push({ role: 'function', content: 'result', function_id: '1' });

      // The collapse should not crash even when trying to find a non-function message
      // at the end of the array
      await expect(
        collapseMemory.push({ role: 'user', content: 'trigger collapse' })
      ).resolves.not.toThrow();
    });
  });

  describe('edge cases for null safety', () => {
    it('should handle accessing messages[0] when array becomes empty during trim', async () => {
      // This specifically tests the fix: len > 0 && check
      const edgeMemory = new LocalMemory({ max: 1 });
      
      // Add a function message that will need to be trimmed
      await edgeMemory.push({ role: 'function', content: 'orphan result', function_id: '0' });
      
      // Push another - the while loop should safely handle the empty check
      await expect(
        edgeMemory.push({ role: 'user', content: 'new message' })
      ).resolves.not.toThrow();
    });

    it('should use optional chaining for messages[0].role access', async () => {
      // Test that we don't get "Cannot read property 'role' of undefined"
      const testMemory = new LocalMemory({ max: 1 });
      
      // Simulate edge case by adding and immediately having to trim
      await testMemory.push({ role: 'user', content: 'First' });
      await testMemory.push({ role: 'user', content: 'Second' });
      
      // Should not throw
      expect(testMemory.length()).toBeLessThanOrEqual(1);
    });
  });
});
