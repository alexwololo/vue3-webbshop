## ant design

npm install ant-design-vue

## ändra main.js

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp(App).use(Antd).mount("#app");

## ant icons

npm install @ant-design/icons-vue
_ELLER_
npm install --save @ant-design/icons

## sedan ...

För att använda ikoner i Vue 3 med hjälp av Ant Design, behöver du först lägga till Ant Design som en dependency i din projektmapp. Det kan göras genom att skriva följande kommando i din terminal:

npm install ant-design-vue --save
Sedan behöver du importera ikonbiblioteket i din Vue-komponent. Det kan göras genom att lägga till följande rad i din komponentens script-del:

import { Icon } from 'ant-design-vue'
Efter det, måste du registrera ikonkomponenten som en global komponent i din Vue-instans eller din Vuex Store. Det kan göras genom att lägga till följande rad i din komponentens script-del:

Vue.use(Icon)
Nu kan du använda ikonerna i din komponent genom att använda taggen <a-icon> och specificera vilken ikon du vill använda genom att använda propset "type".
Ett exempel:

<a-icon type="smile" />
Du kan också använda ikonerna som komponenter i en <template> block.

<template>
  <a-icon type="smile" />
</template>
Ant Design har ett stort utbud av ikoner, så se till att kolla deras dokumentation för att hitta den ikon du behöver.

https://codesandbox.io/s/k7qer1?file=/src/Demo.vue:572-643
