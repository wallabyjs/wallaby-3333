import { describe, it } from '@jest/globals';
import schema from './schema.json' with { type: 'json' };

describe('test', () => {
  it('test', () => {
    console.log(schema);
  });
});