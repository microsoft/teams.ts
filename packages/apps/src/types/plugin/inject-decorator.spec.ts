import 'reflect-metadata';

import { ILogger, IStorage } from '@microsoft/spark.common';

import { HttpPlugin } from '../../plugins';
import { Plugin } from './plugin-decorator';
import {
  Inject,
  PLUGIN_FIELDS_METADATA_KEY,
  InjectMetadata,
  Logger,
  Storage,
} from './inject-decorator';

describe('@Inject', () => {
  it('should have field', () => {
    @Plugin({
      name: 'test',
      version: '0.0.0',
    })
    class Test {
      @Inject()
      http!: HttpPlugin;
    }

    const fields: Array<InjectMetadata> = Reflect.getMetadata(PLUGIN_FIELDS_METADATA_KEY, Test);

    expect(fields).toBeDefined();
    expect(fields).toHaveLength(1);
    expect(fields[0]).toEqual({
      key: 'http',
      type: HttpPlugin.name,
      optional: false,
    });
  });

  it('should have fields nested', () => {
    @Plugin({
      name: 'b',
      version: '0.0.0',
    })
    class B {
      @Inject()
      http!: HttpPlugin;
    }

    @Plugin({
      name: 'a',
      version: '0.0.0',
    })
    class A {
      @Inject()
      b!: B;
    }

    let fields: Array<InjectMetadata> = Reflect.getMetadata(PLUGIN_FIELDS_METADATA_KEY, A);

    expect(fields).toBeDefined();
    expect(fields).toHaveLength(1);
    expect(fields[0]).toEqual({
      key: 'b',
      type: B.name,
      optional: false,
    });

    fields = Reflect.getMetadata(PLUGIN_FIELDS_METADATA_KEY, B);

    expect(fields).toBeDefined();
    expect(fields).toHaveLength(1);
    expect(fields[0]).toEqual({
      key: 'http',
      type: HttpPlugin.name,
      optional: false,
    });
  });

  it('should have optional field', () => {
    @Plugin({
      name: 'test',
      version: '0.0.0',
    })
    class Test {
      @Inject({ optional: true })
      http?: HttpPlugin;
    }

    const fields: Array<InjectMetadata> = Reflect.getMetadata(PLUGIN_FIELDS_METADATA_KEY, Test);

    expect(fields).toBeDefined();
    expect(fields).toHaveLength(1);
    expect(fields[0]).toEqual({
      key: 'http',
      type: HttpPlugin.name,
      optional: true,
    });
  });

  it('should have explicitly keyed field', () => {
    @Plugin({
      name: 'test',
      version: '0.0.0',
    })
    class Test {
      @Inject({ optional: true })
      id?: string;
    }

    const fields: Array<InjectMetadata> = Reflect.getMetadata(PLUGIN_FIELDS_METADATA_KEY, Test);

    expect(fields).toBeDefined();
    expect(fields).toHaveLength(1);
    expect(fields[0]).toEqual({
      key: 'id',
      type: 'String',
      optional: true,
    });
  });

  describe('@Logger', () => {
    it('should have logger field', () => {
      @Plugin({
        name: 'test',
        version: '0.0.0',
      })
      class Test {
        @Logger()
        logger!: ILogger;
      }

      const fields: Array<InjectMetadata> = Reflect.getMetadata(PLUGIN_FIELDS_METADATA_KEY, Test);

      expect(fields).toBeDefined();
      expect(fields).toHaveLength(1);
      expect(fields[0]).toEqual({
        key: 'logger',
        type: 'ILogger',
        optional: false,
      });
    });
  });

  describe('@Storage', () => {
    it('should have storage field', () => {
      @Plugin({
        name: 'test',
        version: '0.0.0',
      })
      class Test {
        @Storage()
        storage!: IStorage;
      }

      const fields: Array<InjectMetadata> = Reflect.getMetadata(PLUGIN_FIELDS_METADATA_KEY, Test);

      expect(fields).toBeDefined();
      expect(fields).toHaveLength(1);
      expect(fields[0]).toEqual({
        key: 'storage',
        type: 'IStorage',
        optional: false,
      });
    });
  });
});
