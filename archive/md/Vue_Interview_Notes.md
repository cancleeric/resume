# Vue.js 面試筆記 - 核心概念與常見問題

## 一、基礎概念

### 1. Vue 的響應式系統是什麼？
**問題**：Vue 的響應式原理是什麼？

**答案**：
- **Vue 2**：使用 `Object.defineProperty()` 劫持物件屬性的 getter/setter
- **Vue 3**：使用 `Proxy` 代理整個物件，支援動態新增屬性
- 當資料改變時，會通知依賴該資料的 Watcher 更新視圖
- 核心是**依賴收集**和**派發更新**的機制

```javascript
// Vue 3 響應式示例
import { reactive, ref } from 'vue'

const state = reactive({ count: 0 })  // 物件響應式
const count = ref(0)                  // 基本型別響應式
```

### 2. computed 和 watch 的差別？
**問題**：computed 計算屬性和 watch 監聽器有什麼差異？什麼時候用哪個？

**答案**：
- **computed（計算屬性）**：
  - 基於依賴資料計算，有快取機制
  - 依賴資料不變時不會重新計算
  - 適合：資料轉換、格式化、複雜計算

- **watch（監聽器）**：
  - 監聽特定資料變化，執行副作用
  - 每次資料變化都會執行
  - 適合：異步操作、API 呼叫、複雜業務邏輯

```javascript
// computed 示例
computed: {
  fullName() {
    return `${this.firstName} ${this.lastName}`  // 有快取
  }
}

// watch 示例
watch: {
  searchKeyword(newVal) {
    this.fetchSearchResults(newVal)  // 執行副作用
  }
}
```

### 3. Vue 生命週期鉤子
**問題**：Vue 元件的生命週期有哪些？各階段適合做什麼？

**答案**：
- **beforeCreate**：實例初始化後，資料觀測前
- **created**：資料觀測完成，適合初始化資料、API 呼叫
- **beforeMount**：掛載前，模板編譯完成
- **mounted**：DOM 掛載完成，適合 DOM 操作、第三方函式庫初始化
- **beforeUpdate**：資料更新前
- **updated**：DOM 更新完成
- **beforeDestroy/beforeUnmount**：銷毀前，適合清理定時器、事件監聽
- **destroyed/unmounted**：銷毀完成

```javascript
export default {
  created() {
    // 適合：初始化資料、API 呼叫
    this.fetchUserData()
  },
  mounted() {
    // 適合：DOM 操作、第三方函式庫初始化
    this.$refs.chart.initChart()
  },
  beforeDestroy() {
    // 適合：清理工作
    clearInterval(this.timer)
  }
}
```

## 二、元件化開發

### 4. 元件間通訊方式
**問題**：Vue 元件間有哪些通訊方式？

**答案**：
1. **父子通訊**：props + events
2. **跨層級通訊**：provide/inject
3. **全局狀態**：Vuex/Pinia
4. **事件匯流排**：EventBus（不推薦）
5. **Ref 引用**：$refs

```javascript
// 1. 父子通訊
// Parent.vue
<child-component :data="parentData" @update="handleUpdate" />

// Child.vue
props: ['data']
this.$emit('update', newData)

// 2. provide/inject
// 祖先元件
provide() {
  return { theme: 'dark' }
}
// 後代元件
inject: ['theme']
```

### 5. 插槽（Slots）的使用
**問題**：什麼是插槽？具名插槽和作用域插槽的差別？

**答案**：
- **預設插槽**：傳遞內容到子元件
- **具名插槽**：多個插槽位置
- **作用域插槽**：子元件傳資料給父元件使用

```vue
<!-- 子元件 -->
<template>
  <div>
    <slot></slot>  <!-- 預設插槽 -->
    <slot name="header"></slot>  <!-- 具名插槽 -->
    <slot :user="user" name="content"></slot>  <!-- 作用域插槽 -->
  </div>
</template>

<!-- 父元件使用 -->
<child-component>
  <p>預設內容</p>
  <template #header>頭部內容</template>
  <template #content="{ user }">{{ user.name }}</template>
</child-component>
```

## 三、Vue 3 新特性

### 6. Composition API vs Options API
**問題**：Composition API 的優勢是什麼？

**答案**：
- **邏輯複用**：更容易提取和複用邏輯
- **類型推導**：更好的 TypeScript 支援
- **靈活組織**：相關邏輯可以組織在一起
- **效能最佳化**：按需引入

```javascript
// Options API
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() { this.count++ }
  }
}

// Composition API
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const increment = () => count.value++
    
    return { count, increment }
  }
}
```

