import 'reflect-metadata';

import { ILogger, IStorage } from '@microsoft/teams.common';

import { HttpPlugin } from '../../../plugins';

import {
  Dependency,
  PLUGIN_DEPENDENCIES_METADATA_KEY,
  DependencyMetadata,
  Logger,
  Storage,
} from './dependency';
import { Plugin } from './plugin';

describe('@Dependency', () => {
  it('should have field', () => {
    @Plugin({
      name: 'test',
      version: '0.0.0',
    })
    class Test {
      @Dependency()
      http!: HttpPlugin;
    }

    const fields: Array<DependencyMetadata> = Reflect.getMetadata(
      PLUGIN_DEPENDENCIES_METADATA_KEY,
      Test
    );

    expect(fields).toBeDefined();
    expect(fields).toHaveLength(1);
    expect(fields[0]).toEqual({
      key: 'http',
      type: 'http',
      optional: false,
    });
  });

  it('should have fields nested', () => {
    @Plugin({
      name: 'b',
      version: '0.0.0',
    })
    class B {
      @Dependency()
      http!: HttpPlugin;
    }

    @Plugin({
      name: 'a',
      version: '0.0.0',
    })
    class A {
      @Dependency()
      b!: B;
    }

    let fields: Array<DependencyMetadata> = Reflect.getMetadata(
      PLUGIN_DEPENDENCIES_METADATA_KEY,
      A
    );

    expect(fields).toBeDefined();
    expect(fields).toHaveLength(1);
    expect(fields[0]).toEqual({
      key: 'b',
      type: 'b',
      optional: false,
    });

    fields = Reflect.getMetadata(PLUGIN_DEPENDENCIES_METADATA_KEY, B);

    expect(fields).toBeDefined();
    expect(fields).toHaveLength(1);
    expect(fields[0]).toEqual({
      key: 'http',
      type: 'http',
      optional: false,
    });
  });

  it('should have optional field', () => {
    @Plugin({
      name: 'test',
      version: '0.0.0',
    })
    class Test {
      @Dependency({ optional: true })
      http?: HttpPlugin;
    }

    const fields: Array<DependencyMetadata> = Reflect.getMetadata(
      PLUGIN_DEPENDENCIES_METADATA_KEY,
      Test
    );

    expect(fields).toBeDefined();
    expect(fields).toHaveLength(1);
    expect(fields[0]).toEqual({
      key: 'http',
      type: 'http',
      optional: true,
    });
  });

  it('should have explicitly keyed field', () => {
    @Plugin({
      name: 'test',
      version: '0.0.0',
    })
    class Test {
      @Dependency({ optional: true })
      id?: string;
    }

    const fields: Array<DependencyMetadata> = Reflect.getMetadata(
      PLUGIN_DEPENDENCIES_METADATA_KEY,
      Test
    );

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

      const fields: Array<DependencyMetadata> = Reflect.getMetadata(
        PLUGIN_DEPENDENCIES_METADATA_KEY,
        Test
      );

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

      const fields: Array<DependencyMetadata> = Reflect.getMetadata(
        PLUGIN_DEPENDENCIES_METADATA_KEY,
        Test
      );

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
