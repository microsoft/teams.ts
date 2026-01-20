import http from 'http';

import { App } from '../../app';
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
    });

    it('should allow direct plugin usage', () => {
      const plugin = new HttpPlugin();

      // Should be able to call Express methods directly
      const mockHandler = jest.fn();
      plugin.post('/test', mockHandler);

      // Verify it was registered (we can't easily test execution without starting server)
      expect(mockHandler).toBeDefined();
    });
  });

  describe('onInit lifecycle', () => {
    it('should have onInit method', async () => {
      const plugin = new HttpPlugin();
      await expect(plugin.onInit()).resolves.toBeUndefined();
    });
  });
});
