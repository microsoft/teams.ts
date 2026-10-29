import { CitationIconName } from './citation-entity';
import { PlanInfoEntity, StepSource } from './plan-info-entity';

describe('Plan models', () => {
  it('serializes step revisions and shared citation icons without changing wire names', () => {
    const icon: CitationIconName = 'Text';
    const entity: PlanInfoEntity = {
      type: 'planInfo',
      planType: 'continue',
      steps: [{
        id: 'lookup', version: 3, title: 'Sources checked', status: 'completed',
        description: 'Found the documentation.',
        sources: [{ title: 'Teams SDK docs', url: 'https://microsoft.github.io/teams-sdk/', icon }],
      }],
    };

    expect(JSON.parse(JSON.stringify(entity))).toEqual({
      type: 'planInfo',
      planType: 'continue',
      steps: [{
        id: 'lookup', version: 3, title: 'Sources checked', status: 'completed',
        description: 'Found the documentation.',
        sources: [{ title: 'Teams SDK docs', url: 'https://microsoft.github.io/teams-sdk/', icon: 'Text' }],
      }],
    });
  });

  it('allows omitted icons and restricts supplied icons to CitationIconName', () => {
    const source: StepSource = { title: 'Report', url: 'https://example.com/report' };
    expect(JSON.parse(JSON.stringify(source))).not.toHaveProperty('icon');
    source.icon = 'PDF';
    const icon: CitationIconName = source.icon;
    expect(icon).toBe('PDF');
    // @ts-expect-error Arbitrary strings are not shared citation icons.
    source.icon = 'document';
  });
});
