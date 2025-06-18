# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.


---


## For developers


### 🏠 Home/Login Page
- Short tagline + login/signup

### 📤 Upload Page
- Drag-and-drop zone to upload PDF (GST invoice/transport bill)
- Dropdown for language selection (Hindi, English, etc.)
- Preview of selected PDF (use PDF.js)
- “Parse Document” button to call API

### 📊 Parsed Result Viewer
- Side-by-side view:

    - Left: Original PDF preview
    - Right: Parsed structured data (JSON → formatted table)
- Editable fields (if OCR misreads)

- Download as JSON/CSV

- “Sync to Cloud” button (calls sync API)

### 📁 Document History
- Table of past uploaded documents
- Filters (by date, type, vendor)
- Option to re-download, re-edit or re-sync

### 📈 Analytics Dashboard
- Vendor-wise expense graph
- GST breakup, totals
- Month-wise chart (bar, line)


## File Structure
```
/ai-invoice-parser-frontend
├── app/
│   ├── page.jsx              🏠 Home/Login Page
│   ├── upload.jsx            📤 Upload Page
│   ├── viewer.jsx            📊 Parsed Viewer Page
│   ├── history.jsx           📁 Document History
│   ├── dashboard.jsx         📈 Analytics Dashboard
│   ├── 
├── components/
│   ├── Navbar.jsx            🔗 Top navigation bar
│   ├── FileUpload.jsx        📤 Upload button or drag-drop zone
│   ├── LanguageSelector.jsx  🌐 Dropdown for language choice
│   ├── PdfPreview.jsx        📄 PDF.js wrapper to preview PDF
│   ├── ParsedDataTable.jsx   🧾 Table view of parsed JSON
│   ├── HistoryTable.jsx      📁 Table of past uploads
│   └── DashboardCharts.jsx   📈 Charts (bar, pie, etc.)
└──── public/                 🌐 Static files (logo, dummy PDF, etc.)