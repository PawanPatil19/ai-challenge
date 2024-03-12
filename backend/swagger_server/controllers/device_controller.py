import connexion
import six

from swagger_server.models.desktop import Desktop  # noqa: E501
from swagger_server.models.laptop import Laptop  # noqa: E501
from swagger_server.models.response import Response  # noqa: E501
from swagger_server.models.smartphone import Smartphone  # noqa: E501
from swagger_server.models.smartwatch import Smartwatch  # noqa: E501
from swagger_server.models.tablet import Tablet  # noqa: E501
from swagger_server import util
from swagger_server.llm.test_chatbot import user_input


def desktop_post(body):  # noqa: E501
    """send Desktop information

     # noqa: E501

    :param body: Desktop info
    :type body: dict | bytes

    :rtype: Response
    """
    if connexion.request.is_json:
        body = Desktop.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def laptop_post(body):  # noqa: E501
    """send laptop information

     # noqa: E501

    :param body: laptop info
    :type body: dict | bytes

    :rtype: Response
    """
    if connexion.request.is_json:
        body = Laptop.from_dict(connexion.request.get_json())  # noqa: E501
        print(body.input)
        chatbot_answer = user_input(body.input)
        response = Response(type="laptop", message=chatbot_answer)
    return response


def smartphone_post(body):  # noqa: E501
    """send smartphone information

     # noqa: E501

    :param body: smartphone info
    :type body: dict | bytes

    :rtype: Response
    """
    if connexion.request.is_json:
        body = Smartphone.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def smartwatch_post(body):  # noqa: E501
    """send smartwatch information

     # noqa: E501

    :param body: smartwatch info
    :type body: dict | bytes

    :rtype: Response
    """
    if connexion.request.is_json:
        body = Smartwatch.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def tablet_post(body):  # noqa: E501
    """send Tablet information

     # noqa: E501

    :param body: smartphone info
    :type body: dict | bytes

    :rtype: Response
    """
    if connexion.request.is_json:
        body = Tablet.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
