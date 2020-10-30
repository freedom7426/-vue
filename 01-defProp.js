//响应式
const obj = {}

function defineReactive(obj, key, val){
   //  对传入obj进行访问拦截
   Object.defineProperty(obj,key, {
      get() {
        console.log('get '+key+ ':' +val);
        return val;
      },
      set(newVal){
         if(newVal !== val){
            console.log('set '+ key + ':' + newVal);
            val = newVal;
         }
      }

   })
   
}

defineReactive(obj, 'foo','foo')
obj.foo
obj.foo = "foolllllllll"