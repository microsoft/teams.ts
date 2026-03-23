import { ConsoleLogger } from '@microsoft/teams.common/logging';

import { ICoreActivity, IErrorEvent } from './events';
import { createTestApp } from './test-utils';
import { EmitPluginEvent, IPlugin, IPluginActivityEvent, IPluginStartEvent } from './types';
import { Event, Plugin } from './types/plugin/decorators';

interface ITestEvents {
  test: {
    message: string;
    bar: number;
  }
}

@Plugin({
  name: 'testPlugin',
  version: '0.0.1',
  description: 'test-plugin',
})
class TestPlugin implements IPlugin<ITestEvents> {

  @Event('custom')
  private emit!: EmitPluginEvent<ITestEvents>;

  __eventType!: ITestEvents;

  testEmit() {
    this.emit('test', { message: 'hello', bar: 1 });
  }

  onStart(_event: IPluginStartEvent): void | Promise<void> {
    // Do nothing
  }
}

describe('app.plugin', () => {
  it('plugins should be able to emit events that reach the app', async () => {
    // Create an App with our test plugin
    const testPlugin = new TestPlugin();
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'debug' }),
      plugins: [testPlugin]
    });

    let receivedEventMessage: string = '';
    app.event('test', event => {
      // Make sure message is typed correctly
      receivedEventMessage = event.message;
      // @ts-expect-error - event should be correctly typed to ITestEvents
      event.nonExistentProperty = 'bar';
    });

    await app.start();

    testPlugin.testEmit();
    expect(receivedEventMessage).toEqual('hello');
  });

  it('should throw error when registering duplicate plugin names', () => {
    const plugin1 = new TestPlugin();
    const plugin2 = new TestPlugin();
    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'debug' }),
      plugins: [plugin1]
    });

    expect(() => {
      app.plugin(plugin2);
    }).toThrow('duplicate plugin "testPlugin" found');
  });

  it('should prevent plugins from using reserved event names', async () => {
    @Plugin({
      name: 'reservedPlugin',
      version: '0.0.1',
      description: 'test-plugin',
    })
    class ReservedEventPlugin implements IPlugin<{ 'activity': { foo: string } }> {

      @Event('custom')
      emit!: <Name extends 'activity'>(name: Name, arg: { foo: string }) => void;

      __eventType!: { 'activity': { foo: string } };

      onStart(_event: IPluginStartEvent): void | Promise<void> {
        // No-op for tests
      }

      testEmit() {
        this.emit('activity', { foo: 'bar' });
      }
    }

    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'debug' }),
      plugins: [new ReservedEventPlugin()]
    });

    const eventFn = jest.fn();
    app.event('activity', eventFn);

    await app.start();
    const plugin = app.getPlugin('reservedPlugin') as ReservedEventPlugin;

    plugin.testEmit();
    expect(eventFn).not.toHaveBeenCalled();

    await app.stop();
  });

  it('should call plugin lifecycle methods in correct order', async () => {
    const lifecycleOrder: string[] = [];

    @Plugin({
      name: 'lifecyclePlugin',
      version: '0.0.1',
      description: 'test-plugin',
    })
    class LifecyclePlugin implements IPlugin {

      onInit(): void {
        lifecycleOrder.push('onInit');
      }

      onStart(_event: IPluginStartEvent): void {
        lifecycleOrder.push('onStart');
      }

      onStop(): void {
        lifecycleOrder.push('onStop');
      }
    }

    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'debug' }),
      plugins: [new LifecyclePlugin()]
    });

    await app.start();
    await app.stop();

    expect(lifecycleOrder).toEqual(['onInit', 'onStart', 'onStop']);
  });

  it('should propagate plugin errors to app error handler', async () => {
    @Plugin({
      name: 'errorPlugin',
      version: '0.0.1',
      description: 'test-plugin',
    })
    class ErrorPlugin implements IPlugin {
      onStart(_event: IPluginStartEvent): void {
        throw new Error('test error');
      }
    }

    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'debug' }),
      plugins: [new ErrorPlugin()]
    });

    let errorReceived = null as Error | null;
    app.event('error', (event: IErrorEvent) => {
      errorReceived = event.error;
    });

    await app.start();

    expect(errorReceived).toBeDefined();
    expect(errorReceived?.message).toBe('test error');

    await app.stop();
  });

  it('should be able to include additional context', async () => {
    interface IMyContext {
      foo: number;
      bar: string;
    }

    @Plugin({
      name: 'myPlugin',
      version: '0.0.1',
      description: 'test-plugin',
    })
    class MyPlugin implements IPlugin<IMyContext> {
      onActivity(_event: IPluginActivityEvent): IMyContext {
        return {
          foo: 4,
          bar: 'str',
        };
      }

      onStart(_event: IPluginStartEvent): void | Promise<void> {
        // No-op for tests
      }
    }

    const app = createTestApp({
      logger: new ConsoleLogger('test', { level: 'debug' }),
      plugins: [new MyPlugin()]
    });


    let receivedFoo: number = -1;
    let receivedBar: string = '';
    app.on('message', (context) => {
      receivedFoo = context.foo;
      receivedBar = context.bar;
    });

    await app.start();

    // Trigger a message activity by directly calling onActivity (internal API for testing)
    await app.onActivity({
      body: {
        type: 'message',
        text: 'test message',
        from: { id: 'user-id', name: 'Test User' },
        recipient: { id: 'bot-id', name: 'Bot' },
        conversation: { id: 'conv-id' },
        channelId: 'test',
        serviceUrl: 'https://test.botframework.com'
      } as ICoreActivity,
      token: {
        appId: 'test-app-id',
        serviceUrl: 'https://test.botframework.com',
        from: 'bot' as const,
        fromId: 'test-from-id',
        toString: () => 'test-token',
        isExpired: () => false,
      }
    });

    expect(receivedFoo).toEqual(4);
    expect(receivedBar).toEqual('str');

    await app.stop();
  });
});
