# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.desktop import Desktop  # noqa: E501
from swagger_server.models.laptop import Laptop  # noqa: E501
from swagger_server.models.response import Response  # noqa: E501
from swagger_server.models.smartphone import Smartphone  # noqa: E501
from swagger_server.models.smartwatch import Smartwatch  # noqa: E501
from swagger_server.models.tablet import Tablet  # noqa: E501
from swagger_server.test import BaseTestCase


class TestDeviceController(BaseTestCase):
    """DeviceController integration test stubs"""

    def test_desktop_post(self):
        """Test case for desktop_post

        send Desktop information
        """
        body = Desktop()
        response = self.client.open(
            '/api/v1/Desktop',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_laptop_post(self):
        """Test case for laptop_post

        send laptop information
        """
        body = Laptop()
        response = self.client.open(
            '/api/v1/laptop',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_smartphone_post(self):
        """Test case for smartphone_post

        send smartphone information
        """
        body = Smartphone()
        response = self.client.open(
            '/api/v1/smartphone',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_smartwatch_post(self):
        """Test case for smartwatch_post

        send smartwatch information
        """
        body = Smartwatch()
        response = self.client.open(
            '/api/v1/smartwatch',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_tablet_post(self):
        """Test case for tablet_post

        send Tablet information
        """
        body = Tablet()
        response = self.client.open(
            '/api/v1/tablet',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
