/**
 * This file was auto-generated by Fern from our API Definition.
 */
import express from "express";
import { OptionalService } from "./api/resources/optional/service/OptionalService";
export declare function register(expressApp: express.Express | express.Router, services: {
    optional: OptionalService;
}): void;