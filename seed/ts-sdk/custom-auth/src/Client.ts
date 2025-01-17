/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { CustomAuth } from "./api/resources/customAuth/client/Client";

export declare namespace SeedCustomAuthClient {
    interface Options {
        environment: core.Supplier<string>;
        customAuthScheme: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class SeedCustomAuthClient {
    constructor(protected readonly _options: SeedCustomAuthClient.Options) {}

    protected _customAuth: CustomAuth | undefined;

    public get customAuth(): CustomAuth {
        return (this._customAuth ??= new CustomAuth(this._options));
    }
}
