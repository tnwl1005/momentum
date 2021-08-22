const quotes = [
    { quote: "위대한 것은 방향을 결정하는 것이다",
      author: "니체",
    },
    
    { quote:"슬픔이 그대의 가슴으로부터 흔드는 것마다, 훨씬 좋은 것들이 그 자리를 대신할 것이다",
      author:"새는 날아가면서 뒤돌아보지않는다 중에서",
    },

    { quote: "인생의 '부'를 결정하는 기준은 '얼마나 많이 느끼고 감동하며 살았는가'이다",
      author : "책속의 한줄",
    },

    { quote :"어떤일이 일어날때는 그럴만한 이유가 있다고 생각할것",
    author :"책속의 한줄",
    },

    { quote :"과거를 내려놓고 현재를 붙잡는것",
    author :"책속의 한줄",
    },
    
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = todaysQuote.quote;
    author.innerText = `-${todaysQuote.author}-`;
    

// const str = `quote
//             author`;

// document.getElementById("quote").innerHTML=str;


//  ㄴ 화면에 명언이 나오게끔 표시 

//  *Math.random ->1~10 까지 저장한 정보들을 랜덤으로 불러오는 것. Array의 숫자만큼 불러옴
