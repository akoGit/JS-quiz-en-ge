<script setup lang="ts">
const emit = defineEmits<{ (e: "restart"): void }>();

const { evaluation } = defineProps<{ evaluation: boolean[] }>();

const count = evaluation.length;
const correct_count = evaluation.filter((x) => x).length;

function restart(): void {
	emit("restart");
}
</script>


<template>
    <div class="finish_wrapper">

        <h2>
            Quiz Finished
        </h2>
        <h1 style='font-size: 2rem;'>👍</h1>
        <span>
            out of {{ count }} questions, you answered {{ correct_count }} correctly.
        </span>


        <menu aria-label="menu">
            <button @click="restart">Try again</button>
        </menu>
    </div>
</template>


<style scoped>
 .finish_wrapper {
    height: 40vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
 }
</style>
