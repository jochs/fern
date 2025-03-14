/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedObject from "../../api/index";
import * as core from "../../core";

export const ReferenceType: core.serialization.ObjectSchema<serializers.ReferenceType.Raw, SeedObject.ReferenceType> =
    core.serialization.object({
        foo: core.serialization.string(),
    });

export declare namespace ReferenceType {
    interface Raw {
        foo: string;
    }
}
