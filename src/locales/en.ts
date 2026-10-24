const en = {
  "gsEncCostAnalysis": {
    "title": "GS E&C Cost Analysis",
    "subtitle": "Match GAS accounts with the Tally ledger to review and total costs. Files stay in this browser only.",
    "spotNotice": "Nothing is saved to the server. If mapping is wrong, reset learned mapping, then upload and match again.",
    "tabs": {
      "accounts": "GAS Accounts",
      "ledger": "Cost Lines",
      "summary": "Summary"
    },
    "actions": {
      "uploadGas": "Upload GAS Accounts",
      "uploadLedger": "Upload ledger / PDF",
      "appendLedger": "Append monthly import (Excel/PDF)",
      "rematch": "Rematch Korean names",
      "clearAccounts": "Delete all accounts",
      "clearTallyMap": "Reset learned mapping",
      "clearLocal": "Clear local data",
      "exportExcel": "Download Excel",
      "showMore": "Show more ({{shown}} / {{total}})"
    },
    "searchPlaceholder": "Search account, Korean name, narration, client",
    "matchFilter": "Match",
    "matchAll": "All",
    "matchMatched": "Matched",
    "matchUnmatched": "Unmatched",
    "summaryGroup": "Group by",
    "unmatched": "Unmatched",
    "cellEditHint": "Double-click to edit",
    "filters": {
      "periodFrom": "From date",
      "periodTo": "To date",
      "allPeriod": "All",
      "item": "Item",
      "itemPlaceholder": "Account / Cost Category / Division"
    },
    "basicInfo": {
      "title": "Basic information",
      "hint": "Period and FX rate filter the ledger and fill Amount(KRW) when missing. FX in the Excel header is applied automatically when found.",
      "periodMonth": "Period month (YYYY-MM)",
      "fxRate": "FX rate (KRW / INR)",
      "projectName": "Project / note"
    },
    "cols": {
      "accountCode": "Account Code",
      "nameKo": "Account Name (KO)",
      "nameEn": "Account Name (EN)",
      "companyName": "Company",
      "accountType": "Type",
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
      "groupLabel": "Group",
      "count": "Count",
      "share": "Share"
    },
    "summaryStrip": {
      "rows": "Rows",
      "inr": "Total INR",
      "krw": "Total KRW",
      "group": "Grouped by"
    },
    "stats": {
      "accounts": "{{count}} accounts",
      "ledger": "{{count}} rows · matched {{matched}} / unmatched {{unmatched}} · INR {{inr}}",
      "showingPartial": "(showing {{shown}} / {{total}})"
    },
    "empty": {
      "accounts": "Upload the GAS standard chart Excel file.",
      "ledger": "Upload cumulative ledger Excel or a text-based table PDF.",
      "summary": "No cost lines to summarize.",
      "filtered": "Nothing matches the current filters. Check the period or search."
    },
    "success": {
      "gasLoaded": "Loaded {{count}} GAS accounts.",
      "ledgerLoaded": "Imported {{count}} ledger rows · mapped {{mapped}} / {{total}}.",
      "rematched": "Korean names remapped from prior ledger and GAS. (mapped {{mapped}} / {{total}})",
      "accountsCleared": "All GAS accounts deleted.",
      "tallyMapCleared": "Cleared Tally↔HQ learned mapping and rematched ledger rows. If bad labels remain, edit cells then run Rematch.",
      "cleared": "Local cost-analysis data cleared.",
      "excelDownloaded": "Excel file downloaded."
    },
    "errors": {
      "gasEmpty": "No GAS accounts found. Check sheet headers (계정과목 / Account Code).",
      "gasFailed": "Failed to read GAS accounts file.",
      "ledgerEmpty": "No ledger rows found. Check Voucher/Account headers.",
      "ledgerFailed": "Failed to read ledger file.",
      "exportEmpty": "No rows to export. Check your filters.",
      "exportFailed": "Failed to download Excel.",
      "pdfImageOnly": "Scanned/image-only PDFs cannot be imported. Use a text-based table PDF or Excel.",
      "pdfNoTable": "Could not find a Voucher/Account table header in the PDF. Use the same column headers as Cost Lines."
    }
  }
} as const;
export default en;
