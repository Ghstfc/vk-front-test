
## Getting Started

ode 21.1.0

First, run the development server:

```bash
npm run dev
```

Then run db-server: 
```bash
npx json-server -p [PORT] db.json # [PORT] - port you want to run it on
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Комментарии

## UI
Для UI была использована библиотека gravity-ui, удобная библиотека, имеет широкий функционал

## State-Manager
Был выбран effector, популярен в последнии годы, работал с ним, имеет хорошую интеграцию с Next.js

## Next.js
Был выбран так же потому что популярен, имел опыт работы с ним

## Что хотелось бы добавить (комментарии к задаче)
- Кажется, что динамически менять количество колонок - плохая идея, поэтому количество колонок фиксированное.
Колонки легко расширяемы за счет конфига
- Возможно получше поработать с SSR
- Убрать первоначальный флап
- Получше настроить хранение данных
- Возможно применить FSD


## P.S.
При любом исходе хочется получить комментарий о проделанной работе, хотя бы в виде ишью :))


