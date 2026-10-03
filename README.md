# 📚 Лабораторні роботи: Основи програмування (KPI)

Репозиторій для виконання та зручної здачі лабораторних робіт з курсу **«Основи програмування»** (навчальна програма [HowProgrammingWorks](https://github.com/HowProgrammingWorks)).

---

## 👤 Інформація про студента

- **Студент:** [Прізвище Ім'я По батькові]
- **Група:** [Номер групи, наприклад: ІП-xx]
- **Факультет:** [ФІОТ / ІПСА / ФПМ тощо]
- **Викладач:** [Тімур Шемседінов / ПІБ викладача]
- **GitHub:** [@ashfromsky](https://github.com/ashfromsky)

---

## 📊 Таблиця лабораторних робіт

| № | Лабораторна робота | Тема | Статус | Запуск тестів |
|:---:|:---|:---|:---:|:---|
| 01 | [**Reusable**](./Reusable) | Базовий синтаксис, функції, цикли, об'єкти, масиви | ⏳ В процесі | `npm run test:reusable` |
| 02 | [**DataTypes**](./DataTypes) | Типи даних, hoisting, передача за значенням/посиланням | ✅ Завершено | `npm run test:datatypes` |

> *При додаванні наступних лабораторних (Functions, Iteration тощо) додайте відповідну папку в корінь і запустіть `npm run install:all`.*

---

## 🚀 Швидкий старт для перевіряючого

### 1. Клонування репозиторію
```bash
git clone https://github.com/ashfromsky/kpi_op_labs.git
cd kpi_op_labs
```

### 2. Встановлення залежностей для всіх робіт
Всі залежності у підпапках встановлюються однією командою з кореня:
```bash
npm run install:all
```

### 3. Запуск автоматичних тестів
- **Перевірити всі лабораторні одразу:**
  ```bash
  npm test
  ```
- **Перевірити конкретну лабораторну:**
  ```bash
  npm test DataTypes
  # або:
  npm run test:datatypes
  npm run test:reusable
  ```
- **Запустити лінтер (ESLint) по всіх роботах:**
  ```bash
  npm run lint
  ```

---

## 🛠 Налаштування репозиторію та CI/CD

- **`.gitignore`** — повний («ультимативний») список ігнорування системних файлів, IDE (JetBrains `.idea`, VS Code, Vim), кешів Node.js (`node_modules`), Python (`__pycache__`, `venv`), C/C++ артефактів збірки та ключів/секретів.
- **GitHub Actions (`.github/workflows/ci.yml`)** — автоматична CI-перевірка при кожному `push` та `pull_request`. Автоматично сканує всі папки лабораторних та паралельно запускає тести через матрицю задач (окрема галочка для кожної лабораторної).
- **PR Template (`.github/pull_request_template.md`)** — шаблон опису для здачі роботи через Pull Request з чеклистом завдань і статусів тестів.

---

## 📝 Як здавати лабораторну роботу

1. Створити окрему гілку для нової лабораторної:
   ```bash
   git checkout -b lab/01-reusable
   ```
2. Виконати завдання у папці `Exercises/` відповідної лабораторної.
3. Перевірити роботу локально:
   ```bash
   npm run test:reusable
   ```
4. Зробити коміт і відправити у віддалений репозиторій:
   ```bash
   git add Reusable/Exercises
   git commit -m "feat(reusable): complete exercises 1-10"
   git push origin lab/01-reusable
   ```
5. Відкрити Pull Request у свій репозиторій або репозиторій курсу (GitHub Actions автоматично запустить перевірку).

---

## 📂 Структура репозиторію

```text
kpi_op_labs/
├── .github/
│   ├── workflows/ci.yml         # Автоматичний CI перевірки всіх робіт
│   └── pull_request_template.md # Шаблон здачі через Pull Request
├── scripts/
│   ├── test-labs.mjs            # Утиліта запуску тестів з кореня
│   └── install-all.mjs          # Утиліта встановлення npm залежностей
├── DataTypes/                   # Лабораторна робота 2
│   ├── Exercises/               # Виконані завдання
│   ├── JavaScript/              # Приклади коду
│   ├── Python/                  # Приклади на Python
│   ├── Solutions/               # Еталонні розв'язки
│   └── package.json
├── Reusable/                    # Лабораторна робота 1
│   ├── Exercises/               # Завдання для розв'язку
│   ├── JavaScript/              # Приклади коду
│   ├── Solutions/               # Еталонні розв'язки
│   └── package.json
├── .editorconfig                # Єдині правила форматування коду
├── .gitignore                   # Ультимативний gitignore
├── package.json                 # Головний конфіг зі скриптами автоматизації
└── README.md                    # Цей файл документації
```
