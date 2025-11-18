import { ChatPrompt, IChatModel } from '@microsoft/teams.ai';
import { ActivityLike, IMessageActivity, SentActivity } from '@microsoft/teams.api';

import { ILogger } from '../../../packages/common/dist/logging/logger';

interface IPokemonSearch {
  pokemonName: string;
}

export const handlePokemonToolCalling = async (
  model: IChatModel,
  activity: IMessageActivity,
  send: (activity: ActivityLike) => Promise<SentActivity>,
  log: ILogger
) => {
  const prompt = new ChatPrompt({
    instructions: 'You are a helpful assistant that can look up Pokemon for the user.',
    model,
  })
    // Include `function` as part of the prompt
    .function(
      'pokemonSearch',
      'search for pokemon',
      // Include the schema of the parameters
      // the LLM needs to return to call the function
      {
        type: 'object',
        properties: {
          pokemonName: {
            type: 'string',
            description: 'the name of the pokemon',
          },
        },
        required: ['text'],
      },
      // The cooresponding function will be called
      // automatically if the LLM decides to call this function
      async ({ pokemonName }: IPokemonSearch) => {
        log.info('Searching for pokemon', pokemonName);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
          throw new Error('Pokemon not found');
        }
        const data = await response.json();
        // The result of the function call is sent back to the LLM
        return {
          name: data.name,
          height: data.height,
          weight: data.weight,
          types: data.types.map((type: { type: { name: string } }) => type.type.name),
        };
      }
    );

  // The LLM will then produce a final response to be sent back to the user
  // activity.text could have text like 'pikachu'
  const result = await prompt.send(activity.text);
  await send(result.content ?? 'Sorry I could not find that pokemon');
};

export const handleGetWeatherToolCalling = async (
  model: IChatModel,
  activity: IMessageActivity,
  send: (activity: ActivityLike) => Promise<SentActivity>,
  log: ILogger
) => {
  // activity.text could be something like "what's my weather?"
  // The LLM will need to first figure out the user's location
  // Then pass that in to the weatherSearch
  const prompt = new ChatPrompt({
    instructions: 'You are a helpful assistant that can help the user get the weather',
    model,
  })
    // Include multiple `function`s as part of the prompt
    .function(
      'getUserLocation',
      'gets the location of the user',
      // This function doesn't need any parameters,
      // so we do not need to provide a schema
      async () => {
        const locations = ['Seattle', 'San Francisco', 'New York'];
        const randomIndex = Math.floor(Math.random() * locations.length);
        const location = locations[randomIndex];
        log.info('Found user location', location);
        return location;
      }
    )
    .function(
      'weatherSearch',
      'search for weather',
      {
        type: 'object',
        properties: {
          location: {
            type: 'string',
            description: 'the name of the location',
          },
        },
        required: ['location'],
      },
      async ({ location }: { location: string }) => {
        const weatherByLocation: Record<string, {}> = {
          Seattle: { temperature: 65, condition: 'sunny' },
          'San Francisco': { temperature: 60, condition: 'foggy' },
          'New York': { temperature: 75, condition: 'rainy' },
        };

        const weather = weatherByLocation[location];
        if (!weather) {
          return 'Sorry, I could not find the weather for that location';
        }

        log.info('Found weather', weather);
        return weather;
      }
    );

  // The LLM will then produce a final response to be sent back to the user
  const result = await prompt.send(activity.text);
  await send(result.content ?? 'Sorry I could not figure it out');
};
