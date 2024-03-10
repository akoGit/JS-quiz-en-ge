<template>
  <header>
    <div class="source">
      <span class="github_link">{{ $t('source_refference') }}</span>
      <br>
      <a href="https://github.com/lydiahallie/javascript-questions" target="_blank">javascript-questions</a>
    </div>



    <div class="lang_wrap">
      <div class="tabs">
        <input type="radio" id="EN" name="fav_language_two" value="EN" checked>
        <label @click="$i18n.locale = `EN`" for="EN">A</label>
        <input type="radio" id="KA" name="fav_language_two" value="KA">
        <label @click="$i18n.locale = `KA`" for="KA">ა</label>
      </div>
    </div>
  </header>
</template>
<style >
:root {
	--radius: 8px;
	--border: 4px;
	--height: 48px;
  --speed: 0.25s;
 	--ease: linear(
    0, 0.1641 3.52%, 0.311 7.18%,
    0.4413 10.99%, 0.5553 14.96%,
    0.6539 19.12%, 0.738 23.5%,
    0.8086 28.15%, 0.8662 33.12%,
    0.9078 37.92%, 0.9405 43.12%,
    0.965 48.84%, 0.9821 55.28%,
    0.992 61.97%, 0.9976 70.09%, 1
  );
}
.lang_wrap {
  display: grid;
	place-items: center;
	align-content: center;
  margin: 1em;
}
.tabs {
	height: var(--height);
	display: grid;
	grid-auto-flow: column;
	background-color: hsl(0, 0%, 00%);
	border-radius:  calc(var(--radius) - var(--border));
	grid-auto-columns: 1fr;
	position: relative;
	border: var(--border) solid hsl(0 0% 0%);
}

.tabs > input {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
}

 .tabs:has(:checked:nth-of-type(1)) { --active: 0; }
.tabs:has(:checked:nth-of-type(2)) { --active: 1; } 

.tabs :checked + label { --highlight: 1; }

.tabs:has(input:nth-of-type(2)) { --count: 2; }
.tabs:has(input:nth-of-type(3)) { --count: 3; }

.tabs label {
	/* padding: .2rem 1rem; */
  padding: .3rem clamp(0.5rem, 2vw + 0.25rem, 2rem);
	cursor: pointer;
	text-align: center;
	height: 100%;
	display: grid;
	border-radius: calc(var(--radius) - var(--border));
	place-items: center;
	color: hsl(0 0% 100% / calc(0.5 + var(--highlight, 0)));
	transition: background-color, color;
  transition-duration: 0.25s;
  transition-timing-function: var(--ease, ease);
}

input:not(:checked) + label:hover {
	--highlight: 0.35;
	background: hsl(0 0% 20%);
}

.tabs::after {
	pointer-events: none;
	content: "";
	width: calc(100% / var(--count));
	height: 100%;
	background: hsl(0 0% 100%);
	position: absolute;
	border-radius: calc(var(--radius) - var(--border));
	mix-blend-mode: difference;
	translate: calc(var(--active, 0) * 100%) 0;
	transition: translate, outline-color;
  transition-duration: var(--speed);
  transition-timing-function: var(--ease, ease);
	outline: 1px solid #fff;
  border-radius: 2px;
}

.tabs:has(:focus-visible)::after {
	outline-color: rgb(137, 137, 137);
}

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

header {
    display: flex;
    justify-content: space-between;
}
</style>
