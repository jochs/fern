# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed.client import AsyncSeedExtends, SeedExtends


@pytest.fixture
def client() -> SeedExtends:
    return SeedExtends(base_url=os.getenv("TESTS_BASE_URL", "base_url"))


@pytest.fixture
def async_client() -> AsyncSeedExtends:
    return AsyncSeedExtends(base_url=os.getenv("TESTS_BASE_URL", "base_url"))