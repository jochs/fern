/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { ExampleTypeReferenceSchema } from "./ExampleTypeReferenceSchema";

export const ExampleStreamResponseSchema: core.serialization.ObjectSchema<
    serializers.ExampleStreamResponseSchema.Raw,
    FernDefinition.ExampleStreamResponseSchema
> = core.serialization.object({
    stream: core.serialization.list(ExampleTypeReferenceSchema),
});

export declare namespace ExampleStreamResponseSchema {
    export interface Raw {
        stream: (ExampleTypeReferenceSchema.Raw | undefined)[];
    }
}
