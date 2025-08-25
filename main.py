import pandas as pd
import time
from model.model import HotelReviewTool

df = pd.read_excel('./data/hormas_data_eng_4o.xlsx')
df = df.head(10)

Tool = HotelReviewTool(df)

# analyzed_df = HotelReviewTool.Analysis(method='prompt', analyzer_prompt_number=0, analyzer_temperature=0.1, save_path='./data/Hotel_Reviews_Analyzed.xlsx')
start_time = time.time()  # 2. 메서드 실행 전 현재 시간 기록
responded_df = Tool.Respond(method='prompt', responder_prompt_number=0, responder_temperature=0.1, col_name="gpt4_a", model="gpt-4")
end_time = time.time()

execution_time = end_time - start_time
print(f"Tool.Respond 메서드 실행 시간: {execution_time:.2f}초")

responded_df.to_excel('./data/Hotel_Reviews_Responded_2.xlsx', index=False)