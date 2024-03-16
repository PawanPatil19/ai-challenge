
import google.generativeai as genai
from IPython.display import display


api_key = 'AIzaSyDpFWQE9Oo5NM5VK-ZIdEgKnNGjZE35VRs'

genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-pro')

chat = model.start_chat(history=[])
chat



response = chat.send_message("What is the meaning of life?")
print(response.text)
print(chat.history)
result = genai.embed_content(
    model = 'models/embedding-001',
    content = chat.history)








