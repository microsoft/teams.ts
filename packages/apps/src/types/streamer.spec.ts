import { StreamCancelledError as PublicStreamCancelledError } from '../index';

import { StreamCancelledError } from './streamer';

import { StreamCancelledError as TypesStreamCancelledError } from './index';

describe('StreamCancelledError compatibility', () => {
  it('preserves the existing export paths', () => {
    expect(PublicStreamCancelledError).toBe(StreamCancelledError);
    expect(TypesStreamCancelledError).toBe(StreamCancelledError);
  });

  it.each([
    [undefined, 'stream canceled'],
    ['Application error', 'Application error'],
    ['', ''],
  ])('preserves the constructor with message %p', (message, expected) => {
    const error = new StreamCancelledError(message);
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe('StreamCancelledError');
    expect(error.message).toBe(expected);
  });
});
