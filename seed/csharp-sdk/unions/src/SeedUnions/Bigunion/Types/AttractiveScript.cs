using System.Text.Json.Serialization;
using SeedUnions.Core;

namespace SeedUnions;

public record AttractiveScript
{
    [JsonPropertyName("value")]
    public required string Value { get; set; }

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
