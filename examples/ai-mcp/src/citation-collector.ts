import { MessageActivityInput } from '@microsoft/teams.api';

/**
 * Parses MCP search results as they are returned by tools and accumulates
 * citation metadata. After streaming completes, attachCitations() writes
 * Teams citation entities for any [N] references that appear in the final
 * response text.
 *
 * MS Learn MCP search tools return JSON payloads shaped like:
 *   { results: [ { contentUrl|link, title, content|description, ... } ] }
 * (the results array may sit at the root or one level deep, e.g. under
 * `structuredContent`).
 */
export class CitationCollector {
  private readonly _entries = new Map<string, CitationEntry>();

  /**
   * Try to parse a tool-result string as JSON and pull citation-shaped
   * results out of it. Non-JSON results are silently ignored.
   */
  tryExtract(result: string): void {
    let doc: unknown;
    try {
      doc = JSON.parse(result);
    } catch {
      return;
    }

    const results = findResults(doc);
    if (!results) return;

    for (const item of results) {
      if (!isRecord(item)) continue;
      const url = stringOrUndefined(item['contentUrl']) ?? stringOrUndefined(item['link']);
      if (!url || this._entries.has(url)) continue;

      const snippet =
        stringOrUndefined(item['content']) ?? stringOrUndefined(item['description']) ?? '';

      this._entries.set(url, {
        position: this._entries.size + 1,
        url,
        title: stringOrUndefined(item['title']) ?? '',
        snippet: snippet.length > 160 ? snippet.slice(0, 160) : snippet,
      });
    }
  }

  /**
   * Returns the next available citation index (1-based) that the model
   * should use for the most-recently extracted result. The agent can pass
   * this to the model via the tool's return value so [N] markers align
   * with collector state.
   */
  get size(): number {
    return this._entries.size;
  }

  /**
   * Reads [N] markers out of `fullText` and writes a citation onto
   * `activity` for each one we have data for. Returns the count of
   * citations actually added.
   */
  attachCitations(activity: MessageActivityInput, fullText: string): number {
    const used = new Set<number>();
    for (const match of fullText.matchAll(/\[(\d+)\]/g)) {
      used.add(Number(match[1]));
    }

    let attached = 0;
    for (const entry of this._entries.values()) {
      if (!used.has(entry.position)) continue;
      activity.addCitation(entry.position, {
        name: entry.title || `Source ${entry.position}`,
        abstract: entry.snippet || 'No description available.',
        url: entry.url,
      });
      attached++;
    }
    return attached;
  }
}

type CitationEntry = {
  position: number;
  url: string;
  title: string;
  snippet: string;
};

function findResults(doc: unknown): unknown[] | null {
  if (!isRecord(doc)) return null;
  if (Array.isArray(doc['results'])) return doc['results'];

  for (const value of Object.values(doc)) {
    if (isRecord(value) && Array.isArray(value['results'])) {
      return value['results'];
    }
  }
  return null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function stringOrUndefined(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined;
}
