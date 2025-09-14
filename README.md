# BennuAI UI - Admin Dashboard

[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AliMoghtader/bennuai_ui)  
[![Dribbble](https://img.shields.io/badge/Dribbble-%23EA4C89.svg?style=for-the-badge&logo=dribbble&logoColor=white)](https://dribbble.com/shots/24967476-Admin-Dashboard-Property-Rent-Web-App)

---

## 🚀 Getting Started

To run the project locally, execute the following commands inside the **project root**:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
# Users

---
| Email                                                           | Password    | Role      |
| --------------------------------------------------------------- | ----------- | --------- |
| [ali.moghtaderj99@gmail.com](mailto:ali.moghtaderj99@gmail.com) | strongpass  | admin     |
| [bennuai@gmail.com](mailto:bennuai@gmail.com)                   | bennuaipass | superuser |

# Details
Next.js, TypeScript, Tailwind

# Description
به دلیل عدم وجود صفحه لاگین در تمپلیت انتخاب شده, این صفحه با خلاقیت شخصی طراحی و پیاده سازی شد. 
فایل لاگین در app/api/login دارای لیست کاربران دمو است تا بتوان توسط آن وارد داشبورد شد. هرکدام از پنل های داشبورد حالت های مختلف not found, error و success را شبیه سازی می کنند.
برای این کار ها state هایی تعریف شده که به طور دستی می توان ان را تغییر داد و حالت ها متفاوت را نیز مشاهده کرد.
همچنین داده های مورد استفاده عددی در فولدر data ذخیره شده اند. فایل emptydata یک آرایه خالی برای مشاهده not found و فایل numbers دارای آرایه ای از 10 عدد است.
