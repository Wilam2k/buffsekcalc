<script>
  import Textfield from "@smui/textfield";
  let focused = false;
  let input = 0;
  let rate = 1.49;
</script>

<main>
  <div class="Inputs">
    <div class="Input">
      <Textfield
        label="RMB"
        style="min-width: 250px;"
        on:focus={() => (focused = true)}
        on:blur={() => (focused = false)}
        type="number"
        bind:value={input}
      />
    </div>
    <div class="Input">
        <Textfield
        label="Rate to SEK"
        style="min-width: 250px;"
        on:focus={() => (focused = true)}
        on:blur={() => (focused = false)}
        type="number"
        bind:value={rate}
      />
    </div>
  </div>
  <ul>
    {#each Array(26) as _, i}
      <li>{100 - i}%: {input * rate * (100 - i) * 0.01}</li>
    {/each}
  </ul>
</main>

<style>
  main {
    border: 1px solid black;
    border-radius: 10px;
    justify-content: center;
  }
  li {
    list-style: none;
    border: 1px solid black;
    margin-bottom: 4px;
    margin-right: 10%;
    margin-left: 10%;
    padding-top: 4px;
    border-radius: 10px;
    padding-left: 20px;
    height: 25px;
    align-items: center;
    justify-content: center;
  }
  .Inputs {
    margin-top: 1%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid black;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
  }
  .Input {
    margin-top: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
