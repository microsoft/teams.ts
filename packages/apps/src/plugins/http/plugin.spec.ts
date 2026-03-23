import http from 'http';

import { App } from '../../app';
import { ExpressAdapter } from '../../http';
import { HttpServer } from '../../http/http-server';

import { HttpPlugin } from './plugin';

describe('HttpPlugin', () => {
  describe('constructor', () => {
    it('should create with default options', () => {
      const plugin = new HttpPlugin();
      expect(plugin).toBeDefined();
      expect(plugin.get).toBeDefined();
      expect(plugin.post).toBeDefined();
      expect(plugin.use).toBeDefined();
    });

    it('should create with custom http.Server', () => {
      const server = http.createServer();
      const plugin = new HttpPlugin(server);
      expect(plugin).toBeDefined();
    });

    it('should create with skipAuth option', () => {
      const plugin = new HttpPlugin(undefined, { skipAuth: true });
      expect(plugin).toBeDefined();
    });
  });

  describe('asServer', () => {
    it('should return HttpServer instance', () => {
      const plugin = new HttpPlugin();
      const server = plugin.asServer();
      expect(server).toBeInstanceOf(HttpServer);
    });
  });

  describe('Express method delegation', () => {
    it('should expose Express methods', () => {
      const plugin = new HttpPlugin();

      // These should be function references
      expect(typeof plugin.get).toBe('function');
      expect(typeof plugin.post).toBe('function');
      expect(typeof plugin.patch).toBe('function');
      expect(typeof plugin.put).toBe('function');
      expect(typeof plugin.delete).toBe('function');
      expect(typeof plugin.route).toBe('function');
      expect(typeof plugin.use).toBe('function');
    });
  });

  describe('static', () => {
    it('should call expressAdapter.serveStatic', () => {
      const plugin = new HttpPlugin();
      const serveStaticSpy = jest.spyOn((plugin as any).expressAdapter, 'serveStatic');

      plugin.static('/test', './dist');

      expect(serveStaticSpy).toHaveBeenCalledWith('/test', './dist');
    });
  });

  describe('backwards compatibility with App', () => {
    it('should work when passed in plugins array', () => {
      const plugin = new HttpPlugin();
      const app = new App({
        plugins: [plugin],
      });

      expect(app.http).toBe(plugin);
      expect(app.server).toBeDefined();
      expect(app.server).toBeInstanceOf(HttpServer);
    });

    it('should pass skipAuth option through to server', () => {
      const plugin = new HttpPlugin(undefined, { skipAuth: true });
      const app = new App({
        plugins: [plugin],
      });

      // Server should be configured with skipAuth
      expect(app.server).toBeDefined();
      expect((app.server as any).skipAuth).toBe(true);
    });

    it('should pass custom http.Server through to adapter', () => {
      const customServer = http.createServer();
      const plugin = new HttpPlugin(customServer);
      const app = new App({
        plugins: [plugin],
      });

      // Server adapter should be using the custom server
      const adapter = app.server.adapter as ExpressAdapter;
      expect((adapter as any).server).toBe(customServer);
    });

    it('should work equivalently to new httpServerAdapter approach', () => {
      // Old way with HttpPlugin
      const oldPlugin = new HttpPlugin();
      const oldApp = new App({
        plugins: [oldPlugin],
      });

      // New way with httpServerAdapter
      const newApp = new App({
        httpServerAdapter: new ExpressAdapter(),
      });

      // Both should have server
      expect(oldApp.server).toBeInstanceOf(HttpServer);
      expect(newApp.server).toBeInstanceOf(HttpServer);

      // Both should have adapter
      expect(oldApp.server.adapter).toBeInstanceOf(ExpressAdapter);
      expect(newApp.server.adapter).toBeInstanceOf(ExpressAdapter);
    });

    it('should expose deprecated app.http getter', () => {
      const plugin = new HttpPlugin();
      const app = new App({
        plugins: [plugin],
      });

      // Deprecated getter should work
      expect(app.http).toBe(plugin);

      // But should be same underlying server
      expect(app.http!.asServer()).toBe(app.server);
    });

    it('should allow direct plugin usage for adding routes', () => {
      const plugin = new HttpPlugin();
      const mockHandler = jest.fn();

      // Should be able to call Express methods directly
      plugin.post('/custom-route', mockHandler);

      // Route should be registered on the underlying adapter
      const adapter = plugin.asServer().adapter as ExpressAdapter;
      expect(adapter).toBeDefined();
    });

    it('should not conflict with other plugins', () => {
      const plugin = new HttpPlugin();

      const app = new App({
        plugins: [plugin],
      });

      // HttpPlugin should be registered
      expect(app.http).toBe(plugin);
      expect(app.server).toBeDefined();

      // App should still be able to register routes
      const mockHandler = jest.fn(async () => ({ status: 200 }));
      app.server.registerRoute('POST', '/test', mockHandler);

      expect(app.server).toBeDefined();
    });
  });

  describe('onInit lifecycle', () => {
    it('should have onInit method', async () => {
      const plugin = new HttpPlugin();
      await expect(plugin.onInit()).resolves.toBeUndefined();
    });
  });
});
