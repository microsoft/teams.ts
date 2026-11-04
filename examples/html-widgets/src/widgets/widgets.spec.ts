import vm from 'vm';

import { CALLTOOL_WIDGET_HTML } from './calltool';
import { FULLSCREEN_WIDGET_HTML } from './fullscreen';
import { HOST_CONTEXT_WIDGET_HTML } from './host-context';
import { MESSAGEBACK_WIDGET_HTML } from './messageback';
import { MULTI_WIDGET_HTML } from './multi-tool';
import { OPEN_LINK_WIDGET_HTML } from './open-link';
import { SIMPLE_WIDGET_HTML } from './simple';
import { UPDATE_CONTEXT_WIDGET_HTML } from './update-context';
import { buildWidgetHtml } from './widget-runtime';

const WIDGETS: Record<string, string> = {
  simple: SIMPLE_WIDGET_HTML,
  calltool: CALLTOOL_WIDGET_HTML,
  messageback: MESSAGEBACK_WIDGET_HTML,
  fullscreen: FULLSCREEN_WIDGET_HTML,
  multi: MULTI_WIDGET_HTML,
  openLink: OPEN_LINK_WIDGET_HTML,
  updateContext: UPDATE_CONTEXT_WIDGET_HTML,
  hostContext: HOST_CONTEXT_WIDGET_HTML,
};

function inlineScripts(html: string): string[] {
  return [...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
}

describe('sample widgets', () => {
  it('should cover all 8 widgets', () => {
    expect(Object.keys(WIDGETS)).toHaveLength(8);
  });

  describe.each(Object.entries(WIDGETS))('%s', (name, html) => {
    it('should have inline scripts that parse', () => {
      const scripts = inlineScripts(html);
      expect(scripts.length).toBeGreaterThanOrEqual(1);
      scripts.forEach((script, i) => {
        expect(() => new vm.Script(script, { filename: `${name}-${i}.js` })).not.toThrow();
      });
    });

    it('should own the handshake and report height from one root', () => {
      const [runtime] = inlineScripts(html);
      expect(runtime).toContain('method: \'ui/initialize\'');
      expect(runtime).toContain('2026-01-26');
      expect(runtime).toContain('ui/notifications/initialized');
      expect(runtime).toContain('ui/notifications/size-changed');
      expect(runtime).toContain('getBoundingClientRect().height');
      expect(runtime.match(/new ResizeObserver/g)).toHaveLength(1);
      expect(html).not.toMatch(/scrollHeight|100vh|height:\s*100%/);
      expect(html).toContain('<div id="root">');
      expect(html).toContain('display:flow-root');
    });
  });

  it('should fail the parse check for a broken script', () => {
    expect(() => new vm.Script('function (')).toThrow();
  });

  describe('runtime behavior', () => {
    function runRuntime() {
      const posted: any[] = [];
      const listeners: Array<(e: any) => void> = [];
      const observed: any[] = [];
      const win: any = {
        parent: { postMessage: (m: any) => posted.push(m) },
        addEventListener: (_: string, fn: any) => listeners.push(fn),
        removeEventListener: () => {},
      };
      const context = {
        window: win,
        document: { getElementById: () => ({ getBoundingClientRect: () => ({ height: 123.5 }) }) },
        ResizeObserver: class {
          constructor(public cb: () => void) {}
          observe() {
            observed.push(this);
          }
        },
        Math,
      };
      const [runtime] = inlineScripts(buildWidgetHtml({ appName: 'validation-demo', body: '<p>hi</p>' }));
      vm.runInNewContext(runtime, context);
      const initId = posted[0].id;
      return { posted, win, observed, reply: (data: any) => listeners.forEach((fn) => fn({ data })), initId };
    }

    it('should send ui/initialize first', () => {
      const { posted } = runRuntime();
      expect(posted[0].method).toBe('ui/initialize');
    });

    it('should report the unrounded height after a successful initialize', async () => {
      const { posted, win, observed, reply, initId } = runRuntime();
      reply({ jsonrpc: '2.0', id: initId, result: {} });
      await win.widgetReady;
      expect(posted[1].method).toBe('ui/notifications/initialized');
      expect(observed).toHaveLength(1);
      observed[0].cb();
      expect(posted[2]).toMatchObject({ method: 'ui/notifications/size-changed', params: { height: 123.5 } });
    });

    it('should reject widgetReady and not report size when initialize fails', async () => {
      const { posted, win, observed, reply, initId } = runRuntime();
      reply({ jsonrpc: '2.0', id: initId, error: { code: -1, message: 'nope' } });
      await expect(win.widgetReady).rejects.toThrow('nope');
      expect(observed).toHaveLength(0);
      expect(posted).toHaveLength(1);
    });
  });

  it('should build the validate demo with the shared runtime', () => {
    const html = buildWidgetHtml({ appName: 'validation-demo', body: '<p>x</p>' });
    expect(html).toContain('ui/notifications/size-changed');
    expect(html).toContain('<div id="root">');
  });
});
