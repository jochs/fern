/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { Availability } from "./Availability";
import { WithDocs } from "./WithDocs";

export const WithDocsAndAvailability: core.serialization.ObjectSchema<
    serializers.WithDocsAndAvailability.Raw,
    FernIr.WithDocsAndAvailability
> = core.serialization
    .objectWithoutOptionalProperties({
        availability: Availability.optional(),
    })
    .extend(WithDocs);

export declare namespace WithDocsAndAvailability {
    export interface Raw extends WithDocs.Raw {
        availability?: Availability.Raw | null;
    }
}
