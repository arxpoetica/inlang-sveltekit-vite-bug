<script lang="ts">
	function clickHandler() {
		console.log('This only logs when Vite is version 5.1.6 or lower.');
	}
</script>

<div class="shell">
	<button on:click={clickHandler}>Console Log Something</button>
</div>

<style>
	.shell {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	button {
		--font: 'Arial', sans-serif;
		padding: 16px;
		background-color: #2636a9;
		border: none;
		color: white;
		font: bold 15px/1 var(--font);
		cursor: pointer;
	}
</style>