### 7. ref 和 reactive 的差別
**問題**：什麼時候用 ref？什麼時候用 reactive？

**答案**：
- **ref**：基本型別、需要整個替換的物件
- **reactive**：物件型別、需要保持響應式的嵌套物件

```javascript
import { ref, reactive } from 'vue'

// ref 用於基本型別
const count = ref(0)
const message = ref('hello')

// reactive 用於物件
const state = reactive({
  user: { name: 'John' },
  list: []
})
```

## 四、狀態管理

### 8. Vuex 核心概念
**問題**：Vuex 的核心概念是什麼？資料流向如何？

**答案**：
- **State**：狀態，類似 component 的 data
- **Getters**：計算屬性，類似 computed
- **Mutations**：同步修改 state 的方法
- **Actions**：異步操作，提交 mutations

```javascript
const store = new Vuex.Store({
  state: { count: 0 },
  
  getters: {
    doubleCount: state => state.count * 2
  },
  
  mutations: {
    INCREMENT(state) { state.count++ }
  },
  
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => commit('INCREMENT'), 1000)
    }
  }
})
```

### 9. Pinia vs Vuex
**問題**：Pinia 相對於 Vuex 有什麼優勢？

**答案**：
- **更簡單的語法**：不需要 mutations
- **更好的 TypeScript 支援**
- **模組化更自然**：每個 store 都是獨立的
- **更好的開發工具支援**

```javascript
// Pinia store
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
```

## 五、效能優化

### 10. Vue 效能優化技巧
**問題**：如何優化 Vue 應用的效能？

**答案**：
1. **v-show vs v-if**：頻繁切換用 v-show
2. **正確使用 key**：幫助 Vue 識別元素
3. **避免模板中複雜計算**：使用 computed
4. **懶載入路由**：代碼分割
5. **虛擬列表**：處理大量資料
6. **Object.freeze()**：凍結不變的資料

```javascript
// 路由懶載入
const Home = () => import('./views/Home.vue')

// 虛擬列表處理大量資料
<virtual-list :items="largeList" />

// 凍結靜態資料
data() {
  return {
    staticData: Object.freeze(bigStaticArray)
  }
}
```

## 六、實務問題

### 11. 如何處理 API 呼叫？
**問題**：Vue 專案中如何組織 API 呼叫？

**答案**：
```javascript
// api/http.js - 封裝 axios
import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000
})

// 請求攔截器
http.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 響應攔截器
http.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response?.status === 401) {
      // 處理未授權
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

// api/user.js - API 模組化
export const userAPI = {
  getProfile: () => http.get('/user/profile'),
  updateProfile: (data) => http.put('/user/profile', data)
}
```

### 12. 專案結構規劃
**問題**：Vue 專案的目錄結構如何規劃？

**答案**：
```
src/
├── assets/          # 靜態資源
├── components/      # 公用元件
│   ├── common/      # 基礎元件
│   └── business/    # 業務元件
├── views/           # 頁面元件
├── router/          # 路由配置
├── store/           # 狀態管理
│   ├── modules/     # 模組化 store
│   └── index.js
├── api/             # API 介面
├── utils/           # 工具函數
├── mixins/          # 混入
└── styles/          # 樣式文件
```

## 七、與 .NET 整合

### 13. 前後端分離架構
**問題**：Vue + .NET Core 如何整合？

**答案**：
```javascript
// Vue 前端配置 (vue.config.js)
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:5001',  // .NET Core API
        changeOrigin: true,
        secure: false
      }
    }
  }
}

// .NET Core 後端 CORS 配置
public void ConfigureServices(IServiceCollection services)
{
    services.AddCors(options =>
    {
        options.AddPolicy("VueApp", builder =>
        {
            builder.WithOrigins("http://localhost:8080")
                   .AllowAnyHeader()
                   .AllowAnyMethod()
                   .AllowCredentials();
        });
    });
}
```

## 八、路由相關

### 14. Vue Router 核心概念
**問題**：Vue Router 的核心功能有哪些？

**答案**：
- **動態路由**：`:id` 參數傳遞
- **嵌套路由**：子路由配置
- **路由守衛**：全局守衛、路由獨享守衛、組件內守衛
- **程式化導航**：`$router.push()`、`$router.replace()`

```javascript
// 路由配置
const routes = [
  {
    path: '/user/:id',
    component: User,
    beforeEnter: (to, from, next) => {
      // 路由獨享守衛
      if (hasPermission(to.params.id)) {
        next()
      } else {
        next('/login')
      }
    }
  }
]

// 程式化導航
this.$router.push({ name: 'user', params: { id: 123 } })
this.$router.replace('/home')
```

