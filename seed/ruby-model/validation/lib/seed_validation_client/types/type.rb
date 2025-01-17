# frozen_string_literal: true

require "ostruct"
require "json"

module SeedValidationClient
  # Defines properties with default values and validation rules.
  class Type
    # @return [Float]
    attr_reader :decimal
    # @return [Integer]
    attr_reader :even
    # @return [String]
    attr_reader :name
    # @return [OpenStruct] Additional properties unmapped to the current class definition
    attr_reader :additional_properties
    # @return [Object]
    attr_reader :_field_set
    protected :_field_set

    OMIT = Object.new

    # @param decimal [Float]
    # @param even [Integer]
    # @param name [String]
    # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
    # @return [SeedValidationClient::Type]
    def initialize(decimal:, even:, name:, additional_properties: nil)
      @decimal = decimal
      @even = even
      @name = name
      @additional_properties = additional_properties
      @_field_set = { "decimal": decimal, "even": even, "name": name }
    end

    # Deserialize a JSON object to an instance of Type
    #
    # @param json_object [String]
    # @return [SeedValidationClient::Type]
    def self.from_json(json_object:)
      struct = JSON.parse(json_object, object_class: OpenStruct)
      decimal = struct["decimal"]
      even = struct["even"]
      name = struct["name"]
      new(
        decimal: decimal,
        even: even,
        name: name,
        additional_properties: struct
      )
    end

    # Serialize an instance of Type to a JSON object
    #
    # @return [String]
    def to_json(*_args)
      @_field_set&.to_json
    end

    # Leveraged for Union-type generation, validate_raw attempts to parse the given
    #  hash and check each fields type against the current object's property
    #  definitions.
    #
    # @param obj [Object]
    # @return [Void]
    def self.validate_raw(obj:)
      obj.decimal.is_a?(Float) != false || raise("Passed value for field obj.decimal is not the expected type, validation failed.")
      obj.even.is_a?(Integer) != false || raise("Passed value for field obj.even is not the expected type, validation failed.")
      obj.name.is_a?(String) != false || raise("Passed value for field obj.name is not the expected type, validation failed.")
    end
  end
end
