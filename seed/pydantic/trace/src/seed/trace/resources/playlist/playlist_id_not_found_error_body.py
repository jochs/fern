# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import pydantic_v1
from .playlist_id import PlaylistId


class PlaylistIdNotFoundErrorBody_PlaylistId(pydantic_v1.BaseModel):
    value: PlaylistId
    type: typing.Literal["playlistId"] = "playlistId"


PlaylistIdNotFoundErrorBody = typing.Union[PlaylistIdNotFoundErrorBody_PlaylistId]