### 15. 路由懶載入
**問題**：如何實現路由懶載入？有什麼好處？

**答案**：
- **好處**：代碼分割、按需載入、減少初始載入時間
- **實現方式**：動態 import

```javascript
// 路由懶載入
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  }
]
```

## 九、常見指令深入

### 16. v-if vs v-show
**問題**：v-if 和 v-show 的差別？什麼時候用哪個？

**答案**：
- **v-if**：條件性渲染，DOM 元素會被創建/銷毀
  - 適合：條件很少改變的情況
  - 有更高的切換開銷

- **v-show**：切換 CSS display 屬性
  - 適合：需要頻繁切換的情況
  - 有更高的初始渲染開銷

```vue
<template>
  <!-- 頻繁切換用 v-show -->
  <div v-show="isVisible">頻繁切換的內容</div>
  
  <!-- 條件很少改變用 v-if -->
  <div v-if="hasPermission">權限相關內容</div>
</template>
```

### 17. v-for 中 key 的重要性
**問題**：v-for 中為什麼要使用 key？

**答案**：
- **diff 算法優化**：幫助 Vue 識別節點變化
- **避免渲染錯誤**：特別是表單元素
- **效能提升**：減少不必要的 DOM 操作

```vue
<template>
  <!-- 錯誤示例 -->
  <li v-for="item in list">{{ item.name }}</li>
  
  <!-- 正確示例 -->
  <li v-for="item in list" :key="item.id">{{ item.name }}</li>
</template>
```

## 十、進階話題

### 18. 自定義指令
**問題**：如何創建自定義指令？

**答案**：
```javascript
// 全局註冊
Vue.directive('focus', {
  // 當被綁定的元素插入到 DOM 中時
  inserted: function (el) {
    el.focus()
  }
})

// 局部註冊
directives: {
  focus: {
    inserted: function (el) {
      el.focus()
    }
  }
}

// 使用
<input v-focus>
```

### 19. Mixin 混入
**問題**：什麼是 Mixin？有什麼優缺點？

**答案**：
- **優點**：代碼復用、邏輯共享
- **缺點**：命名衝突、來源不明確、不易維護

```javascript
// 定義 mixin
const myMixin = {
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    }
  }
}

// 使用 mixin
export default {
  mixins: [myMixin],
  created() {
    console.log('component created')
  }
}

// 注意：Vue 3 推薦使用 Composition API 代替 Mixin
```

### 20. 錯誤處理
**問題**：Vue 中如何處理錯誤？

**答案**：
```javascript
// 全局錯誤處理
Vue.config.errorHandler = (err, vm, info) => {
  console.error('Vue error:', err)
  // 錯誤上報
  reportError(err, vm, info)
}

// 組件內錯誤邊界（Vue 2.5+）
export default {
  errorCaptured(err, instance, info) {
    console.error('Component error:', err)
    return false  // 阻止錯誤繼續傳播
  }
}

// 異步錯誤處理
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled promise rejection:', event.reason)
})
```

## 十一、面試技巧

### 回答策略
1. **先答核心概念**，再舉例說明
2. **承認不足**，但展現學習能力
3. **結合實際經驗**，提及具體專案
4. **主動延伸**，展現深度思考

### 準備事項
1. **準備小 demo**：展示 Vue + .NET 整合
2. **複習最近專案**：能詳細描述技術選型
3. **關注新版本**：Vue 3、Vite、Pinia 等
4. **練習 live coding**：常見功能實現

### 常見的 Live Coding 題目
1. **實現一個計數器**：展示基礎語法
2. **Todo List**：展示列表渲染、事件處理
3. **父子組件通訊**：展示組件化思維
4. **表單驗證**：展示實務開發能力

```vue
<!-- 簡單計數器示例 -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}
</script>
```

## 十二、面試常問問題清單

### 基礎問題
1. Vue 的響應式原理？
2. computed 和 watch 的區別？
3. Vue 的生命週期？
4. 組件間通信方式？
5. v-if 和 v-show 的區別？

### 進階問題
1. Vue 3 有什麼新特性？
2. Composition API 的優勢？
3. 如何優化 Vue 應用性能？
4. Vue Router 的實現原理？
5. Vuex 的設計思想？

### 實務問題
1. 如何處理跨域問題？
2. 如何實現權限控制？
3. 如何進行單元測試？
4. 如何部署 Vue 應用？
5. 如何處理 SEO 問題？

祝面試順利！🚀

---
**最後更新：** 2025年8月18日
**適用版本：** Vue 2.x / Vue 3.x
**目標對象：** 前端工程師面試準備