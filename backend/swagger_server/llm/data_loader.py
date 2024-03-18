#pip install langchain langchain-community chromadb jq
#pip install langchain langchain-community langchain-openai chromadb jq
#pip install sentence-transformers
#pip install jq
from json_loader import JSONLoader
from langchain.embeddings.sentence_transformer import SentenceTransformerEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains import RetrievalQA

#how to import the JSONLoader class from the json_loader.py file


import google.generativeai as genai

# from pydantic import BaseModel as PydanticBaseModel

# class BaseModel(PydanticBaseModel):
#     class Config:
#         arbitrary_types_allowed = True

# class Model(BaseModel):
#     x: MyClass


api_key = 'AIzaSyDpFWQE9Oo5NM5VK-ZIdEgKnNGjZE35VRs'

genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-pro')

file_path='laptops.json'
loader = JSONLoader(file_path=file_path)
data = loader.load()

def split_text(data, chunk_size=10000, chunk_overlap=100):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)
    docs = text_splitter.split_documents(data)
    return docs

docs = split_text(data)

embedding_function = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")


db = Chroma.from_documents(docs, embedding_function)


query = "how heavy is the Lenovo IdeaPad Slim 5 16 "

chain = RetrievalQA(model, db, return_source_documents=True)

result = qa_chain(query)

print(result)