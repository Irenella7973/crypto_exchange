ТЗ:

Есть API: 
https://documenter.getpostman.com/view/8180765/SVfTPnM8?version=latest#intro
API key: 
c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd
Из этого API использовать только методы: 
1. List of available currencies;
2. Minimal exchange amount;
3. Estimated exchange amount.
Нужно реализовать виджет для создания обмена (только фронт, реакт): 
1. Из API берется список всех валют (не использовать метод API get_all_pairs, делать 
виджет для всех возможных пар);
2. В виджете можно выбрать левую и правую валюты;
3. При выборе валют, выставлять в левом инпуте минимальную сумму обмена;
4. В правый инпут считается и подставляется значение estimated для выбранных 
валют и суммы в левом инпуте;
5. Если сумма меньше, чем минимальная, то в правый инпут пишется прочерк и 
выводится ошибка;
6. Если для estimated или для min для выбранных валют API возвращает null, 
выводить ошибку this pair is disabled now.
Макет:
https://www.figma.com/file/fzcnpN2Pm9YY8CIpWbP3NE/Frontend-Test?node-id=0%3A1
Поддержка — последние версии основных браузеров.
Дополнительно (необязательно): реализация поиска



Запуск проекта:
1) Клонирование репозитория:
git clone git@github.com:Irenella7973/crypto_exchange.git

2) Установка зависимостей:
Убедитесь, что у вас установлен Node.js и npm, затем выполните команду:
npm install

4) Настройка API ключа:
Создайте в корне проекта файл .env и перенесите в него содержимое файла .env.example

3) Запуск проекта:
Выполните команду npm run dev

Это запустит проект в режиме разработки. Откройте ваш браузер и перейдите по адресу http://localhost:5173 чтобы увидеть приложение.

