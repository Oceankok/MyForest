# MyForest

# 탄소 절감 행동 유도 앱 – "My Forest"

> **전력 사용량 → 탄소 배출량 분석 → 행동 변화 유도 → 리워드 제공**  
> 탄소를 줄일수록 당신의 숲이 자라납니다.

---

# 프로젝트 개요

**'My Forest'**는 스마트폰 앱 사용으로 인한 전력 소비를 추적하고,  
이를 탄소 배출량으로 환산한 뒤, 사용자에게 **행동 피드백과 리워드**를 제공하는 앱입니다.

환경 보호를 단순 권유가 아닌 **시각화 + 제한 + 보상**이라는 방식으로 풀어내  
실질적인 행동 변화를 유도하는 것을 목표로 합니다.

---

# 주요 기능

## 1. 전력 사용량 → 탄소 배출량 환산
- 각 앱의 전력 소모량을 기반으로 탄소배출량 계산
- 사용자 별 총 배출량, 앱별 상세 보기 제공

## 2. 행동 피드백 제공
- **일일 리포트**: 오늘의 탄소 사용량, 어제 대비 증감, 사용 시간 분석
- **알림 기능**: 특정 앱 장시간 사용 시 경고 알림

## 3. 행동 변화 유도 기능
- **앱 사용 제한 설정**: 앱별 하루 사용 시간 제한 가능
- **성과 시각화**: 탄소 절감량을 시각적으로 보여줌

## 4. 리워드 시스템 – 숲 키우기
- 사용량을 줄이면 **묘목 리워드 지급**
- 유저는 8x8 숲에 묘목을 심고 관리 가능
- 다양한 묘목 수집 → 숲 커스터마이징 가능

---

# 주요 UI 시안 (Figma)

| 화면 | 설명 |
|------|------|
| 🔗 [로그인화면](https://www.figma.com/design/iaHyiHnBtxA7E4WjsiMC7n/%EB%A1%9C%EA%B7%B8%EC%9D%B8_%ED%99%94%EB%A9%B4_%EA%B8%B0%ED%9A%8D?node-id=1-14&t=DAEPjn9Y32jitb7V-1) | 로그인페이지 |
| 🔗 [홈화면](https://www.figma.com/design/iaHyiHnBtxA7E4WjsiMC7n/%EB%A1%9C%EA%B7%B8%EC%9D%B8_%ED%99%94%EB%A9%B4_%EA%B8%B0%ED%9A%8D?node-id=6-9&t=DAEPjn9Y32jitb7V-1) | 오늘의 탄소 요약 + 주요 행동 안내 |
| 🔗 [리포트](https://www.figma.com/file/...) | 시간대별 사용량/탄소 배출 그래프 |
| 🔗 [제한 설정](https://www.figma.com/file/...) | 앱 사용 제한 기능 설정 |
| 🔗 [리워드 센터](https://www.figma.com/file/...) | 묘목 획득 현황, 목표 확인 |
| 🔗 [나의 숲](https://www.figma.com/file/...) | 8x8 숲 관리 화면 |

> 🔗 Figma 전체 링크: [https://www.figma.com/design/iaHyiHnBtxA7E4WjsiMC7n/%EB%A1%9C%EA%B7%B8%EC%9D%B8_%ED%99%94%EB%A9%B4_%EA%B8%B0%ED%9A%8D?node-id=0-1&t=DAEPjn9Y32jitb7V-1)

---

# 기획 배경

- 휴대폰 사용이 늘어나며 간접적인 탄소 배출량도 증가
- 환경 보호 메시지를 **지속적이고 재미있게 전달**할 방법 필요
- **데이터 기반 피드백 + 행동 제어 + 감성 리워드**를 조합한 형태로 접근

---

# 기술 구현(예정)

| 기능 | 구현 방식 |
|------|-----------|
| 전력 사용량 측정 | Android 전력 API, 또는 시스템 UsageStatsManager |
| 탄소량 환산 | kWh 기준 환산 공식 적용 (지역 전력 탄소계수 기반) |
| 리포트 그래프 | Chart.js / Recharts 사용 예정 |
| UI | React Native 또는 Flutter (모바일 중심) |
| 데이터 저장 | Firebase or Supabase |

---

## 🗂️ 폴더 구조 예시

```plaintext
📁 docs/
│  ├─ 기능정의서.md
│  ├─ 화면흐름도.md
│  └─ 회고.md
📁 wireframes/
│  ├─ home.png
│  ├─ report.png
│  └─ forest.png
📁 frontend/
│  └─ (추후 앱 개발 시 React Native 코드)
README.md
