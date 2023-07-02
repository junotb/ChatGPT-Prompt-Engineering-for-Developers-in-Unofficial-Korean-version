const Guidelines = () => {
  return (
    <div className="flex items-center justify-center w-full h-full p-6">
      <div className="w-full h-full pr-2 overflow-y-scroll">
        이 비디오에서 Isa는 원하는 결과를 얻기 위해 도움이 되는 프롬프트에 대한 몇 가지 지침을 제시할 것입니다.<br />
        특히, 그녀는 프롬프트를 효과적으로 작성하는 데 도움이 되는 두 가지 주요 원칙에 대해 설명할 것입니다.<br />
        그리고 조금 뒤에 Jupyter Notebook 예제를 다룰 때, 비디오를 일시 정지하고 코드를 직접 실행하여 출력 결과를 확인하고 정확한 프롬프트를 변경하고 몇 가지 다른 변형을 시도하여 프롬프트의 입력과 출력에 대한 경험을 쌓을 것을 권장합니다.<br />
        그래서, ChatGPT와 같은 언어 모델을 사용할 때 도움이 되는 몇 가지 원칙과 전술을 개요로 설명하겠습니다.<br /><br />
        그래서, 나는 ChatGPT와 같은 언어 모델과 함께 작업하는 동안 도움이 될 몇 가지 원칙과 전술을 개요로 설명하겠습니다.<br />
        먼저 이를 전반적으로 살펴보고, 그런 다음 예제와 함께 구체적인 전술을 적용해 보겠습니다.<br />
        그리고 이러한 전술을 전체 과정 동안 계속 사용할 것입니다.<br />
        원칙에 대해서는 첫 번째 원칙은 명확하고 구체적인 지침을 작성하는 것이며, 두 번째 원칙은 모델이 생각할 시간을 주는 것입니다.<br />
        시작하기 전에 약간의 설정 작업을 해야 합니다.<br />
        이 과정에서 OpenAI Python 라이브러리를 사용하여 OpenAI API에 액세스할 것입니다.<br />
        이미 이 Python 라이브러리를 설치하지 않았다면 pip를 사용하여 설치할 수 있습니다.<br />
        pip.install.openai와 같이 설치할 수 있습니다.<br />
        실제로 저는 이미 이 패키지를 설치했으므로 설치 작업은 하지 않겠습니다.<br />
        그런 다음 OpenAI를 가져오고 OpenAI API 키를 설정해야 합니다.<br />
        이 API 키는 비밀 키입니다.<br />
        이러한 API 키는 OpenAI 웹사이트에서 얻을 수 있습니다.<br />
        그런 다음 이렇게 API 키를 설정하면 됩니다.<br />
        그리고 API 키를 설정하면 됩니다.<br />
        API 키는 환경 변수로 설정할 수도 있습니다.<br />
        이 과정에서는 이러한 작업을 수행할 필요가 없습니다.<br />
        이미 환경에 API 키가 설정되어 있기 때문에 이 코드를 실행하기만 하면 됩니다.<br />
        그래서 이 코드를 복사하고 이 코드가 어떻게 작동하는지 걱정하지 마세요.<br />
        이 과정에서는 OpenAI의 chatGPT 모델인 GPT 3.5 Turbo와 채팅 완성 엔드포인트를 사용할 것입니다.<br />
        나중에 비디오에서 채팅 완성 엔드포인트의 형식과 입력에 대해 자세히 알아보겠습니다.<br />
        그리고 지금은 이 도우미 함수를 정의하여 프롬프트 사용과 생성된 출력 확인을 쉽게 할 것입니다.<br />
        그래서 이 함수인 getCompletion을 사용하면 프롬프트를 입력으로 받고 해당 프롬프트에 대한 완성을 반환합니다.<br />
        이제 첫 번째 원칙인 명확하고 구체적인 지침 작성에 대해 자세히 알아보겠습니다.<br />
        모델이 원하는 작업을 수행하도록 하려면 가능한 한 명확하고 구체적인 지침을 제공해야 합니다.<br />
        이렇게 하면 모델이 원하는 출력으로 이끌리고 관련 없거나 잘못된 응답을 받을 확률이 줄어듭니다.<br />
        명확한 프롬프트 작성과 짧은 프롬프트 작성을 혼동하지 마세요.<br />
        많은 경우에는 더 긴 프롬프트가 모델에 대한 명확성과 문맥을 제공하여 더 자세하고 관련성 있는 출력을 얻을 수 있습니다.<br />
        명확하고 구체적인 지침을 작성하는 데 도움이 되는 첫 번째 전술은 입력의 구분 부분을 명확하게 나타내기 위해 구분자를 사용하는 것입니다.<br />
        예를 보여드리겠습니다.<br /><br />
        그래서, 저는 이 예제를 주피터 노트북에 붙여넣을 것입니다.<br />
        그래서, 우리는 단락을 가지고 있습니다.<br />
        그리고 우리가 달성하려는 작업은 이 단락을 요약하는 것입니다.<br />
        그래서, 프롬프트에서는 세 개의 역따옴표로 구분된 텍스트를 한 문장으로 요약하라고 말했습니다.<br />
        그리고 우리는 이 텍스트를 감싸는 세 개의 역따옴표를 가지고 있습니다.<br />
        그리고, 응답을 얻기 위해 우리는 getCompletion 도우미 함수를 사용하고 있습니다.<br />
        그리고 우리는 그 응답을 그냥 출력하고 있습니다.<br />
        그래서, 이것을 실행하면.<br /><br />
        보시다시피, 우리는 문장 출력을 받았고 이러한 구분자를 사용하여 모델에게 명확한 텍스트를 요약해야 할 내용을 알려주었습니다.<br />
        따라서 구분자는 특정 텍스트 조각을 나머지 프롬프트와 구분하는 명확한 구두점일 수 있습니다.<br />
        이는 삼중 백틱, 따옴표, XML 태그, 섹션 제목 등 어떤 것이든지 모델에게 별도의 섹션임을 명확히 알려주는 것입니다.<br />
        구분자를 사용하는 것은 프롬프트 주입을 피하기 위한 유용한 기술입니다.<br />
        프롬프트 주입이란 사용자가 프롬프트에 일부 입력을 추가할 수 있는 경우, 사용자의 지시사항과 충돌하는 지시사항을 모델에게 제공하여 모델이 원하는 대로 작동하는 대신 사용자의 지시사항을 따르게 만드는 것입니다.<br />
        따라서 우리가 텍스트를 요약하길 원하는 예에서 사용자 입력이 실제로 귀여운 판다 곰에 대한 시를 쓰라는 것과 같은 내용이라면 어떻게 될까요? 구분자를 사용하면 모델은 이것이 요약해야 할 텍스트임을 알고 실제로 이러한 지시사항을 요약하도록 알려주게 됩니다.<br />
        다음 전술은 구조화된 출력을 요청하는 것입니다.<br />
        모델 출력을 구문 분석하기 쉽게 만들기 위해 HTML이나 JSON과 같은 구조화된 출력을 요청하는 것이 도움이 될 수 있습니다.<br />
        다른 예를 복사해 보겠습니다.<br />
        프롬프트에서는 세 가지 가짜 책 제목과 저자, 장르와 함께 제공된 목록을 JSON 형식으로 생성하라고 말하고 있습니다.<br />
        이 예에서는 이쁘게 구조화된 JSON 형식으로 서식이 지정된 세 가지 가짜 책 제목이 있습니다.<br />
        이것의 좋은 점은 실제로 Python에서 이것을 딕셔너리나 리스트로 읽을 수 있다는 것입니다.<br />
        다음 전술은 모델에게 조건이 충족되었는지 확인하도록 요청하는 것입니다.<br />
        작업에 만족스럽지 않은 가정이 있다면 모델에게 이러한 가정을 먼저 확인하도록 지시할 수 있습니다.<br />
        그리고 그 가정이 충족되지 않으면 이를 나타내고 작업 완료 시도를 중단합니다.<br />
        예기치 않은 오류나 결과를 피하기 위해 잠재적인 예외 상황과 모델이 그것을 처리해야 할 방법도 고려해야 합니다.<br />
        이제 단락을 복사해 보겠습니다.<br />
        그리고 우리의 프롬프트를 복사해 보겠습니다.<br />
        그래서 프롬프트는 다음과 같습니다.<br />
        삼중 따옴표로 구분된 텍스트가 제공됩니다.<br />
        그 안에 지시사항의 시퀀스가 포함되어 있다면 다음 형식으로 그 지시사항을 다시 작성하고 그 단계를 작성하십시오.<br />
        텍스트에 지시사항의 시퀀스가 포함되어 있지 않으면 단순히 &quot;단계가 제공되지 않았습니다&quot;라고 작성하십시오.<br />
        이 셀을 실행하면 모델이 텍스트에서 지시사항을 추출할 수 있었습니다.<br />
        이제 동일한 프롬프트를 다른 단락에 대해 시도해 보겠습니다.<br />
        따라서 이 단락은 그저 화창한 날에 대한 설명이며 지시사항이 없습니다.<br />
        따라서 이전에 사용한 동일한 프롬프트를 가져와 이 텍스트에서 실행하면 모델이 지시사항을 추출하려고 할 것입니다.<br />
        지시사항을 찾지 못하면 &quot;단계가 제공되지 않았습니다&quot;라고 요청할 것입니다.<br />
        이제 이것을 실행해 보겠습니다.<br />
        모델은 두 번째 단락에 지시사항이 없다고 결정했습니다.<br />
        이 원칙에 대한 최종 전술은 우리가 &quot;퓨샷 프롬프팅&quot;이라고 부르는 것입니다.<br />
        이는 실제로 모델에게 원하는 작업을 수행하기 전에 작업의 성공적인 실행 예제를 제공하는 것입니다.<br />
        예를 보여드리겠습니다.<br />
        이 프롬프트에서는 모델에게 일관된 스타일로 답변하도록 지시하고 있습니다.<br />
        그래서 어린이와 조부모 사이의 대화와 같은 종류의 대화 예제가 있습니다.<br />
        그래서 어린이가 &quot;인내에 대해 가르쳐줘&quot;라고 말합니다.<br />
        조부모는 이러한 종류의 은유로 응답합니다.<br />
        그리고 우리가 모델에게 &quot;탄력에 대해 가르쳐줘&quot;라고 말하면 모델은 이 다음 지시에 대해 비슷한 어조로 응답할 것입니다.<br />
        그래서 탄력은 바람과 함께 구부러지지만 절대로 꺾이지 않는 나무와 같다는 식으로 계속됩니다.<br />
        이것이 첫 번째 원칙에 대한 네 가지 전술입니다.<br />
        즉, 모델에게 명확하고 구체적인 지시사항을 제공하는 것입니다.<br />
        두 번째 원칙은 모델이 생각할 시간을 주는 것입니다.<br />
        모델이 잘못된 결론에 도달하기 위해 서두르는 추론 오류를 범한다면, 쿼리를 다시 구성하여 모델이 최종 답변을 제공하기 전에 관련 추론의 연쇄나 시리즈를 요청하도록 해보십시오.<br />
        이를 다른 방식으로 생각해 볼 수도 있습니다.<br />
        모델에게 짧은 시간이나 적은 단어로 수행하기에 너무 복잡한 작업을 주면, 모델은 잘못된 추측을 할 가능성이 높습니다.<br />
        이는 사람에게도 동일하게 적용됩니다.<br />
        사람에게 답을 먼저 계산하지 않고 복잡한 수학 문제를 완료하라고 요청하면 그들도 오류를 범할 가능성이 높습니다.<br />
        이러한 상황에서는 모델에게 문제에 대해 더 오래 생각하도록 지시할 수 있습니다.<br />
        이는 모델이 작업에 더 많은 계산 노력을 기울이는 것을 의미합니다.<br />
        이제 두 번째 원칙에 대한 몇 가지 전술을 살펴보겠습니다.<br />
        몇 가지 예제도 함께 진행하겠습니다.<br />
        첫 번째 전술은 작업을 완료하는 데 필요한 단계를 지정하는 것입니다.<br />
        먼저, 단락을 복사해 보겠습니다.<br />
        이 단락에서는 Jack과 Jill 이야기에 대한 설명이 있습니다.<br />
        이제 프롬프트를 복사해 보겠습니다.<br />
        이 프롬프트에서는 다음 작업을 수행하라고 지시하고 있습니다.<br />
        먼저, 삼중 백틱으로 구분된 다음 텍스트를 한 문장으로 요약하십시오.<br />
        둘째, 요약을 프랑스어로 번역하십시오.<br />
        셋째, 프랑스어 요약에서 각 이름을 나열하십시오.<br />
        넷째, 다음 키를 포함하는 JSON 객체를 출력하십시오.<br />
        프랑스어 요약 및 num names.<br />
        그리고 답변을 줄 바꿈으로 구분하도록 하십시오.<br />
        그리고 우리는 이 단락을 추가합니다.<br />
        이제 이것을 실행하면 보시다시피, 요약된 텍스트가 있습니다.<br />
        그런 다음 프랑스어 번역이 있습니다.<br />
        그리고 그런 다음 이름이 있습니다.<br />
        재미있는 점은 이름에 프랑스어로 된 제목이 있습니다.<br />
        그리고 우리가 요청한 대로 JSON이 있습니다.<br /><br />
        지금은 다른 프롬프트를 보여드리겠습니다.<br />
        이 프롬프트에서는 모델의 출력 구조를 명시적으로 지정하는데 사용하는 형식을 사용하고 있습니다.<br />
        왜냐하면 이 예시에서는 이 이름의 제목이 프랑스어로 되어 있어서 우리가 원하는 것이 아닐 수도 있기 때문입니다.<br />
        만약 이 출력을 전달한다면 예측하기 어려울 수 있습니다.<br />
        때로는 이 프랑스어 제목이라고 할 수도 있고, 때로는 그냥 &quot;이름&quot;이라고 할 수도 있습니다.<br />
        그래서 이 프롬프트에서는 비슷한 것을 요청하고 있습니다.<br />
        프롬프트의 시작은 같으며, 같은 단계를 요청한 다음 모델에게 다음 형식을 사용하도록 요청합니다.<br />
        그래서 우리는 정확한 형식을 지정했습니다.<br />
        텍스트, 요약, 번역, 이름, 그리고 출력 JSON입니다.<br />
        그리고 우리는 텍스트를 요약하거나 그냥 텍스트라고 할 수도 있습니다.<br /><br />
        그리고 이것은 이전과 같은 텍스트입니다.<br />
        이제 이것을 실행해 봅시다.<br />
        보시다시피, 이것은 완성된 결과이며 모델은 우리가 요청한 형식을 사용했습니다.<br />
        이미 텍스트를 주었고, 요약, 번역, 이름, 그리고 출력 JSON을 제공했습니다.<br />
        때로는 이것은 코드와 함께 전달하기 쉬울 수 있습니다.<br />
        왜냐하면 더 표준화된 형식을 가지고 있기 때문에 예측할 수 있기 때문입니다.<br />
        또한, 이 경우에는 세 개의 역따옴표 대신에 화살괄호를 구분자로 사용했습니다.<br />
        어떤 구분자를 선택하든지 당신에게나 모델에게 의미가 있는 구분자를 선택할 수 있습니다.<br />
        다음 전략은 모델에게 결론을 서두르기 전에 자체적으로 해결책을 찾도록 지시하는 것입니다.<br />
        때로는 모델에게 명시적으로 자체적인 해결책을 추론하도록 지시할 때 더 나은 결과를 얻을 수 있습니다.<br />
        이는 사람처럼 답이 옳은지 아닌지를 말하기 전에 모델이 작업을 실제로 수행할 시간을 주는 것과 같은 개념입니다.<br />
        그래서 이 프롬프트에서는 학생의 해결책이 옳은지 아닌지를 모델에게 판단하도록 요청하고 있습니다.<br />
        먼저 수학 문제가 나오고, 그 다음에 학생의 해결책이 나옵니다.<br />
        그리고 학생의 해결책은 실제로는 옳지 않습니다.<br />
        왜냐하면 그들은 유지보수 비용을 100,000에 100x로 계산했는데, 실제로는 10x여야 합니다.<br />
        왜냐하면 1평방피트당 달러로 10달러이기 때문입니다.<br />
        여기서 x는 그들이 정의한 단열재의 크기인 평방피트입니다.<br />
        그래서 이것은 실제로는 360x에 100,000을 더한 것이어야 하고, 450x가 아니어야 합니다.<br />
        이 셀을 실행하면 모델은 학생의 해결책이 옳다고 말합니다.<br />
        그리고 학생의 해결책을 읽어보면, 실제로는 제가 이것을 잘못 계산했습니다.<br />
        이 응답을 읽어보면 옳아 보입니다.<br />
        이 줄만 읽으면 이 줄은 옳습니다.<br />
        그래서 모델은 학생과 동의했습니다.<br />
        왜냐하면 모델은 방금 제가 한 것처럼 대충 읽었기 때문입니다.<br />
        그래서 우리는 모델에게 자체적인 해결책을 찾도록 지시하고, 그 다음에 학생의 해결책과 비교하도록 수정할 수 있습니다.<br />
        그러면 이를 수행하는 프롬프트를 보여드리겠습니다.<br />
        이 프롬프트는 훨씬 더 길습니다.<br />
        이 프롬프트에서는 모델에게 다음과 같이 말합니다.<br />
        너의 작업은 학생의 해결책이 옳은지 아닌지를 판단하는 것입니다.<br />
        문제를 해결하기 위해 다음을 수행하세요.<br />
        먼저, 문제에 대한 자체적인 해결책을 찾으세요.<br />
        그런 다음, 자체적인 해결책을 학생의 해결책과 비교하고 학생의 해결책이 옳은지 아닌지를 평가하세요.<br />
        학생의 해결책이 옳은지 아닌지를 결정하지 마세요.<br />
        문제를 직접 해결하기 전까지는 학생의 해결책이 옳은지 아닌지를 결정하지 마세요.<br />
        매우 명확하게 말하면, 문제를 직접 해결하세요.<br />
        그리고 우리는 다음 형식을 사용하기 위해 같은 기교를 사용했습니다.<br />
        그래서 형식은 질문, 학생의 해결책, 실제 해결책, 그리고 해결책이 동의하는지 여부(예 또는 아니오), 그리고 학생의 등급(옳음 또는 틀림)입니다.<br /><br />
        그래서, 우리는 위에서와 같은 질문과 같은 해결책을 가지고 있습니다.
        그래서 이 셀을 실행하면...
        그래서, 보시다시피, 모델은 실제로 진행되고
        자체적으로 계산을 먼저 수행했습니다.<br />
        그리고 맞는 답을 얻었는데, 그것은 360x에 100,000을 더한 것이었고, 450x에 100,000을 더한 것이 아니었습니다.<br />
        그리고 그런 다음, 이를 학생의 해결책과 비교하라는 요청을 받으면, 모델은 둘이 동의하지 않는다는 것을 깨닫습니다.<br />
        그래서, 학생은 실제로 틀렸습니다.<br />
        이것은 모델에게 계산을 직접 수행하도록 요청하고 과제를 단계별로 분해하여 모델이 더 많은 시간을 가지고 생각할 수 있도록 하는 것이 어떻게 더 정확한 응답을 얻을 수 있는지에 대한 예입니다.
        그래서, 다음으로, 대규모 언어 모델을 사용하여 응용 프로그램을 개발하는 동안 이러한 모델의 한계 중 일부에 대해 이야기하겠습니다.<br />
        
        언어 모델은 훈련 과정에서 방대한 양의 지식에 노출되었지만, 본인이 본 정보를 완벽하게 기억하지는 못했으며, 그러므로 자신의 지식의 경계를 잘 알지 못합니다.<br />
        이는 모델이 낯선 주제에 대한 질문에 답하려고 시도하고, 그럴듯하게 들리는 것을 만들어내지만 실제로는 사실이 아닐 수 있다는 것을 의미합니다.<br />
        이러한 가공된 아이디어를 환각이라고 부릅니다.<br /><br />
        그래서, 모델이 무언가를 환각하는 경우의 예를 보여드리겠습니다.<br />
        이것은 실제 칫솔 회사의 가공된 제품 이름에 대한 설명을 모델이 만들어내는 경우의 예입니다.<br />
        그래서, 프롬프트는 &quot;보이(Boy)&quot;의 AeroGlide Ultra Slim Smart Toothbrush에 대해 알려주세요&quot;입니다.<br /><br />
        그래서 우리가 이것을 실행하면, 모델은 가짜 제품에 대한 꽤 현실적인 소리나는 설명을 제공할 것입니다.<br />
        
        이것이 꽤 위험한 이유는 실제로 꽤 현실적으로 들린다는 것입니다.<br />
        그러므로, 여러분이 자신의 응용 프로그램을 구축할 때 이러한 상황을 피하기 위해 이 노트북에서 다룬 몇 가지 기술을 사용하도록 주의하십시오.<br />
        이것은 모델의 약점이며, 우리가 적극적으로 대응하고 있는 문제입니다.<br />
        텍스트를 기반으로 모델이 답변을 생성하도록 원하는 경우, 환각을 줄이기 위한 추가 전술은 모델에게 먼저 텍스트에서 관련 인용구를 찾도록 요청한 다음, 그 인용구를 사용하여 질문에 답하도록 하는 것입니다.<br />
        답을 소스 문서로 되돌릴 수 있는 방법을 갖는 것은 환각을 줄이는 데 도움이 되는 경우가 많습니다.<br />
        그리고 여기까지입니다! 프롬프트에 대한 지침은 여기까지이며, 다음 비디오로 넘어가서 반복적인 프롬프트 개발 프로세스에 대해 이야기하겠습니다.
      </div>
    </div>
  )
}

export default Guidelines;