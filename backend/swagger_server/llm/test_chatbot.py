from swagger_server.llm.chatbot import ChatBot

import json

def extract_from_braces(string):
    return "{" + string[string.find("{")+1:string.find("}")] + "}"


def user_input(user_input):
    api_key = ''
    chatbot = ChatBot(api_key=api_key)
    chatbot.start_conversation()

    if user_input.lower() == 'quit':
        print("Exiting Chatbot...")
        exit()

    response = chatbot.send_prompt(user_input)
    #print(f"{chatbot.CHATBOT_NAME}:{response}")
    
    resp = extract_from_braces(response)
    json_value = json.loads(resp)
    print(json_value['text'])
    return json_value['text']
