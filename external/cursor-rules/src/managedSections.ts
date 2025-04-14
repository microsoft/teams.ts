export interface ManagedSection {
  id: string;
  content: string;
  startLine: number;
  endLine: number;
}

export const SECTION_START = '<!-- @managed-content-start: ';
export const SECTION_END = '<!-- @managed-content-end: ';

export function createSectionMarker(id: string, isEnd = false): string {
  return `${isEnd ? SECTION_END : SECTION_START}${id} -->`;
}

export function findManagedSections(content: string): ManagedSection[] {
  const lines = content.split('\n');
  const sections: ManagedSection[] = [];
  let currentSection: Partial<ManagedSection> | null = null;

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith(SECTION_START)) {
      const id = trimmedLine.slice(SECTION_START.length, -3).trim();
      currentSection = {
        id,
        startLine: index,
        content: '',
      };
    } else if (
      trimmedLine.startsWith(SECTION_END) &&
      currentSection &&
      currentSection.startLine !== undefined &&
      currentSection.id
    ) {
      const id = trimmedLine.slice(SECTION_END.length, -3).trim();
      if (id === currentSection.id) {
        sections.push({
          id: currentSection.id,
          startLine: currentSection.startLine,
          content: lines.slice(currentSection.startLine + 1, index).join('\n'),
          endLine: index,
        });
      }
      currentSection = null;
    }
  });

  return sections;
}

export function updateManagedSectionContent(
  content: string,
  sectionId: string,
  newContent: string
): string {
  const sections = findManagedSections(content);
  const section = sections.find((s) => s.id === sectionId);

  if (!section) {
    // If section doesn't exist, append it to the end of the content
    const newSection = [
      createSectionMarker(sectionId),
      newContent,
      createSectionMarker(sectionId, true),
    ].join('\n');

    return content + '\n\n' + newSection;
  }

  const lines = content.split('\n');
  const updatedLines = [
    ...lines.slice(0, section.startLine + 1),
    newContent,
    ...lines.slice(section.endLine),
  ];

  return updatedLines.join('\n');
}
