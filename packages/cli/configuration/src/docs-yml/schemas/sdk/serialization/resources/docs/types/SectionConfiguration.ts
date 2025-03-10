/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDocsConfig from "../../../../api/index";
import * as core from "../../../../core";
import { WithPermissions } from "./WithPermissions";
import { WithFeatureFlags } from "./WithFeatureFlags";

export const SectionConfiguration: core.serialization.ObjectSchema<
    serializers.SectionConfiguration.Raw,
    FernDocsConfig.SectionConfiguration
> = core.serialization
    .object({
        section: core.serialization.string(),
        path: core.serialization.string().optional(),
        contents: core.serialization.list(core.serialization.lazy(() => serializers.NavigationItem)),
        collapsed: core.serialization.boolean().optional(),
        slug: core.serialization.string().optional(),
        icon: core.serialization.string().optional(),
        hidden: core.serialization.boolean().optional(),
        skipSlug: core.serialization.property("skip-slug", core.serialization.boolean().optional()),
    })
    .extend(WithPermissions)
    .extend(WithFeatureFlags);

export declare namespace SectionConfiguration {
    export interface Raw extends WithPermissions.Raw, WithFeatureFlags.Raw {
        section: string;
        path?: string | null;
        contents: serializers.NavigationItem.Raw[];
        collapsed?: boolean | null;
        slug?: string | null;
        icon?: string | null;
        hidden?: boolean | null;
        "skip-slug"?: boolean | null;
    }
}
