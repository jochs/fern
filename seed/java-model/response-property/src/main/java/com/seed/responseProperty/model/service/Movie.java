/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.responseProperty.model.service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.responseProperty.core.ObjectMappers;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = Movie.Builder.class)
public final class Movie {
    private final String id;

    private final String name;

    private Movie(String id, String name) {
        this.id = id;
        this.name = name;
    }

    @JsonProperty("id")
    public String getId() {
        return id;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Movie && equalTo((Movie) other);
    }

    private boolean equalTo(Movie other) {
        return id.equals(other.id) && name.equals(other.name);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.id, this.name);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static IdStage builder() {
        return new Builder();
    }

    public interface IdStage {
        NameStage id(String id);

        Builder from(Movie other);
    }

    public interface NameStage {
        _FinalStage name(String name);
    }

    public interface _FinalStage {
        Movie build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements IdStage, NameStage, _FinalStage {
        private String id;

        private String name;

        private Builder() {}

        @java.lang.Override
        public Builder from(Movie other) {
            id(other.getId());
            name(other.getName());
            return this;
        }

        @java.lang.Override
        @JsonSetter("id")
        public NameStage id(String id) {
            this.id = Objects.requireNonNull(id, "id must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("name")
        public _FinalStage name(String name) {
            this.name = Objects.requireNonNull(name, "name must not be null");
            return this;
        }

        @java.lang.Override
        public Movie build() {
            return new Movie(id, name);
        }
    }
}
