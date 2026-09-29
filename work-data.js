/* work-data.js — RVH DESIGN 포트폴리오 슬라이더 & 제작과정 상세 페이지 공용 데이터
   portfolio.html(슬라이더/그리드)과 work-detail.html(상세 페이지)에서 함께 사용합니다.

   각 항목 필드:
   - category / name / year / image / blurb : 목록(슬라이더·그리드)에서 사용
   - scopeLabel : 상세페이지 상단 대괄호 라벨
   - titleEn (선택) : 상세페이지 히어로에 크게 들어가는 영문 타이틀 (없으면 name만 표시)
   - lede : 상세페이지 히어로 소개 문단
   - meta : 히어로 하단 요약 정보 [{label, value}, ...]
   - planning : 01 단계 { title, text }
   - design : 02 단계 { title, items: [{label, desc}, ...] }
   - specs : 03 단계 표 — 제작 진행 건은 실제 제작 사양, 디자인만 의뢰받은 건은 의뢰 내용
   - specsIsCommission : true면 03 단계 제목이 "제작 사양" 대신 "의뢰 내용"으로 표시됨

   specs 값 중 "확인 필요"로 되어 있는 항목은 실제 값이 확정되면 이 파일에서
   직접 채워 넣으시면 상세 페이지에 자동으로 반영됩니다.

   ※ planning / design 문구는 대표님이 주신 실제 제작 사양을 바탕으로 초안을 작성한 것으로,
      tonepaper-sachet(향기시트 단상자)만 실제 확정 카피이고 나머지 6건은 검토·수정이 필요한 초안입니다. */

