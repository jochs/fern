/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const ProblemFiles: core.serialization.ObjectSchema<serializers.ProblemFiles.Raw, SeedTrace.ProblemFiles> =
    core.serialization.object({
        solutionFile: core.serialization.lazyObject(async () => (await import("../../..")).FileInfo),
        readOnlyFiles: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).FileInfo)
        ),
    });

export declare namespace ProblemFiles {
    interface Raw {
        solutionFile: serializers.FileInfo.Raw;
        readOnlyFiles: serializers.FileInfo.Raw[];
    }
}
