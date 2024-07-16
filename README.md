# ofd.ru
[![npm](https://img.shields.io/npm/v/ofd.ru)](https://npmjs.com/package/ofd.ru)
[![npm package minimized gzipped size](https://deno.bundlejs.com/?q=ofd.ru&badge=detailed&badge-style=for-the-badge)](https://bundlejs.com/?q=ofd.ru)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/MonsterDeveloper/ofd.ru/publish-to-npm.yml)](https://github.com/MonsterDeveloper/ofd.ru/actions/workflows/publish-to-npm.yml)
[![GitHub](https://img.shields.io/github/license/MonsterDeveloper/ofd.ru)](https://github.com/MonsterDeveloper/ofd.ru/blob/main/LICENSE)


API клиент для работы с [OFD.RU](https://ofd.ru/razrabotchikam). На данный момент поддерживается только работа с API Ferma.

## Использование

### Установка
<img height="18" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/npm.svg"> npm

```bash
npm i ofd.ru
```
<details>
  <summary>Другие менеджеры пакетов</summary>

  <img height="18" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/pnpm.svg"> pnpm

  ```bash
  pnpm add ofd.ru
  ```

  <img height="18" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/yarn.svg"> Yarn

  ```bash
  yarn add ofd.ru
  ```

  <img height="18" src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/bun.svg"> bun

  ```bash
  bun add ofd.ru
  ```
</details>

Библиотека требует Node.js версии 18 и выше, либо другой соответствующей среды исполнения, в которой доступен [`fetch` API](https://developer.mozilla.org/en-US/docs/Web/API/fetch).

### Пример
```typescript
import { Ferma } from "ofd.ru";

const ferma = new Ferma({
  login: "<ваш API логин Ferma>",
  password: "<ваш API пароль Ferma>",
});

// Создать чек
const receiptId = await ferma.createReceipt({
  Inn: "<ИНН>",
  /// ...
})
```