const WORK_ITEMS = {
  "tonepaper-sachet": {
    category: "브랜딩 / 패키지",
    name: "의류관리기 향기시트 패키지 디자인",
    year: "2026",
    image: "images/work/work-03-tonepaper.jpg?v=2",
    imageCaption: "TONE PAPER — 향기시트 단상자 2종 (SECRET LIGHT / HOLY WOOD)",
    blurb: "리바이브하우스 의류관리기 향기시트를 담는 단상자 패키지입니다.",
    scopeLabel: "PACKAGE DESIGN — OWN BRAND",
    titleEn: "TONE PAPER",
    lede: "TONE PAPER는 의류관리기 사용 후 옷에 은은한 향을 더하는 향기시트입니다. 기능 중심으로 인식되기 쉬운 생활용품을 단순한 소모품이 아닌, 향을 선택하고 경험하는 하나의 라이프스타일 제품으로 보여주는 것을 목표로 브랜드와 패키지를 설계했습니다. 두 가지 향이 가진 서로 다른 분위기를 컬러와 그래픽으로 표현하면서도, 하나의 TONE PAPER라는 브랜드 안에서 일관된 인상을 전달하도록 디자인했습니다.",
    meta: [
      { label: "BRAND", value: "REVIVE HOUSE / TONE PAPER" },
      { label: "SCOPE", value: "패키지 디자인 · 제작" },
      { label: "LINE-UP", value: "SECRET LIGHT · HOLY WOOD" },
      { label: "CONTENTS", value: "30매입" }
    ],
    planning: {
      title: "소모품이 아닌, 향을 고르는 경험으로",
      text: "향기시트는 사용하고 버려지는 작은 소모품이지만, 고객이 제품을 처음 만나는 순간부터 향을 선택하고 옷에 사용하는 과정까지는 하나의 브랜드 경험이 될 수 있다고 생각했습니다. 그래서 단순히 제품을 담는 패키지가 아니라 두 가지 향의 분위기를 직관적으로 구분하면서도, 선물하거나 꺼내놓았을 때 하나의 제품처럼 느껴지는 패키지를 만드는 데 초점을 맞췄습니다."
    },
    design: {
      title: "보이지 않는 향을 시각적인 TONE으로",
      text: "향은 눈에 보이지 않습니다. TONE PAPER가 가진 두 가지 향의 분위기를 고객이 제품을 열기 전부터 느낄 수 있도록 컬러와 건축적 그래픽을 활용했습니다.",
      items: [
        { label: "GRAPHIC", desc: "건축의 기둥과 그 위로 드리워지는 그림자를 모티프로 사용했습니다. 빛과 그림자의 흐름을 통해 향이 옷에 은은하게 스며들고 머무는 이미지를 시각화했습니다." },
        { label: "COLOR CODE", desc: "SECRET LIGHT는 차분한 올리브 그린, HOLY WOOD는 깊이감 있는 러스트 브라운을 적용했습니다. 서로 다른 향의 성격을 명확하게 구분하면서도 채도와 톤을 절제해 하나의 브랜드 안에서 자연스럽게 연결되도록 구성했습니다." },
        { label: "TYPE", desc: "세리프 타입페이스를 중심으로 TONE의 존재감을 강조했습니다. 생활용품에서 흔히 사용되는 기능 중심의 표현을 줄이고, 향을 다루는 브랜드로서 차분하고 정제된 인상을 전달하도록 설계했습니다." },
        { label: "FINISH", desc: "절제된 컬러와 그래픽이 소재 위에서 자연스럽게 표현되도록 인쇄와 마감 역시 과도한 장식을 배제했습니다. 패키지 자체가 제품의 분위기를 전달할 수 있도록 소재의 질감과 인쇄 결과물의 균형을 고려했습니다." }
      ]
    },
    specs: {
      "규격": "가로 97 × 세로 72 × 높이 130mm",
      "소재": "아이보리지 280g",
      "인쇄 방식": "4도 인쇄 (CMYK)",
      "후가공": "없음",
      "제작 수량": "2,000개",
      "제작 기간": "4일"
    }
  },
  "matganjang": {
    category: "브랜딩 / 패키지",
    name: "푸드숲 맛간장 패키지",
    year: "",
    image: "images/work/work-01-matganjang.png",
    blurb: "푸드숲 맛간장 제품을 위한 패키지 디자인입니다.",
    scopeLabel: "PACKAGE DESIGN",
    titleEn: null,
    lede: "푸드숲 '수제 맛간장'을 담는 슬림 박스입니다. 첨가물 없이 좋은 재료로만 만든 담백한 맛을 전달하기 위해, 화려한 그래픽 대신 여백과 활자의 무게감으로 신뢰를 표현했습니다.",
    meta: [
      { label: "BRAND", value: "푸드숲" },
      { label: "SCOPE", value: "패키지 디자인 · 제작" }
    ],
    planning: {
      title: "여백과 활자만으로 담백함을 전하다",
      text: "수제로 만든 담백한 맛간장이라는 제품 특성을 전달하기 위해, 강한 그래픽 대신 여백과 서체 굵기만으로 존재감을 주는 방향을 잡았습니다."
    },
    design: {
      title: "먹빛 서체와 붉은 인장의 대비",
      items: [
        { label: "GRAPHIC", desc: "큰 붓글씨 톤의 세로쓰기 타이포그래피로 '수제 맛간장'을 정면에 강조" },
        { label: "COLOR", desc: "아이보리 바탕에 다크네이비 텍스트, 포인트로 붉은 인장(도장) 그래픽 배치" },
        { label: "PATTERN", desc: "격자무늬를 옅은 톤온톤으로 넣어 전통적이면서 과하지 않은 분위기 연출" }
      ]
    },
    specs: {
      "규격": "가로 62 × 세로 62 × 높이 207mm",
      "소재": "아이보리지 450g",
      "인쇄 방식": "별색 2도 (다크네이비 + 레드)",
      "후가공": "없음",
      "제작 수량": "2,000개",
      "제작 기간": "3일"
    }
  },
  "jeju-goods": {
    category: "브랜딩 / 패키지",
    name: "제주 숙소 굿즈 패키지 디자인",
    year: "2025",
    image: "images/work/work-05-jeju-goods.png",
    blurb: "제주 지역 숙소에서 제공하는 굿즈를 위한 패키지 디자인입니다.",
    scopeLabel: "DESIGN ONLY",
    titleEn: "JEJU",
    lede: "제주 숙소 브랜드 '오르스테이(ORRO stay)'가 투숙객에게 전하는 굿즈 구성을 담는 배송 박스 그래픽 디자인입니다. 커스텀 퍼퓸, 플레이리스트, 릴레이북 등 감성적인 구성품을 하나의 이야기로 묶어내는 데 집중했습니다.",
    meta: [
      { label: "BRAND", value: "오르스테이 (ORRO stay)" },
      { label: "SCOPE", value: "디자인 의뢰" }
    ],
    planning: {
      title: "제주에서의 하루를 상자 안에 담다",
      text: "숙소에서의 경험이 투숙 이후에도 이어지도록, 향·사진·음악·촉감으로 기억하는 굿즈 구성을 하나의 컨셉 아래 묶는 것을 목표로 기획했습니다."
    },
    design: {
      title: "여백으로 완성한 'JEJU'",
      items: [
        { label: "GRAPHIC", desc: "'JEJU'를 곡선이 있는 캘리그래피 로고타입으로 표현해 여백과 여운을 강조" },
        { label: "구성 안내", desc: "퍼퓸 · 플레이리스트 · 릴레이북 · 티백 · 포토 · 포스트카드 구성품을 박스 겉면에 영문 카피로 안내" },
        { label: "TONE", desc: "차분한 그레이 바탕에 세이지 그린 포인트 컬러로 절제된 감성 표현" }
      ]
    },
    specsIsCommission: true,
    specs: {
      "의뢰 구분": "디자인 의뢰 (제작 진행 없음)",
      "작업 범위": "제주 숙소 브랜드 '오르스테이(ORRO stay)' 굿즈 배송 박스 그래픽 디자인 — 브랜드 로고 타이포그래피, 구성품(퍼퓸/플레이리스트/릴레이북/티백/포토/포스트카드) 안내 카피 및 영문 카피라이팅"
    }
  },
  "yongneup": {
    category: "브랜딩 / 패키지",
    name: "용늪꿀벌농원 골판 박스",
    year: "",
    image: "images/work/work-02-yongneup-honeybee.png",
    blurb: "용늪꿀벌농원 제품을 위한 골판지 박스 패키지 디자인입니다.",
    scopeLabel: "PACKAGE DESIGN",
    titleEn: "YONGNEUP HONEY BEE FARM",
    lede: "KBS 인간극장에 소개된 용늪꿀벌농원의 벌꿀 제품을 담는 배송용 골판 박스입니다. 방송 출연 이력과 브랜드 로고를 한 화면에 담아, 택배로 받아보는 순간부터 신뢰가 느껴지도록 구성했습니다.",
    meta: [
      { label: "BRAND", value: "용늪꿀벌농원" },
      { label: "SCOPE", value: "패키지 디자인 · 제작" }
    ],
    planning: {
      title: "택배 상자에서도 브랜드가 보이도록",
      text: "벌꿀은 선물·재구매가 많은 제품 특성상, 박스 자체가 브랜드를 기억하게 만드는 첫 접점이 됩니다. 방송 출연이라는 신뢰 요소를 상단에 배치하고, 벌집 로고를 중심에 두어 한눈에 '꿀벌 농장'임을 알아보도록 기획했습니다."
    },
    design: {
      title: "벌집 심볼로 완성한 브랜드 마크",
      items: [
        { label: "GRAPHIC", desc: "정육각형 벌집 프레임 안에 꿀벌 실루엣을 넣은 심볼 로고로 브랜드를 상징화" },
        { label: "COLOR", desc: "크라프트 골판지 바탕에 딥그린 계열 별색 1도로 인쇄해 자연 친화적인 느낌 강조" },
        { label: "POINT", desc: "KBS 인간극장 출연 정보를 상단에 배치해 소비자 신뢰를 보강" }
      ]
    },
    specs: {
      "규격": "가로 220 × 세로 170 × 높이 315mm",
      "소재": "크라프트 골판지 (BA골)",
      "인쇄 방식": "별색 1도 (딥그린)",
      "후가공": "없음",
      "제작 수량": "2,000개",
      "제작 기간": "3일"
    }
  },
  "tonepaper-gift": {
    category: "브랜딩 / 패키지",
    name: "리바이브하우스 선물패키지",
    year: "",
    image: "images/work/work-07-tonepaper-box.jpg",
    blurb: "리바이브하우스 향기시트 제품을 위한 선물용 배송 패키지입니다.",
    scopeLabel: "PACKAGE DESIGN — OWN BRAND",
    titleEn: "TONE PAPER",
    lede: "TONE PAPER 향기시트를 담아 배송되는 겉포장 박스입니다. 내용물 단상자와 같은 서체와 로고를 겉박스에도 그대로 이어가, 택배를 받는 순간부터 언박싱까지 하나의 브랜드 경험이 되도록 설계했습니다.",
    meta: [
      { label: "BRAND", value: "REVIVE HOUSE / TONE PAPER" },
      { label: "SCOPE", value: "패키지 디자인 · 제작" }
    ],
    planning: {
      title: "언박싱 전부터 이어지는 브랜드 경험",
      text: "단상자 안에서 끝나는 게 아니라, 택배로 도착하는 겉박스부터 브랜드 톤이 이어지도록 기획했습니다. 내용물과 같은 로고와 서체를 사용해 받는 사람이 상자를 여는 순간에도 낯설지 않게 설계했습니다."
    },
    design: {
      title: "내용물과 이어지는 겉박스",
      items: [
        { label: "GRAPHIC", desc: "TONE PAPER 단상자와 동일한 세리프 로고타입을 겉박스 정면에 배치" },
        { label: "COLOR", desc: "크라프트 골판지 원지 그대로에 먹색 1도로 인쇄해 담백한 인상" },
        { label: "구성", desc: "정면은 로고 중심, 후면은 캡션만 남겨 과하지 않게 정리" }
      ]
    },
    specs: {
      "규격": "가로 275 × 세로 175 × 높이 80mm",
      "소재": "크라프트 골판지",
      "인쇄 방식": "별색 1도 (먹색)",
      "후가공": "없음",
      "제작 수량": "500개",
      "제작 기간": "확인 필요"
    }
  },
  "perfume-therapy": {
    category: "브랜딩 / 패키지",
    name: "퍼퓸 테라피 세트 디자인",
    year: "2023",
    image: "images/work/work-04-perfume-therapy.png",
    blurb: "퍼퓸 테라피 세트 제품을 위한 패키지 디자인입니다.",
    scopeLabel: "DESIGN ONLY",
    titleEn: "EDELGROUND",
    lede: "'에델그라운드(edelground)' 퍼퓸 테라피 라인의 패키지 그래픽 디자인입니다. 솔리드 퍼퓸, 바디바, 인센스 등 각기 다른 제품을 하나의 브랜드 세계관 안에서 통일감 있게 디자인했습니다.",
    meta: [
      { label: "BRAND", value: "에델그라운드 (edelground)" },
      { label: "SCOPE", value: "디자인 의뢰" }
    ],
    planning: {
      title: "밤하늘의 의식을 담은 향",
      text: "해와 달, 별 같은 천체 모티프로 '의식(ritual)'의 분위기를 표현해, 향 제품 하나하나가 작은 의례처럼 느껴지도록 기획했습니다."
    },
    design: {
      title: "셀레스티얼 모티프로 완성한 세계관",
      items: [
        { label: "GRAPHIC", desc: "태양 · 달 · 별 등 셀레스티얼 모티프를 제품별로 다르게 배치" },
        { label: "COLOR", desc: "딥브라운 · 버건디 바탕에 골드 계열 포인트로 신비로운 무드 연출" },
        { label: "구조", desc: "사쉐(Sachet) 제품은 손잡이가 있는 별 모양 다이컷 구조로 별도 제작" },
        { label: "TYPE", desc: "세리프 영문 로고타입으로 리추얼 브랜드의 정제된 이미지 강조" }
      ]
    },
    specsIsCommission: true,
    specs: {
      "의뢰 구분": "디자인 의뢰 (제작 진행 없음)",
      "작업 범위": "'에델그라운드(edelground)' 퍼퓸 테라피 라인 패키지 그래픽 디자인 — 솔리드 퍼퓸·바디바·인센스 박스 및 별도 다이컷 구조로 제작된 사쉐(Sachet) 패키지 디자인"
    }
  },
  "boardgame": {
    category: "브랜딩 / 패키지",
    name: "어린이 보드게임 박스 디자인",
    year: "2025",
    image: "images/work/work-06-boardgame.png",
    blurb: "어린이용 보드게임 제품을 위한 박스 패키지 디자인입니다.",
    scopeLabel: "DESIGN ONLY",
    titleEn: "CHUM CHUM!",
    lede: "발달장애 아동들이 직접 그린 그림을 활용한 배리어프리 보드게임 'CHUM CHUM!'의 박스 그래픽 디자인입니다. 아이들의 순수한 그림이 상업적으로도 완성도 있게 보이도록 편집하는 데 중점을 두었습니다.",
    meta: [
      { label: "BRAND", value: "CHUM CHUM!" },
      { label: "SCOPE", value: "디자인 의뢰" }
    ],
    planning: {
      title: "아이들의 그림이 상품이 되기까지",
      text: "발달장애 아동들이 그린 원화의 개성과 온기를 그대로 살리면서도, 보드게임 패키지로서 갖춰야 할 정보 구조(인원 · 시간 · 연령)를 함께 정리했습니다."
    },
    design: {
      title: "손그림의 온기를 살린 편집",
      items: [
        { label: "GRAPHIC", desc: "아동 원화 일러스트를 벡터화해 색감과 선을 다듬되 그림 특유의 손맛은 유지" },
        { label: "TYPE", desc: "통통 튀는 아웃라인 타이포로 'CHUM CHUM!' 타이틀 강조" },
        { label: "정보 설계", desc: "인원 · 소요시간 · 권장연령 아이콘을 하단에 배치해 실제 구매 정보 전달" },
        { label: "메시지", desc: "배리어프리(barrier-free) 취지를 담은 소개 문구를 후면에 함께 전달" }
      ]
    },
    specsIsCommission: true,
    specs: {
      "의뢰 구분": "디자인 의뢰 (제작 진행 없음)",
      "작업 범위": "발달장애 아동들이 직접 그린 그림을 활용한 배리어프리 보드게임 'CHUM CHUM!' 박스 그래픽 디자인 및 레이아웃 구성"
    }
  }
};
