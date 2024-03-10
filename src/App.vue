<script setup lang="ts">
import {ref, computed, onMounted} from "vue"

import Finish from "./components/Finish.vue";
import Question from "./components/Question.vue";
import Progress from "./components/Progress.vue"
import Layout from "./components/Layout.vue";
import Header from "./components/Header.vue"

onMounted(() => {
    document.cookie = 'locale=EN'
})

import { questions } from "./config"

let question_index = ref(0);
let finished = ref(false)

const question = computed(() => questions[question_index.value]) 

let evaluation: boolean[] = []

function finish_question(correct: boolean) {
    evaluation.push(correct)
    update_question()
}

function update_question() {
    if (question_index.value < questions.length - 1) {
        question_index.value++; 
    } else {
        finished.value = true  
    }
}

function restart() {
    question_index.value = 0;
    evaluation = []
    finished.value = false 
}

</script>

<template>
  
  <Header></Header>
    <Layout>
        <template v-if="!finished">
            <Progress :progress="question_index" :count="questions.length"></Progress>
            <Question v-if="!finished" @finish="finish_question" :question="question">
            </Question>
        </template>
        <Finish v-else :evaluation="evaluation" @restart="restart"></Finish>
    </Layout>
</template>

