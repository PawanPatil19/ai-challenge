

api_key = ''

from langchain import PromptTemplate, HuggingFaceHub, LLMChain


template = """Question: {question}

Answer: Let's think step by step."""
prompt = PromptTemplate(template=template, input_variables=["question"])

question = "what is a cpu core?"

llm=HuggingFaceHub(repo_id="bigscience/bloom", model_kwargs={"temperature":1e-10},huggingfacehub_api_token= api_key)
llm_chain = LLMChain(prompt=prompt, llm=llm)



print(llm_chain.run(question))