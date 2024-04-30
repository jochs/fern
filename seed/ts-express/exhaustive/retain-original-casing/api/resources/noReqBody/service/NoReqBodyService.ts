/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedExhaustive from "../../../index";
import express from "express";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export interface NoReqBodyServiceMethods {
    getWithNoRequestBody(
        req: express.Request<never, SeedExhaustive.types.ObjectWithOptionalField, never, never>,
        res: {
            send: (responseBody: SeedExhaustive.types.ObjectWithOptionalField) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
    postWithNoRequestBody(
        req: express.Request<never, string, never, never>,
        res: {
            send: (responseBody: string) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
}

export class NoReqBodyService {
    private router;

    constructor(private readonly methods: NoReqBodyServiceMethods, middleware: express.RequestHandler[] = []) {
        this.router = express.Router({ mergeParams: true }).use(
            express.json({
                strict: false,
            }),
            ...middleware
        );
    }

    public addMiddleware(handler: express.RequestHandler): this {
        this.router.use(handler);
        return this;
    }

    public toRouter(): express.Router {
        this.router.get("", async (req, res, next) => {
            try {
                await this.methods.getWithNoRequestBody(req as any, {
                    send: async (responseBody) => {
                        res.json(
                            await serializers.types.ObjectWithOptionalField.jsonOrThrow(responseBody, {
                                unrecognizedObjectKeys: "strip",
                            })
                        );
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                console.error(error);
                if (error instanceof errors.SeedExhaustiveError) {
                    console.warn(
                        `Endpoint 'getWithNoRequestBody' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition."
                    );
                    await error.send(res);
                } else {
                    res.status(500).json("Internal Server Error");
                }
                next(error);
            }
        });
        this.router.post("", async (req, res, next) => {
            try {
                await this.methods.postWithNoRequestBody(req as any, {
                    send: async (responseBody) => {
                        res.json(
                            await serializers.noReqBody.postWithNoRequestBody.Response.jsonOrThrow(responseBody, {
                                unrecognizedObjectKeys: "strip",
                            })
                        );
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                console.error(error);
                if (error instanceof errors.SeedExhaustiveError) {
                    console.warn(
                        `Endpoint 'postWithNoRequestBody' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition."
                    );
                    await error.send(res);
                } else {
                    res.status(500).json("Internal Server Error");
                }
                next(error);
            }
        });
        return this.router;
    }
}