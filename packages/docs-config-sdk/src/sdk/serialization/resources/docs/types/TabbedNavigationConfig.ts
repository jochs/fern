/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const TabbedNavigationConfig: core.serialization.Schema<
    serializers.TabbedNavigationConfig.Raw,
    FernDocsConfig.TabbedNavigationConfig
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).TabbedNavigationItem));

export declare namespace TabbedNavigationConfig {
    type Raw = serializers.TabbedNavigationItem.Raw[];
}