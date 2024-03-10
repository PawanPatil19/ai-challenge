# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Laptop(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, input: str=None):  # noqa: E501
        """Laptop - a model defined in Swagger

        :param input: The input of this Laptop.  # noqa: E501
        :type input: str
        """
        self.swagger_types = {
            'input': str
        }

        self.attribute_map = {
            'input': 'input'
        }
        self._input = input

    @classmethod
    def from_dict(cls, dikt) -> 'Laptop':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Laptop of this Laptop.  # noqa: E501
        :rtype: Laptop
        """
        return util.deserialize_model(dikt, cls)

    @property
    def input(self) -> str:
        """Gets the input of this Laptop.


        :return: The input of this Laptop.
        :rtype: str
        """
        return self._input

    @input.setter
    def input(self, input: str):
        """Sets the input of this Laptop.


        :param input: The input of this Laptop.
        :type input: str
        """

        self._input = input
