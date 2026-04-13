/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

// GitHub Issue Analysis → Teams Notification
// Analyzes newly opened GitHub issues using the GitHub Models API (GPT-4o)
// and sends a summary card + action plan to a Microsoft Teams channel.

import { readFileSync, existsSync } from 'fs';

import { App } from '@microsoft/teams.apps';
import {
  ActionSet,
  AdaptiveCard,
  Column,
  ColumnSet,
  Container,
  Fact,
  FactSet,
  OpenUrlAction,
  TextBlock,
} from '@microsoft/teams.cards';
import OpenAI from 'openai';

const TRIAGE_PROMPT = `\
You are a GitHub issue triage assistant for the Microsoft Teams TypeScript SDK.

The SDK is an npm workspace with these packages:
- api: Core API clients, models, auth
- apps: App orchestrator, plugins, routing, events, HttpServer
- common: HTTP client abstraction, logging, storage
- cards: Adaptive Cards builder
- ai: AI/function calling utilities
- botbuilder: Bot Framework integration plugin
- devtools: Development tools plugin
- mcp: MCP server plugin
- mcpclient: MCP client plugin
- a2a: A2A protocol plugin
- graph: Microsoft Graph integration
- graph-endpoints: Graph API endpoint definitions
- graph-endpoints-beta: Beta Graph endpoints
- graph-tools: Graph utilities
- openai: OpenAI integration
- cli: CLI scaffolding tool
- client: Client-side SDK
- dev: Development utilities plugin
- config: Shared config

Analyze the issue and respond with ONLY valid JSON (no markdown fencing).
Be concise — sacrifice grammar if needed to keep summaries short:
{
  "category": "bug | feature | question | docs | security",
  "severity": "critical | high | medium | low | info",
  "summary": "1-2 sentence plain-text summary of the issue",
  "affected_packages": ["list", "of", "affected", "packages"],
  "suggested_labels": ["list", "of", "suggested", "labels"]
}`;

const SEVERITY_COLORS: Record<string, string> = {
  critical: 'Attention',
  high: 'Attention',
  medium: 'Warning',
  low: 'Good',
  info: 'Default',
};

interface Issue {
  number: number;
  title: string;
  body: string;
  author: string;
  html_url: string;
  labels: string[];
}

interface TriageResult {
  category: string;
  severity: string;
  summary: string;
  affected_packages: string[];
  suggested_labels: string[];
}

function loadIssueFromEnv(): Issue {
  const number = process.env.ISSUE_NUMBER;
  if (!number) {
    console.error('ERROR: ISSUE_NUMBER not set');
    process.exit(1);
  }

  const labelsStr = process.env.ISSUE_LABELS ?? '';
  return {
    number: parseInt(number, 10),
    title: process.env.ISSUE_TITLE ?? '',
    body: process.env.ISSUE_BODY ?? '',
    author: process.env.ISSUE_AUTHOR ?? 'unknown',
    html_url: process.env.ISSUE_HTML_URL ?? '',
    labels: labelsStr.split(',').map((l) => l.trim()).filter(Boolean),
  };
}

async function callModel(systemPrompt: string, userMessage: string): Promise<string> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error('ERROR: GITHUB_TOKEN not set');
    process.exit(1);
  }

  const client = new OpenAI({
    baseURL: 'https://models.inference.ai.azure.com',
    apiKey: token,
  });

  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage },
    ],
    temperature: 0.2,
  });

  return response.choices[0]?.message?.content ?? '';
}

function issueAsUserMessage(issue: Issue): string {
  return [
    `Issue #${issue.number}: ${issue.title}`,
    '',
    `Author: ${issue.author}`,
    `Labels: ${issue.labels.join(', ') || 'none'}`,
    '',
    `Body:\n${issue.body.slice(0, 3000)}`,
  ].join('\n');
}

