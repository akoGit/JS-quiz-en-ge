<script setup lang="ts">
import { ref } from "vue"

const props = defineProps<{
     question: question
 }>()

const emit = defineEmits<{
    (e: "finish", correct: boolean): void
}>()

let selected_index = ref(0)
let explanation = ref("")
let submitted = ref(false)
let correct = ref(false)

function check_answer() {
    submitted.value = true

    correct.value = selected_index.value == props.question.correct_answer_idx

    // message.value = correct.value ? "this is correct" : "no correct answer is : " + correct_answer 
    explanation.value = props.question.explanation
}

function next() {
    emit("finish", correct.value) 
    selected_index.value = 0;
    submitted.value = false 
    correct.value = false  
}

const isCorrect = (index: number): boolean => {
  return submitted.value && index === props.question.correct_answer_idx;
};


const isInCorrect = (index: number): boolean  => {
    return (
    submitted.value &&
    index !== props.question.correct_answer_idx &&
    index === selected_index.value
  );
};

</script>

<template>
    <form @submit.prevent="check_answer">

        <h3>{{ props.question.id }}</h3>

        <highlightjs language="js" :code="props.question.question"></highlightjs>
        <section class="answers">
            <label 
                  class="answer" 
                  v-for="(answer, index) in props.question.answers"
                  :key="index"
                  :class="{correct: isCorrect(index), incorrect: isInCorrect(index)}"
                 > 
                <input type="radio" :value="index" :name="props.question.id" v-model="selected_index"
                    :disabled="submitted">
                <span class="answer_text">
                    {{ answer }}
                </span>
            <Transition>
                <img v-show="isCorrect(index)" alt="checkbox logo" src="../assets/checkbox-circle.png"/>
            </Transition>

            <Transition >
                <img v-show="isInCorrect(index)" alt="cancel logo" src="../assets/cancel-circular.png"/>
            </Transition>
            </label>
        </section>
        <menu>
            <button :disabled="submitted">Submit </button>
            <button @click="next" type='button' v-if="submitted">Next </button>
        </menu>
    </form>
    <br>
    <div v-if="submitted" class="explanation">
        <span style="font-weight: bold;">Explanation</span>
        <br>
        <p>
            {{ explanation }}
        </p>
    </div>

</template>



<style scoped>
.v-enter-active {
  transition: opacity 0.5s ease, transform 0.3s cubic-bezier(0.47, 1.64, 0.41, 0.8);
}

.v-enter-from {
  opacity: 0;
  transform:scale(.5);
}

img {
    width: 100%;
    max-width:25px;
    max-height: 25px;
    object-fit: cover;
    margin-left:auto;
}
[type=radio] {
   -webkit-appearance: none;
   -moz-appearance:    none;
   appearance:         none;
}
[type=radio] {
  min-width: 20px;
  min-height: 20px;
  border: solid 1px #cccccc;
  margin-right: 8px;
  position: relative;
}
[type=radio]:checked::before {
  content: "";
  width: 14px;
  height: 14px;
  background-color:#717171;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

[type=radio],
[type=radio]:checked::before{
  border-radius: 100%;
}
.answers {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.answer {
	background-color: #0f0f0f;
	padding: .6rem;
	border-radius: 0.25rem;
    border: 1px solid #717171;
	font-size: 1.25rem;
	cursor: pointer;
    display: flex;
    align-items: center;
}

.answer.selected {
    border: 1px solid #2ba640;
}

.answer.correct {
    border: 1px solid #2ba640;
}
.answer.incorrect {
    border: 1px solid red;
}


.answer_text {
	padding-left: 0.5rem;
}

menu {
	margin-top: 1.5rem;
	display: flex;
	gap: 0.5rem;
}
.explanation {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI';
    font-weight: 400;
    font-size:1rem;
    padding: .5em;
    background-color: #2e2e2e;
}
</style>