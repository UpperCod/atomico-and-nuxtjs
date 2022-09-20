<template>
  <div>
    <Welcome @click="increment"/>
    <Atomico :value="count" @click="increment">
        <button slot="header">Ok!</button>
    </Atomico >
    <h1>{{count}}</h1>
  </div>
</template>

<script>
export default {
  data:()=>({
    count: 100
  }),
  methods:{
    increment(){
      this.count+=1;
    }
  }
}
</script>