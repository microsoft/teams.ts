import { SubmitData } from './submit-data';

describe('SubmitData', () => {
  it('should set action field', () => {
    const data = new SubmitData('save_profile');
    expect(data.action).toBe('save_profile');
  });

  it('should include extra data', () => {
    const data = new SubmitData('save_profile', { entity_id: '12345' });
    expect(data.action).toBe('save_profile');
    expect(data.entity_id).toBe('12345');
  });

  it('should work with no extra data', () => {
    const data = new SubmitData('submit');
    expect(data.action).toBe('submit');
    expect(Object.keys(data)).toEqual(['action']);
  });
});
