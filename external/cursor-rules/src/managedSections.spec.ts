import {
  createSectionMarker,
  findManagedSections,
  updateManagedSectionContent,
} from './managedSections';

describe('Managed Sections', () => {
  describe('findManagedSections', () => {
    it('should find managed sections in content', () => {
      const content = `
# Test File

${createSectionMarker('test-section')}
This is test content
${createSectionMarker('test-section', true)}

Some other content

${createSectionMarker('another-section')}
More test content
${createSectionMarker('another-section', true)}
`;

      const sections = findManagedSections(content);
      expect(sections).toHaveLength(2);
      expect(sections[0].id).toBe('test-section');
      expect(sections[0].content).toBe('This is test content');
      expect(sections[1].id).toBe('another-section');
      expect(sections[1].content).toBe('More test content');
    });

    it('should handle files with no managed sections', () => {
      const content = '# Test File\n\nNo managed sections here';
      const sections = findManagedSections(content);
      expect(sections).toHaveLength(0);
    });
  });

  describe('updateManagedSectionContent', () => {
    it('should update existing section content', () => {
      const initialContent = `
# Test File

${createSectionMarker('test-section')}
Initial content
${createSectionMarker('test-section', true)}

Other content
`;

      const updatedContent = updateManagedSectionContent(
        initialContent,
        'test-section',
        'Updated content'
      );
      const sections = findManagedSections(updatedContent);
      expect(sections).toHaveLength(1);
      expect(sections[0].content).toBe('Updated content');
      // Verify other content is preserved
      expect(updatedContent).toContain('Other content');
      expect(updatedContent).toContain('# Test File');
    });

    it('should add new section if it does not exist', () => {
      const initialContent = '# Test File\n\nNo managed sections';
      const updatedContent = updateManagedSectionContent(
        initialContent,
        'new-section',
        'New content'
      );

      const sections = findManagedSections(updatedContent);
      expect(sections).toHaveLength(1);
      expect(sections[0].id).toBe('new-section');
      expect(sections[0].content).toBe('New content');
      // Verify original content is preserved
      expect(updatedContent).toContain('# Test File\n\nNo managed sections');
    });

    it('should preserve whitespace and formatting', () => {
      const initialContent = `# Title

Some text here.

${createSectionMarker('format-test')}
  indented content
    more indent
${createSectionMarker('format-test', true)}

Final text.`;

      const newContent = '  new\n    indented\n      content';
      const updatedContent = updateManagedSectionContent(initialContent, 'format-test', newContent);

      const sections = findManagedSections(updatedContent);
      expect(sections).toHaveLength(1);
      expect(sections[0].content).toBe('  new\n    indented\n      content');
      // Verify structure is preserved
      expect(updatedContent).toContain('# Title');
      expect(updatedContent).toContain('Some text here.');
      expect(updatedContent).toContain('Final text.');
    });
  });
});
