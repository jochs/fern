import { HttpEndpoint } from "@fern-api/ir-sdk";
import { constructHttpPath } from "@fern-api/ir-utils";

import { ErrorCollector } from "../../../ErrorCollector";
import { OpenAPIConverterContext3_1 } from "../../OpenAPIConverterContext3_1";
import { AbstractOperationConverter } from "./AbstractOperationConverter";

export declare namespace OperationConverter {
    export interface Args extends AbstractOperationConverter.Args {
        idempotent: boolean | undefined;
    }

    export interface Output extends AbstractOperationConverter.Output {
        endpoint: HttpEndpoint;
    }
}

export class OperationConverter extends AbstractOperationConverter {
    private readonly idempotent: boolean | undefined;

    constructor({ breadcrumbs, operation, method, path, idempotent }: OperationConverter.Args) {
        super({ breadcrumbs, operation, method, path });
        this.idempotent = idempotent;
    }

    public convert({
        context,
        errorCollector
    }: {
        context: OpenAPIConverterContext3_1;
        errorCollector: ErrorCollector;
    }): OperationConverter.Output | undefined {
        const httpMethod = this.convertHttpMethod();
        if (httpMethod == null) {
            return undefined;
        }

        const { group, method } =
            this.computeGroupNameAndLocationFromExtensions({ context, errorCollector }) ??
            this.computeGroupNameFromTagAndOperationId({ context, errorCollector });

        const { headers, pathParameters, queryParameters } = this.convertParameters({
            context,
            errorCollector,
            breadcrumbs: [...this.breadcrumbs, "parameters"]
        });

        const requestBody = this.convertRequestBody({
            context,
            errorCollector,
            breadcrumbs: [...this.breadcrumbs, "requestBody"],
            group,
            method
        });
        if (requestBody === null) {
            return undefined;
        }

        const response = this.convertResponseBody({
            context,
            errorCollector,
            breadcrumbs: [...this.breadcrumbs, "responses"],
            group,
            method
        });

        return {
            group,
            endpoint: {
                id: `${group?.join(".") ?? ""}.${method}`,
                displayName: this.operation.summary,
                method: httpMethod,
                name: context.casingsGenerator.generateName(method),
                baseUrl: undefined,
                path: constructHttpPath(this.path),
                pathParameters,
                queryParameters,
                headers,
                requestBody,
                sdkRequest: undefined,
                response,
                errors: [],
                auth: this.operation.security != null || context.spec.security != null,
                availability: context.getAvailability({
                    node: this.operation,
                    breadcrumbs: this.breadcrumbs,
                    errorCollector
                }),
                docs: this.operation.description,
                userSpecifiedExamples: [],
                autogeneratedExamples: [],
                idempotent: this.idempotent ?? false,
                basePath: undefined,
                fullPath: constructHttpPath(this.path),
                allPathParameters: pathParameters,
                pagination: undefined,
                transport: undefined
            },
            inlinedTypes: this.inlinedTypes
        };
    }
}
