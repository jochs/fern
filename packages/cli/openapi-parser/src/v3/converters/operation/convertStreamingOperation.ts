import { assertNever } from "@fern-api/core-utils";
import { EndpointWithExample } from "@fern-fern/openapi-ir-model/parseIr";
import { OpenAPIV3 } from "openapi-types";
import { AbstractOpenAPIV3ParserContext } from "../../AbstractOpenAPIV3ParserContext";
import { FernStreamingExtension, StreamConditionEndpoint } from "../../extensions/getFernStreamingExtension";
import { isReferenceObject } from "../../utils/isReferenceObject";
import { OperationContext } from "../contexts";
import { getApplicationJsonRequest } from "../endpoint/convertRequest";
import { convertHttpOperation } from "./convertHttpOperation";

export interface StreamingEndpoints {
    streaming: EndpointWithExample;
    nonStreaming: EndpointWithExample | undefined;
}

export function convertStreamingOperation({
    operationContext,
    context,
    streamingExtension
}: {
    operationContext: OperationContext;
    context: AbstractOpenAPIV3ParserContext;
    streamingExtension: FernStreamingExtension;
}): StreamingEndpoints | undefined {
    switch (streamingExtension.type) {
        case "stream": {
            const streamingOperation = convertHttpOperation({
                operationContext,
                context,
                streamingResponse: true
            });
            return {
                streaming: streamingOperation,
                nonStreaming: undefined
            };
        }
        case "streamCondition": {
            const streamingRequestBody = getRequestBody({
                context,
                operation: operationContext.operation,
                streamingExtension,
                isStreaming: true
            });
            const streamingResponses = getResponses({
                operation: operationContext.operation,
                response: streamingExtension.responseStream
            });
            const streamingOperation = convertHttpOperation({
                operationContext: {
                    ...operationContext,
                    operation: {
                        ...operationContext.operation,
                        requestBody: streamingRequestBody,
                        responses: streamingResponses
                    },
                    baseBreadcrumbs: [...operationContext.baseBreadcrumbs, "stream"]
                },
                context,
                streamingResponse: true,
                suffix: "stream"
            });

            const nonStreamingRequestBody = getRequestBody({
                context,
                operation: operationContext.operation,
                streamingExtension,
                isStreaming: false
            });
            const nonStreamingResponses = getResponses({
                operation: operationContext.operation,
                response: streamingExtension.response
            });
            const nonStreamingOperation = convertHttpOperation({
                operationContext: {
                    ...operationContext,
                    operation: {
                        ...operationContext.operation,
                        requestBody: nonStreamingRequestBody,
                        responses: nonStreamingResponses
                    }
                },
                context
            });

            return {
                streaming: streamingOperation,
                nonStreaming: nonStreamingOperation
            };
        }
        default:
            assertNever(streamingExtension);
    }
}

function getRequestBody({
    context,
    operation,
    streamingExtension,
    isStreaming
}: {
    context: AbstractOpenAPIV3ParserContext;
    operation: OpenAPIV3.OperationObject;
    streamingExtension: StreamConditionEndpoint;
    isStreaming: boolean;
}): OpenAPIV3.RequestBodyObject | undefined {
    if (operation.requestBody == null) {
        return undefined;
    }

    const resolvedRequestBody = isReferenceObject(operation.requestBody)
        ? context.resolveRequestBodyReference(operation.requestBody)
        : operation.requestBody;

    const applicationJsonRequest = getApplicationJsonRequest(resolvedRequestBody);

    if (applicationJsonRequest == null) {
        return undefined;
    }

    const resolvedRequstBodySchema = isReferenceObject(applicationJsonRequest.schema)
        ? context.resolveSchemaReference(applicationJsonRequest.schema)
        : applicationJsonRequest.schema;

    if (resolvedRequstBodySchema.allOf == null && resolvedRequstBodySchema.properties == null) {
        return undefined; // not an object
    }

    const requestBodySchemaWithLiteralProperty: OpenAPIV3.SchemaObject = {
        ...resolvedRequstBodySchema,
        properties: {
            ...resolvedRequstBodySchema.properties,
            [streamingExtension.streamConditionProperty]: {
                type: "boolean",
                "x-fern-boolean-literal": isStreaming
            } as OpenAPIV3.SchemaObject
        },
        required: [...(resolvedRequstBodySchema.required ?? []), streamingExtension.streamConditionProperty]
    };

    return {
        content: {
            "application/json": {
                schema: requestBodySchemaWithLiteralProperty
            }
        }
    };
}

function getResponses({
    operation,
    response
}: {
    operation: OpenAPIV3.OperationObject;
    response: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject;
}): OpenAPIV3.ResponsesObject {
    return {
        ...operation.responses,
        "200": {
            description: "",
            content: {
                "application/json": {
                    schema: response
                }
            }
        } as OpenAPIV3.ResponseObject
    };
}