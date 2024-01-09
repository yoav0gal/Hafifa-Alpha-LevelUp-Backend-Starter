# Hafifa-Alpha-First-Fastify-API

A basic Fastify starter project for the Hafifa

## חפיפת Fastify

ברוכים הבאים לחפיפת הFastify של צוות אלפא. בתרגיל זה תבנו צד שרת בסיסי ותכירו קצת יותר את Fastify.

### שלב 1 - הרצת הפרוייקט לוקאלית

#### סידור סביבת העובדה:

ודאו שיש לכם [postman](https://www.postman.com/) גם לפתוח חשבון ולהשתמש ב workSpace מהאתר שלהם זה בסדר.

#### התקנת הפורייקט:

```bash
cd C:\users\[your user]\[code projects folder]
git clone https://github.com/yoav0gal/Hafifa-Alpha-First-Fastify-API.git
cd ./Hafifa-Alpha-First-Fastify-API
```

#### הרצת הפוייקט:

`npm i`

`npm run dev`

פתחו http://localhost:3000/ ובדקו אם קיבלתם Hello Alpha!

---

### שלב 2 - פיתוח בסיסי

בשלב זה תפתחו API CURD (create, read, update, and delete) בסיסי.

תחילה קראו קצת על פעולות ה HTTP [פה](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

בקובץ alphaData (תוסיפו את עצמכם!) קיים מערך בשם members, השתמש בו לבצע את המשימות הבאות:

**את נתיבים אלו פתחו בקובץ נפדר !**

- `GET alpha/members` - החזר את כל הצוות
- `GET alpha/members/quote/(:id or :name)` - החזר את הציטוט מחבר הצוות המתאים
- `DELET alpha/members/:id` - להסיר את החבר הצוות בעל המזהה המתאים
- `POST alpha/members` - הוספת חבר חדש בדקו האם ה id קיים אם כן החזירו שגיאה, פרמטרים בגוף הבקשה.
- `PUT alpha/members/:id` - עדכן את חבר הצוות בעל המזהה המתאים
- `PATCH alpha/members/quote/(:id or :name)` - שנה את הציטוה של חבר הצוות המתאים

- `GET alpha/members?queryString` - החזר את כל חברי הצוות ממוינים לפי הפרמטרים שמתקבילים מה queryString, הוסף פרמטר נוסף שמחליט האם להחזיר תאריך לידה או שדה בשם age שיחזיר את הגיל בשנים.

---

### שלב 3 - סכמות:

- קראו [מדריך זה](https://fastify.dev/docs/v4.22.x/Reference/Type-Providers) [ומדריך זה](https://fastify.dev/docs/v4.22.x/Reference/Validation-and-Serialization/#validation-and-serialization)
- הוסיפו סכמות לנתיבים שלכם, השתמשו ב [TypeBox](https://github.com/sinclairzx81/typebox)

דגשים:

- השתמשו בStatic
- ודאו שהפרמטרים המגיעים מה queryStirng עומדים בתנאים?

---

### שלב 4 - Hooks!

הוקים הם אחד הפיצרים השימושים ביותר ב fastify.

קראו:

- [Hooks](https://fastify.dev/docs/v4.22.x/Reference/Hooks)

- [LifeCycle](https://fastify.dev/docs/v4.22.x/Reference/Lifecycle)

משימות:

- עבור כל בקשה נכנסת, בדוק האם יש בה header Alpha, אם יש תוסיף לתשובה header של king
- הוסף אבטחה על נתיב DELETE (איך שבא לך)
- הוסף לכל תושבה שדה של alpha:"best team"
- הוסף לוגר עם pino-prett לאפליקציה [(חומר קריאה)](https://fastify.dev/docs/v4.22.x/Reference/Logging)

---

### שלב 5 - plugins, decorators, encapsulation.

קראו:

- [Decorators](https://fastify.dev/docs/v4.22.x/Reference/Decorators)
- [Plugins](https://fastify.dev/docs/v4.22.x/Reference/Plugins)
- [Encapsulation](https://fastify.dev/docs/v4.22.x/Reference/Encapsulation)

**משימה:**

כתוב plugin הזדהות.
הפלאגין צריך לכלול :

`GET "/token?queryStirng` - יקח מהqueryString את הפרמטרים ויבנה אובייקט יוזר מהפרמטרים האלו, יחזיר JWT (קראו באינטרנט) של הפרטים האלו.

`Auth hook` - יבדוק האם בכל בקשה קיים טוקן תקין (תבחרו איפה לשמור) אם אין יחזיר שחסר הטוקן
במקרה ויש טוקן - עשה לו decode ותצמיד אותו לאובייקט הבקשה.

הדגם את עיקרון הEncapsulation באמצעות הplugin. צור
מצב בו `request.user` יעבוד ומצב בו לא.

---

### שלב 6 - הכירות עם פלאגינים חשובים

הכניסו לפרוייקט את הפלאגינים הבאים:

- פלאגין [autoload](https://github.com/fastify/fastify-autoload) - צרו תקיית Routs בה כל קובץ מכיל נתיבים קשורים זה לזה לדוגמה alpha, שימו לכל זה prefix של שם הקובץ.
- פלאגין [cors](https://github.com/fastify/fastify-cors) - אפשרו cors מדומיינים המכילים בתוכם alpha או delta
- פלאגין [cookie](https://github.com/fastify/fastify-cookie) - צרו נתיב ששם cookie על בקשה ונתיב אחר שמשתמש בה.
- פלאגיני [swagger](https://github.com/fastify/fastify-swagger) [וswagger-ui](https://github.com/fastify/fastify-swagger-ui) - אפשרו צפייה בדקומנטצית swagger בנתיב /docs.
