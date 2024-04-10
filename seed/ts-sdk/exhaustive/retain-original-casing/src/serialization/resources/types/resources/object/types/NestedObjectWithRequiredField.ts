/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as SeedExhaustive from "../../../../../../api";
import * as core from "../../../../../../core";
import { ObjectWithOptionalField } from "./ObjectWithOptionalField";

export const NestedObjectWithRequiredField: core.serialization.ObjectSchema<
    serializers.types.NestedObjectWithRequiredField.Raw,
    SeedExhaustive.types.NestedObjectWithRequiredField
> = core.serialization.object({
    string: core.serialization.string(),
    NestedObject: ObjectWithOptionalField,
});

export declare namespace NestedObjectWithRequiredField {
    interface Raw {
        string: string;
        NestedObject: ObjectWithOptionalField.Raw;
    }
}