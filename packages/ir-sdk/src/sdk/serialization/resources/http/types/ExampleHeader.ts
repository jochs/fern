/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { NameAndWireValue } from "../../commons/types/NameAndWireValue";

export const ExampleHeader: core.serialization.ObjectSchema<serializers.ExampleHeader.Raw, FernIr.ExampleHeader> =
    core.serialization.objectWithoutOptionalProperties({
        name: NameAndWireValue,
        value: core.serialization.lazyObject(() => serializers.ExampleTypeReference),
    });

export declare namespace ExampleHeader {
    export interface Raw {
        name: NameAndWireValue.Raw;
        value: serializers.ExampleTypeReference.Raw;
    }
}
