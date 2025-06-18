
# Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## For Developers

### Structure of this Project:

```bash
invoice-parser-ui/
│
├── public/
│
├── app/
│   ├── dashboard/
│   │   └── page.jsx  
│   ├── login/
│   │   └── page.jsx
│   ├── register/
│   │   └── page.jsx
│   └── components/
│       ├── FileUploader.jsx
│       └── Header.jsx
├── .gitignore
├── index.html
└── package.json
```
- You can components if needed any in components folder.
- the first page is login page.
- Login page and Register page.(Ojasweee)
- Upload page will contain:(Paridhi)
    - 📁 File Picker	      Lets user select an invoice image (.jpg or .png)
    - 🚀 Upload Button	    Sends the selected file to the backend (POST /files/upload)
    - ✅ Success Message	  Shows "Upload successful!" or similar feedback
    - 🔐 Token Auth	        Adds JWT token to request header (Authorization: Bearer ...)
    - ⏩ Redirect         	After upload, redirect to /dashboard or show file list
- Dashboard page will contain:(Harshita)
    - 📄 View Uploaded Invoices  	A list of all the invoices the user has uploaded
    - 👀 View Invoice Details	    Click to go to /invoice/[id] to see extracted information
    - 🗑️ Delete Invoices	        Remove any uploaded invoice
    - ⏱️ See Upload Date	        Know when the invoice was uploaded
    - 🌀 (Optional) Show Status	    e.g., “Extracted” or “Pending extraction”