async function triageIssue(issue: Issue): Promise<TriageResult> {
  const content = await callModel(TRIAGE_PROMPT, issueAsUserMessage(issue));
  try {
    return JSON.parse(content);
  } catch {
    // Model may wrap JSON in markdown fences — try extracting it
    const start = content.indexOf('{');
    const end = content.lastIndexOf('}');
    if (start !== -1 && end > start) {
      try {
        return JSON.parse(content.slice(start, end + 1));
      } catch {
        // fall through
      }
    }
    return {
      category: 'question',
      severity: 'info',
      summary: `Automated triage failed to parse model response. Review issue #${issue.number} manually.`,
      affected_packages: [],
      suggested_labels: [],
    };
  }
}

function loadCopilotAnalysis(): string {
  const path = process.env.COPILOT_ANALYSIS_FILE ?? '/tmp/analysis.txt';
  if (!existsSync(path)) {
    return '_No Copilot analysis available._';
  }
  const content = readFileSync(path, 'utf-8').trim();
  return content || '_No Copilot analysis available._';
}

function buildTriageCard(issue: Issue, triage: TriageResult): AdaptiveCard {
  const repo =
    process.env.GITHUB_UPSTREAM_REPO ??
    process.env.GITHUB_REPOSITORY ??
    'microsoft/teams.ts';
  const severity = triage.severity ?? 'info';
  const severityColor = SEVERITY_COLORS[severity] ?? 'Default';

  return new AdaptiveCard(
    new TextBlock(`${repo}#${issue.number}: ${issue.title}`, {
      size: 'Medium',
      weight: 'Bolder',
      wrap: true,
    }),
    new ColumnSet({
      columns: [
        new Column(
          new TextBlock((triage.category ?? 'unknown').toUpperCase(), {
            weight: 'Bolder',
            isSubtle: true,
            size: 'Small',
          }),
        ).withOptions({ width: 'auto' }),
        new Column(
          new TextBlock(severity.toUpperCase(), {
            color: severityColor as any,
            weight: 'Bolder',
            size: 'Small',
          }),
        ).withOptions({ width: 'auto' }),
        new Column(
          new TextBlock(`by @${issue.author}`, {
            isSubtle: true,
            size: 'Small',
            horizontalAlignment: 'Right',
          }),
        ).withOptions({ width: 'stretch' }),
      ],
    }),
    new Container(
      new TextBlock(triage.summary ?? 'No summary available.', {
        wrap: true,
      }),
    ).withOptions({ style: 'emphasis' }),
    new FactSet(
      new Fact(
        'Packages',
        triage.affected_packages?.join(', ') || 'N/A',
      ),
      new Fact(
        'Suggested labels',
        triage.suggested_labels?.join(', ') || 'N/A',
      ),
    ),
    new ActionSet(
      new OpenUrlAction(issue.html_url, { title: 'View Issue' }),
    ),
  ).withOptions({ version: '1.5' });
}

async function main(): Promise<void> {
  console.log('Loading issue from environment...');
  const issue = loadIssueFromEnv();
  console.log(`Issue #${issue.number}: ${issue.title}`);

  console.log('Triaging issue...');
  const triage = await triageIssue(issue);
  console.log(
    `Triage: category=${triage.category}, severity=${triage.severity}`,
  );

  console.log('Loading Copilot analysis...');
  const actionPlan = loadCopilotAnalysis();

  console.log('Building triage card...');
  const card = buildTriageCard(issue, triage);

  const conversationId = process.env.TEAMS_CONVERSATION_ID;
  if (!conversationId) {
    console.error('ERROR: TEAMS_CONVERSATION_ID not set');
    process.exit(1);
  }

  const app = new App();
  await app.initialize();

  console.log('Sending triage card...');
  const result = await app.send(conversationId, card);
  console.log(`Triage card sent. Activity ID: ${result.id}`);

  console.log('Sending action plan as threaded reply...');
  const threadId = `${conversationId};messageid=${result.id}`;
  const threadResult = await app.send(threadId, actionPlan);
  console.log(`Action plan sent. Activity ID: ${threadResult.id}`);

  console.log('Done!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
