# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from .color import Color
from .operand import Operand

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class ColorOrOperand_Color(pydantic.BaseModel):
    type: typing.Literal["color"]
    value: Color

    class Config:
        frozen = True
        smart_union = True


class ColorOrOperand_Operand(pydantic.BaseModel):
    type: typing.Literal["operand"]
    value: Operand

    class Config:
        frozen = True
        smart_union = True


ColorOrOperand = typing.Union[ColorOrOperand_Color, ColorOrOperand_Operand]