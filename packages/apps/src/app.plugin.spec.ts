

import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { App } from './app';
import { HttpPlugin } from './plugins';
import { IPlugin, IPluginStartEvent } from './types';
import { Event, Plugin } from './types/plugin/decorators';

interface TestEvents {
    test: {
        message: string;
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
class TestPlugin implements IPlugin<TestEvents> {
    __eventType!: TestEvents;

    @Event('custom')
    emit!: <Name extends keyof TestEvents>(name: Name, arg: TestEvents[Name]) => void;

    testEmit() {
        this.emit('test', { message: 'hello' });
    }

    onStart(_event: IPluginStartEvent): void | Promise<void> {
        // Do nothing
    }
}

describe('app.plugin', () => {
    it('plugins should be able to emit events that reach the app', async () => {
        // Create an App with our test plugin
        const testPlugin = new TestPlugin()
        const app = new App({
            logger: new ConsoleLogger('test', { level: 'debug' }),
            plugins: [testPlugin, new TestHttpPlugin()]
        });

        let receivedEvent;
        app.event('test', event => {
            receivedEvent = event;
        });

        await app.start();

        testPlugin.testEmit();
        expect(receivedEvent).toEqual({ message: 'hello' });
    });
});
