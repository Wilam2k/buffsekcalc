
<script>
	import MainCalc from "./MainCalc.svelte";
	import "carbon-components-svelte/css/g80.css";
</script>

<main>
	<div id="title">
		<h1>Williams Buff Percentage Calculator</h1>
	</div>
	
	<div>
		<MainCalc/>
	</div>
</main>

<style>
	#title {
		justify-content: center;
		align-items: center;
		width: 100%;
		display: flex;
	}
</style>