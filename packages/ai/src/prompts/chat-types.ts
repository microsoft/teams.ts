import { ILogger } from '@microsoft/teams.common';

import { Function, FunctionHandler } from '../function';
import { IMemory } from '../memory';
import { ContentPart, Message, ModelMessage } from '../message';
import { IChatModel, TextChunkHandler } from '../models';
import { Schema } from '../schema';
import { ITemplate } from '../template';
import { PromiseOrValue } from '../utils/types';

import { IAiPlugin } from './plugin';

export type ChatPromptOptions<TOptions extends Record<string, any> = Record<string, any>, TRawReturnType extends Record<string, any> = Record<string, any>> = {
    /**
     * the name of the prompt
     */
    readonly name?: string;

    /**
     * the description of the prompt
     */
    readonly description?: string;

    /**
     * the model to send messages to
     */
    readonly model: IChatModel<TOptions, TRawReturnType>;

    /**
     * the defining characteristics/objective
     * of the prompt. This is commonly used to provide a system prompt.
     * If you supply the system prompt as part of the messages,
     * you do not need to supply this option.
     */
    readonly instructions?: string | string[] | ITemplate;

    /**
     * the `role` of the initial message
     */
    readonly role?: 'system' | 'user';

    /**
     * the conversation history
     */
    readonly messages?: Message[] | IMemory;

    /**
     * Logger instance to use for logging
     * If not provided, a ConsoleLogger will be used
     */
    logger?: ILogger;
};

export type ChatPromptSendOptions<TOptions extends Record<string, any> = Record<string, any>> = {
    /**
     * the conversation history
     */
    readonly messages?: Message[] | IMemory;

    /**
     * the models request options
     */
    readonly request?: TOptions;

    /**
     * the callback to be called for each
     * stream chunk
     */
    readonly onChunk?: TextChunkHandler;

    /**
     * disable automatic function calling
     * @default false
     */
    readonly disableAutomaticFunctionCalling?: boolean;
};

/**
 * a prompt that can interface with a
 * chat model that provides utility like
 * streaming and function calling
 */
export interface IChatPrompt<
    TOptions extends Record<string, any> = Record<string, any>,
    TRawReturnType extends Record<string, any> = Record<string, any>,
    TChatPromptPlugins extends readonly ChatPromptPlugin<string, any>[] = []
> {
    /**
     * the prompt name
     */
    readonly name: string;

    /**
     * the prompt description
     */
    readonly description: string;

    /**
     * the chat history
     */
    readonly messages: IMemory;

    /**
     * the registered functions
     */
    readonly functions: Array<Function>;

    /**
     * the chat model
     */
    plugins: TChatPromptPlugins;
    /**
     * add another chat prompt as a
     */
    use(prompt: IChatPrompt): this;
    use(name: string, prompt: IChatPrompt): this;

    /**
     * add a function that can be called
     * by the model
     */
    function(name: string, description: string, handler: FunctionHandler): this;
    function(name: string, description: string, parameters: Schema, handler: FunctionHandler): this;

    usePlugin<TPluginName extends TChatPromptPlugins[number]['name']>(
        name: TPluginName,
        args: Extract<TChatPromptPlugins[number], { name: TPluginName }>['onUsePlugin'] extends
            | ((args: infer U) => void)
            | undefined
            ? U
            : never
    ): this;

    /**
     * call a function
     */
    call<A extends Record<string, any>, R = any>(name: string, args?: A): Promise<R>;

    /**
     * send a message to the model and get a response
     */
    send(
        input: string | ContentPart[],
        options?: ChatPromptSendOptions<TOptions>
    ): Promise<ModelMessage<TRawReturnType>>;
}

export type ChatPromptPlugin<TPluginName extends string, TPluginUseArgs extends {}> = IAiPlugin<
    TPluginName,
    TPluginUseArgs,
    Parameters<IChatPrompt['send']>[0],
    ReturnType<IChatPrompt['send']>
> & {
    /**
     * Optionally passed in to modify the functions array that
     * is passed to the model
     * @param functions
     * @returns Functions
     */
    onBuildFunctions?: (functions: Function[]) => PromiseOrValue<Function[]>;
    /**
     * Optionally passed in to modify the system prompt before it is sent to the model.
     * @param systemPrompt The system prompt string (or undefined)
     * @returns The modified system prompt string (or undefined)
     */
    onBuildPrompt?: (systemPrompt: string | undefined) => PromiseOrValue<string | undefined>;
};