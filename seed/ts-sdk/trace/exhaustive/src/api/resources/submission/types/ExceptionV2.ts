/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type ExceptionV2 =
    | SeedTrace.ExceptionV2.Generic
    | SeedTrace.ExceptionV2.Timeout
    | SeedTrace.ExceptionV2._Unknown;

export namespace ExceptionV2 {
    export interface Generic extends SeedTrace.ExceptionInfo, _Utils {
        type: "generic";
    }

    export interface Timeout extends _Utils {
        type: "timeout";
    }

    export interface _Unknown extends _Utils {
        type: void;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.ExceptionV2._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        generic: (value: SeedTrace.ExceptionInfo) => _Result;
        timeout: () => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ExceptionV2 = {
    generic: (value: SeedTrace.ExceptionInfo): SeedTrace.ExceptionV2.Generic => {
        return {
            ...value,
            type: "generic",
            _visit: function <_Result>(
                this: SeedTrace.ExceptionV2.Generic,
                visitor: SeedTrace.ExceptionV2._Visitor<_Result>,
            ) {
                return SeedTrace.ExceptionV2._visit(this, visitor);
            },
        };
    },

    timeout: (): SeedTrace.ExceptionV2.Timeout => {
        return {
            type: "timeout",
            _visit: function <_Result>(
                this: SeedTrace.ExceptionV2.Timeout,
                visitor: SeedTrace.ExceptionV2._Visitor<_Result>,
            ) {
                return SeedTrace.ExceptionV2._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.ExceptionV2._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedTrace.ExceptionV2._Unknown,
                visitor: SeedTrace.ExceptionV2._Visitor<_Result>,
            ) {
                return SeedTrace.ExceptionV2._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: SeedTrace.ExceptionV2, visitor: SeedTrace.ExceptionV2._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "generic":
                return visitor.generic(value);
            case "timeout":
                return visitor.timeout();
            default:
                return visitor._other(value as any);
        }
    },
} as const;
