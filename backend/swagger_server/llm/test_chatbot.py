from chatbot import ChatBot

def main():
    api_key = ''
    chatbot = ChatBot(api_key=api_key)
    chatbot.start_conversation()


    while True:
        user_input = input("You: ")
        if user_input.lower() == 'quit':
            print("Exiting Chatbot...")
            break
        # try:
        response = chatbot.send_prompt(user_input)
        print(f"{chatbot.CHATBOT_NAME}:{response}")
        # except Exception as e:
        #     print(f"Error: {e}")

main()