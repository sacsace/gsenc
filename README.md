# GS E&C Cost Management

MVS에서 분리한 **GS E&C 원가분석** 독립 앱입니다.  
GAS 표준계정·Tally 누계 보조부 매칭/합산은 브라우저 로컬 저장만 사용합니다.

## 실행

```bash
npm install
npm run dev
```

기본 주소: http://localhost:5174

## 구성

- `src/pages/GsEncCostAnalysis.tsx` — 화면
- `src/utils/gsEncCost*.ts` — 파싱·매칭·로컬 스토리지
- `src/utils/excelExportStyle.ts` — Excel 다운로드
- `src/locales/` — ko/en 문구
