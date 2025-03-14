/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type FileUploadBodyPropertyEncoding = "exploded" | "json" | "form";
export const FileUploadBodyPropertyEncoding = {
    Exploded: "exploded",
    Json: "json",
    Form: "form",
    _visit: <R>(value: FileUploadBodyPropertyEncoding, visitor: FileUploadBodyPropertyEncoding.Visitor<R>) => {
        switch (value) {
            case FileUploadBodyPropertyEncoding.Exploded:
                return visitor.exploded();
            case FileUploadBodyPropertyEncoding.Json:
                return visitor.json();
            case FileUploadBodyPropertyEncoding.Form:
                return visitor.form();
            default:
                return visitor._other();
        }
    },
} as const;

export namespace FileUploadBodyPropertyEncoding {
    export interface Visitor<R> {
        exploded: () => R;
        json: () => R;
        form: () => R;
        _other: () => R;
    }
}
