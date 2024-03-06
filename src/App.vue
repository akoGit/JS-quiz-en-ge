<script setup lang="ts">
import {ref, computed} from "vue"

import Finish from "./components/Finish.vue";
import Question from "./components/Question.vue";
import Progress from "./components/Progress.vue"
import Layout from "./components/Layout.vue";

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
    <div class="source">
        <span class="github_link">Questions and explanations from</span>
        <br>
        <a href="https://github.com/lydiahallie/javascript-questions" target="_blank">javascript-questions</a>
    </div>
    <Layout>
        <template v-if="!finished">
            <Progress :progress="question_index" :count="questions.length"></Progress>
            <Question v-if="!finished" @finish="finish_question" :question="question">
            </Question>
        </template>
        <Finish v-else :evaluation="evaluation" @restart="restart"></Finish>
    </Layout>
</template>

<style scoped>
.github_link {
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI';
    text-align: left;
    
}
.source {
    margin: .5em .1em;
    width: max-content;
    a {
    color:grey;
    font-family: monospace;
    font-size:1rem;
    }
}

</style>
