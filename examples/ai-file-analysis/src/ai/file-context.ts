import type {
  ChatCompletionContentPart,
  ChatCompletionUserMessageParam,
} from 'openai/resources/chat/completions';

import type { IDownloadedFile } from '@microsoft/teams.apps';

// SAMPLE GUARDRAIL: every constant below is a product choice made by this sample, not a Teams SDK or Azure OpenAI limit. They exist to keep one Teams message from turning into an unbounded model request. Pick your own values.
//
// `download()` buffers the whole file before any of these are checked, so they bound what reaches the model, not network transfer or process memory.
const MAX_FILES = 5;
const MAX_TEXT_BYTES_PER_FILE = 100 * 1024;
const MAX_TOTAL_TEXT_BYTES = 250 * 1024;
const MAX_IMAGE_BYTES = 1024 * 1024;

// SAMPLE GUARDRAIL: the formats this sample is willing to forward. The file API itself delivers any attached file type.
const IMAGE_CONTENT_TYPES = new Set([
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/webp',
]);

const TEXT_EXTENSIONS = new Set([
  'c',
  'cpp',
  'cs',
  'css',
  'csv',
  'go',
  'h',
  'html',
  'java',
  'js',
  'json',
  'jsx',
  'md',
  'py',
  'rb',
  'rs',
  'sh',
  'sql',
  'toml',
  'ts',
  'tsx',
  'txt',
  'xml',
  'yaml',
  'yml',
]);

/** Whether this sample can send a downloaded file to the model, and as what. */
export type FileKind = 'image' | 'text' | 'unsupported';

/** A downloaded file that {@link classifyFile} accepted, paired with its kind. */
export type AnalyzableFile = {
  file: IDownloadedFile;
  kind: Exclude<FileKind, 'unsupported'>;
};

/** A model request built from the user's message and their analyzable files. */
export type AnalysisRequest = {
  content: ChatCompletionUserMessageParam['content'];
  /** User-facing explanations for files that were skipped or truncated. */
  warnings: string[];
  /** Number of files whose content reached the model request. */
  fileCount: number;
};

/**
 * SAMPLE GUARDRAIL: decides whether a downloaded file can be sent to the model.
 *
 * The response MIME type is preferred, but the platform-supplied extension is a necessary fallback, and that part is a real file-receive detail rather than a sample preference: Teams commonly omits or misclassifies source files, reporting `.ts` as `video/vnd.dlna.mpeg-tts` for example.
 */
export function classifyFile(
  file: IDownloadedFile,
  extension?: string
): FileKind {
  const contentType = baseContentType(file.contentType);

  if (IMAGE_CONTENT_TYPES.has(contentType)) {
    return 'image';
  }

  if (
    isTextContentType(contentType) ||
    getTextExtension(extension, file.filename)
  ) {
    return 'text';
  }

  return 'unsupported';
}

/**
 * Converts already-downloaded files into OpenAI content parts.
 *
 * The conversion itself is the AI integration. The caps it enforces along the way are SAMPLE GUARDRAILs, and each one that drops or shortens a file returns a warning so the user is never left guessing what the model saw.
 */
export function prepareAnalysis(
  userText: string,
  files: AnalyzableFile[]
): AnalysisRequest {
  const parts: ChatCompletionContentPart[] = [
    {
      type: 'text',
      text: userText.trim() || 'Please analyze the attached file content.',
    },
  ];
  const warnings: string[] = [];
  let fileCount = 0;
  let totalTextBytes = 0;

  for (const { file, kind } of files.slice(0, MAX_FILES)) {
    if (kind === 'image') {
      if (file.bytes.byteLength > MAX_IMAGE_BYTES) {
        warnings.push(
          `${file.filename} was not sent to the model because it is larger than 1 MB.`
        );
        continue;
      }

      parts.push(
        { type: 'text', text: `Attached image: ${file.filename}` },
        {
          type: 'image_url',
          image_url: {
            // FILE RECEIVE: the downloaded bytes are sent inline instead of handing the model the pre-authorized `tempauth` download URL, which is a short-lived credential.
            url: toDataUri(file.bytes, baseContentType(file.contentType)),
            detail: 'auto',
          },
        }
      );
      fileCount += 1;
      continue;
    }

    const remainingBytes = MAX_TOTAL_TEXT_BYTES - totalTextBytes;
    if (remainingBytes <= 0) {
      warnings.push(
        `${file.filename} was not sent to the model because the combined text-file limit was reached.`
      );
      continue;
    }

    const includedBytes = Math.min(
      file.bytes.byteLength,
      MAX_TEXT_BYTES_PER_FILE,
      remainingBytes
    );
    const text = new TextDecoder().decode(file.bytes.subarray(0, includedBytes));
    const truncated = includedBytes < file.bytes.byteLength;
    totalTextBytes += includedBytes;

    parts.push({
      type: 'text',
      text: [
        `Attached file: ${file.filename}`,
        '',
        '<file>',
        text,
        truncated ? '\n[File content truncated by the sample.]' : '',
        '</file>',
      ].join('\n'),
    });

    if (truncated) {
      warnings.push(
        `${file.filename} was truncated before being sent to the model.`
      );
    }
    fileCount += 1;
  }

  if (files.length > MAX_FILES) {
    warnings.push(
      `${files.length - MAX_FILES} additional file(s) were not sent to the model because this sample accepts up to ${MAX_FILES} files per message.`
    );
  }

  return { content: parts, warnings, fileCount };
}

function baseContentType(contentType: string): string {
  return contentType.split(';', 1)[0].trim().toLowerCase();
}

function isTextContentType(contentType: string): boolean {
  return (
    contentType.startsWith('text/') ||
    /\b(json|xml|javascript|yaml|csv|markdown)\b/.test(contentType)
  );
}

function getTextExtension(
  extension: string | undefined,
  filename: string
): string | undefined {
  const normalizedExtension = extension
    ? extension.replace(/^\./, '').toLowerCase()
    : filename.split('.').pop()?.toLowerCase();
  return normalizedExtension && TEXT_EXTENSIONS.has(normalizedExtension)
    ? normalizedExtension
    : undefined;
}

function toDataUri(bytes: Uint8Array, contentType: string): string {
  return `data:${contentType};base64,${Buffer.from(bytes).toString('base64')}`;
}
