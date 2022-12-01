const quotes = [
    {
        quote: "헛되고 헛되며 헛되고 헛되니 모든 것이 헛되도다.",
        author: "- 솔로몬",
    },
    {
        quote: "침착.",
        author: "- 안토니누스 피우스 황제",
    },
    {
        quote: "당신은 정의로우십니다. 주여. 당신의 판단은 정당합니다.",
        author: "- 마우리키우스 황제",
    },
    {
        quote: "행복하군.",
        author: "- 라파엘로 산치오",
    },
    {
        quote: "우선 잠을 편히 자야겠소.",
        author: "- 헨리 8세",
    },
    {
        quote: "그것으로 충분하다.",
        author: "- 이마누엘 칸트",
    },
    {
        quote: "폭탄은 터져서 주위에 불을 지른다!",
        author: "- 쇠렌 키르케고르",
    },
    {
        quote: "전혀 그 반대다.",
        author: "- 헨리크 입센",
    },
    {
        quote: "그래. 아주 기쁘구나.",
        author: "- 에드워드 7세",
    },
    {
        quote: "내가 할 일이 없기에 나는 살아가는 뜻이 없다.",
        author: "- 루돌프 디젤",
    },
    {
        quote: "아무것도 아니다... 아무것도 아니다...",
        author: "- 프란츠 페르디난트",
    },
    {
        quote: "안녕, 친구여 안녕. 내 가슴 속의 당신은 여전히 사랑스럽소.",
        author: "- 세르게이 예세닌",
    },
    {
        quote: "지금 몇 시인가?",
        author: "- 무스타파 케말 아타튀르크",
    },
    {
        quote: "없다.",
        author: "- 알프레트 로젠베르크",
    },
    {
        quote: "내 안경을 주시오.",
        author: "- 토마스 만",
    },
    {
        quote: "다시 볼게요. 다시 보자구요.",
        author: "- 마릴린 먼로",
    },
    {
        quote: "울 필요 없다!",
        author: "- 콘라트 아데나워",
    },
    {
        quote: "오케이. 그러지 않을게.",
        author: "- 엘비스 프레슬리",
    },
    {
        quote: "…서서히 사라지기보다는 한 번에 타버리는 것이 낫다.",
        author: "- 커트 코베인",
    },
    {
        quote: "다 끝났어. 모든 건 허무하지….",
        author: "- 프랭크 시나트라",
    },

];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;