const ko = {
  "gsEncCostAnalysis": {
    "title": "GS E&C 원가 분석",
    "subtitle": "GAS 표준계정과 Tally 누계 보조부를 연결하여 원가를 조회하고 합산합니다. 업로드한 데이터는 현재 사용 중인 브라우저에만 저장되며, 서버에는 저장되지 않습니다.",
    "spotNotice": "계정 연결이 잘못된 경우, 「학습된 계정 매핑 초기화」를 실행한 후 파일을 다시 업로드하여 계정을 연결해 주세요.",
    "tabs": {
      "accounts": "GAS 계정체계",
      "ledger": "원가 내역",
      "summary": "요약"
    },
    "actions": {
      "uploadGas": "GAS 표준계정 업로드",
      "uploadLedger": "누계 보조부 업로드 (Excel/PDF)",
      "appendLedger": "월별 추가 import (엑셀/PDF)",
      "rematch": "한글명 재매핑",
      "clearAccounts": "전체 계정과목 삭제",
      "clearTallyMap": "학습된 계정 매핑 초기화",
      "clearLocal": "브라우저 저장 데이터 삭제",
      "exportExcel": "Excel 다운로드",
      "showMore": "더 보기 ({{shown}} / {{total}})"
    },
    "searchPlaceholder": "계정코드·계정명·적요·거래처 검색",
    "matchFilter": "매칭",
    "matchAll": "전체",
    "matchMatched": "매칭됨",
    "matchUnmatched": "미매칭",
    "summaryGroup": "합산 기준",
    "unmatched": "미매칭",
    "cellEditHint": "더블클릭하여 수정",
    "filters": {
      "periodFrom": "시작일",
      "periodTo": "종료일",
      "allPeriod": "전체",
      "item": "항목",
      "itemPlaceholder": "계정명·Cost Category·Division"
    },
    "basicInfo": {
      "title": "기본 정보",
      "hint": "기준월은 원가 내역 조회에, 환율은 원화 금액 환산에 사용됩니다. 업로드한 Excel 파일 상단에 환율이 입력되어 있으면 자동으로 반영됩니다.",
      "periodMonth": "기준월 (YYYY-MM)",
      "fxRate": "환율 (1 INR당 KRW)",
      "projectName": "프로젝트/비고"
    },
    "cols": {
      "accountCode": "계정코드",
      "nameKo": "계정명(한국어)",
      "nameEn": "계정명(원문)",
      "companyName": "법인명",
      "accountType": "계정구분",
      "voucherNo": "Voucher No.",
      "voucherDate": "Voucher Date",
      "account": "Account",
      "accountName": "Account name",
      "accountNameTally": "Account name-Tally",
      "accountNameHqEn": "Account name-HQ(English)",
      "matchedNameKo": "Account name",
      "costCategory": "Cost Category",
      "month": "Month",
      "amountInr": "Amount(INR)",
      "amountKrw": "Amount(KRW)",
      "clientName": "Client Name",
      "narration": "Narration",
      "division": "Division",
      "gsIndiaCost": "GS india",
      "gsIndia": "GS india",
      "groupLabel": "구분",
      "count": "건수",
      "share": "비중"
    },
    "summaryStrip": {
      "rows": "표시 건수",
      "inr": "합계 INR",
      "krw": "합계 KRW",
      "group": "현재 합산"
    },
    "stats": {
      "accounts": "계정 {{count}}건",
      "ledger": "{{count}}건 · 매칭 {{matched}} / 미매칭 {{unmatched}} · INR {{inr}}",
      "showingPartial": "(화면 {{shown}} / {{total}}건)"
    },
    "empty": {
      "accounts": "GAS 표준계정 엑셀을 업로드하세요.",
      "ledger": "누계 보조부(Journal) 엑셀 또는 표 형태 PDF를 업로드하세요.",
      "summary": "표시할 원가 내역이 없습니다.",
      "filtered": "조건에 맞는 데이터가 없습니다. 기간·검색을 확인해 주세요."
    },
    "success": {
      "gasLoaded": "GAS 계정 {{count}}건을 불러왔습니다.",
      "ledgerLoaded": "보조부 {{count}}건 import · 매핑 {{mapped}} / {{total}}건.",
      "rematched": "이전 누계 보조부·GAS 기준으로 한글명 재매핑했습니다. (매핑 {{mapped}} / {{total}})",
      "accountsCleared": "전체 계정과목을 삭제했습니다.",
      "tallyMapCleared": "학습된 계정 매핑을 지우고 현재 원가 행을 다시 연결했습니다. 잘못 학습된 값이 남았다면 셀을 수정한 뒤 「한글명 재매핑」을 눌러 주세요.",
      "cleared": "브라우저에 저장된 원가 분석 데이터를 삭제했습니다.",
      "excelDownloaded": "Excel 파일을 다운로드했습니다."
    },
    "errors": {
      "gasEmpty": "GAS 계정 데이터를 찾지 못했습니다. 시트 헤더(계정과목)를 확인하세요.",
      "gasFailed": "GAS 계정 파일 읽기에 실패했습니다.",
      "ledgerEmpty": "누계 보조부 데이터를 찾지 못했습니다. Voucher/Account 헤더를 확인하세요.",
      "ledgerFailed": "누계 보조부 파일 읽기에 실패했습니다.",
      "exportEmpty": "다운로드할 데이터가 없습니다. 필터를 확인하세요.",
      "exportFailed": "Excel 다운로드에 실패했습니다.",
      "pdfImageOnly": "이미지(스캔) PDF는 임포트할 수 없습니다. 글자 선택이 되는 표 PDF 또는 엑셀을 사용해 주세요.",
      "pdfNoTable": "PDF에서 Voucher/Account 표 헤더를 찾지 못했습니다. 원가내역과 같은 컬럼 헤더가 있는지 확인하세요."
    }
  }
} as const;
export default ko;
