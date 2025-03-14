/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { EnvironmentVariable } from "./EnvironmentVariable";
import { OAuthTokenEndpoint } from "./OAuthTokenEndpoint";
import { OAuthRefreshEndpoint } from "./OAuthRefreshEndpoint";

export const OAuthClientCredentials: core.serialization.ObjectSchema<
    serializers.OAuthClientCredentials.Raw,
    FernIr.OAuthClientCredentials
> = core.serialization.objectWithoutOptionalProperties({
    clientIdEnvVar: EnvironmentVariable.optional(),
    clientSecretEnvVar: EnvironmentVariable.optional(),
    tokenPrefix: core.serialization.string().optional(),
    tokenHeader: core.serialization.string().optional(),
    scopes: core.serialization.list(core.serialization.string()).optional(),
    tokenEndpoint: OAuthTokenEndpoint,
    refreshEndpoint: OAuthRefreshEndpoint.optional(),
});

export declare namespace OAuthClientCredentials {
    export interface Raw {
        clientIdEnvVar?: EnvironmentVariable.Raw | null;
        clientSecretEnvVar?: EnvironmentVariable.Raw | null;
        tokenPrefix?: string | null;
        tokenHeader?: string | null;
        scopes?: string[] | null;
        tokenEndpoint: OAuthTokenEndpoint.Raw;
        refreshEndpoint?: OAuthRefreshEndpoint.Raw | null;
    }
}
