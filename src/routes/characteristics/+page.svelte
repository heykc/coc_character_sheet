<script lang="ts">
  enum Difficulty {
    Regular = 'Regular',
    Half = 'Half',
    Fifth = 'Fifth',
  }
  let editing = false;
  let difficulty = Difficulty.Regular;
  let successful = false;

  $: console.log(successful);
</script>

<fieldset aria-labelledby="difficulty-legend">
  <div id="difficulty-legend">Difficulty:</div>
  <label
    for="difficulty-regular"
    class="difficulty-option"
    class:selected={difficulty === Difficulty.Regular}
  >
    Reg
    <input
      id="difficulty-regular"
      type="radio"
      bind:group={difficulty}
      value={Difficulty.Regular}
    />
  </label>
  <label
    for="difficulty-half"
    class="difficulty-option"
    class:selected={difficulty === Difficulty.Half}
  >
    Half
    <input
      id="difficulty-half"
      type="radio"
      bind:group={difficulty}
      value={Difficulty.Half}
    />
  </label>
  <label
    for="difficulty-fifth"
    class="difficulty-option"
    class:selected={difficulty === Difficulty.Fifth}
  >
    Fifth
    <input
      id="difficulty-fifth"
      type="radio"
      bind:group={difficulty}
      value={Difficulty.Fifth}
    />
  </label>
</fieldset>

<label class="checkbox successful-skill" class:checked={successful} for="successful-skill">
  <span class="sr-only">Successful skill</span>
  <input
    id="successful-skill"
    type="checkbox"
    bind:checked={successful}
  />
</label>
<span>STR</span>
<div class="stat">
  <div>
    <div class="difficulty">Reg</div>
    <div>1</div>
  </div>
  <div>
    <div class="difficulty">Half</div>
    <div>1</div>
  </div>
  <div>
    <div class="difficulty">Fifth</div>
    <div>1</div>
  </div>
</div>

<style>
  fieldset {
    display: flex;
    gap: 1rem;
    justify-content: end;
  }

  label.checkbox.successful-skill {
    position: relative;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid var(--color-text);
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      border-color: var(--color-link);
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 5px;
      background-color: var(--color-link);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    &.checked:after {
      opacity: 1;
    }

    &:has(:checked) {
      border-color: var(--color-link);
    }
  }

  label.difficulty-option {
    color: var(--color-link);
    display: block;
    position: relative;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    &.active:hover {
      text-decoration: none;
      mouse-events: none;
      cursor: default;
    }

    &.selected::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      scale: 1.2 .9;
      translate: -2% -2%;
      rotate: -3deg;
      border: 1px solid var(--color-alert);
      border-radius: 100% 80% 100% 80%;
      border-width: 2px 1px 2px 1px;
    }
  }

  .stat {
    display: inline-flex;
    border: 1px solid var(--color-text);
    border-radius: 5px;

    & > div + div {
      border-left: 1px solid var(--color-text);
    }

    & > div {
      flex: 1;
      padding: 2px 0.5rem 0.5rem;
      text-align: center;
    }
  }

  .difficulty {
    vertical-align: top;
    font-size: 0.7rem;
  }
</style>
