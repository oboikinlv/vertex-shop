# Vertex — интернет-магазин компьютерной периферии

## Контрольная работа №2

Тема: «CSS-фреймворки: разработка интерфейса на Bootstrap или альтернативном CSS-фреймворке». В данном проекте используется альтернативный CSS-фреймворк — **Tailwind CSS**.

## Используемый фреймворк

Tailwind CSS.

## Способ подключения

Tailwind подключён локально из папки `vendor/tailwindcss/`:

- `vendor/tailwindcss/tailwind.min.css`
- `vendor/tailwindcss/input.css` — исходный файл директив Tailwind

Собственный файл `css/custom.css` подключается после фреймворка для точечных стилей проекта.

## Структура проекта

```
vertex-shop/
├── index.html
├── catalog.html
├── product.html
├── order.html
├── css/
│   └── custom.css
├── images/
├── vendor/
│   └── tailwindcss/
│       ├── tailwind.min.css
│       └── input.css
├── js/
│   └── main.js
├── tailwind.config.js
├── README.md
└── .gitignore
```

## Реализованные компоненты и элементы

- Tailwind-сетка: `container`, `flex`, `grid`, `grid-cols-*`, `gap-*`, `col-span-*`;
- навигация (`navbar`-подобный блок в шапке);
- карточки товаров (`card`);
- кнопки (`btn`);
- значки (`badge`);
- сообщения (`alert` для формы);
- модальное окно (`modal`);
- форма заявки: `form-control`, `form-select`, `input-group`, `form-check`;
- дополнительный компонент: аккордеон (блок `details` на странице товара) и модальное окно характеристик.

## Функционал

- Главная страница с hero-блоком, популярными товарами и навигацией.
- Каталог товаров с адаптивной сеткой.
- Страница товара с описанием, ценой, badge, кнопками действия, аккордеоном и модальным окном.
- Форма заявки на странице `order.html` с проверкой обязательных полей.

## Студент

- ФИО: Денисов Илья Алексеевич
- Группа: ЭФБО-16-25

## GitHub Pages

Ссылка на опубликованную версию: https://oboikinlv.github.io/vertex-shop/
