/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.pagination.resources.users.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.pagination.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = ListUsersMixedTypeCursorPaginationRequest.Builder.class)
public final class ListUsersMixedTypeCursorPaginationRequest {
    private final Optional<String> cursor;

    private final Map<String, Object> additionalProperties;

    private ListUsersMixedTypeCursorPaginationRequest(
            Optional<String> cursor, Map<String, Object> additionalProperties) {
        this.cursor = cursor;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("cursor")
    public Optional<String> getCursor() {
        return cursor;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ListUsersMixedTypeCursorPaginationRequest
                && equalTo((ListUsersMixedTypeCursorPaginationRequest) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(ListUsersMixedTypeCursorPaginationRequest other) {
        return cursor.equals(other.cursor);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.cursor);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static Builder builder() {
        return new Builder();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder {
        private Optional<String> cursor = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        public Builder from(ListUsersMixedTypeCursorPaginationRequest other) {
            cursor(other.getCursor());
            return this;
        }

        @JsonSetter(value = "cursor", nulls = Nulls.SKIP)
        public Builder cursor(Optional<String> cursor) {
            this.cursor = cursor;
            return this;
        }

        public Builder cursor(String cursor) {
            this.cursor = Optional.ofNullable(cursor);
            return this;
        }

        public ListUsersMixedTypeCursorPaginationRequest build() {
            return new ListUsersMixedTypeCursorPaginationRequest(cursor, additionalProperties);
        }
    }
}
