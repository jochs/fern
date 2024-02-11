/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";

export const ProblemId: core.serialization.Schema<serializers.ProblemId.Raw, SeedTrace.ProblemId> = core.serialization
    .string()
    .transform({
        transform: SeedTrace.ProblemId,
        untransform: (value) => value,
    });

export declare namespace ProblemId {
    type Raw = string;
}