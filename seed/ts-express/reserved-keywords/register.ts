/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import { PackageService } from "./api/resources/package/service/PackageService";

export function register(
    expressApp: express.Express | express.Router,
    services: {
        package: PackageService;
    }
): void {
    (expressApp as any).use("/", services.package.toRouter());
}