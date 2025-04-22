import {
  AdaptiveCardActionErrorResponse,
  AdaptiveCardActionMessageResponse,
} from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import {
  ActionSet,
  Card,
  ChoiceSetInput,
  DateInput,
  ExecuteAction,
  OpenUrlAction,
  TextBlock,
  TextInput,
  ToggleInput,
} from '@microsoft/teams.cards';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

// 1. Basic Card with Text and Toggle
function createBasicCard() {
  return new Card(
    new TextBlock('Hello world', { wrap: true, weight: 'bolder' }),
    new ToggleInput('Notify me').withId('notify'),
    new ActionSet(
      new ExecuteAction({ title: 'Submit' })
        .withData({ action: 'submit_basic' })
        .withAssociatedInputs('auto')
    )
  );
}

// 2. Form Card with Multiple Inputs
function createFormCard() {
  return new Card().withBody(
    new TextBlock('Please fill out the below form:', {
      wrap: true,
      style: 'heading',
    }),
    new TextInput({ id: 'name' }).withLabel('Name').withPlaceholder('Enter your name'),
    new TextInput({ id: 'comments' })
      .withLabel('Comments')
      .withPlaceholder('Enter your comments')
      .withMultiLine(true),
    new ChoiceSetInput(
      { title: 'Red', value: 'red' },
      { title: 'Green', value: 'green' },
      { title: 'Blue', value: 'blue' }
    )
      .withId('color')
      .withLabel('Favorite Color')
      .withValue('blue'),
    new ActionSet(
      new ExecuteAction({ title: 'Submit Form' })
        .withData({ action: 'submit_form' })
        .withAssociatedInputs('auto')
    )
  );
}

// 3. Task Management Card
function createTaskCard() {
  return new Card().withBody(
    new TextBlock('Create New Task', {
      size: 'large',
      weight: 'bolder',
    }),
    new TextInput({ id: 'title' }).withLabel('Task Title').withPlaceholder('Enter task title'),
    new TextInput({ id: 'description' })
      .withLabel('Description')
      .withPlaceholder('Enter task details')
      .withMultiLine(true),
    new ChoiceSetInput(
      { title: 'High', value: 'high' },
      { title: 'Medium', value: 'medium' },
      { title: 'Low', value: 'low' }
    )
      .withId('priority')
      .withLabel('Priority')
      .withValue('medium'),
    new DateInput({ id: 'due_date' })
      .withLabel('Due Date')
      .withValue(new Date().toISOString().split('T')[0]),
    new ActionSet(
      new ExecuteAction({ title: 'Create Task' })
        .withData({ action: 'create_task' })
        .withAssociatedInputs('auto')
        .withStyle('positive')
    )
  );
}

// 4. Card with Multiple Actions
function createActionCard() {
  return new Card().withBody(
    new TextBlock('Multiple Action Types Demo', {
      size: 'large',
      weight: 'bolder',
    }),
    new TextInput({ id: 'feedback' }).withLabel('Feedback').withPlaceholder('Enter your feedback'),
    new ActionSet(
      new ExecuteAction({ title: 'Submit Feedback' })
        .withData({ action: 'submit_feedback' })
        .withAssociatedInputs('auto'),
      new OpenUrlAction('Learn More').withUrl('https://adaptivecards.microsoft.com')
    )
  );
}

const app = new App({
  plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ send, activity }) => {
  await send({ type: 'typing' });

  switch (activity.text.toLowerCase()) {
    case '!basic':
      await send(createBasicCard());
      break;
    case '!form':
      await send(createFormCard());
      break;
    case '!task':
      await send(createTaskCard());
      break;
    case '!actions':
      await send(createActionCard());
      break;
    default:
      await send(
        new Card().withBody(
          new TextBlock('Available commands:', { weight: 'bolder' }),
          new TextBlock('!basic - Show basic card with toggle'),
          new TextBlock('!form - Show form with multiple inputs'),
          new TextBlock('!task - Show task management card'),
          new TextBlock('!actions - Show card with multiple action types')
        )
      );
  }
});

app.on('card.action', async ({ activity, send }) => {
  const data = activity.value?.action?.data;
  if (!data?.action) {
    return {
      statusCode: 400,
      type: 'application/vnd.microsoft.error',
      value: {
        code: 'BadRequest',
        message: 'No action specified',
        innerHttpError: {
          statusCode: 400,
          body: { error: 'No action specified' },
        },
      },
    } satisfies AdaptiveCardActionErrorResponse;
  }

  switch (data.action) {
    case 'submit_basic':
      await send(`Notification preference set to: ${data.notify}`);
      break;

    case 'submit_form':
      await send(
        `Form submitted!\nName: ${data.name}\nComments: ${data.comments}\nColor: ${data.color}`
      );
      break;

    case 'create_task':
      await send(
        `Task created!\nTitle: ${data.title}\nDescription: ${data.description}\nPriority: ${data.priority}\nDue Date: ${data.due_date}`
      );
      break;

    case 'submit_feedback':
      await send(`Feedback received: ${data.feedback}`);
      break;

    default:
      return {
        statusCode: 400,
        type: 'application/vnd.microsoft.error',
        value: {
          code: 'BadRequest',
          message: 'Unknown action',
          innerHttpError: {
            statusCode: 400,
            body: { error: 'Unknown action' },
          },
        },
      } satisfies AdaptiveCardActionErrorResponse;
  }

  return {
    statusCode: 200,
    type: 'application/vnd.microsoft.activity.message',
    value: 'Action processed successfully',
  } satisfies AdaptiveCardActionMessageResponse;
});

(async () => {
  await app.start(+(process.env.PORT || 3000));
})();
