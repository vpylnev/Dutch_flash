<!--
Author: Valentin Pylnev
Created: 2025-2026
-->

# 🕐 Инструкция по обновлению времени

## Автоматическое обновление времени последнего изменения

Время "Last updated" в футере сайта показывает **фактическое время последнего изменения кода на GitHub**, а не время загрузки страницы в браузере.

---

## 📋 Как это работает

Перед каждым коммитом и push на GitHub нужно запустить скрипт `update_timestamp.ps1`, который:
1. Получает текущее время с компьютера
2. Обновляет timestamp в `index.html`
3. Время фиксируется в коммите и попадает на GitHub Pages

---

## 🚀 Использование

### Вариант 1: Запуск вручную (рекомендуется)

Перед каждым git commit запускайте:

```powershell
cd flash_dutch
.\update_timestamp.ps1
git add .
git commit -m "Your message"
git push
```

### Вариант 2: Автоматизация

Можно создать единый скрипт для коммита:

```powershell
# deploy.ps1
.\update_timestamp.ps1
git add .
git commit -m $args[0]
git config http.sslVerify false
git push
git config --unset http.sslVerify
```

Использование:
```powershell
.\deploy.ps1 "Add new features"
```

---

## ✅ Результат

После push на GitHub, на сайте будет отображаться:

```
📅 Last updated: December 23, 2025 at 21:24
```

Это время соответствует моменту, когда был сделан последний коммит с изменениями.

---

## 🔧 Устранение проблем

Если время не обновилось:
1. Проверьте, что скрипт запущен из папки `flash_dutch`
2. Проверьте, что `index.html` содержит строку с `id="last-update-time"`
3. После запуска скрипта должно быть сообщение: "Timestamp updated to: ..."







