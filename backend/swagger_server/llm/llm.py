from langchain_google_genai import GoogleGenerativeAI



api_key = ''
temperature = 0.5

model = GoogleGenerativeAI(model="models/text-bison-001", convert_system_message_to_human=True, google_api_key=api_key, temperature=temperature)

print(model.invoke("explain intel i7 in 3 lines"))