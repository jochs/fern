# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed.client import (
    AsyncSeedOauthClientCredentialsEnvironmentVariables,
    SeedOauthClientCredentialsEnvironmentVariables,
)


@pytest.fixture
def client() -> SeedOauthClientCredentialsEnvironmentVariables:
    return SeedOauthClientCredentialsEnvironmentVariables(base_url=os.getenv("TESTS_BASE_URL", "base_url"))


@pytest.fixture
def async_client() -> AsyncSeedOauthClientCredentialsEnvironmentVariables:
    return AsyncSeedOauthClientCredentialsEnvironmentVariables(base_url=os.getenv("TESTS_BASE_URL", "base_url"))
