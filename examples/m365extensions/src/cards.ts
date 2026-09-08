import {
  AdaptiveCard,
  Fact,
  FactSet,
  OpenDialogData,
  SubmitAction,
  TextBlock,
  TextInput,
} from '@microsoft/teams.cards';

export function helpCard(): AdaptiveCard {
  return new AdaptiveCard(
    new TextBlock('Teams SDK Feature Showcase', { weight: 'Bolder', size: 'Large' }),
    new TextBlock('Teams SDK handlers (TEAMS_APP)', { weight: 'Bolder', spacing: 'Medium' }),
    new FactSet(
      new Fact('help', 'This command list'),
      new Fact('react', 'Bot adds/removes emoji reactions'),
      new Fact('quote', 'Bot quotes its own message'),
      new Fact('targeted', 'Ephemeral message visible only to sender'),
      new Fact('task', 'Task module fetch/submit flow')
    ),
    new TextBlock('Agents SDK fallthrough handlers (AGENT_SDK_APP)', {
      weight: 'Bolder',
      spacing: 'Medium',
    }),
    new FactSet(
      new Fact('agents sdk react', 'Reach teams.ts\'s API client from an Agents SDK handler'),
      new Fact('agents sdk proactive', 'Trigger a proactive send from an Agents SDK handler'),
      new Fact('channel', 'Report the channel this turn arrived on and how it was routed'),
      new Fact('anything else', 'Echo via Agents SDK \'[Agent SDK] You said: ...\'')
    )
  );
}

export function taskLauncherCard(): AdaptiveCard {
  return new AdaptiveCard(
    new TextBlock('📋 Task module demo', { weight: 'Bolder' }),
    new TextBlock('Press the button to open a task module.', { wrap: true })
  ).withActions(
    new SubmitAction().withTitle('Open task module').withData(new OpenDialogData('open_task'))
  );
}

export function taskFormCard(): AdaptiveCard {
  return new AdaptiveCard(
    new TextBlock('Tell us something:', { weight: 'Bolder' }),
    new TextInput().withId('note').withPlaceholder('Type here…')
  ).withActions(new SubmitAction().withTitle('Submit'));
}
