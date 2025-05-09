import { ConsoleLogger } from '@microsoft/teams.common/logging';

import { App } from './app';
import { IErrorEvent } from './events';
import { HttpPlugin } from './plugins';
import { EmitPluginEvent, IPlugin, IPluginStartEvent } from './types';
import { Event, Plugin } from './types/plugin/decorators';

interface ITestEvents {
    test: {
        message: string;
        bar: number;
    }
}

class TestHttpPlugin extends HttpPlugin {
    async onStart(_event: IPluginStartEvent) {
        // No-op for tests
    }

    async onStop() {
        // No-op for tests
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
        const app = new App({
            logger: new ConsoleLogger('test', { level: 'debug' }),
            plugins: [testPlugin, new TestHttpPlugin()]
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
        const app = new App({
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

        const app = new App({
            logger: new ConsoleLogger('test', { level: 'debug' }),
            plugins: [new ReservedEventPlugin()]
        });

        const eventFn = jest.fn();
        app.event('activity', eventFn);

        await app.start();
        const plugin = app.getPlugin('reservedPlugin') as ReservedEventPlugin;

        plugin.testEmit();
        expect(eventFn).not.toHaveBeenCalled();
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

        const app = new App({
            logger: new ConsoleLogger('test', { level: 'debug' }),
            plugins: [new LifecyclePlugin(), new TestHttpPlugin()]
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

        const app = new App({
            logger: new ConsoleLogger('test', { level: 'debug' }),
            plugins: [new ErrorPlugin(), new TestHttpPlugin()]
        });

        let errorReceived = null as Error | null;
        app.event('error', (event: IErrorEvent) => {
            errorReceived = event.error;
        });

        await app.start();

        expect(errorReceived).toBeDefined();
        expect(errorReceived?.message).toBe('test error');
    });
});
