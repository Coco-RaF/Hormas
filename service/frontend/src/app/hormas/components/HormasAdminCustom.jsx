"use client";
import React, { useState } from 'react';
import Select from "react-select";
import Link from 'next/link';
import Image from "next/image";
import Loading from '@/app/_common/components/Common_Loading';
import question from '@/assets/img/icon_Question_white.png';
import { baseURL } from '@/app/layout'

const RaraAdminCustom = () => {
    const [model, setModel] = useState(null);
    const [analysisModel, setAnalysisModel] = useState(null);
    const [prompt, setPrompt] = useState(null);
    const [inputName, setInputName] = useState('');
    const [inputContact, setInputContact] = useState('');
    const [inputRetrieval, setInputRetrieval] = useState('');
    const [inputText, setInputText] = useState('');
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);
    const [userSentiment, setUserSentiment] = useState(null);
    const [userEmotion, setUserEmotion] = useState(null);
    const [userIntention, setUserIntention] = useState(null);
    const [reviewUrgency, setReviewUrgency] = useState(null);
    const [saveRating, setSaveRating] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isReady, setIsReady] = useState(false);

    const handleModelChange = (selectedOption) => {
        setModel(selectedOption);
    };
    const handleAnalysisModelChange = (selectedOption) => {
        setAnalysisModel(selectedOption);
    };
    const handlePromptChange = (selectedOption) => {
        setPrompt(selectedOption);
    };
    const handleNameChange = (event) => {
        setInputName(event.target.value);
    };
    const handleContactChange = (event) => {
        setInputContact(event.target.value);
    };
    const handleRetrievalChange = (event) => {
        setInputRetrieval(event.target.value);
    };
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };
    const reset = () => {
        setModel(null);
        setAnalysisModel(null);
        setInputName('');
        setInputContact('');
        setInputRetrieval('');
        setInputText('');
        setData(null);
    };

    const handleEx1 = () => {
        setInputName('매니저 장하렴');
        setInputContact('gkfua00@khu.ac.kr');
        setInputRetrieval('고객 매니저의 이름은 장하렴입니다.\n추가 문의사항은 이메일로 송부해주시기 바랍니다.');
        setInputText('할머니 90세 생신은 정말 멋졌습니다. 호텔 직원들, 특히 발레파킹을 도와준 직원에게 감사드립니다. 훌륭한 고객 서비스에 대해 큰 소리로 외칩니다 👏👏. 호텔은 깨끗하고, 식당은 훌륭하고 (음식 🥰), 우리 방은 깨끗합니다. 계속해서 있을 수는 없었지만, 그동안 저희는 정말 즐거웠어요. 할머니는 멋진 시간을 보냈어요. 직원분들이 할머니를 위해 특별하게 만들어 주셨어요. 호텔에 정말 감사합니다. 여러분, 특히 그 발레파킹 직원 정말 멋졌어요.');
        setData(null);
    };

    const handleEx2 = () => {
        setInputName('매니저 장하렴');
        setInputContact('gkfua00@khu.ac.kr');
        setInputRetrieval('고객 매니저의 이름은 장하렴입니다.\n추가 문의사항은 이메일로 송부해주시기 바랍니다.');
        setInputText('해당 지역에서 좋은 호텔을 선택할 수 있는 유일한 옵션 중 하나입니다. 하지만 아래층 파티로 인해 상당한 소음이 있었고 세면도구의 품질이 좋지 않았습니다. 개인 물품을 가져와서 위층 객실을 요청하는 것이 좋습니다.');
        setData(null);
    };

    const handleEx3 = () => {
        setInputName('매니저 장하렴');
        setInputContact('gkfua00@khu.ac.kr');
        setInputRetrieval('고객 매니저의 이름은 장하렴입니다.\n추가 문의사항은 이메일로 송부해주시기 바랍니다.');
        setInputText('새로운 호텔이고, 시내에 있는 원래 호텔에 묵은 적이 있는데 전혀 나쁘지 않았어요. 이번 숙박은 끔찍했고, 계속 설명하진 않겠지만 다시는 이 브랜드의 문을 두드리지 않겠다고 말하는 것으로 충분합니다. 체크인부터 하룻밤을 보내고 떠날 때까지 문제만 있었어요. 처음부터 호텔에 대한 설명과 현실 사이에 몇 가지 문제가 있었습니다.저희는 OTC 오일 쇼에 적합한 블랙 골드 스위트룸을 선택했습니다. 설명과 달리 저렴하게 마감되어 있었고 텍사스에서 가장 바쁜 고속도로 중 하나에 위치해 있어 방음 시설이 최고 수준일 거라 생각했지만 아쉽게도 아니었습니다. 조명도 작동하지 않았고, 노트북을 꽂았을 때 전원 콘센트 전체가 벽에서 떨어져 나갔습니다. 전 그냥 나갔습니다...');
        setData(null);
    };

    const handleEx4 = () => {
        setInputName('매니저 장하렴');
        setInputContact('gkfua00@khu.ac.kr');
        setInputRetrieval('고객 매니저의 이름은 장하렴입니다.\n추가 문의사항은 이메일로 송부해주시기 바랍니다.');
        setInputText("당신은 뭐가 맘에 드십니까 ...? 방에 프라이버시가 거의 없거나 전혀 없다 = 매우 아늑하다? 시끄러운 욕실 선풍기? 샤워 커튼 바닥에 갈색 반점이 있나요? 아침마다 조경사, 기차, 트럭 소리가 들린다? 석기 시대에서 나온 듯한 유람선 샤워실/화장실 크기의 욕실? 달러 스토어에 있는 고급 도자기, 은식기, 식기류? 수동 식기 세척기 = 당신? 크루즈/석기 시대 욕실에 있는 작은 거울 1개?  조미료 크기의 과일 컵, 베이글/머핀, 고급 요플레, 플로리다 최고급 OJ 1파인트가 포함된 챔피언의 조식 ? 매일 린넨 교체, 맛있는 타월 또는 피트니스 장비가 제공되지 않나요?  바로 해변에 갈 수 없나요?  이 질문 중 하나라도 '예'라고 답했다면 이 숙소가 완벽한 숙소입니다.");
        setData(null);
    };

    const handleRatingInfomation = async (rate) => {
        setSaveRating(true);
        if (model && inputText && analysisModel && data && rate) {
            try {
                const url = baseURL + "api/rara/rating/"
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        model: model.value,
                        inputText: inputText,
                        response: data.response,
                        analysis_model: analysisModel.value,
                        user_rating: rate,
                        response_method: "custom"
                    }),
                });

                if (response.ok) {
                    setIsReady(false)
                } 
            }
            catch (error) {
                console.log("Error Occur")
            }
        }
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        setData(null);
        setData2(null);
        setUserSentiment(null);
        setUserEmotion(null);
        setUserIntention(null);
        setIsSuccess(false)
        setSaveRating(false);

        if (model && analysisModel && inputText && prompt) {
            try {
                const url = baseURL + "api/rara/custom/"
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                        model: model.value,
                        analysis_model: analysisModel.value,
                        responder_name: inputName,
                        contact: inputContact,
                        retrieval: inputRetrieval,
                        inputText: inputText,
                        response_method: prompt.value,
                    }),
                });

                const result = await response.json();

                if (response.ok) {
                    if (prompt.value == "custom") {
                        setIsSuccess(true);
                        setIsLoading(false);
                        setIsReady(true)
                        setData(result["response"]);
                    }

                    if (prompt.value == "final") {
                        setIsSuccess(true);
                        setIsLoading(false);
                        setIsReady(true)
                        setUserSentiment(result["response"][0]);
                        setUserEmotion(result["response"][1]);
                        setUserIntention(result["response"][2]);
                        setData(result["response"][3]);
                        setData2(result["norm"]);
                        setReviewUrgency(result["response"][4]);
                    }
                } 

                else {
                    setIsLoading(false);
                    setData("서버 오류 또는 잘못된 요청입니다.");
                }
            } 
            
            catch (error) {
                setIsLoading(false);
                setData("요청을 보낼 수 없습니다.");
                console.error('요청을 보낼 수 없습니다.', error);
            }
        } 

        else {
            setIsLoading(false);
            setData("모델 선택 혹은 리뷰를 입력하세요.");
            console.error('모델 선택 혹은 리뷰를 입력하세요.');
        }
    }

    const responseStyle = {
        'textAlign' : (isSuccess ? "justify" : "center"),
        'fontSize' : (isSuccess ? "1.65vh" : "2.3vh"),
    };

    const modelOptions = [
        { value: 'gpt-4o-2024-05-13', label: 'OpenAI: GPT-4o 0513' },
        { value: 'gpt-4-0125-preview', label: 'OpenAI: GPT-4 turbo-0125' },
        { value: 'gpt-4-1106-preview', label: 'OpenAI: GPT-4 turbo-1106' },
        { value: 'gpt-4', label: 'OpenAI: GPT-4' },
        { value: 'gpt-3.5-turbo-1106', label: 'OpenAI: GPT-3.5 turbo extended' },
        { value: 'gpt-3.5-turbo', label: 'OpenAI: GPT-3.5 turbo' },
    ];

    const analysisModelOptions = [
        { value: 'gpt-4o-2024-05-13', label: 'OpenAI: GPT-4o 0513' },
        { value: 'gpt-4-0125-preview', label: 'OpenAI: GPT-4 turbo-0125' },
        { value: 'gpt-4-1106-preview', label: 'OpenAI: GPT-4 turbo-1106' },
        { value: 'gpt-4', label: 'OpenAI: GPT-4' },
        { value: 'gpt-3.5-turbo-1106', label: 'OpenAI: GPT-3.5 turbo extended' },
        { value: 'gpt-3.5-turbo', label: 'OpenAI: GPT-3.5 turbo' },
    ];

    const promptOptions = [
        { value: 'custom', label: 'HormAS Demo Version' },
        { value: 'final', label: 'HormAS-0505' },
    ];

    return (
        <>
            <div className='rc__inner'>
                <div className="rc__header">
                    <h1>HormAS</h1>
                </div>
                <div className='rc__extraContent'>
                    <div className='extraBox'>
                        <div className='infoBox'>
                            <div className='information'>감성(Sentiment)은 '긍정', '중립', '부정'으로 구분됩니다.</div>
                            <div className='information'>감정(Emotion)은 '행복', '슬픔', '화남', '역겨움', '공포', '조소', '놀람'으로 구분됩니다.</div>
                            <div className='information'>의도(Intention)는 '칭찬', '추천', '만족감 표출', '경험 공유', <br></br>'피드백', '항의', '불만족 표출', '타인에게 경고'로 구분됩니다.</div>
                            <div className='information'>긴급도는 리뷰에 얼마나 빠르게 대응해야하는지를 나타내는 보조적인 자료입니다.</div>
                        </div>
                        <div className='exampleBox'>
                            <div className='example' onClick={handleEx1}>긍정적 리뷰 예시</div>
                            <div className='example' onClick={handleEx2}>중립적 리뷰 예시</div>
                            <div className='example' onClick={handleEx3}>부정적 리뷰 예시</div>
                            <div className='example' onClick={handleEx4}>모호한 리뷰 예시</div>
                        </div>
                    </div>
                    <button onClick={reset}>Reset</button>
                </div>
                <div className='rc__contentBox'>
                    <div className='rc__setting'>
                        <div className="rc__selectBox">
                            <div className='rc__select'>
                                <Select
                                    options={modelOptions}
                                    value={model}
                                    onChange={handleModelChange}
                                    placeholder="답변을 생성할 모델을 선택해주세요."
                                />
                            </div>
                            <Image className="rc__questionIcon" src={question} alt="Question"/>
                            <p className='rc__arrowBox'>답변을 생성하는 과정에서 이용될 모델의 종류를 선택하세요. .</p>
                        </div>
                        <div className="rc__selectBox">
                            <div className='rc__select'>
                                <Select
                                    options={analysisModelOptions}
                                    value={analysisModel}
                                    onChange={handleAnalysisModelChange}
                                    placeholder="감성, 감정, 의도를 분석할 모델을 선택해주세요."
                                />
                            </div>
                            <Image className="rc__questionIcon" src={question} alt="Question"/>
                            <p className='rc__arrowBox'>
                                리뷰를 분석하는 과정에서 이용될 모델의 종류를 선택하세요.<br></br>
                                선택된 모델을 바탕으로 리뷰의 감성, 감정, 의도를 분류하게 됩니다. .
                            </p>
                        </div>
                        <div className="rc__selectBox">
                            <div className='rc__select'>
                                <Select
                                    options={promptOptions}
                                    value={prompt}
                                    onChange={handlePromptChange}
                                    placeholder="답변 작성의 프롬프트 종류를 선택해주세요."
                                />
                            </div>
                            <Image className="rc__questionIcon" src={question} alt="Question"/>
                            <p className='rc__arrowBox'>작성 과정에서 사용되는 프롬프트의 형식을 의미합니다.. .</p>
                        </div>
                        <div className="rc__selectBox">
                            <div className='rc__select'>
                                <textarea
                                    className="basic__textArea"
                                    placeholder="  (옵션) 답변자의 이름을 입력하세요."
                                    value={inputName}
                                    onChange={handleNameChange}
                                    rows={1}
                                />
                            </div>
                            <Image className="rc__questionIcon" src={question} alt="Question"/>
                            <p className='rc__arrowBox'>
                                답변을 제공하는 사용자명/업체명을 입력하세요.<br></br>
                                입력된 정보에 따라 인사말을 작성하게 됩니다.<br></br>
                                입력: "HR Company" <br></br>
                                답변: "Hello from HR Company, ~". .
                            </p>
                        </div>
                        <div className="rc__selectBox">
                            <div className='rc__select'>
                                <textarea
                                    className="basic__textArea"
                                    placeholder="  (옵션) 소비자가 연락을 취할 방법을 지정해주세요."
                                    value={inputContact}
                                    onChange={handleContactChange}
                                    rows={1}
                                />
                            </div>
                            <Image className="rc__questionIcon" src={question} alt="Question"/>
                            <p className='rc__arrowBox'>
                                답변을 제공하는 사용자명/업체의 연락 방법을 입력해주세요.<br></br>
                                입력된 정보에 따라서 연락 방법을 제공하게 됩니다.<br></br>
                                입력: "HRJang@hrcompany.com" <br></br>
                                답변: "If you need more help, please send an e-mail to 'HRJang@hrcompany.com' ~~". .
                            </p>
                        </div>
                        <div className="rc__selectBox">
                            <div className='rc__select'>
                                <textarea
                                    className='retrievalArea'
                                    placeholder="  (옵션) RAG기능 이용시, 참조할 문장을 입력해주세요."
                                    value={inputRetrieval}
                                    onChange={handleRetrievalChange}
                                />
                            </div>
                            <Image className="rc__questionIcon" src={question} alt="Question"/>
                            <p className='rc__arrowBox'>
                                답변 모델이 참조해야하는 정보들을 입력하세요.<br></br>
                                개별 정보는 줄바꿈을 통해 구분합니다.<br></br><br></br>
                                예시 입력:<br></br>
                                Jang is manager of HR-Hotel.<br></br>
                                Same-day refunds are not available. .
                            </p>
                        </div>
                    </div>
                    <div className='rc__textInput'>
                        <textarea
                            placeholder="리뷰를 입력해주세요."
                            value={inputText}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className='rc__submit'>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <div className="rc__result">
                {isLoading 
                ? (
                    <Loading />
                )
                : (
                    (data && data2)
                    ? ( 
                        <>
                            <div className='result__content' style={responseStyle}>
                                <div className='model__result'>
                                    <div className='model__title'>HormAS가 생성한 답변</div>
                                    <div className='result__factor'>
                                        <p>감성: {(userSentiment)}</p>
                                        <p>감정: {(userEmotion)}</p>
                                        <p>의도: {(userIntention)}</p>
                                        <p>긴급도: {(reviewUrgency)}</p>
                                    </div>
                                    <p>{(data)}</p>
                                    {isReady ? (
                                        <>
                                        {saveRating
                                            ? (
                                                <div className='result__rating'>
                                                    Thank You for Sharing Your Opinions.
                                                </div>   
                                            )
                                            : (
                                                <div className='result__rating'>
                                                    <div className='result__ratingBox' onClick={() => handleRatingInfomation(1)}>★</div>
                                                    <div className='result__ratingBox' onClick={() => handleRatingInfomation(2)}>★★</div>
                                                    <div className='result__ratingBox' onClick={() => handleRatingInfomation(3)}>★★★</div>
                                                    <div className='result__ratingBox' onClick={() => handleRatingInfomation(4)}>★★★★</div>
                                                    <div className='result__ratingBox' onClick={() => handleRatingInfomation(5)}>★★★★★</div>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <div className='model__result'>
                                    <div className='model__title'>기본 생성형 AI의 답변</div>
                                    <p>{(data2)}</p>
                                </div>
                            </div>
                            {/* {isReady ? (
                                <>
                                {saveRating
                                    ? (
                                        <div className='result__rating'>
                                            Thank You for Sharing Your Opinions.
                                        </div>   
                                    )
                                    : (
                                        <div className='result__rating'>
                                            <div className='result__ratingBox' onClick={() => handleRatingInfomation(1)}>★</div>
                                            <div className='result__ratingBox' onClick={() => handleRatingInfomation(2)}>★★</div>
                                            <div className='result__ratingBox' onClick={() => handleRatingInfomation(3)}>★★★</div>
                                            <div className='result__ratingBox' onClick={() => handleRatingInfomation(4)}>★★★★</div>
                                            <div className='result__ratingBox' onClick={() => handleRatingInfomation(5)}>★★★★★</div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <></>
                            )} */}

                        </>
                    )
                    : (
                        <div>
                            <h2>Ready</h2>
                        </div>
                    )
                )}
            </div>
            </div>
        </>
    )

};

export default RaraAdminCustom;