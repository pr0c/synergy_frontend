#Front-end
1. Download and run back-end part of project [https://github.com/pr0c/synergy-test](https://github.com/pr0c/synergy-test)
2. Open src/main.js file and change address of API (http or https prefix is required by CORS policy)
```javascript
Vue.prototype.$actions = 'your address';
```
3. Open project folder in terminal and run it by command
`yarn serve`

For production before running project run command
`yarn build`