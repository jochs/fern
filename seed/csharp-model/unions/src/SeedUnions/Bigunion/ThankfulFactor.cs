using System.Text.Json.Serialization;
using SeedUnions.Core;

namespace SeedUnions;

public record ThankfulFactor
{
    [JsonPropertyName("value")]
    public required string Value { get; set; }

    public override string ToString()
    {
        return JsonUtils.Serialize(this);
    }
}
