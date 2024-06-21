# 프로젝트 이름

<a href="https://outsourcing-topaz.vercel.app/"><img width="150" alt="Group 33514" src="https://github.com/harry21-kr/outsourcing/assets/71476841/46207189-f068-4e16-ae0d-484f68883943"></a>

## 데모 📸

![목업이미지](https://github.com/harry21-kr/outsourcing/assets/71476841/ea1fa6f4-5dd2-4f67-a439-2e3369ebd661)


## 소개 ✨
IT핏은 사용자가 IT 직종 중 자신에게 맞는 직종을 테스트하고 추천해줍니다. 또한 결과에 따라 직군에 필요한 정보를 제공하며, 다른 유저들의 선택 TOP 3를 보여줍니다. 각 직군 페이지에서는 원하는 직군의 정보를 확인할 수 있으며, 카카오톡을 통해 정보를 공유하고 댓글을 남길 수 있습니다.

## 주요 기능 💻

1. 직종 테스트 기능

- 사용자가 질문에 답변하여 자신에게 맞는 IT 직종을 찾을 수 있는 있습니다.

2. 결과 기반 추천 기능

- 테스트 결과에 따라 적합한 직군과 필요한 영상을 추천 합니다.

3. 유저 선택 TOP 3 표시

- 다른 사용자들이 선택한 직종 중 인기 있는 TOP 3 백분율로 보여줍니다.

4. 직군 정보 페이지

- 각 직군에 대한 상세 정보를 제공합니다.

5. 카카오톡 공유 기능

- 테스트 결과와 직군 정보를 카카오톡으로 공유할 수 있습니다.

6. 댓글 기능

- 각 직군 페이지에서 댓글을 작성하고 다른 사용자와 소통할 수 있는 기능.

## 디렉토리 구조 🗂️

```lua
node_modules
public
└── images
    └── favicon.jpg
src
├── asset
│   └── font
│       ├── Pretendard-Black.subset.woff
│       ├── Pretendard-Bold.subset.woff
│       ├── Pretendard-ExtraBold.subset.woff
│       ├── Pretendard-ExtraLight.subset.woff
│       ├── Pretendard-Light.subset.woff
│       ├── Pretendard-Medium.subset.woff
│       ├── Pretendard-Regular.subset.woff
│       ├── Pretendard-SemiBold.subset.woff
│       ├── Pretendard-Thin.subset.woff
│       └── pretendardvariable.css
├── components
│   ├── Comment
│   │   ├── hooks
│   │   │   ├── mutation
│   │   │   │   └── useCommentMutation.js
│   │   │   └── query
│   │   │       └── useCommentQuery.js
│   │   ├── Comment.jsx
│   │   ├── CommentForm.jsx
│   │   ├── CommentItem.jsx
│   │   └── CommentList.jsx
│   ├── common
│   │   ├── Button
│   │   │   ├── Button.jsx
│   │   │   └── index.js
│   │   ├── Header
│   │   │   ├── Header.jsx
│   │   │   └── SideBar.jsx
│   └── ui
│       ├── Bar.js
│       ├── Box.js
│       ├── Circle.js
│       └── VideoDisplay.jsx
├── HomePage
│   ├── HomePageLayout.jsx
│   └── HomePageLayout.style.jsx
├── JobPositionPage
│   ├── JobPositionBanner.jsx
│   ├── JobPositionDetail.jsx
│   ├── JobPositionItem.jsx
│   ├── JobPositionList.jsx
│   ├── JobPositionPageLayout.jsx
│   └── JobPositionSummary.jsx
├── ResultPage
│   ├── PercentageTable.jsx
│   ├── ResultPageLayout.jsx
│   ├── SharePage.jsx
│   └── SharePage.style.jsx
├── SurveyPage
│   └── SurveyPageLayout.jsx
├── constants
│   └── index.js
├── pages
│   ├── HomePage
│   │   └── HomePage.jsx
│   ├── JobPositionPage
│   │   └── JobPositionPage.jsx
│   ├── ResultPage
│   │   └── ResultPage.jsx
│   └── SurveyPage
│       └── SurveyPage.jsx
├── routes
│   ├── Layout.jsx
│   └── Router.jsx
├── supabase
│   ├── api
│   │   ├── auth.js
│   │   ├── comments.js
│   │   ├── jopPosition.js
│   │   └── supabaseClient.js
│   ├── GlobalStyles.js
│   ├── main.jsx
│   └── Providers.jsx
.env.local
.eslintrc.cjs
.gitignore
.prettierrc
index.html
package.json
README.md
vercel.json
vite.config.js
yarn-error.log
yarn.lock
```

## 사용 기술 🛠️
<div style="display:flex; flex-wrap:wrap">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
<img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
</div>

## 배포 방법 🚀

<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

## 배포 링크 🔗

[IT핏](https://outsourcing-topaz.vercel.app/)

## 설치 및 실행 ⚙️

### 요구사항 📋

- Node.js (버전 14 이상)
- npm 또는 yarn

### 설치 🛠️

```bash
git clone https://github.com/your-repository.git
cd your-repository
yarn install
```

### 환경 변수 설정 🔧

프로젝트 루트에 .env 파일을 생성하고, .env.example 파일을 참고하여 환경 변수를 설정합니다.

- 예시 `.env 파일`

```bash
VITE_API_BASE_URL=https://your-api-url.com
VITE_LOGIN_API_BASE_URL=https://your-login-api-url.com
VITE_KAKAO_KEY=your-api-key
```

### 실행 👀

```bash
yarn dev
```

## 라이선스 📄

이 프로젝트는 [크리에이티브 커먼즈 저작자표시-비영리 4.0 국제 라이선스](https://creativecommons.org/licenses/by-nc/4.0/) 하에 배포됩니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참고하세요.

