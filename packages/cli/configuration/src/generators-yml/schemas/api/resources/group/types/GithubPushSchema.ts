/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernDefinition from "../../../index";

export interface GithubPushSchema {
    repository: string;
    license?: FernDefinition.GithubLicenseSchema;
    mode: "push";
    branch?: string;
}
