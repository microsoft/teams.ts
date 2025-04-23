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
  ICard,
  NumberInput,
  OpenUrlAction,
  TextBlock,
  TextInput,
  ToggleInput,
} from '@microsoft/teams.cards';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

function createBasicCard() {
  // :snippet-start: basic-card-building
  /**
 import {
  Card,
  TextBlock,
  ToggleInput,
  ExecuteAction,
  ActionSet,
} from "@microsoft/teams.cards";
*/

  const card = new Card(
    new TextBlock('Hello world', { wrap: true, weight: 'bolder' }),
    new ToggleInput('Notify me').withId('notify'),
    new ActionSet(
      new ExecuteAction({ title: 'Submit' })
        .withData({ action: 'submit_basic' })
        .withAssociatedInputs('auto')
    )
  );
  // :snippet-end:

  return card;
}

// @ts-expect-error
function invalidCard() {
  // :snippet-start: improved-type-checking
  // @ts-expect-error: "huge" is not a valid size for TextBlock
  const textBlock = new TextBlock('Valid', { size: 'huge' });
  // :snippet-end:
}

// :snippet-start: form-card
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
// :snippet-end:

function createJsonCard() {
  // :snippet-start: raw-card-json
  const rawCard: ICard = {
    type: 'AdaptiveCard',
    body: [
      {
        text: 'Please fill out the below form to send a game purchase request.',
        wrap: true,
        type: 'TextBlock',
        style: 'heading',
      },
      {
        columns: [
          {
            width: 'stretch',
            items: [
              {
                choices: [
                  { title: 'Call of Duty', value: 'call_of_duty' },
                  { title: "Death's Door", value: 'deaths_door' },
                  { title: 'Grand Theft Auto V', value: 'grand_theft' },
                  { title: 'Minecraft', value: 'minecraft' },
                ],
                style: 'filtered',
                placeholder: 'Search for a game',
                id: 'choiceGameSingle',
                type: 'Input.ChoiceSet',
                label: 'Game:',
              },
            ],
            type: 'Column',
          },
        ],
        type: 'ColumnSet',
      },
    ],
    actions: [
      {
        title: 'Request purchase',
        type: 'Action.Execute',
        data: { action: 'purchase_item' },
      },
    ],
    version: '1.5',
  };
  // :snippet-end:

  return rawCard;
}

// :snippet-start: task-form-card
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
// :snippet-end:

function createActionCard() {
  return new Card().withBody(
    new TextBlock('Multiple Action Types Demo', {
      size: 'large',
      weight: 'bolder',
    }),
    new TextInput({ id: 'feedback' }).withLabel('Feedback').withPlaceholder('Enter your feedback'),
    // :snippet-start: multiple-actions-card
    /**
     * import {
     *  Card,
     *  ExecuteAction,
     *  OpenUrlAction,
     *  ActionSet,
     * } from "@microsoft/teams.cards";
     */
    new ActionSet(
      new ExecuteAction({ title: 'Submit Feedback' })
        .withData({ action: 'submit_feedback' })
        .withAssociatedInputs('auto'),
      new OpenUrlAction('https://adaptivecards.microsoft.com').withTitle('Learn More')
    )
    // :snippet-end:
  );
}

function createActionCardMixed() {
  return new Card().withBody(
    new TextBlock('Single Action Types Demo', {
      size: 'large',
      weight: 'bolder',
    }),
    new TextInput({ id: 'feedback' }).withLabel('Feedback').withPlaceholder('Enter your feedback'),
    new ActionSet(
      // :snippet-start: single-action
      /** import { ExecuteAction } from "@microsoft/teams.cards"; */
      new ExecuteAction({ title: 'Submit Feedback' })
        .withData({ action: 'submit_feedback' })
        .withAssociatedInputs('auto'),
      // :snippet-end:
      // :snippet-start: raw-json-action
      {
        type: 'Action.OpenUrl',
        url: 'https://adaptivecards.microsoft.com',
        title: 'Learn More',
      } as const
      // :snippet-end:
    )
  );
}

// :snippet-start: inputs-included
function editProfileCard() {
  const card = new Card().withBody(
    new TextInput({ id: 'name' }).withLabel('Name').withValue('John Doe'),
    new TextInput({ id: 'email', label: 'Email', value: 'john@contoso.com' }),
    new ToggleInput('Subscribe to newsletter').withId('subscribe').withValue('false'),
    new ActionSet(
      new ExecuteAction({ title: 'Save' })
        .withData({
          action: 'save_profile',
          entityId: '12345', // This will come back once the user submits
        })
        .withAssociatedInputs('auto')
    )
  );

  // Data received in handler
  /**
  {
    action: "save_profile",
    entityId: "12345",     // From action data
    name: "John Doe",      // From name input
    email: "john@doe.com", // From email input
    subscribe: "true"      // From toggle input (as string)
  }
  */

  return card;
}
// :snippet-end:

// :snippet-start: input-validation
function createProfileCardInputValidation() {
  const ageInput = new NumberInput({ id: 'age' })
    .withLabel('Age')
    .withRequired(true)
    .withMin(0)
    .withMax(120);

  const nameInput = new TextInput({ id: 'name' })
    .withLabel('Name')
    .withRequired()
    .withError('Name is required!'); // Custom error messages
  const card = new Card().withBody(
    nameInput,
    ageInput,
    new TextInput({ id: 'location' }).withLabel('Location'),
    new ActionSet(
      new ExecuteAction({ title: 'Save' })
        .withData({
          action: 'save_profile',
        })
        .withAssociatedInputs('auto') // All inputs should be validated
    )
  );

  return card;
}
// :snippet-end:

const app = new App({
  plugins: [new DevtoolsPlugin()],
});

const cardGeneratorByName: Record<string, { generator: () => ICard; description: string }> = {
  basic: { generator: createBasicCard, description: 'Show basic card with toggle' },
  form: { generator: createFormCard, description: 'Show form with multiple inputs' },
  task: { generator: createTaskCard, description: 'Show task management card' },
  actions: { generator: createActionCard, description: 'Show card with multiple action types' },
  'mixed-action': {
    generator: createActionCardMixed,
    description: 'Show card with mixed action types',
  },
  json: { generator: createJsonCard, description: 'Show card with raw JSON' },
  profile: { generator: editProfileCard, description: 'Show card with profile editing' },
  'profile-input-validation': {
    generator: createProfileCardInputValidation,
    description: 'Show card with input validation',
  },
};

const usageCard = new Card().withBody(
  new TextBlock('Available commands:', { weight: 'bolder' }),
  ...Object.entries(cardGeneratorByName).map(
    ([command, { description }]) => new TextBlock(`!${command} - ${description}`)
  )
);

app.on('message', async ({ send, activity }) => {
  await send({ type: 'typing' });

  const cardGenerator = cardGeneratorByName[activity.text.toLowerCase().slice(1)];

  if (cardGenerator) {
    const card = cardGenerator.generator();
    await send(card);
    return;
  }

  await send(usageCard);
});

// :snippet-start: message-handler
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

  console.debug('Received action data:', data);

  switch (data.action) {
    // :remove-start:
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

    // :remove-end:
    case 'submit_feedback':
      await send(`Feedback received: ${data.feedback}`);
      break;

    case 'purchase_item':
      await send(`Purchase request received for game: ${data.choiceGameSingle}`);
      break;

    case 'save_profile':
      await send(
        `Profile saved!\nName: ${data.name}\nEmail: ${data.email}\nSubscribed: ${data.subscribe}`
      );
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
// :snippet-end:

(async () => {
  await app.start(+(process.env.PORT || 3000));
})();
